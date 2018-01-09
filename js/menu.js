// JavaScript Document
$(document).ready(function () {
	//hide the menu on load
	$("#menuholder").hide();

	//wait for user to move their mouse
	document.addEventListener("mousemove", (function (e) {
		
		if (window.innerWidth > 599) { 
		//if the mouse is on the far left open the menu
		if (e.pageX < 50) {
			$("#menuholder").show(1000);
			console.log("Menu Opened");
		}
		}
		//if the mouse leaves the menu, hide it again
		$("#menuholder").mouseleave(function () {
			if (window.innerWidth > 599) { 
			$("#menuholder").hide(500);
			}
		});
	}));
	
	//add event listener for menu button (disolays only on mobile)
	var button = document.getElementById("menubutton");
	button.addEventListener("click", (function () {
		$("#menuholder").toggle(500);
	}));
	
});
