// JavaScript Document
//declare variables
var canvas, colour, button, size, load, save, body, drawingpad, my_context, lastX, lastY;
var mousePressed = false;

//on page load
window.onload = function () {
	init();
};

//Init funct
function init() {
	//log
	console.log("init start");
	console.log("canvas start");

	//canvas
	canvas = document.createElement('canvas');
	canvas.width = window.innerWidth / 2;
	canvas.height = window.innerWidth / 2;
	canvas.id = "canvaselement";
	body = document.getElementById("buttonholder");
	body.appendChild(canvas);
	drawingpad = document.getElementById("canvaselement");
	my_context = drawingpad.getContext("2d");

	//button
	button = document.getElementById("clear");
	colour = document.getElementById("color");
	size = document.getElementById("size");
	save = document.getElementById("save");
	load = document.getElementById("load");

	//log
	console.log("canvas end");
	console.log("listeners start");

	//Event Listeners
	drawingpad.addEventListener("mousedown", (function () {
		mousePressed = true;
		console.log("draw funct called");
	}));

	drawingpad.addEventListener("mouseup", (function () {
		mousePressed = false;
		console.log("draw funct stopped");
	}));

	drawingpad.addEventListener("mouseleave", (function () {
		mousePressed = false;
		console.log("left");
	}));

	drawingpad.addEventListener("mousemove", (function (e) {
		Draw(e.clientX, e.clientY, mousePressed);
		console.log("moving on canvas");
	}));

	drawingpad.addEventListener("click", (function (e) {
		Draw(e.clientX, e.clientY, true);
		console.log("draw");
	}));

	drawingpad.addEventListener("mouseenter", (function (e) {
		lastX = e.clientX - canvas.offsetLeft;
		lastY = e.clientY - canvas.offsetTop;
		console.log("enter");
	}));

	button.addEventListener("click", (function () {
		Clear();
	}));
	
	save.addEventListener("click", (function () {
		Save();
	}));
	
	load.addEventListener("click", (function () {
		Load();
	}));

	colour.addEventListener("click", (function () {
		console.log("colour selected");
	}));

	//add image
	Clear();
	//log
	console.log("listeners end");

	console.log("init end");

}


//Onclick Event
function Draw(x, y, isDown) {
	if (isDown) {
		//check if image is to draw on canvas
		my_context.beginPath();
		my_context.strokeStyle = colour.value;
		my_context.lineWidth = size.value;
		my_context.shadowColor = colour.value;
		my_context.shadowBlur = size.value / 2;
		my_context.lineJoin = "round";
		my_context.moveTo(lastX, lastY);
		my_context.lineTo(x - drawingpad.offsetLeft + window.scrollX, y - drawingpad.offsetTop + window.scrollY);
		my_context.closePath();
		my_context.stroke();
	}
	//must upate lastx and y to use for move to and line to
	lastX = x - canvas.offsetLeft + window.scrollX;
	lastY = y - canvas.offsetTop + window.scrollY;
}

function Save() {
	//log
	console.log("save start");

	//save to local storage
	localStorage.setItem("colour", colour.value);
	localStorage.setItem("size", size.value);
	localStorage.setItem("canvas", canvas.toDataURL());

	//log
	console.log("save end");
}

function Load() {
	//log
	console.log("load start");

	//load from local storage
	colour.value = localStorage.getItem("colour");
	size.value = localStorage.getItem("size");

	//draw image
	var image = new Image();
	image.src = localStorage.getItem("canvas");
	image.onload = function () {
		my_context.drawImage(image, 0, 0, canvas.width, canvas.height);
		console.log("load success");
	};
	
	//log
	console.log("load end");
}

function Clear() {
	//clear
	my_context.clearRect(0, 0, canvas.width, canvas.height);
	//draw image
	var image = new Image();
	image.src = 'assets/Cup.jpg';
	image.onload = function () {
		my_context.drawImage(image, 0, 0, canvas.width, canvas.height);
	};
	//log
	console.log("Cleared");
}
