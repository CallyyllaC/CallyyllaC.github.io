// JavaScript Document
var temp = 0,
	temp2 = 0;


window.onload = function () {

	var TemplateNext = document.getElementById("ProjectTemplatenext");
	TemplateNext.addEventListener("click", (function () {
		console.log("clicked next");
		Template(1);
	}));
	var TemplatePrev = document.getElementById("ProjectTemplateprev");
	TemplatePrev.addEventListener("click", (function () {
		console.log("clicked prev");
		Template(-1);
	}));

	var TemplateTwoNext = document.getElementById("ProjectTemplatetwonext");
	TemplateTwoNext.addEventListener("click", (function () {
		console.log("clicked next");
		Templatetwo(1);
	}));
	var TemplateTwoPrev = document.getElementById("ProjectTemplatetwoprev");
	TemplateTwoPrev.addEventListener("click", (function () {
		console.log("clicked prev");
		Templatetwo(-1);
	}));


	Templatetwo(0);
	Template(0);
};


function Template(num) {

	temp = temp + num;

	var info = document.getElementById("ProjectTemplateinfo");
	var code = document.getElementById("ProjectTemplatecode");

	switch (temp) {
		case 0:
			info.innerHTML = '<h2>Maths Game</h2><p>This project is an assignment I did back at college when learning about python and procedural programing.</p>';
			code.innerHTML = '';
			$("#ProjectTemplateprev").fadeOut(500);
			break;
		case 1:
			info.innerHTML = '<h2>Maths Game</h2><p>This project includes the following features:</p><ul><li><strong>Importing Libs</strong></li><li>Writing to external files</li><li>reading External Files</li></ul>';
			code.innerHTML = 'import what is needed \nimport random\nimport time\nimport os\nimport datetime';
			$("#ProjectTemplateprev").fadeIn(500);
			break;
		case 2:
			info.innerHTML = '<h2>Maths Game</h2><p>This project includes the following features:</p><ul><li>Importing Libs</li><li><strong>Writing to external files</strong></li><li>reading External Files</li></ul>';
			code.innerHTML = 'line = len(str(name)) #tries to make the highscores look more presentable\nlines = 23 - line\ntotallines = lines * " "\nwith open("highscores.dat","a") as f: #write the highscores file\nf.write(str(Scoretime) + "      " + str(Scorename) + str(totallines) + str(Scorescore) + "\\n")\n#f.write("line: " + str(line) + " lines: " + str(lines) + " totallines: " + str(totallines) + "\\n") #debugging script\nf.close()';
			$("#ProjectTemplatenext").fadeIn(500);
			break;
		case 3:
			info.innerHTML = '<h2>Maths Game</h2><p>This project includes the following features:</p><ul><li>Importing Libs</li><li>Writing to external files</li><li><strong>reading External Files</strong></li></ul>';
			code.innerHTML = 'print("HIGHSCORES")\nwith open("highscores.dat","r") as f: #print highscores from file\nprint(f.read())\nf.close()';
			$("#ProjectTemplatenext").fadeOut(500);
			break;
		default:
			break;
	}
}

function Templatetwo(num) {

	temp2 = temp2 + num;

	var info = document.getElementById("ProjectTemplatetwoinfo");

	switch (temp2) {
		case 0:
			info.innerHTML = '<h2>Turtle Interface</h2><p>Very simple console interface for making pretty shapes in turtle</p>';
			$("#ProjectTemplatetwonext").fadeIn(500);
			$("#ProjectTemplatetwoprev").fadeOut(500);
			break;
		case 1:
			info.style.width = window.innerWidth/2;
			info.style.height = window.innerHeight/2;
			info.innerHTML = '<h2>Turtle Interface</h2><iframe allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" height="100%" src="https://www.youtube.com/embed/JpBZweaw5pM"></iframe>';
			$("#ProjectTemplatetwonext").fadeOut(500);
			$("#ProjectTemplatetwoprev").fadeIn(500);
			break;
		default:
			break;
	}
}
