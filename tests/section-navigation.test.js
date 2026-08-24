const test = require('node:test');
const assert = require('node:assert/strict');

const navigation = require('../js/section-navigation.js');

function createClassList(initial) {
	const values = new Set(initial || []);
	return {
		add(...names) {
			names.forEach((name) => values.add(name));
		},
		remove(...names) {
			names.forEach((name) => values.delete(name));
		},
		contains(name) {
			return values.has(name);
		},
		toggle(name, force) {
			const enabled = force === undefined ? !values.has(name) : Boolean(force);
			if (enabled) {
				values.add(name);
			} else {
				values.delete(name);
			}
			return enabled;
		}
	};
}

function createEnvironment(initialHash = '', options = {}) {
	const listeners = {};
	const documentListeners = {};
	const location = { pathname: '/', search: '', hash: initialHash };
	const historyEntries = [initialHash];
	let historyIndex = 0;
	let pushes = 0;
	let replacements = 0;

	function setHashFromUrl(url) {
		const hashIndex = String(url).indexOf('#');
		location.hash = hashIndex >= 0 ? String(url).slice(hashIndex) : '';
	}

	function dispatch(type) {
		(listeners[type] || []).forEach((listener) => listener({ type }));
	}

	const windowRef = {
		innerWidth: options.width || 1366,
		scrollY: 0,
		pageYOffset: 0,
		location,
		matchMedia() {
			return { matches: Boolean(options.reducedMotion) };
		},
		addEventListener(type, listener) {
			(listeners[type] ||= []).push(listener);
		},
		removeEventListener(type, listener) {
			listeners[type] = (listeners[type] || []).filter((candidate) => candidate !== listener);
		},
		scrollTo(settings) {
			this.lastScroll = settings;
		},
		setTimeout(callback) {
			callback();
			return 1;
		},
		history: {
			pushState(_state, _title, url) {
				pushes += 1;
				historyEntries.splice(historyIndex + 1);
				setHashFromUrl(url);
				historyEntries.push(location.hash);
				historyIndex += 1;
			},
			replaceState(_state, _title, url) {
				replacements += 1;
				setHashFromUrl(url);
				historyEntries[historyIndex] = location.hash;
			},
			back() {
				if (historyIndex > 0) {
					historyIndex -= 1;
					location.hash = historyEntries[historyIndex];
					dispatch('popstate');
				}
			},
			forward() {
				if (historyIndex < historyEntries.length - 1) {
					historyIndex += 1;
					location.hash = historyEntries[historyIndex];
					dispatch('popstate');
				}
			}
		}
	};

	const container = {
		classList: createClassList(['container', 'opened']),
		getAttribute(name) {
			return name === 'data-animation-in' ? 'fadeInLeft' : name === 'data-animation-out' ? 'fadeOutLeft' : null;
		}
	};
	const sections = navigation.sectionHashes.map((hash, index) => ({
		id: hash.slice(1),
		classList: createClassList(['card-inner'].concat(index === 0 ? ['active'] : [])),
		focused: false,
		focus() {
			this.focused = true;
		},
		getBoundingClientRect() {
			return { top: 800 + (index * 600) };
		}
	}));
	const menu = {};
	const links = navigation.sectionHashes.map((hash, index) => {
		const item = { classList: createClassList(index === 0 ? ['active'] : []) };
		const attributes = new Map([['href', hash]]);
		if (index === 0) {
			attributes.set('aria-current', 'page');
		}
		const link = {
			classList: createClassList(),
			parentElement: item,
			getAttribute(name) {
				return attributes.get(name) || null;
			},
			setAttribute(name, value) {
				attributes.set(name, String(value));
			},
			removeAttribute(name) {
				attributes.delete(name);
			},
			closest(selector) {
				if (selector === 'li') return item;
				if (selector === '.top-menu') return menu;
				if (selector === 'a[href^="#"]') return link;
				return null;
			}
		};
		return link;
	});

	const documentRef = {
		querySelector(selector) {
			if (selector === '.container') return container;
			if (selector === '.card-inner.active') return sections.find((section) => section.classList.contains('active')) || null;
			if (selector.startsWith('#')) return sections.find((section) => `#${section.id}` === selector) || null;
			return null;
		},
		querySelectorAll(selector) {
			if (selector === '.top-menu a[href^="#"]') return links;
			if (selector === '.card-inner') return sections;
			return [];
		},
		addEventListener(type, listener) {
			(documentListeners[type] ||= []).push(listener);
		},
		removeEventListener(type, listener) {
			documentListeners[type] = (documentListeners[type] || []).filter((candidate) => candidate !== listener);
		}
	};

	return {
		windowRef,
		documentRef,
		sections,
		links,
		click(link) {
			let prevented = false;
			(documentListeners.click || []).forEach((listener) => listener({
				target: link,
				preventDefault() {
					prevented = true;
				}
			}));
			return prevented;
		},
		activeSection() {
			return sections.find((section) => section.classList.contains('active'))?.id;
		},
		currentLink() {
			return links.find((link) => link.getAttribute('aria-current') === 'page')?.getAttribute('href');
		},
		counts() {
			return { pushes, replacements, entries: historyEntries.slice() };
		}
	};
}

