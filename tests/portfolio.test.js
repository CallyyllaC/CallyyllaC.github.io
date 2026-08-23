const test = require('node:test');
const assert = require('node:assert/strict');

const data = require('../js/project-data.js');
const portfolio = require('../js/portfolio.js');

const expectedLegacyRepositories = [
	'https://github.com/CallyyllaC/ES2-Hero-Designer',
	'https://github.com/group-24-animated-algorithms/Group-24-Animated-Algorithms',
	'https://github.com/CallyyllaC/CaliBot',
	'https://github.com/CallyyllaC/RichPresenceMoodSwitcher',
	'https://github.com/CallyyllaC/HiddenPresence',
	'https://github.com/CallyyllaC/ApplicationLauncher',
	'https://github.com/CallyyllaC/KF2Tool',
	'https://github.com/CallyyllaC/KF2MapNameGen',
	'https://github.com/ElliottMcD98/Group-8-Software-Engineering',
	'https://github.com/CallyyllaC/LeapMotion-Telemanipulation',
	'https://github.com/CallyyllaC/Parallel-Programming-Assignment-',
	'https://github.com/CallyyllaC/Object-Oriented-Programming-Assignment',
	'https://github.com/CallyyllaC/Autonomous-Mobile-Robotics-Assignment-',
	'https://github.com/CallyyllaC/Machine-Learning-Assignment-',
	'https://github.com/CallyyllaC/Programming-Paradigms-Assignment-',
	'https://github.com/CallyyllaC/Ai-Assignment',
	'https://github.com/CallyyllaC/Database-Systems-Assignment'
];

test('projects have unique ids and exactly one supported hierarchy group', () => {
	const ids = data.projects.map((project) => project.id);
	assert.equal(new Set(ids).size, ids.length);

	for (const project of data.projects) {
		assert.ok(data.groups.includes(project.group), `${project.name} has an unsupported group`);
		assert.ok(project.name);
		assert.ok(project.description);
		assert.ok(project.status);
		assert.ok(project.period);
		assert.ok(Array.isArray(project.technologies) && project.technologies.length > 0);
	}
});

test('featured, selected and archive groups contain the curated project sets', () => {
	assert.deepEqual(
		portfolio.projectsByGroup(data.projects, 'featured').map((project) => project.name),
		['Noctaxis', 'The Ember Deck', 'Desktop Shrine']
	);
	assert.deepEqual(
		portfolio.projectsByGroup(data.projects, 'selected').map((project) => project.name),
		['Leap Motion Telemanipulation', 'EndlessModding']
	);
	assert.equal(portfolio.projectsByGroup(data.projects, 'archive').length, 16);
	assert.equal(data.projects.some((project) => project.id === 'a5e-foundry'), false);
});

test('Noctaxis is the flagship and Leap Motion precedes EndlessModding', () => {
	const featured = portfolio.projectsByGroup(data.projects, 'featured');
	const selected = portfolio.projectsByGroup(data.projects, 'selected');

	assert.equal(featured[0].id, 'noctaxis');
	assert.equal(featured[0].flagship, true);
	assert.ok(
		selected.findIndex((project) => project.id === 'leapmotion-telemanipulation') <
		selected.findIndex((project) => project.id === 'endless-modding')
	);
	assert.equal(selected[0].prominent, true);
});

test('major projects retain data-driven image placeholders with meaningful labels', () => {
	const majorProjectIds = [
		'noctaxis',
		'ember-deck',
		'desktop-shrine',
		'leapmotion-telemanipulation',
		'endless-modding'
	];

	for (const id of majorProjectIds) {
		const project = data.projects.find((candidate) => candidate.id === id);
		assert.ok(project.image, `${id} is missing image metadata`);
		assert.equal(project.image.src, null);
		assert.match(project.image.alt, /Placeholder for a future/i);
		assert.equal(project.image.placeholder, 'Project Image Coming Soon');

		const html = portfolio.renderProjectCard(project);
		assert.match(html, /project-image--placeholder/);
		assert.match(html, /Project Image Coming Soon/);
		assert.match(html, new RegExp(`aria-label="${project.image.alt}"`));
	}
});

test('all project URLs are absolute HTTPS links and Desktop Shrine has a releases action', () => {
	for (const project of data.projects) {
		for (const key of ['repository', 'releases']) {
			if (project[key]) {
				assert.match(project[key], /^https:\/\//, `${project.name} has an invalid ${key} URL`);
			}
		}
	}

	const desktopShrine = data.projects.find((project) => project.id === 'desktop-shrine');
	assert.equal(desktopShrine.repository, 'https://github.com/CallyyllaC/Desktop-Shrine');
	assert.equal(desktopShrine.releases, 'https://github.com/CallyyllaC/Desktop-Shrine/releases');
});

test('every repository from the original portfolio remains represented', () => {
	const repositories = new Set(data.projects.map((project) => project.repository).filter(Boolean));
	for (const repository of expectedLegacyRepositories) {
		assert.ok(repositories.has(repository), `Missing legacy repository: ${repository}`);
	}
});

test('projects without URLs render an accessible availability state without an empty link', () => {
	const noctaxis = data.projects.find((project) => project.id === 'noctaxis');
	const html = portfolio.renderProjectCard(noctaxis);

	assert.doesNotMatch(html, /href=/);
	assert.match(html, /In active development/);
	assert.match(html, /data-project-group="featured"/);
	assert.match(html, /project-card--flagship/);
});

test('project actions include safe external-link attributes and accessible names', () => {
	const emberDeck = data.projects.find((project) => project.id === 'ember-deck');
	const html = portfolio.renderProjectCard(emberDeck);

	assert.match(html, /target="_blank"/);
	assert.match(html, /rel="noopener noreferrer"/);
	assert.match(html, /aria-label="View The Ember Deck source on GitHub"/);
});

test('rendered project content is HTML-escaped', () => {
	const html = portfolio.renderProjectCard({
		id: 'escape-test',
		name: '<Project>',
		group: 'archive',
		status: 'ARCHIVED',
		period: 'Earlier',
		description: 'A & B',
		technologies: ['<script>']
	});

	assert.doesNotMatch(html, /<script>/);
	assert.match(html, /&lt;Project&gt;/);
	assert.match(html, /A &amp; B/);
});
