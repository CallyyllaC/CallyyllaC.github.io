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
			},
			{
				id: '2026-h1',
				type: 'half-year',
				year: 2026,
				half: 1,
				label: 'Early 2026',
				points: [
					'Reworked The Ember Deck from a working Raspberry Pi media prototype into a modular system with supervised worker processes, shared state, health monitoring and automatic recovery.',
					'Developed its multi-display interface layouts and diagnostics around playback metadata, lyrics, system state, audio visualisation and process heartbeats.'
				],
				projectIds: ['ember-deck'],
				links: [
					{
						label: 'The Ember Deck source',
						url: 'https://github.com/CallyyllaC/The-Ember-Deck'
					}
				]
			},
			{
				id: '2025',
				type: 'year',
				year: 2025,
				label: '2025',
				points: [
					'Started The Ember Deck by restoring a vintage Hitachi TV, radio and cassette unit around a Raspberry Pi 5, establishing headless Plexamp playback, Bluetooth audio, a USB DAC and the first hardware prototype.',
					'Expanded the build toward physical controls and an RGBW audio visualiser while documenting the restoration, Linux setup and electronics as a practical build log.',
					'Built a searchable Google Sheets and Apps Script serial-number lookup for a friend\'s historical collecting website, turning a structured archive into a simple public-facing research tool.'
				],
				projectIds: ['ember-deck'],
				links: [
					{
						label: 'The Ember Deck source',
						url: 'https://github.com/CallyyllaC/The-Ember-Deck'
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
