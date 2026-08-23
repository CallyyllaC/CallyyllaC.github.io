const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const indexPath = path.join(root, 'index.html');
const index = fs.readFileSync(indexPath, 'utf8');
const portfolioCss = fs.readFileSync(path.join(root, 'css', 'portfolio.css'), 'utf8');

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

test('the site retains the GitHub Pages-compatible static architecture', () => {
	assert.match(index, /<script src="js\/project-data\.js"><\/script>/);
	assert.match(index, /<script src="js\/portfolio\.js"><\/script>/);
	assert.doesNotMatch(index, /github\.com\/api|api\.github\.com|fetch\s*\(/i);
	assert.ok(fs.existsSync(path.join(root, 'files', 'CV_Callum Dyson-Gainsborough.pdf')));
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
	assert.match(index, /<li>plugin based modular systems<\/li>/);
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
