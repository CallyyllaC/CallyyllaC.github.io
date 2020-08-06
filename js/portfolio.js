<<<<<<< HEAD
// JavaScript Document
var cshpnum = 0, cppnum = 0, webnum = 0, pynum = 0;
var cppimg, cshpimg, webimg, pyimg;

var Cshptyped;
var Cpptyped;
var Webtyped;
var Pytyped;

var pyoptions = {
		strings: ["Undefined"],
		startDelay: 300,
		typeSpeed: 50,
		loop: false
	};
var weboptions = {
		strings: ["Undefined"],
		startDelay: 300,
		typeSpeed: 50,
		loop: false
	};
var cshpoptions = {
		strings: ["Undefined"],
		startDelay: 300,
		typeSpeed: 50,
		loop: false
	};
var cppoptions = {
		strings: ["Undefined"],
		startDelay: 300,
		typeSpeed: 50,
		loop: false
	};

window.onload = function () {

	cshpimg = document.getElementById('cshpimg');
	var cshpnext = document.getElementById('cshpnext');
	cshpnext.addEventListener("click", (function () {
		console.log("clicked next");
		cyclecshp(1);
	}));
	var cshpprev = document.getElementById('cshpprev');
	cshpprev.addEventListener("click", (function () {
		console.log("clicked prev");
		cyclecshp(-1);
	}));
	
	cppimg = document.getElementById('cppimg');
	var cppnext = document.getElementById('cppnext');
	cppnext.addEventListener("click", (function () {
		console.log("clicked next");
		cyclecpp(1);
	}));
	var cppprev = document.getElementById('cppprev');
	cppprev.addEventListener("click", (function () {
		console.log("clicked prev");
		cyclecpp(-1);
	}));

	webimg = document.getElementById('webimg');
	var webnext = document.getElementById('webnext');
	webnext.addEventListener("click", (function () {
		cycleweb(1);
	}));
	var webprev = document.getElementById('webprev');
	webprev.addEventListener("click", (function () {
		cycleweb(-1);
	}));

	pyimg = document.getElementById('pyimg');
	var pynext = document.getElementById('pynext');
	pynext.addEventListener("click", (function () {
		cyclepy(1);
	}));
	var pyprev = document.getElementById('pyprev');
	pyprev.addEventListener("click", (function () {
		cyclepy(-1);
	}));
	
	cyclecpp(0);
	cyclecshp(0);
	cycleweb(0);
	cyclepy(0);

	console.log('loaded buttons');

};

