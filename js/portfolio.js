(function (global) {
	'use strict';

	function escapeHtml(value) {
		return String(value)
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;')
			.replace(/'/g, '&#039;');
	}

	function renderAction(url, label, accessibleName) {
		if (!url) {
			return '';
		}

		return '<a class="project-action" href="' + escapeHtml(url) + '" target="_blank" rel="noopener noreferrer" aria-label="' + escapeHtml(accessibleName) + '">' + escapeHtml(label) + '<span class="ion ion-arrow-up-c" aria-hidden="true"></span></a>';
	}

	function renderProjectImage(project) {
		if (!project.image) {
			return '';
		}

		if (project.image.src) {
			return '<div class="project-image"><img src="' + escapeHtml(project.image.src) + '" alt="' + escapeHtml(project.image.alt) + '" width="1600" height="900" loading="lazy"></div>';
		}

		return '<div class="project-image project-image--placeholder" role="img" aria-label="' + escapeHtml(project.image.alt) + '">' +
			'<span class="ion ion-image" aria-hidden="true"></span>' +
			'<strong>' + escapeHtml(project.image.placeholder || 'Project Image Coming Soon') + '</strong>' +
			'</div>';
	}

	function renderProjectCard(project) {
		var tags = project.technologies.map(function (technology) {
			return '<li>' + escapeHtml(technology) + '</li>';
		}).join('');
		var actions = renderAction(project.repository, 'Source', 'View ' + project.name + ' source on GitHub') +
			renderAction(project.releases, 'Releases / Download', 'View ' + project.name + ' releases and downloads');
		var availability = !actions && project.availability
			? '<span class="project-availability"><span class="ion ion-code-working" aria-hidden="true"></span>' + escapeHtml(project.availability) + '</span>'
			: '';

		var flagshipClass = project.flagship ? ' project-card--flagship' : '';
		var prominentClass = project.prominent ? ' project-card--prominent' : '';
		var flagshipLabel = project.flagship ? '<span class="project-kicker">Flagship project</span>' : '';

		return '<article class="project-card project-card--' + escapeHtml(project.group) + flagshipClass + prominentClass + '" data-project-id="' + escapeHtml(project.id) + '" data-project-group="' + escapeHtml(project.group) + '">' +
			renderProjectImage(project) +
			flagshipLabel +
			'<div class="project-card__meta"><span class="project-status">' + escapeHtml(project.status) + '</span><span class="project-period">' + escapeHtml(project.period) + '</span></div>' +
			'<h4>' + escapeHtml(project.name) + '</h4>' +
			'<p>' + escapeHtml(project.description) + '</p>' +
			'<ul class="project-tags" aria-label="Technologies used">' + tags + '</ul>' +
			'<div class="project-actions">' + actions + availability + '</div>' +
			'</article>';
	}

	function projectsByGroup(projects, group) {
		return projects.filter(function (project) {
			return project.group === group;
		});
	}

	function renderProjects(documentRef, data) {
		data.groups.forEach(function (group) {
			var container = documentRef.getElementById(group + '-projects');
			if (!container) {
				return;
			}

			container.innerHTML = projectsByGroup(data.projects, group).map(renderProjectCard).join('');
		});
	}

	function applyProjectFilter(documentRef, filter) {
		var sections = Array.prototype.slice.call(documentRef.querySelectorAll('[data-project-section]'));
		var buttons = Array.prototype.slice.call(documentRef.querySelectorAll('[data-project-filter]'));
		var visibleCount = 0;

		sections.forEach(function (section) {
			var isVisible = filter === 'all' || section.getAttribute('data-project-section') === filter;
			section.hidden = !isVisible;
			if (isVisible) {
				visibleCount += section.querySelectorAll('.project-card').length;
			}
		});

		buttons.forEach(function (button) {
			var isActive = button.getAttribute('data-project-filter') === filter;
			button.classList.toggle('active', isActive);
			button.setAttribute('aria-pressed', String(isActive));
		});

		var status = documentRef.getElementById('project-filter-status');
		if (status) {
			status.textContent = filter === 'archive'
				? 'GitHub project archive link shown.'
				: visibleCount + ' project' + (visibleCount === 1 ? '' : 's') + ' shown.';
		}

		return visibleCount;
	}

	function initialisePortfolio(documentRef, data) {
		if (!documentRef || !data) {
			return;
		}

		renderProjects(documentRef, data);
		documentRef.querySelectorAll('[data-project-filter]').forEach(function (button) {
			button.addEventListener('click', function () {
				applyProjectFilter(documentRef, button.getAttribute('data-project-filter'));
			});
		});
		applyProjectFilter(documentRef, 'all');
	}

	var api = {
		escapeHtml: escapeHtml,
		renderProjectImage: renderProjectImage,
		renderProjectCard: renderProjectCard,
		projectsByGroup: projectsByGroup,
		renderProjects: renderProjects,
		applyProjectFilter: applyProjectFilter,
		initialisePortfolio: initialisePortfolio
	};

	global.Portfolio = api;

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = api;
	}

	if (typeof document !== 'undefined') {
		initialisePortfolio(document, global.PortfolioData);
	}
}(typeof window !== 'undefined' ? window : globalThis));
