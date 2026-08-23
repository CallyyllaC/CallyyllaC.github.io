(function (global) {
	'use strict';

	var projects = [
		{
			id: 'noctaxis',
			name: 'Noctaxis',
			group: 'featured',
			flagship: true,
			status: 'IN DEVELOPMENT',
			period: 'Current',
			description: 'A free astronomy and astrophotography planning application created after identifying a gap between capable but increasingly complex, subscription-led tools and a more accessible planning experience. Built with .NET 10 and Avalonia using freely licensable libraries and public or open datasets where practical, Noctaxis brings celestial planning, camera and lens field-of-view and orientation tools, interactive mapping, weather and saved scouting locations into one cohesive desktop application. Its visibility model accounts for observer elevation, camera height and surrounding terrain, with terrain horizons, environmental data, caching and processing treated as core planning inputs rather than decorative map layers.',
			technologies: ['C#', '.NET 10', 'Avalonia', 'Desktop architecture', 'Astronomy calculations', 'Camera FOV', 'Terrain and visibility', 'Weather', 'Data caching'],
			image: {
				src: null,
				alt: 'Placeholder for a future Noctaxis planning interface screenshot',
				placeholder: 'Project Image Coming Soon'
			},
			availability: 'In active development'
		},
		{
			id: 'ember-deck',
			name: 'The Ember Deck',
			group: 'featured',
			status: 'V1 COMPLETE',
			period: 'Paused after V1',
			description: 'An end-to-end physical-computing project that restores a vintage Hitachi TV, radio and cassette unit as a Raspberry Pi 5 media console while retaining original controls where practical. Custom Linux and Python software uses supervised worker processes and shared state to monitor health, restart unhealthy workers, coordinate Plexamp, Bluetooth and MPRIS playback, centralise hardware ownership, and drive multiple displays, analogue and digital indicators and RGBW audio visualisation. The build also spans low-voltage power distribution, fused branches, voltage conversion, GPIO, I2C, ADC and LED peripherals, and custom audio hardware.',
			technologies: ['Python', 'Raspberry Pi 5', 'Linux', 'Supervised processes', 'Electronics', 'GPIO / I2C', 'Media integration', 'Audio visualisation', 'Physical computing'],
			image: {
				src: null,
				alt: 'Placeholder for a future photograph of The Ember Deck restored media console',
				placeholder: 'Project Image Coming Soon'
			},
			repository: 'https://github.com/CallyyllaC/The-Ember-Deck'
		},
		{
			id: 'desktop-shrine',
			name: 'Desktop Shrine',
			group: 'featured',
			status: 'ACTIVE',
			period: 'Current',
			description: 'A modular .NET 10 Windows desktop runtime that turns media, audio and hardware activity into configurable ambient output. Its plugin architecture integrates Windows media and Steam, desktop audio analysis, CPU and GPU telemetry, artwork colour extraction and priority-based routing to GOverlay LCD and BlinkStick RGBW devices. The project also covers installer and release engineering for a deployable desktop product.',
			technologies: ['C#', '.NET 10', 'Windows', 'Plugin architecture', 'Media integration', 'Audio analysis', 'Hardware telemetry', 'GOverlay', 'BlinkStick'],
			image: {
				src: null,
				alt: 'Placeholder for a future Desktop Shrine runtime screenshot',
				placeholder: 'Project Image Coming Soon'
			},
			repository: 'https://github.com/CallyyllaC/Desktop-Shrine',
			releases: 'https://github.com/CallyyllaC/Desktop-Shrine/releases'
		},
		{
			id: 'leapmotion-telemanipulation',
			name: 'Leap Motion Telemanipulation',
			group: 'selected',
			prominent: true,
			status: 'DISSERTATION',
			period: '2020',
			description: 'A robotics telemanipulation system completed as third-year and dissertation work, using single- and dual-Leap-Motion hand tracking to control a simulated Franka Panda arm through ROS, MoveIt and custom C++ and Python nodes and messages. It translated gestures and tracked hand coordinates into constrained robot-workspace movement and gripper control. Because the available Linux Leap Motion support was obsolete and problematic, the input and Ubuntu/ROS environments were separated through a networked-systems workaround rather than abandoning the intended architecture.',
			technologies: ['C++', 'Python', 'Ubuntu', 'ROS', 'MoveIt', 'Leap Motion', 'Coordinate transforms', 'Networked systems'],
			image: {
				src: null,
				alt: 'Placeholder for a future Leap Motion telemanipulation demonstration image',
				placeholder: 'Project Image Coming Soon'
			},
			repository: 'https://github.com/CallyyllaC/LeapMotion-Telemanipulation'
		},
		{
			id: 'endless-modding',
			name: 'EndlessModding',
			group: 'selected',
			status: 'EARLIER WORK',
			period: '2019–2023',
			description: 'An early post-graduate C# desktop project that reworked and expanded the original Endless Space 2 hero designer into a broader toolset for creating and managing custom game content. It was an important step in learning desktop-development techniques later used professionally.',
			technologies: ['C#', '.NET', 'Desktop UI', 'Game modding'],
			image: {
				src: null,
				alt: 'Placeholder for a future EndlessModding desktop interface screenshot',
				placeholder: 'Project Image Coming Soon'
			},
			repository: 'https://github.com/CallyyllaC/EndlessModding'
		},
		{
			id: 'es2-hero-designer',
			name: 'Endless Space 2 Hero Designer',
			group: 'archive',
			status: 'ARCHIVED / EARLY WORK',
			period: '2019',
			description: 'An earlier C# GUI for creating custom Endless Space 2 heroes; superseded by EndlessModding.',
			technologies: ['C#', 'Desktop UI', 'Game modding'],
			repository: 'https://github.com/CallyyllaC/ES2-Hero-Designer'
		},
		{
			id: 'animated-algorithms',
			name: 'Group Animated Algorithms Project',
			group: 'archive',
			status: 'ARCHIVED / EARLY WORK',
			period: 'University',
			description: 'A group university project for presenting algorithms through interactive animation.',
			technologies: ['C#', 'Algorithms', 'Group project'],
			repository: 'https://github.com/group-24-animated-algorithms/Group-24-Animated-Algorithms'
		},
		{
			id: 'calibot',
			name: 'CaliBot Discord Bot',
			group: 'archive',
			status: 'ARCHIVED / EARLY WORK',
			period: 'Early work',
			description: 'An early C# Discord bot and community utility project.',
			technologies: ['C#', 'Discord'],
			repository: 'https://github.com/CallyyllaC/CaliBot'
		},
		{
			id: 'rich-presence-mood-switcher',
			name: 'Discord Rich Presence GUI',
			group: 'archive',
			status: 'ARCHIVED / EARLY WORK',
			period: '2018',
			description: 'A small desktop interface for customising Discord Rich Presence.',
			technologies: ['C#', 'Discord', 'Desktop UI'],
			repository: 'https://github.com/CallyyllaC/RichPresenceMoodSwitcher'
		},
		{
			id: 'hidden-presence',
			name: 'Hidden Presence',
			group: 'archive',
			status: 'ARCHIVED / EARLY WORK',
			period: '2018',
			description: 'An early C# experiment around Discord presence behaviour.',
			technologies: ['C#', 'Discord'],
			repository: 'https://github.com/CallyyllaC/HiddenPresence'
		},
		{
			id: 'application-launcher',
			name: 'Application Launcher',
			group: 'archive',
			status: 'ARCHIVED / EARLY WORK',
			period: '2017',
			description: 'A configurable utility for repeatedly launching and closing an application on a schedule.',
			technologies: ['C#', 'Windows utility'],
			repository: 'https://github.com/CallyyllaC/ApplicationLauncher'
		},
		{
			id: 'kf2-tool',
			name: 'KF2 Tool',
			group: 'archive',
			status: 'ARCHIVED / EARLY WORK',
			period: '2017',
			description: 'A utility for managing Killing Floor 2 server configuration with additional client options.',
			technologies: ['C#', 'Configuration tooling'],
			repository: 'https://github.com/CallyyllaC/KF2Tool'
		},
		{
			id: 'kf2-map-name-generator',
			name: 'KF2 Map Name Generator',
			group: 'archive',
			status: 'ARCHIVED / EARLY WORK',
			period: '2017',
			description: 'A helper for generating Killing Floor 2 custom-map configuration entries from a directory.',
			technologies: ['C#', 'Configuration tooling'],
			repository: 'https://github.com/CallyyllaC/KF2MapNameGen'
		},
		{
			id: 'group-spotify',
			name: 'Group Spotify Project',
			group: 'archive',
			status: 'ARCHIVED / EARLY WORK',
			period: 'University',
			description: 'A university group software-engineering project built around Spotify.',
			technologies: ['C#', 'Spotify', 'Group project'],
			repository: 'https://github.com/ElliottMcD98/Group-8-Software-Engineering'
		},
		{
			id: 'image-equaliser',
			name: 'Image Normaliser / Equaliser',
			group: 'archive',
			status: 'ARCHIVED / EARLY WORK',
			period: 'University',
			description: 'Parallel-programming coursework implementing image normalisation and equalisation.',
			technologies: ['C++', 'OpenCL', 'Image processing'],
			repository: 'https://github.com/CallyyllaC/Parallel-Programming-Assignment-'
		},
		{
			id: 'wheres-wally',
			name: "Where's Wally Finder",
			group: 'archive',
			status: 'ARCHIVED / EARLY WORK',
			period: 'University',
			description: "Object-oriented programming coursework for locating Wally in an image.",
			technologies: ['C++', 'Computer vision'],
			repository: 'https://github.com/CallyyllaC/Object-Oriented-Programming-Assignment'
		},
		{
			id: 'maze-robot',
			name: 'Maze-Navigating Robot',
			group: 'archive',
			status: 'ARCHIVED / EARLY WORK',
			period: 'University',
			description: 'Autonomous mobile robotics coursework focused on maze navigation.',
			technologies: ['Python', 'Robotics'],
			repository: 'https://github.com/CallyyllaC/Autonomous-Mobile-Robotics-Assignment-'
		},
		{
			id: 'machine-learning',
			name: 'Machine Learning and Neural Networks',
			group: 'archive',
			status: 'ARCHIVED / EARLY WORK',
			period: 'University',
			description: 'Coursework exploring machine-learning algorithms and neural networks.',
			technologies: ['Python', 'Jupyter', 'Machine learning'],
			repository: 'https://github.com/CallyyllaC/Machine-Learning-Assignment-'
		},
		{
			id: 'haskell-editor',
			name: 'Haskell Text Editor',
			group: 'archive',
			status: 'ARCHIVED / EARLY WORK',
			period: 'University',
			description: 'Programming-paradigms coursework implementing a text editor in Haskell.',
			technologies: ['Haskell', 'Functional programming'],
			repository: 'https://github.com/CallyyllaC/Programming-Paradigms-Assignment-'
		},
		{
			id: 'robot-ai',
			name: 'Robot AI Planning',
			group: 'archive',
			status: 'ARCHIVED / EARLY WORK',
			period: 'University',
			description: 'Artificial-intelligence coursework using PDDL planning for a robot domain.',
			technologies: ['PDDL', 'AI planning'],
			repository: 'https://github.com/CallyyllaC/Ai-Assignment'
		},
		{
			id: 'database-systems',
			name: 'Database Systems Coursework',
			group: 'archive',
			status: 'ARCHIVED / EARLY WORK',
			period: 'University',
			description: 'Database-design and SQL coursework retained as early project history.',
			technologies: ['SQL', 'Database design'],
			repository: 'https://github.com/CallyyllaC/Database-Systems-Assignment'
		}
	];

	var portfolioData = {
		projects: projects,
		groups: ['featured', 'selected', 'archive']
	};

	global.PortfolioData = portfolioData;

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = portfolioData;
	}
}(typeof window !== 'undefined' ? window : globalThis));
