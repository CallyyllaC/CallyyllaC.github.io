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
					'Released Desktop Shrine 2.0 Alpha, evolving the original ambient display into a fuller desktop lighting system with live configuration, redesigned settings and a Quick Access experience.',
					'Improved Desktop Shrine reliability with steadier GOverlay updates, a compatibility-focused rectangle renderer and a fix for installer-created autostart tasks.',
					'Rebuilt this portfolio around clearer project curation, a dedicated Recent Work timeline, local imagery and updated public documentation.'
				],
				projectIds: ['desktop-shrine'],
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
				id: '2026-07',
				type: 'month',
				year: 2026,
				month: 7,
				label: 'July 2026',
				points: [
					'Completed The Ember Deck V1 after roughly nine months of hardware and software work, finishing the restored media console, physical controls, dual displays, 2.1 audio system and serviceable internal wiring.',
					'Refined its playback routing, process supervision, status indicators and album-art-driven RGBW visualisation into a coherent finished system.',
					'Began Fox Shrine, an ambient Windows display and lighting experiment that evolved into Desktop Shrine.'
				],
				projectIds: ['ember-deck', 'desktop-shrine'],
				links: [
					{
						label: 'The Ember Deck source',
						url: 'https://github.com/CallyyllaC/The-Ember-Deck'
					},
					{
						label: 'Desktop Shrine source',
						url: 'https://github.com/CallyyllaC/Desktop-Shrine'
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
					'Developed its multi-display interface, playback routing, physical-control integration and diagnostics around media metadata, lyrics, system state, audio visualisation and process heartbeats.',
					'Built a Raspberry Pi car telemetry prototype around OBD data and a connected dashboard display, moving from Bluetooth experimentation to a wired USB adapter for more dependable long-term logging.',
					'Prototyped a compact Pi Zero 2 dashboard enclosure and mounting arrangement, iterating after the first resin case proved too deep, cracked and too heavy when fitted with a Pi 3.',
					'Defined a conservative in-car power and cabling approach using an existing 12 V USB supply, separate from the dashcam, with the eventual aim of integrating a cloned Diagbox interface.'
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
