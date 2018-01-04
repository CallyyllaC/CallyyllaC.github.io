// JavaScript Document

window.onload = function () {

var overview = new Waypoint.Inview({
  element: $('#overview')[0],
  enter: function() {
	  $('#overview').animate({'opacity': 1}, 1500);
  },
  exited: function() {
	  $('#overview').animate({'opacity': 0.3}, 500);
  },
	offset: 'bottom-in-view'
});

var about = new Waypoint.Inview({
  element: $('#about')[0],
  enter: function() {
	  $('#about').animate({'opacity': 1}, 1500);
  },
  exited: function() {
	  $('#about').animate({'opacity': 0.3}, 500);
  },
	offset: 'bottom-in-view'
});

var contact = new Waypoint.Inview({
  element: $('#contact')[0],
  enter: function() {
	  $('#contact').animate({'opacity': 1}, 1500);
  },
  exited: function() {
	  $('#contact').animate({'opacity': 0.3}, 500);
  },
	offset: 'bottom-in-view'
});

console.log('loaded waypoints');

};