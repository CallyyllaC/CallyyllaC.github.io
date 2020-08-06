// JavaScript Document
//declare variables
var temp = 0,
	temp2 = 0,
	temp3 = 0;

//on page load
window.onload = function () {

//Add event listeners for the buttons
//First Section
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
//Second Section
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
//Third Section
	var TemplateThreeNext = document.getElementById("ProjectTemplatethreenext");
	TemplateThreeNext.addEventListener("click", (function () {
		console.log("clicked next");
		Templatethree(1);
	}));
	var TemplateThreePrev = document.getElementById("ProjectTemplatethreeprev");
	TemplateThreePrev.addEventListener("click", (function () {
		console.log("clicked prev");
		Templatethree(-1);
	}));

//first run each section
	Templatethree(0);
	Templatetwo(0);
	Template(0);
};


function Template(num) {
//look at if it is going to the next or back one
	temp = temp + num;
//get variables
	var info = document.getElementById("ProjectTemplateinfo");
	var code = document.getElementById("ProjectTemplatecode");
//insert html replacing previous on button press relating to if the button is going forward or back
	switch (temp) {
		case 0:
			info.innerHTML = '<h2>PHP Website</h2><p>This project is an assignment I did back at college when learning  about client and server scripting.</p>';
			code.innerHTML = '';
			//remove button
			$("#ProjectTemplateprev").fadeOut(500);

			break;
		case 1:
			info.innerHTML = '<h2>PHP Website</h2><p>This project includes:</p><ul><li><strong>PHP</strong></li><li>HTML</li><li>CSS</li><li>JavaScript</li><li>SQL Databases</li></ul><p>This does not include the SQL databases used as I do not have access to these old files</p>';
			code.innerHTML = '&lt;?php\n$filename = "Page 1.txt";\n$file = fopen($filename, "r+");\n$count = fread($file, filesize($filename));\nrewind($file);\nfwrite($file,$count+1);\nfclose($file);\n?>';
			//add button
			$("#ProjectTemplateprev").fadeIn(500);
			break;
		case 2:
			info.innerHTML = '<h2>PHP Website</h2><p>This project includes:</p><ul><li>PHP</li><li><strong>HTML</strong></li><li>CSS</li><li>JavaScript</li><li>SQL Databases</li></ul><p>This does not include the SQL databases used as I do not have access to these old files</p>';
			code.innerHTML = '&lt;!doctype html>\n&lt;html>\n&lt;head>\n&lt;meta charset="utf-8">\n&lt;title\>Homepage&lt;/title>\n&lt;link href="StyleSheet.css" rel="stylesheet" type="text/css">\n&lt;/head>';
			break;
		case 3:
			info.innerHTML = '<h2>PHP Website</h2><p>This project includes:</p><ul><li>PHP</li><li>HTML</li><li><strong>CSS</strong></li><li>JavaScript</li><li>SQL Databases</li></ul><p>This does not include the SQL databases used as I do not have access to these old files</p>';
			code.innerHTML = '.container\n{\n	margin-left:auto;\n	margin-right:auto;\n\	width:900px;\n	height:1600px;\n';
			break;
		case 4:
			info.innerHTML = '<h2>PHP Website</h2><p>This project includes:</p><ul><li>PHP</li><li>HTML</li><li>CSS</li><li><strong>JavaScript</strong></li><li>SQL Databases</li></ul><p>This does not include the SQL databases used as I do not have access to these old files</p>';
			code.innerHTML = 'if(a1>=2 && b1>=2 && document.productForm.Family.checked == false)\n{\ndocument.productForm.Child.value = a1 - 2;\ndocument.productForm.Adult.value = b1 - 2;\na1 = document.productForm.Child.selectedIndex;\nb1 = document.productForm.Adult.selectedIndex;\ndocument.productForm.Family.checked = true;\n}';
			//add button
			$("#ProjectTemplatenext").fadeIn(500);
			break;
		case 5:
			info.innerHTML = '<h2>PHP Website</h2><p>This project includes:</p><ul><li>PHP</li><li>HTML</li><li>CSS</li><li>JavaScript</li><li><strong>SQL Databases</strong></li></ul><p>This does not include the SQL databases used as I do not have access to these old files</p>';
			code.innerHTML = '&lt;?php\n$con = mysql_connect("localhost","db30084293","guest");\nif (!$con)\n{\ndie("Could not connect: " . mysql_error());\n}\nelse\nmysql_select_db("db30084293", $con);\n?>';
			//remove button
			$("#ProjectTemplatenext").fadeOut(500);
			break;
		default:
			break;
	}
}

function Templatetwo(num) {
//look at if it is going to the next or back one
	temp2 = temp2 + num;
//get variables
	var info = document.getElementById("ProjectTemplatetwoinfo");
	var code = document.getElementById("ProjectTemplatetwocode");
//insert html replacing previous on button press relating to if the button is going forward or back
	switch (temp2) {
		case 0:
			info.innerHTML = '<h2>Mobile App</h2><p>This was a personal project to make a small app for use on my phone</p>';
			code.innerHTML = '';
			//add button
			$("#ProjectTemplatetwonext").fadeIn(500);
			//remove button
			$("#ProjectTemplatetwoprev").fadeOut(500);
			break;
		case 1:
			info.innerHTML = '<h2>Mobile App</h2><p>I wanted a clock different from the default so I made this myself to keep on my desk so that I could keep an eye on the time without the horrible default digital clock or straining to look at an analogue clock on a small screen</p>';
			code.innerHTML = 'function startTime(){\nvar today = new Date();\ndocument.getElementById("Time").innerHTML = today.getHours() + ":" + checkTime(today.getMinutes()) + ":" + checkTime(today.getSeconds());\nvar t = setTimeout(startTime, 500);\n}\n\nfunction checkTime(i) {\nif (i < 10) {i = "0" + i};\nreturn i;\n}';
			//remove button
			$("#ProjectTemplatetwonext").fadeOut(500);
			//add button
			$("#ProjectTemplatetwoprev").fadeIn(500);
			break;
		default:
			break;
	}
}

function Templatethree(num) {
//look at if it is going to the next or back one
	temp3 = temp3 + num;
//get variables
	var info = document.getElementById("ProjectTemplatethreeinfo");
	var code = document.getElementById("ProjectTemplatethreecode");
//insert html replacing previous on button press relating to if the button is going forward or back
	switch (temp3) {
		case 0:
			info.innerHTML = '<h2>Custom Wallpaper</h2><p>This was a personal project to make a wallpaper for use with Wallpaper Engine</p>';
			code.innerHTML = '';
			//add button
			$("#ProjectTemplatethreenext").fadeIn(500);
			//remove button
			$("#ProjectTemplatethreeprev").fadeOut(500);
			break;
		case 1:
			info.innerHTML = '<h2>Custom Wallpaper</h2><p>I wanted a a wallpaper that i could use to see the date and time easilly and in a font that wasnt boring.</p>';
			code.innerHTML = 'var today = new Date();\ndocument.getElementById("Time").innerHTML = "Time: " + today.getHours() + ":" + checkTime(today.getMinutes()) + ":" + checkTime(today.getSeconds());\ndocument.getElementById("Date").innerHTML = "Date: " + today.getDay() + " " + checkMonth(today.getMonth()) + " " + today.getFullYear();\nvar t = setTimeout(startTime, 500);';
			//remove button
			$("#ProjectTemplatethreenext").fadeOut(500);
			//add button
			$("#ProjectTemplatethreeprev").fadeIn(500);
			break;
		default:
			temp3 = 0;
			break;
	}
}