function cyclecshp(num) {
	cppnum = cppnum + num;

	switch (cppnum) {
		case -1:
			cppnum = 0;
			cppoptions.strings = ['Where's Wally'];
			cppimg.innerHTML = '<a href="Cpp.html#ProjectTemplateone"><img alt="c++" src="assets/FindWally.png"></a><p><a href="https://github.com/CallyyllaC/x">Github link</a></p>';
			cppimg = document.getElementById('cppimg');
			break;
		case 0:
			cppoptions.strings = ['Where's Wally'];
			cppimg.innerHTML = '<a href="Cpp.html#ProjectTemplateone"><img alt="c++" src="assets/FindWally.png"></a><p><a href="https://github.com/CallyyllaC/x">Github link</a></p>';
			cppimg = document.getElementById('cppimg');
			break;
		case 1:
			cppnum = 0;
			cppoptions.strings = ['Where's Wally'];
			cppimg.innerHTML = '<a href="Cpp.html#ProjectTemplateone"><img alt="c++" src="assets/FindWally.png"></a><p><a href="https://github.com/CallyyllaC/x">Github link</a></p>';
			cppimg = document.getElementById('cppimg');
			break;
		default:
			cppnum = 0;
			break;
	}
	CppTypeUpdate();
}
function cyclecshp(num) {
	cshpnum = cshpnum + num;

	switch (cshpnum) {
		case -1:
			cshpnum = 5;
			cshpoptions.strings = ['KF2 Map Name Gen'];
			cshpimg.innerHTML = '<a href="Cshp.html#ProjectTemplatesix"><img alt="KF2 Map Name Gen" src="assets/kf2.png"></a><p><a href="https://github.com/CallyyllaC/KF2MapNameGen">Github link</a></p>';
			cshpimg = document.getElementById('cshpimg');
			break;
		case 0:
			cshpoptions.strings = ['Mastermind'];
			cshpimg.innerHTML = '<a href="Cshp.html#ProjectTemplate"><img alt="Mastermind" src="assets/Console.png"></a><p><a href="https://github.com/CallyyllaC/C-Sharp-Mastermind">Github link</a></p>';
			cshpimg = document.getElementById('cshpimg');
			break;
		case 1:
			cshpoptions.strings = ['Discord Bot'];
			cshpimg.innerHTML = '<a href="Cshp.html#ProjectTemplatetwo"><img alt="Mastermind" src="assets/Discord.png"></a><p><a href="https://github.com/CallyyllaC/PersonalDiscordBot">Github link</a></p>';
			cshpimg = document.getElementById('cshpimg');
			break;
		case 2:
			cshpoptions.strings = ['Rich Presence Changer'];
			cshpimg.innerHTML = '<a href="Cshp.html#ProjectTemplatethree"><img alt="Mastermind" src="assets/Discord.png"></a><p><a href="https://github.com/CallyyllaC/RichPresenceMoodSwitcher">Github link</a></p>';
			cshpimg = document.getElementById('cshpimg');
			break;
		case 3:
			cshpoptions.strings = ['App Launcher'];
			cshpimg.innerHTML = '<a href="Cshp.html#ProjectTemplatefour"><img alt="App Launcher" src="assets/Console.png"></a><p><a href="https://github.com/CallyyllaC/ApplicationLauncher">Github link</a></p>';
			cshpimg = document.getElementById('cshpimg');
			break;
		case 4:
			cshpoptions.strings = ['KF2 Tool'];
			cshpimg.innerHTML = '<a href="Cshp.html#ProjectTemplatefive"><img alt="KF2 Tool" src="assets/kf2.png"></a><p><a href="https://github.com/CallyyllaC/KF2Tool">Github link</a></p>';
			cshpimg = document.getElementById('cshpimg');
			break;
		case 5:
			cshpoptions.strings = ['KF2 Map Name Gen'];
			cshpimg.innerHTML = '<a href="Cshp.html#ProjectTemplatesix"><img alt="KF2 Map Name Gen" src="assets/kf2.png"></a><p><a href="https://github.com/CallyyllaC/KF2MapNameGen">Github link</a></p>';
			cshpimg = document.getElementById('cshpimg');
			break;
		case 6:
			cshpnum = 0;
			cshpoptions.strings = ['Mastermind'];
			cshpimg.innerHTML = '<a href="Cshp.html#ProjectTemplate"><img alt="Mastermind" src="assets/Console.png"></a><p><a href="https://github.com/CallyyllaC/C-Sharp-Mastermind">Github link</a></p>';
			cshpimg = document.getElementById('cshpimg');
			break;
		default:
			cshpnum = 0;
			break;
	}
	CshpTypeUpdate();
}

function cycleweb(num) {
	webnum = webnum + num;

	switch (webnum) {
		case -1:
			webnum = 1;
			weboptions.strings = ['PHP-Website'];
			webimg.innerHTML = '<a href="Web.html#ProjectTemplatetwo"><img id="webimg" alt="PHP-Website" src="assets/internet.png"></a><p><a href="https://github.com/CallyyllaC/PHP-Website">Github link</a></p>';
			webimg = document.getElementById('webimg');
			break;
		case 0:
			weboptions.strings = ['Mobile App'];
			webimg.innerHTML = '<a href="Web.html#ProjectTemplate"><img id="webimg" alt="MobileApp" src="assets/ffos.png"></a><p><a href="https://github.com/CallyyllaC/MobileApp">Github link</a></p>';
			webimg = document.getElementById('webimg');
			break;
		case 1:
			weboptions.strings = ['Wallpaper'];
			webimg.innerHTML = '<a href="Web.html#ProjectTemplatethree"><img id="webimg" alt="Wallpaper" src="assets/internet.png"></a><p><a href="https://github.com/CallyyllaC/CustomWallpaper">Github link</a></p>';
			webimg = document.getElementById('webimg');
			break;
		case 2:
			weboptions.strings = ['PHP-Website'];
			webimg.innerHTML = '<a href="Web.html#ProjectTemplatetwo"><img id="webimg" alt="PHP-Website" src="assets/internet.png"></a><p><a href="https://github.com/CallyyllaC/PHP-Website">Github link</a></p>';
			webimg = document.getElementById('webimg');
			break;
		case 3:
			webnum = 0;
			weboptions.strings = ['Mobile App'];
			webimg.innerHTML = '<a href="Web.html#ProjectTemplate"><img id="webimg" alt="MobileApp" src="assets/ffos.png"></a><p><a href="https://github.com/CallyyllaC/MobileApp">Github link</a></p>';
			webimg = document.getElementById('webimg');
			break;
		default:
			webnum = 0;
			break;
	}
	WebTypeUpdate();
}

function cyclepy(num) {
	pynum = pynum + num;

	switch (pynum) {
		case -1:
			pynum = 1;
			pyoptions.strings = ['Turtle Interface'];
			pyimg.innerHTML = '<a href="Python.html#ProjectTemplatetwo"><img id="pyimg" alt="Turtle Interface" src="assets/Console.png"></a><p><a href="https://github.com/CallyyllaC/TurtleInterface">Github link</a></p>';
			pyimg = document.getElementById('pyimg');
			break;
		case 0:
			pyoptions.strings = ['Maths Game'];
			pyimg.innerHTML = '<a href="Python.html#ProjectTemplate"><img id="pyimg" alt="Maths Game" src="assets/Console.png"></a><p><a href="https://github.com/CallyyllaC/Maths-Game">Github link</a></p>';
			pyimg = document.getElementById('pyimg');
			break;
		case 1:
			pyoptions.strings = ['Turtle Interface'];
			pyimg.innerHTML = '<a href="Python.html#ProjectTemplatetwo"><img id="pyimg" alt="Turtle Interface" src="assets/Console.png"></a><p><a href="https://github.com/CallyyllaC/TurtleInterface">Github link</a></p>';
			pyimg = document.getElementById('pyimg');
			break;
		case 2:
			pynum = 0;
			pyoptions.strings = ['Maths Game'];
			pyimg.innerHTML = '<a href="Python.html#ProjectTemplate"><img id="pyimg" alt="Maths Game" src="assets/Console.png"></a><p><a href="https://github.com/CallyyllaC/Maths-Game">Github link</a></p>';
			pyimg = document.getElementById('pyimg');
			break;
	}
	PyTypeUpdate();
}

function CshpTypeUpdate() {
	var reget = document.getElementById('cshptitle');
	reget.outerHTML = '<p id="cshptitle"></p>';
	Cshptyped = new Typed('#cshptitle',cshpoptions);
	console.log('Changed C# Title');
}

function CppTypeUpdate() {
	var reget = document.getElementById('cpptitle');
	reget.outerHTML = '<p id="cpptitle"></p>';
	Cshptyped = new Typed('#cpptitle',cppoptions);
	console.log('Changed Cpp Title');
}

function WebTypeUpdate() {
	var reget = document.getElementById('webtitle');
	reget.outerHTML = '<p id="webtitle"></p>';
	Webtyped = new Typed('#webtitle',weboptions);
	console.log('Changed C# Title');
}

function PyTypeUpdate() {
	var reget = document.getElementById('pytitle');
	reget.outerHTML = '<p id="pytitle"></p>';
	Pytyped = new Typed('#pytitle',pyoptions);
	console.log('Changed C# Title');
}



	
=======
// JavaScript Document
var cshpnum = 0, cppnum = 0, webnum = 0, pynum = 0;
var cppimg, cshpimg, webimg, pyimg;

var Cshptyped;
var Cpptyped;
var Webtyped;
var Pytyped;

var pyoptions = {
		strings: ["Undefined"],
		startDelay: 300,
		typeSpeed: 50,
		loop: false
	};
var weboptions = {
		strings: ["Undefined"],
		startDelay: 300,
		typeSpeed: 50,
		loop: false
	};
var cshpoptions = {
		strings: ["Undefined"],
		startDelay: 300,
		typeSpeed: 50,
		loop: false
	};
var cppoptions = {
		strings: ["Undefined"],
		startDelay: 300,
		typeSpeed: 50,
		loop: false
	};

window.onload = function () {

	cshpimg = document.getElementById('cshpimg');
	var cshpnext = document.getElementById('cshpnext');
	cshpnext.addEventListener("click", (function () {
		console.log("clicked next");
		cyclecshp(1);
	}));
	var cshpprev = document.getElementById('cshpprev');
	cshpprev.addEventListener("click", (function () {
		console.log("clicked prev");
		cyclecshp(-1);
	}));
	
	cppimg = document.getElementById('cppimg');
	var cppnext = document.getElementById('cppnext');
	cppnext.addEventListener("click", (function () {
		console.log("clicked next");
		cyclecpp(1);
	}));
	var cppprev = document.getElementById('cppprev');
	cppprev.addEventListener("click", (function () {
		console.log("clicked prev");
		cyclecpp(-1);
	}));

	webimg = document.getElementById('webimg');
	var webnext = document.getElementById('webnext');
	webnext.addEventListener("click", (function () {
		cycleweb(1);
	}));
	var webprev = document.getElementById('webprev');
	webprev.addEventListener("click", (function () {
		cycleweb(-1);
	}));

	pyimg = document.getElementById('pyimg');
	var pynext = document.getElementById('pynext');
	pynext.addEventListener("click", (function () {
		cyclepy(1);
	}));
	var pyprev = document.getElementById('pyprev');
	pyprev.addEventListener("click", (function () {
		cyclepy(-1);
	}));
	
	cyclecpp(0);
	cyclecshp(0);
	cycleweb(0);
	cyclepy(0);

	console.log('loaded buttons');

};

function cyclecshp(num) {
	cppnum = cppnum + num;

	switch (cppnum) {
		case -1:
			cppnum = 0;
			cppoptions.strings = ['Where's Wally'];
			cppimg.innerHTML = '<a href="Cpp.html#ProjectTemplateone"><img alt="c++" src="assets/FindWally.png"></a><p><a href="https://github.com/CallyyllaC/x">Github link</a></p>';
			cppimg = document.getElementById('cppimg');
			break;
		case 0:
			cppoptions.strings = ['Where's Wally'];
			cppimg.innerHTML = '<a href="Cpp.html#ProjectTemplateone"><img alt="c++" src="assets/FindWally.png"></a><p><a href="https://github.com/CallyyllaC/x">Github link</a></p>';
			cppimg = document.getElementById('cppimg');
			break;
		case 1:
			cppnum = 0;
			cppoptions.strings = ['Where's Wally'];
			cppimg.innerHTML = '<a href="Cpp.html#ProjectTemplateone"><img alt="c++" src="assets/FindWally.png"></a><p><a href="https://github.com/CallyyllaC/x">Github link</a></p>';
			cppimg = document.getElementById('cppimg');
			break;
		default:
			cppnum = 0;
			break;
	}
	CppTypeUpdate();
}
function cyclecshp(num) {
	cshpnum = cshpnum + num;

	switch (cshpnum) {
		case -1:
			cshpnum = 5;
			cshpoptions.strings = ['KF2 Map Name Gen'];
			cshpimg.innerHTML = '<a href="Cshp.html#ProjectTemplatesix"><img alt="KF2 Map Name Gen" src="assets/kf2.png"></a><p><a href="https://github.com/CallyyllaC/KF2MapNameGen">Github link</a></p>';
			cshpimg = document.getElementById('cshpimg');
			break;
		case 0:
			cshpoptions.strings = ['Mastermind'];
			cshpimg.innerHTML = '<a href="Cshp.html#ProjectTemplate"><img alt="Mastermind" src="assets/Console.png"></a><p><a href="https://github.com/CallyyllaC/C-Sharp-Mastermind">Github link</a></p>';
			cshpimg = document.getElementById('cshpimg');
			break;
		case 1:
			cshpoptions.strings = ['Discord Bot'];
			cshpimg.innerHTML = '<a href="Cshp.html#ProjectTemplatetwo"><img alt="Mastermind" src="assets/Discord.png"></a><p><a href="https://github.com/CallyyllaC/PersonalDiscordBot">Github link</a></p>';
			cshpimg = document.getElementById('cshpimg');
			break;
		case 2:
			cshpoptions.strings = ['Rich Presence Changer'];
			cshpimg.innerHTML = '<a href="Cshp.html#ProjectTemplatethree"><img alt="Mastermind" src="assets/Discord.png"></a><p><a href="https://github.com/CallyyllaC/RichPresenceMoodSwitcher">Github link</a></p>';
			cshpimg = document.getElementById('cshpimg');
			break;
		case 3:
			cshpoptions.strings = ['App Launcher'];
			cshpimg.innerHTML = '<a href="Cshp.html#ProjectTemplatefour"><img alt="App Launcher" src="assets/Console.png"></a><p><a href="https://github.com/CallyyllaC/ApplicationLauncher">Github link</a></p>';
			cshpimg = document.getElementById('cshpimg');
			break;
		case 4:
			cshpoptions.strings = ['KF2 Tool'];
			cshpimg.innerHTML = '<a href="Cshp.html#ProjectTemplatefive"><img alt="KF2 Tool" src="assets/kf2.png"></a><p><a href="https://github.com/CallyyllaC/KF2Tool">Github link</a></p>';
			cshpimg = document.getElementById('cshpimg');
			break;
		case 5:
			cshpoptions.strings = ['KF2 Map Name Gen'];
			cshpimg.innerHTML = '<a href="Cshp.html#ProjectTemplatesix"><img alt="KF2 Map Name Gen" src="assets/kf2.png"></a><p><a href="https://github.com/CallyyllaC/KF2MapNameGen">Github link</a></p>';
			cshpimg = document.getElementById('cshpimg');
			break;
		case 6:
			cshpnum = 0;
			cshpoptions.strings = ['Mastermind'];
			cshpimg.innerHTML = '<a href="Cshp.html#ProjectTemplate"><img alt="Mastermind" src="assets/Console.png"></a><p><a href="https://github.com/CallyyllaC/C-Sharp-Mastermind">Github link</a></p>';
			cshpimg = document.getElementById('cshpimg');
			break;
		default:
			cshpnum = 0;
			break;
	}
	CshpTypeUpdate();
}

function cycleweb(num) {
	webnum = webnum + num;

	switch (webnum) {
		case -1:
			webnum = 1;
			weboptions.strings = ['PHP-Website'];
			webimg.innerHTML = '<a href="Web.html#ProjectTemplatetwo"><img id="webimg" alt="PHP-Website" src="assets/internet.png"></a><p><a href="https://github.com/CallyyllaC/PHP-Website">Github link</a></p>';
			webimg = document.getElementById('webimg');
			break;
		case 0:
			weboptions.strings = ['Mobile App'];
			webimg.innerHTML = '<a href="Web.html#ProjectTemplate"><img id="webimg" alt="MobileApp" src="assets/ffos.png"></a><p><a href="https://github.com/CallyyllaC/MobileApp">Github link</a></p>';
			webimg = document.getElementById('webimg');
			break;
		case 1:
			weboptions.strings = ['Wallpaper'];
			webimg.innerHTML = '<a href="Web.html#ProjectTemplatethree"><img id="webimg" alt="Wallpaper" src="assets/internet.png"></a><p><a href="https://github.com/CallyyllaC/CustomWallpaper">Github link</a></p>';
			webimg = document.getElementById('webimg');
			break;
		case 2:
			weboptions.strings = ['PHP-Website'];
			webimg.innerHTML = '<a href="Web.html#ProjectTemplatetwo"><img id="webimg" alt="PHP-Website" src="assets/internet.png"></a><p><a href="https://github.com/CallyyllaC/PHP-Website">Github link</a></p>';
			webimg = document.getElementById('webimg');
			break;
		case 3:
			webnum = 0;
			weboptions.strings = ['Mobile App'];
			webimg.innerHTML = '<a href="Web.html#ProjectTemplate"><img id="webimg" alt="MobileApp" src="assets/ffos.png"></a><p><a href="https://github.com/CallyyllaC/MobileApp">Github link</a></p>';
			webimg = document.getElementById('webimg');
			break;
		default:
			webnum = 0;
			break;
	}
	WebTypeUpdate();
}

function cyclepy(num) {
	pynum = pynum + num;

	switch (pynum) {
		case -1:
			pynum = 1;
			pyoptions.strings = ['Turtle Interface'];
			pyimg.innerHTML = '<a href="Python.html#ProjectTemplatetwo"><img id="pyimg" alt="Turtle Interface" src="assets/Console.png"></a><p><a href="https://github.com/CallyyllaC/TurtleInterface">Github link</a></p>';
			pyimg = document.getElementById('pyimg');
			break;
		case 0:
			pyoptions.strings = ['Maths Game'];
			pyimg.innerHTML = '<a href="Python.html#ProjectTemplate"><img id="pyimg" alt="Maths Game" src="assets/Console.png"></a><p><a href="https://github.com/CallyyllaC/Maths-Game">Github link</a></p>';
			pyimg = document.getElementById('pyimg');
			break;
		case 1:
			pyoptions.strings = ['Turtle Interface'];
			pyimg.innerHTML = '<a href="Python.html#ProjectTemplatetwo"><img id="pyimg" alt="Turtle Interface" src="assets/Console.png"></a><p><a href="https://github.com/CallyyllaC/TurtleInterface">Github link</a></p>';
			pyimg = document.getElementById('pyimg');
			break;
		case 2:
			pynum = 0;
			pyoptions.strings = ['Maths Game'];
			pyimg.innerHTML = '<a href="Python.html#ProjectTemplate"><img id="pyimg" alt="Maths Game" src="assets/Console.png"></a><p><a href="https://github.com/CallyyllaC/Maths-Game">Github link</a></p>';
			pyimg = document.getElementById('pyimg');
			break;
	}
	PyTypeUpdate();
}

function CshpTypeUpdate() {
	var reget = document.getElementById('cshptitle');
	reget.outerHTML = '<p id="cshptitle"></p>';
	Cshptyped = new Typed('#cshptitle',cshpoptions);
	console.log('Changed C# Title');
}

function CppTypeUpdate() {
	var reget = document.getElementById('cpptitle');
	reget.outerHTML = '<p id="cpptitle"></p>';
	Cshptyped = new Typed('#cpptitle',cppoptions);
	console.log('Changed Cpp Title');
}

function WebTypeUpdate() {
	var reget = document.getElementById('webtitle');
	reget.outerHTML = '<p id="webtitle"></p>';
	Webtyped = new Typed('#webtitle',weboptions);
	console.log('Changed C# Title');
}

function PyTypeUpdate() {
	var reget = document.getElementById('pytitle');
	reget.outerHTML = '<p id="pytitle"></p>';
	Pytyped = new Typed('#pytitle',pyoptions);
	console.log('Changed C# Title');
}



	
>>>>>>> d9710a3953f5a0f30c71697dcf9b1bad3c01ed78
