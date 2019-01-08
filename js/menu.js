// JavaScript Document
$(document).ready(function () {

	//hide the menu on load
	$("#menuholder").hide();

	//wait for user to move their mouse
	document.addEventListener("mousemove", (function (e) {
		
		//if the mouse is on the far left open the menu
		if (e.pageX < 50) {
			$("#menuholder").show(1000);
			console.log("Menu Opened");
		}

		//if the mouse leaves the menu, hide it again
		$("#menuholder").mouseleave(function () {
			$("#menuholder").hide(500);
		});
	}));
	
});
