// JavaScript Document

//on page load
window.onload = function () {

//add fade to sections when the are in and out of the screen

var overview = new Waypoint.Inview({
  element: $('#overview')[0],
  enter: function() {
	  //remove tranparancy
	  $('#overview').animate({'opacity': 1}, 1500);
  },
  exited: function() {
	  //add tranparancy
	  $('#overview').animate({'opacity': 0.3}, 500);
  },
	offset: 'bottom-in-view'
});

var about = new Waypoint.Inview({
  element: $('#about')[0],
  enter: function() {
	  //remove tranparancy
	  $('#about').animate({'opacity': 1}, 1500);
  },
  exited: function() {
	  //add tranparancy
	  $('#about').animate({'opacity': 0.3}, 500);
  },
	offset: 'bottom-in-view'
});

var contact = new Waypoint.Inview({
  element: $('#contact')[0],
  enter: function() {
	  //remove tranparancy
	  $('#contact').animate({'opacity': 1}, 1500);
  },
  exited: function() {
	  //add tranparancy
	  $('#contact').animate({'opacity': 0.3}, 500);
  },
	offset: 'bottom-in-view'
});

console.log('loaded waypoints');

};