test('all canonical section hashes and Recent Work aliases resolve safely', () => {
	for (const hash of navigation.sectionHashes) {
		assert.equal(navigation.canonicalSectionHash(hash), hash);
		assert.equal(navigation.isKnownSectionHash(hash), true);
	}

	assert.equal(navigation.canonicalSectionHash('#updates'), '#recent-work-card');
	assert.equal(navigation.canonicalSectionHash('#blog-card'), '#recent-work-card');
	assert.equal(navigation.canonicalSectionHash('#unknown'), '#about-card');
	assert.equal(navigation.canonicalSectionHash(''), '#about-card');
	assert.equal(navigation.isKnownSectionHash('#unknown'), false);
});

test('initial direct links activate every requested section with synchronized aria-current state', () => {
	for (const hash of navigation.sectionHashes) {
		const environment = createEnvironment(hash);
		const controller = navigation.createSectionNavigation(environment.windowRef, environment.documentRef);
		controller.initialise();

		assert.equal(environment.activeSection(), hash.slice(1));
		assert.equal(environment.currentLink(), hash);
	}
});

test('absent and invalid hashes default to About without adding history entries', () => {
	const absent = createEnvironment('');
	navigation.createSectionNavigation(absent.windowRef, absent.documentRef).initialise();
	assert.equal(absent.activeSection(), 'about-card');
	assert.equal(absent.currentLink(), '#about-card');
	assert.deepEqual(absent.counts(), { pushes: 0, replacements: 0, entries: [''] });

	const invalid = createEnvironment('#not-a-section');
	navigation.createSectionNavigation(invalid.windowRef, invalid.documentRef).initialise();
	assert.equal(invalid.activeSection(), 'about-card');
	assert.equal(invalid.windowRef.location.hash, '#about-card');
	assert.equal(invalid.counts().replacements, 1);
});

test('menu activation updates the URL once and does not duplicate a reselected section', () => {
	const environment = createEnvironment('#about-card');
	const controller = navigation.createSectionNavigation(environment.windowRef, environment.documentRef);
	controller.initialise();

	assert.equal(environment.click(environment.links[1]), true);
	assert.equal(environment.windowRef.location.hash, '#resume-card');
	assert.equal(environment.activeSection(), 'resume-card');
	assert.equal(environment.currentLink(), '#resume-card');
	assert.equal(environment.counts().pushes, 1);

	environment.click(environment.links[1]);
	assert.equal(environment.counts().pushes, 1);
});

test('Back and Forward restore the matching active card and navigation state', () => {
	const environment = createEnvironment('#about-card');
	const controller = navigation.createSectionNavigation(environment.windowRef, environment.documentRef);
	controller.initialise();
	controller.navigate('#resume-card');
	controller.navigate('#works-card');

	environment.windowRef.history.back();
	assert.equal(environment.windowRef.location.hash, '#resume-card');
	assert.equal(environment.activeSection(), 'resume-card');
	assert.equal(environment.currentLink(), '#resume-card');

	environment.windowRef.history.forward();
	assert.equal(environment.windowRef.location.hash, '#works-card');
	assert.equal(environment.activeSection(), 'works-card');
	assert.equal(environment.currentLink(), '#works-card');
});

test('reduced-motion routing omits card animation classes', () => {
	const environment = createEnvironment('#resume-card', { reducedMotion: true });
	navigation.createSectionNavigation(environment.windowRef, environment.documentRef).initialise();
	const active = environment.sections.find((section) => section.id === 'resume-card');

	assert.equal(active.classList.contains('animated'), false);
	assert.equal(active.classList.contains('fadeInLeft'), false);
});

test('the skip link focuses meaningful main content without adding history', () => {
	const environment = createEnvironment('#contacts-card');
	const controller = navigation.createSectionNavigation(environment.windowRef, environment.documentRef);
	controller.initialise();
	const skipLink = {
		classList: createClassList(['skip-link']),
		getAttribute(name) {
			return name === 'href' ? '#about-card' : null;
		},
		closest(selector) {
			return selector === 'a[href^="#"]' ? this : null;
		}
	};

	assert.equal(environment.click(skipLink), true);
	assert.equal(environment.activeSection(), 'about-card');
	assert.equal(environment.sections[0].focused, true);
	assert.equal(environment.counts().pushes, 0);
});

test('compact desktop widths retain the established visible stacked-card layout', () => {
	const environment = createEnvironment('#resume-card', { width: 1024 });
	navigation.createSectionNavigation(environment.windowRef, environment.documentRef).initialise();

	assert.equal(environment.activeSection(), 'resume-card');
	assert.ok(environment.sections.every((section) => !section.classList.contains('hidden')));
	assert.equal(environment.windowRef.lastScroll.behavior, 'smooth');
});
