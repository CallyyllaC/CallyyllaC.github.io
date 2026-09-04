const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const data = require('../js/recent-work-data.js');
const recentWork = require('../js/recent-work.js');

const dataSource = fs.readFileSync(path.resolve(__dirname, '..', 'js', 'recent-work-data.js'), 'utf8');

function entry(overrides) {
	return Object.assign({
		id: '2026-08',
		type: 'month',
		year: 2026,
		month: 8,
		label: 'August 2026',
		points: ['Completed a meaningful project milestone.']
	}, overrides);
}

test('Recent Work data uses the documented human-editable schema', () => {
	assert.equal(data.schemaVersion, 1);
	assert.deepEqual(data.supportedTypes, ['month', 'half-year', 'year']);

	const ids = data.entries.map((item) => item.id);
	assert.equal(new Set(ids).size, ids.length);

	for (const item of data.entries) {
		assert.ok(item.id);
		assert.ok(data.supportedTypes.includes(item.type));
		assert.ok(Number.isInteger(item.year));
		assert.ok(item.label);
		assert.ok(Array.isArray(item.points) && item.points.length > 0);
		assert.ok(item.points.every((point) => typeof point === 'string'));
		if (item.type === 'month') {
			assert.ok(Number.isInteger(item.month) && item.month >= 1 && item.month <= 12);
		}
		if (item.links) {
			assert.ok(item.links.every((link) => link.label && /^https:\/\//.test(link.url)));
		}
	}
});

test('Recent Work includes the current monthly snapshots and compacted history', () => {
	assert.equal(data.entries.length, 4);
	assert.deepEqual(data.entries.map((item) => item.id), ['2026-08', '2026-07', '2026-h1', '2025']);
	assert.equal(data.entries[0].type, 'month');
	assert.equal(data.entries[0].points.length, 3);
	assert.match(data.entries[0].points.join(' '), /Desktop Shrine 2\.0 Alpha/);
	assert.match(data.entries[0].points.join(' '), /Noctaxis camera field-of-view planning/);
	assert.match(data.entries[0].points.join(' '), /portfolio, the GitHub profile and project documentation/);
	assert.ok(data.entries.some((item) => item.type === 'half-year'));
	assert.ok(data.entries.some((item) => item.type === 'year'));
});

test('entries are rendered newest first without mutating the editorial data', () => {
	const unordered = [
		entry({ id: '2025', type: 'year', year: 2025, month: undefined, label: '2025' }),
		entry({ id: '2026-h1', type: 'half-year', half: 1, month: undefined, label: 'Early 2026' }),
		entry({ id: '2026-08' }),
		entry({ id: '2026-09', month: 9, label: 'September 2026' })
	];
	const originalOrder = unordered.map((item) => item.id);

	assert.deepEqual(
		recentWork.sortRecentWorkEntries(unordered).map((item) => item.id),
		['2026-09', '2026-08', '2026-h1', '2025']
	);
	assert.deepEqual(unordered.map((item) => item.id), originalOrder);
});

test('month, half-year and year entries all render with semantic periods and distinct types', () => {
	const fixtures = [
		[entry({ id: '2026-08' }), 'month', '2026-08', 'Monthly snapshot'],
		[entry({ id: '2026-h1', type: 'half-year', half: 1, month: undefined, label: 'Early 2026' }), 'half-year', '2026-06-30', 'Half-year summary'],
		[entry({ id: '2025', type: 'year', year: 2025, month: undefined, label: '2025' }), 'year', '2025', 'Annual summary']
	];

	for (const [fixture, type, datetime, typeLabel] of fixtures) {
		const html = recentWork.renderRecentWorkEntry(fixture);
		assert.match(html, new RegExp(`recent-work-entry--${type}`));
		assert.match(html, new RegExp(`<article class="recent-work-card"`));
		assert.match(html, new RegExp(`<time datetime="${datetime}">`));
		assert.match(html, new RegExp(typeLabel));
		assert.match(html, /<ul class="recent-work-points"><li>/);
	}
});

test('optional HTTPS links render safely and invalid links are omitted', () => {
	const fixture = entry({
		links: [
			{ label: 'Project source', url: 'https://github.com/example/project' },
			{ label: 'Unsafe', url: 'javascript:alert(1)' },
			{ label: '<Release>', url: 'https://example.com/release?name=<unsafe>' }
		]
	});
	const html = recentWork.renderRecentWorkEntry(fixture);

	assert.match(html, /href="https:\/\/github\.com\/example\/project"/);
	assert.match(html, /target="_blank" rel="noopener noreferrer"/);
	assert.doesNotMatch(html, /javascript:/);
	assert.doesNotMatch(html, /<Release>/);
	assert.doesNotMatch(html, /name=<unsafe>/);
});

test('empty optional fields do not produce broken attributes or link markup', () => {
	const html = recentWork.renderRecentWorkEntry(entry({
		projectIds: undefined,
		links: undefined
	}));

	assert.doesNotMatch(html, /data-project-ids/);
	assert.doesNotMatch(html, /recent-work-links/);
	assert.doesNotMatch(html, /href=/);
	assert.doesNotMatch(html, /undefined|null/);
});

test('the renderer populates the timeline container from data', () => {
	const container = { innerHTML: '' };
	const documentRef = {
		getElementById(id) {
			return id === 'recent-work-timeline' ? container : null;
		}
	};

	assert.equal(recentWork.renderRecentWork(documentRef, data), data.entries.length);
	assert.match(container.innerHTML, /data-recent-work-id="2026-08"/);
	assert.match(container.innerHTML, /data-recent-work-id="2025"/);
	assert.match(container.innerHTML, /<article class="recent-work-card"/);
});

test('legacy Updates and blog hashes resolve to the canonical Recent Work section', () => {
	assert.equal(recentWork.recentWorkHashTarget('#updates'), '#recent-work-card');
	assert.equal(recentWork.recentWorkHashTarget('#blog-card'), '#recent-work-card');
	assert.equal(recentWork.recentWorkHashTarget('#recent-work-card'), '#recent-work-card');
	assert.equal(recentWork.recentWorkHashTarget('#projects'), null);
});

test('the data file documents editorial compaction without browser automation', () => {
	assert.match(dataSource, /six active `month` entries/);
	assert.match(dataSource, /seventh month/);
	assert.match(dataSource, /At year end/);
	assert.match(dataSource, /browser renderer only displays/);
	assert.doesNotMatch(dataSource, /fetch\s*\(|api\.github\.com/i);
});
