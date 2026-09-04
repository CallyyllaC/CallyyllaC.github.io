const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const indexPath = path.join(root, 'index.html');
const portfolio = require(path.join(root, 'js', 'portfolio.js'));
const projectData = require(path.join(root, 'js', 'project-data.js'));
const recentWork = require(path.join(root, 'js', 'recent-work.js'));
const recentWorkData = require(path.join(root, 'js', 'recent-work-data.js'));

function replaceMarkerBlock(source, name, html, indent) {
	const start = `<!-- prerender:${name}:start -->`;
	const end = `<!-- prerender:${name}:end -->`;
	const pattern = new RegExp(`(${start.replace(/[.*+?^${}()|[\\]\\]/g, '\\$&')})[\\s\\S]*?(${end.replace(/[.*+?^${}()|[\\]\\]/g, '\\$&')})`);
	const indented = html
		.split('\n')
		.map((line) => indent + line)
		.join('\n');
	return source.replace(pattern, `$1\n${indented}\n${indent}$2`);
}

let index = fs.readFileSync(indexPath, 'utf8');

const featured = portfolio.projectsByGroup(projectData.projects, 'featured')
	.map(portfolio.renderProjectCard)
	.join('\n');
const selected = portfolio.projectsByGroup(projectData.projects, 'selected')
	.map(portfolio.renderProjectCard)
	.join('\n');
const recent = recentWork.sortRecentWorkEntries(recentWorkData.entries)
	.map(recentWork.renderRecentWorkEntry)
	.join('\n');

index = replaceMarkerBlock(index, 'featured', featured, '\t\t\t\t\t\t\t\t');
index = replaceMarkerBlock(index, 'selected', selected, '\t\t\t\t\t\t\t\t');
index = replaceMarkerBlock(index, 'recent-work', recent, '\t\t\t\t\t\t\t');

fs.writeFileSync(indexPath, index);
console.log(`Prerendered ${projectData.projects.filter((p) => p.group === 'featured' || p.group === 'selected').length} project cards and ${recentWorkData.entries.length} Recent Work entries.`);
