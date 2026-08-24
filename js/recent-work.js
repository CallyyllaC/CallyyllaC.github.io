(function (global) {
	'use strict';

	var typeLabels = {
		'month': 'Monthly snapshot',
		'half-year': 'Half-year summary',
		'year': 'Annual summary'
	};

	var recentWorkHashes = {
		'#recent-work-card': '#recent-work-card',
		'#updates': '#recent-work-card',
		'#blog-card': '#recent-work-card'
	};

	function escapeHtml(value) {
		return String(value)
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;')
			.replace(/'/g, '&#039;');
	}

	function safeExternalUrl(value) {
		var url = String(value || '');
		return /^https:\/\/[^\s"'<>]+$/i.test(url) ? url : '';
	}

	function typeSortMonth(entry) {
		if (entry.type === 'month') {
			return Number(entry.month) || 0;
		}

		if (entry.type === 'half-year') {
			return Number(entry.half) === 2 ? 12 : 6;
		}

		return 12;
	}

	function sortRecentWorkEntries(entries) {
		var typePriority = { 'month': 3, 'half-year': 2, 'year': 1 };

		return (entries || []).slice().sort(function (first, second) {
			var yearDifference = Number(second.year) - Number(first.year);
			if (yearDifference) {
				return yearDifference;
			}

			var monthDifference = typeSortMonth(second) - typeSortMonth(first);
			if (monthDifference) {
				return monthDifference;
			}

			var typeDifference = (typePriority[second.type] || 0) - (typePriority[first.type] || 0);
			if (typeDifference) {
				return typeDifference;
			}

			return String(first.id).localeCompare(String(second.id));
		});
	}

	function entryDatetime(entry) {
		if (entry.type === 'month') {
			return String(entry.year) + '-' + String(entry.month).padStart(2, '0');
		}

		if (entry.type === 'half-year') {
			return String(entry.year) + (Number(entry.half) === 2 ? '-12-31' : '-06-30');
		}

		return String(entry.year);
	}

	function renderRelatedLinks(entry) {
		var links = (entry.links || []).map(function (link) {
			var url = safeExternalUrl(link.url);
			if (!url || !link.label) {
				return '';
			}

			return '<li><a href="' + escapeHtml(url) + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(link.label) + '<span class="ion ion-arrow-up-c" aria-hidden="true"></span></a></li>';
		}).filter(Boolean).join('');

		if (!links) {
			return '';
		}

		return '<ul class="recent-work-links" aria-label="Related links for ' + escapeHtml(entry.label) + '">' + links + '</ul>';
	}

	function renderRecentWorkEntry(entry) {
		var type = typeLabels[entry.type] ? entry.type : 'month';
		var points = (entry.points || []).map(function (point) {
			return '<li>' + escapeHtml(point) + '</li>';
		}).join('');
		var projectIds = Array.isArray(entry.projectIds) && entry.projectIds.length
			? ' data-project-ids="' + escapeHtml(entry.projectIds.join(' ')) + '"'
			: '';

		return '<li class="recent-work-entry recent-work-entry--' + type + '" data-recent-work-id="' + escapeHtml(entry.id) + '">' +
			'<div class="recent-work-marker" aria-hidden="true"></div>' +
			'<article class="recent-work-card"' + projectIds + '>' +
			'<header class="recent-work-entry__header">' +
			'<h3 class="recent-work-period"><time datetime="' + escapeHtml(entryDatetime(entry)) + '">' + escapeHtml(entry.label) + '</time></h3>' +
			'<span class="recent-work-kind">' + typeLabels[type] + '</span>' +
			'</header>' +
			'<ul class="recent-work-points">' + points + '</ul>' +
			renderRelatedLinks(entry) +
			'</article>' +
			'</li>';
	}

	function renderRecentWork(documentRef, data) {
		var container = documentRef && documentRef.getElementById('recent-work-timeline');
		if (!container) {
			return 0;
		}

		var entries = sortRecentWorkEntries(data && data.entries);
		container.innerHTML = entries.map(renderRecentWorkEntry).join('');
		return entries.length;
	}

	function recentWorkHashTarget(hash) {
		return recentWorkHashes[hash] || null;
	}

	function initialiseRecentWorkHash(windowRef, documentRef) {
		var target = windowRef && recentWorkHashTarget(windowRef.location.hash);
		if (!target) {
			return false;
		}

		var activate = function () {
			if (windowRef.location.hash !== target && windowRef.history && windowRef.history.replaceState) {
				windowRef.history.replaceState(null, '', windowRef.location.pathname + windowRef.location.search + target);
			}

			var link = documentRef.querySelector('.top-menu a[href="' + target + '"]');
			if (link && typeof link.click === 'function') {
				link.click();
			}
		};

		if (documentRef.readyState === 'complete') {
			activate();
		} else {
			windowRef.addEventListener('load', activate, { once: true });
		}

		return true;
	}

	var api = {
		escapeHtml: escapeHtml,
		safeExternalUrl: safeExternalUrl,
		sortRecentWorkEntries: sortRecentWorkEntries,
		entryDatetime: entryDatetime,
		renderRelatedLinks: renderRelatedLinks,
		renderRecentWorkEntry: renderRecentWorkEntry,
		renderRecentWork: renderRecentWork,
		recentWorkHashTarget: recentWorkHashTarget,
		initialiseRecentWorkHash: initialiseRecentWorkHash
	};

	global.RecentWork = api;

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = api;
	}

	if (typeof document !== 'undefined') {
		renderRecentWork(document, global.RecentWorkData);
		initialiseRecentWorkHash(global, document);
	}
}(typeof window !== 'undefined' ? window : globalThis));
