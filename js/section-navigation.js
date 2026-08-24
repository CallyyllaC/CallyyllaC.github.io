(function (global) {
	'use strict';

	var sectionHashes = [
		'#about-card',
		'#resume-card',
		'#works-card',
		'#recent-work-card',
		'#contacts-card'
	];
	var hashAliases = {
		'#updates': '#recent-work-card',
		'#blog-card': '#recent-work-card'
	};

	function canonicalSectionHash(hash) {
		var candidate = String(hash || '').toLowerCase();
		if (hashAliases[candidate]) {
			return hashAliases[candidate];
		}

		return sectionHashes.indexOf(candidate) >= 0 ? candidate : '#about-card';
	}

	function isKnownSectionHash(hash) {
		var candidate = String(hash || '').toLowerCase();
		return sectionHashes.indexOf(candidate) >= 0 || Boolean(hashAliases[candidate]);
	}

	function toArray(items) {
		return Array.prototype.slice.call(items || []);
	}

	function prefersReducedMotion(windowRef) {
		return Boolean(
			windowRef &&
			typeof windowRef.matchMedia === 'function' &&
			windowRef.matchMedia('(prefers-reduced-motion: reduce)').matches
		);
	}

	function setNavigationState(documentRef, targetHash) {
		var canonicalHash = canonicalSectionHash(targetHash);
		var links = toArray(documentRef.querySelectorAll('.top-menu a[href^="#"]'));

		links.forEach(function (link) {
			var isCurrent = canonicalSectionHash(link.getAttribute('href')) === canonicalHash;
			var menuItem = link.closest ? link.closest('li') : link.parentElement;
			if (menuItem && menuItem.classList) {
				menuItem.classList.toggle('active', isCurrent);
			}

			if (isCurrent) {
				link.setAttribute('aria-current', 'page');
			} else {
				link.removeAttribute('aria-current');
			}
		});

		return canonicalHash;
	}

	function createSectionNavigation(windowRef, documentRef) {
		var initialised = false;
		var scrollFrame = null;
		var container = documentRef.querySelector('.container');
		var animationIn = container ? container.getAttribute('data-animation-in') : '';
		var animationOut = container ? container.getAttribute('data-animation-out') : '';

		function removeAnimationClasses(card) {
			card.classList.remove('animated');
			if (animationIn) {
				card.classList.remove(animationIn);
			}
			if (animationOut) {
				card.classList.remove(animationOut);
			}
		}

		function focusSection(section) {
			if (!section || typeof section.focus !== 'function') {
				return;
			}

			try {
				section.focus({ preventScroll: true });
			} catch (error) {
				section.focus();
			}
		}

		function scrollToSection(section) {
			if (!section || typeof windowRef.scrollTo !== 'function') {
				return;
			}

			var top = section.getBoundingClientRect().top + (windowRef.scrollY || windowRef.pageYOffset || 0) - 76;
			windowRef.scrollTo({
				top: Math.max(0, top),
				behavior: prefersReducedMotion(windowRef) ? 'auto' : 'smooth'
			});
		}

		function activate(hash, options) {
			var settings = options || {};
			var targetHash = canonicalSectionHash(hash);
			var target = documentRef.querySelector(targetHash);
			var cards = toArray(documentRef.querySelectorAll('.card-inner'));
			var previous = documentRef.querySelector('.card-inner.active');
			var desktop = Number(windowRef.innerWidth) >= 1200;
			var reducedMotion = prefersReducedMotion(windowRef);

			if (!target) {
				return null;
			}

			setNavigationState(documentRef, targetHash);
			if (container && container.classList) {
				container.classList.add('opened');
			}

			cards.forEach(function (card) {
				removeAnimationClasses(card);
				card.classList.toggle('active', card === target);

				if (desktop) {
					card.classList.toggle('hidden', card !== target);
					if (!reducedMotion && card === target && animationIn) {
						card.classList.add('animated', animationIn);
					}
					if (!reducedMotion && card === previous && card !== target && animationOut) {
						card.classList.add('animated', animationOut);
					}
				} else {
					card.classList.remove('hidden');
				}
			});

			if (settings.focus) {
				focusSection(target);
			}
			if (settings.scroll && !desktop) {
				scrollToSection(target);
			}

			return targetHash;
		}

		function historyUrl(hash) {
			return windowRef.location.pathname + windowRef.location.search + hash;
		}

		function writeHistory(hash, mode) {
			if (!windowRef.history || typeof windowRef.history[mode + 'State'] !== 'function') {
				return false;
			}

			windowRef.history[mode + 'State']({ section: hash }, '', historyUrl(hash));
			return true;
		}

		function navigate(hash, options) {
			var settings = options || {};
			var targetHash = canonicalSectionHash(hash);
			var mode = settings.history || 'push';

			if (windowRef.location.hash !== targetHash) {
				writeHistory(targetHash, mode);
			}

			return activate(targetHash, {
				focus: Boolean(settings.focus),
				scroll: settings.scroll !== false
			});
		}

		function handleLocationChange() {
			var requestedHash = windowRef.location.hash;
			var targetHash = canonicalSectionHash(requestedHash);

			if (requestedHash && requestedHash !== targetHash) {
				writeHistory(targetHash, 'replace');
			}

			return activate(targetHash, {
				focus: false,
				scroll: Boolean(requestedHash)
			});
		}

		function handleDocumentClick(event) {
			var target = event.target;
			var link = target && target.closest ? target.closest('a[href^="#"]') : null;
			if (!link) {
				return;
			}

			var hash = link.getAttribute('href');
			var isMenuLink = Boolean(link.closest('.top-menu'));
			var isDiscoverLink = link.classList.contains('discover');
			var isSkipLink = link.classList.contains('skip-link');
			if ((!isMenuLink && !isDiscoverLink && !isSkipLink) || !isKnownSectionHash(hash)) {
				return;
			}

			event.preventDefault();
			if (isSkipLink) {
				activate(hash, { focus: true, scroll: true });
				return;
			}

			navigate(hash, { history: 'push', scroll: true });
		}

		function sectionAtScrollPosition() {
			var cards = toArray(documentRef.querySelectorAll('.card-inner'));
			var current = cards[0];
			cards.forEach(function (card) {
				if (card.getBoundingClientRect().top <= 78) {
					current = card;
				}
			});

			return current;
		}

		function syncMobileScrollState() {
			scrollFrame = null;
			if (Number(windowRef.innerWidth) >= 1200) {
				return;
			}

			var current = sectionAtScrollPosition();
			if (!current || !current.id) {
				return;
			}

			var targetHash = '#' + current.id;
			setNavigationState(documentRef, targetHash);
			toArray(documentRef.querySelectorAll('.card-inner')).forEach(function (card) {
				card.classList.toggle('active', card === current);
			});
			if (windowRef.location.hash !== targetHash) {
				writeHistory(targetHash, 'replace');
			}
		}

		function handleScroll() {
			if (scrollFrame !== null) {
				return;
			}

			var requestFrame = windowRef.requestAnimationFrame || function (callback) {
				return windowRef.setTimeout(callback, 16);
			};
			scrollFrame = requestFrame(syncMobileScrollState);
		}

		function handleResize() {
			activate(canonicalSectionHash(windowRef.location.hash), { focus: false, scroll: false });
		}

		function initialise() {
			if (initialised) {
				return canonicalSectionHash(windowRef.location.hash);
			}
			initialised = true;

			documentRef.addEventListener('click', handleDocumentClick);
			windowRef.addEventListener('popstate', handleLocationChange);
			windowRef.addEventListener('hashchange', handleLocationChange);
			windowRef.addEventListener('resize', handleResize);
			windowRef.addEventListener('scroll', handleScroll, { passive: true });

			return handleLocationChange();
		}

		function destroy() {
			documentRef.removeEventListener('click', handleDocumentClick);
			windowRef.removeEventListener('popstate', handleLocationChange);
			windowRef.removeEventListener('hashchange', handleLocationChange);
			windowRef.removeEventListener('resize', handleResize);
			windowRef.removeEventListener('scroll', handleScroll);
			initialised = false;
		}

		return {
			activate: activate,
			navigate: navigate,
			handleLocationChange: handleLocationChange,
			initialise: initialise,
			destroy: destroy
		};
	}

	var api = {
		sectionHashes: sectionHashes.slice(),
		canonicalSectionHash: canonicalSectionHash,
		isKnownSectionHash: isKnownSectionHash,
		prefersReducedMotion: prefersReducedMotion,
		setNavigationState: setNavigationState,
		createSectionNavigation: createSectionNavigation,
		controller: null
	};

	global.PortfolioSectionNavigation = api;

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = api;
	}

	if (typeof document !== 'undefined') {
		var initialiseNavigation = function () {
			if (!api.controller) {
				api.controller = createSectionNavigation(global, document);
			}
			api.controller.initialise();
		};

		if (document.readyState === 'loading') {
			document.addEventListener('DOMContentLoaded', initialiseNavigation, { once: true });
		} else {
			initialiseNavigation();
		}
	}
}(typeof window !== 'undefined' ? window : globalThis));
