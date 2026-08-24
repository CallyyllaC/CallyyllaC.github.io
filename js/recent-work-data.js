(function (global) {
	'use strict';

	/*
	 * Recent Work editorial maintenance rules
	 * ----------------------------------------
	 * - Keep entries newest first and retain at most six active `month` entries.
	 * - When a seventh month is ready, a future editorial pass may replace the
	 *   preceding six months with one `half-year` summary (`half: 1` or `2`).
	 * - At year end, replace that year's month/half-year entries with one permanent
	 *   `year` summary. Completed history then grows by one entry per year.
	 * - Compaction is deliberate editorial work. The browser renderer only displays
	 *   this data; it never creates, combines, or deletes historical entries.
	 * - Keep points outcome-oriented. Omit routine maintenance and unsupported
	 *   claims. `projectIds` and `links` are optional and may be left out entirely.
	 */

	var data = {
		schemaVersion: 1,
		supportedTypes: ['month', 'half-year', 'year'],
		entries: [
			{
				id: '2026-08',
				type: 'month',
				year: 2026,
				month: 8,
				label: 'August 2026',
				points: [
					'Reached the Desktop Shrine 2.0 Alpha milestone with revised lighting controls, live configuration and a new desktop settings and Quick Access experience.',
					'Advanced Noctaxis camera field-of-view planning and terrain-aware visibility, with environmental overlays and clearer planner feedback.',
					'Refreshed this portfolio, the GitHub profile and project documentation with clearer project curation, local imagery and updated public context.'
				],
				projectIds: ['desktop-shrine', 'noctaxis'],
				links: [
					{
						label: 'Desktop Shrine source',
						url: 'https://github.com/CallyyllaC/Desktop-Shrine'
					},
					{
						label: 'Portfolio source',
						url: 'https://github.com/CallyyllaC/CallyyllaC.github.io'
					}
				]
			}
		]
	};

	global.RecentWorkData = data;

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = data;
	}
}(typeof window !== 'undefined' ? window : globalThis));
