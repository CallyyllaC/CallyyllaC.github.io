const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const indexPath = path.join(root, 'index.html');
const index = fs.readFileSync(indexPath, 'utf8');
const legacyBlogPost = fs.readFileSync(path.join(root, 'blog-post-new.html'), 'utf8');
const portfolioCss = fs.readFileSync(path.join(root, 'css', 'portfolio.css'), 'utf8');
const themeCss = fs.readFileSync(path.join(root, 'css', 'template-colors', 'midnight-plum.css'), 'utf8');
const projectData = require('../js/project-data.js');

function relativeLuminance(hex) {
	const channels = hex.match(/[a-f\d]{2}/gi).map((channel) => {
		const value = parseInt(channel, 16) / 255;
		return value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
	});

	return (0.2126 * channels[0]) + (0.7152 * channels[1]) + (0.0722 * channels[2]);
}

function contrastRatio(first, second) {
	const lighter = Math.max(relativeLuminance(first), relativeLuminance(second));
	const darker = Math.min(relativeLuminance(first), relativeLuminance(second));
	return (lighter + 0.05) / (darker + 0.05);
}

test('the static entry point references only existing local assets', () => {
	const references = Array.from(index.matchAll(/(?:href|src)="([^"]+)"/g), (match) => match[1]);
	const localReferences = references.filter((reference) =>
		!reference.startsWith('http') &&
		!reference.startsWith('#') &&
		!reference.startsWith('mailto:')
	);

	for (const reference of localReferences) {
		const withoutQuery = decodeURIComponent(reference.split(/[?#]/)[0]);
		assert.ok(fs.existsSync(path.resolve(root, withoutQuery)), `Missing local asset: ${reference}`);
	}
});

test('the page background and profile panel use their separate local photographs', () => {
	const backgroundImagePath = path.join(root, 'images', 'background-sunset.webp');
	const backgroundImage = fs.readFileSync(backgroundImagePath);
	const profileImagePath = path.join(root, 'images', 'profile-night-sky.webp');
	const profileImage = fs.readFileSync(profileImagePath);

	assert.match(index, /<link rel="preload" href="images\/background-sunset\.webp" as="image" type="image\/webp" \/>/);
	assert.match(index, /<div class="background" style="background-image: url\(images\/background-sunset\.webp\);" aria-hidden="true"><\/div>/);
	assert.doesNotMatch(index, /images\/bg\.jpg/);
	assert.match(index, /<div class="slide" style="background-image: url\(images\/profile-night-sky\.webp\);" aria-hidden="true"><\/div>/);
	assert.match(index, /<img src="images\/profile\.png\?v=20260814" alt="Portrait of Callum Dyson-Gainsborough" \/>/);
	assert.match(legacyBlogPost, /<div class="slide" style="background-image: url\(images\/profile-night-sky\.webp\); background-position: 25% 62%;" aria-hidden="true"><\/div>/);
	assert.doesNotMatch(legacyBlogPost, /background-image: url\(images\/bg\.jpg\)/);
	assert.equal(backgroundImage.subarray(0, 4).toString(), 'RIFF');
	assert.equal(backgroundImage.subarray(8, 12).toString(), 'WEBP');
	assert.ok(backgroundImage.length < 500000, 'The sunset background is not web optimized');
	assert.equal(profileImage.subarray(0, 4).toString(), 'RIFF');
	assert.equal(profileImage.subarray(8, 12).toString(), 'WEBP');
	assert.ok(profileImage.length < 500000, 'The profile night-sky image is not web optimized');
	assert.match(portfolioCss, /\.card-started \.profile \.slide \{\s*background-position: 25% 62%;\s*\}/);
});

test('the site retains the GitHub Pages-compatible static architecture', () => {
	assert.match(index, /<script src="js\/project-data\.js"><\/script>/);
	assert.match(index, /<script src="js\/portfolio\.js"><\/script>/);
	assert.match(index, /<script src="js\/recent-work-data\.js"><\/script>/);
	assert.match(index, /<script src="js\/recent-work\.js"><\/script>/);
	assert.match(index, /<script src="js\/section-navigation\.js"><\/script>/);
	assert.ok(index.indexOf('js/section-navigation.js') < index.indexOf('js/scripts.js'));
	assert.doesNotMatch(index, /github\.com\/api|api\.github\.com|fetch\s*\(/i);
	assert.ok(fs.existsSync(path.join(root, 'files', 'CV_Callum Dyson-Gainsborough.pdf')));
});

test('Recent Work navigation and legacy anchors target the data-driven section', () => {
	assert.match(index, /<a href="#recent-work-card" aria-label="Recent Work">[\s\S]*?<span class="link">Recent Work<\/span><\/a>/);
	assert.match(index, /<section class="card-inner blog" id="recent-work-card"[^>]*aria-labelledby="recent-work-heading"/);
	assert.match(index, /id="updates" aria-hidden="true"/);
	assert.match(index, /id="blog-card" aria-hidden="true"/);
	assert.match(index, /<ol class="recent-work-timeline" id="recent-work-timeline" aria-label="Recent development highlights"><\/ol>/);
	assert.doesNotMatch(index, /<span class="link">Updates<\/span>/);
});

test('Recent Work timeline styling distinguishes current and annual entries', () => {
	assert.match(portfolioCss, /\.recent-work-card \{[\s\S]*?background: var\(--theme-surface-raised\);[\s\S]*?border-left: 3px solid var\(--theme-accent\);/);
	assert.match(portfolioCss, /\.recent-work-entry--half-year \.recent-work-card \{\s*border-left-color: var\(--theme-accent-secondary\);/);
	assert.match(portfolioCss, /\.recent-work-entry--year \.recent-work-card \{[\s\S]*?background: var\(--theme-surface\);[\s\S]*?box-shadow: none;/);
	assert.match(portfolioCss, /\.recent-work-points \{[\s\S]*?list-style: disc;/);
});

test('the midnight plum theme is centralised and loaded after the vendor styles', () => {
	assert.match(index, /css\/template-colors\/midnight-plum\.css/);
	assert.doesNotMatch(index, /css\/template-colors\/green\.css/);
	assert.ok(
		index.indexOf('css/template-colors/midnight-plum.css') < index.indexOf('css/portfolio.css'),
		'The central theme must load before portfolio component overrides'
	);

	const expectedVariables = {
		'--theme-page': '#14121a',
		'--theme-surface': '#201a25',
		'--theme-surface-raised': '#29212e',
		'--theme-surface-deep': '#19151f',
		'--theme-accent': '#cf7848',
		'--theme-accent-hover': '#df8c59',
		'--theme-accent-secondary': '#96748f',
		'--theme-text': '#f0ebe7',
		'--theme-text-muted': '#b2a8b3',
		'--theme-border': '#433544'
	};

	for (const [name, value] of Object.entries(expectedVariables)) {
		assert.match(themeCss, new RegExp(`${name}: ${value};`));
	}

	assert.match(themeCss, /\.preloader \{\s*background: var\(--theme-page\);/);
	assert.match(themeCss, /\.background \{[\s\S]*?background-position: 50% 58%;[\s\S]*?pointer-events: none;/);
	assert.match(themeCss, /\.background::before \{\s*background: var\(--theme-background-wash\);/);
	assert.match(themeCss, /\.background::after \{\s*background: var\(--theme-vignette\);/);
	assert.match(themeCss, /--theme-vignette: radial-gradient\(ellipse at center,/);
	assert.doesNotMatch(themeCss + portfolioCss, /#78cc6d|rgba\(120,\s*204,\s*109/i);
});

test('core theme colour pairs meet WCAG AA contrast for normal text', () => {
	const pairs = [
		['main text on panels', '#f0ebe7', '#201a25'],
		['muted text on panels', '#b2a8b3', '#201a25'],
		['ember links on panels', '#cf7848', '#201a25'],
		['dark text on ember controls', '#14121a', '#cf7848'],
		['dark text on ember hover controls', '#14121a', '#df8c59']
	];

	for (const [label, foreground, background] of pairs) {
		assert.ok(contrastRatio(foreground, background) >= 4.5, `${label} falls below 4.5:1`);
	}
});

test('interactive theme states remain explicit and keyboard visible', () => {
	assert.match(portfolioCss, /\.project-filter\.active \{[\s\S]*?background: var\(--theme-accent\);/);
	assert.match(portfolioCss, /\.project-filter:hover \{[\s\S]*?background: var\(--theme-accent-hover\);/);
	assert.match(portfolioCss, /\.project-filter:disabled \{[\s\S]*?cursor: not-allowed;[\s\S]*?opacity: 0\.55;/);
	assert.match(portfolioCss, /a:focus-visible,[\s\S]*?outline: 3px solid var\(--theme-focus\);/);
	assert.match(portfolioCss, /\.contact-list a \{[\s\S]*?text-decoration: underline;/);
	assert.match(themeCss, /\.mfp-bg \{\s*background: var\(--theme-page\);/);
	assert.match(themeCss, /\.mfp-arrow:focus-visible \{[\s\S]*?outline: 3px solid var\(--theme-focus\) !important;/);
	assert.doesNotMatch(themeCss + portfolioCss, /^\s*(?:filter|mix-blend-mode)\s*:/im);
});

test('all data-driven project images resolve to local portfolio assets', () => {
	const projectImages = projectData.projects
		.filter((project) => project.image && project.image.src)
		.map((project) => project.image.src);

	assert.equal(projectImages.length, 4);
	for (const reference of projectImages) {
		assert.doesNotMatch(reference, /^https?:/i);
		assert.ok(fs.existsSync(path.resolve(root, reference)), `Missing project image: ${reference}`);
	}
});

test('public contact details use LinkedIn without exposing an email address', () => {
	assert.doesNotMatch(index, /cgainsborough@pm\.me|mailto:/i);
	const contactList = index.match(/<div class="info-list contact-list">([\s\S]*?)<\/div>/)[1];
	assert.equal((contactList.match(/<li>/g) || []).length, 3);
	assert.match(contactList, /<strong>Location<\/strong> Lincolnshire, UK/);
	assert.match(index, /<strong>LinkedIn<\/strong> <a href="https:\/\/www\.linkedin\.com\/in\/callum-d-03168515b\/">Message me on LinkedIn<\/a>/);
	assert.match(index, /<strong>GitHub<\/strong> <a href="https:\/\/github\.com\/CallyyllaC\/">github\.com\/CallyyllaC<\/a>/);
	assert.match(portfolioCss, /\.contact-list ul li \{[\s\S]*?grid-template-columns: minmax\(128px, 148px\) minmax\(0, 1fr\);[\s\S]*?min-height: 64px;/);
});

test('the downloadable CV is the current complete PDF', () => {
	const cv = fs.readFileSync(path.join(root, 'files', 'CV_Callum Dyson-Gainsborough.pdf'));
	assert.equal(cv.subarray(0, 5).toString(), '%PDF-');
	assert.ok(cv.length > 50000, 'The current two-page public CV was not installed');
});

test('obsolete personal details and module inventories are absent', () => {
	assert.doesNotMatch(index, /Freelance\s*\.{0,5}\s*Available/i);
	assert.doesNotMatch(index, /<strong>Age/i);
	assert.doesNotMatch(index, /North Lincolnshire/i);
	assert.doesNotMatch(index, /College Modules|University Modules/i);
});

test('current employment uses only the approved broad security-sector wording', () => {
	const approvedSentence = 'I’m currently a software engineer working mainly within the security sector.';
	assert.equal(index.split(approvedSentence).length - 1, 1);
	assert.equal((index.match(/security sector/g) || []).length, 1);
	assert.doesNotMatch(index, /\b(defence|cybersecurity|government|public sector|law enforcement|military|clearance|customer|contract)\b/i);
});

test('the page has a single primary heading and ordered section headings', () => {
	assert.equal((index.match(/<h1\b/g) || []).length, 1);
	assert.ok((index.match(/<h2\b/g) || []).length >= 5);
	assert.match(index, /<h2 class="title">Projects<\/h2>/);
	assert.match(index, /<h3 id="featured-heading">Featured \/ Current Work<\/h3>/);
});

test('technical skills use the requested SVN and plugin-system wording', () => {
	assert.match(index, /<li>SVN<\/li>/);
	assert.doesNotMatch(index, /<li>Git<\/li>/);
	assert.match(index, /<li>plugin-based modular systems<\/li>/);
	assert.doesNotMatch(index, /plugin based modular systems/);
});

test('desktop expansion is fluid while the established narrow breakpoints remain intact', () => {
	assert.match(portfolioCss, /@media \(min-width: 1200px\) \{[\s\S]*?width: min\(calc\(100vw - clamp\(64px, 12vw, 240px\)\), 1440px\);/);
	assert.match(portfolioCss, /--profile-card-width: clamp\(480px, 27vw, 520px\);/);
	assert.match(portfolioCss, /left: calc\(var\(--profile-card-width\) \+ 80px\);/);
	assert.match(portfolioCss, /@media \(max-width: 560px\) \{[\s\S]*?\.card-inner \.card-wrap \{\s*padding: 24px 18px;/);
});

test('resume wording is corrected without changing the EndlessModding description', () => {
	assert.match(index, /<div class="date">CURRENT FOCUS<\/div>/);
	assert.doesNotMatch(index, /<div class="date">RECENT WORK<\/div>/);
	assert.match(projectData.projects.find((project) => project.id === 'endless-modding').description, /early post-graduate C# desktop project/);
});

test('the early-work archive is a direct accessible GitHub repositories link', () => {
	assert.match(index, /class="archive-link" href="https:\/\/github\.com\/CallyyllaC\?tab=repositories"/);
	assert.match(index, /aria-label="Browse Callum Dyson-Gainsborough's early work on GitHub"/);
	assert.doesNotMatch(index, /<details id="project-archive">/);
});

test('social profile links retain enlarged icons and touch targets', () => {
	assert.match(portfolioCss, /\.card-started \.profile \.social a \{[\s\S]*?width: 44px;[\s\S]*?height: 44px;/);
	assert.match(portfolioCss, /\.card-started \.profile \.social a \.fab,[\s\S]*?font-size: 24px;/);
});
