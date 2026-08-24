/*
*   Author: beshleyua
*   Author URL: http://themeforest.net/user/beshleyua
*/


/*
	Preloader
*/

$(window).on("load", function() {
	var preload = $('.preloader');
	preload.find('.spinner').fadeOut(function(){
		preload.fadeOut();
	});
});

$(function () {
	'use strict';
	
	
	/*
		Vars
	*/
	
	var width = $(window).width();
	var height = $(window).height();
	
	
	var container = $('.container');

	$(window).on('resize', function(){
		var width = $(window).width();
		var height = $(window).height();

		if((width < 1200)) {
			$('.card-inner').removeClass('hidden');
			$('.card-inner').removeClass('fadeOutLeft');
			$('.card-inner').removeClass('rotateOutUpLeft');
			$('.card-inner').removeClass('rollOut');
			$('.card-inner').removeClass('jackOutTheBox');
			$('.card-inner').removeClass('fadeOut');
			$('.card-inner').removeClass('fadeOutUp');
			$('.card-inner').removeClass('animated');

			$('.card-inner .card-wrap').slimScroll({destroy: true});
			$('.card-inner .card-wrap').attr('style', '');
		}
		else {
			$($('.top-menu li.active a').attr('href')).addClass('active');
			if((!$('.page').hasClass('new-skin')) && (width > 1024)) {
				$('.card-inner .card-wrap').slimScroll({
					height: '570px'
				});
			}
		}
	});
	
	
	/*
		slimScroll
	*/
	
	if((!$('.page').hasClass('new-skin')) && (width > 1024)) {
		$('.card-inner .card-wrap').slimScroll({
			height: '570px'
		});
	}
	
	
	/*
		Gallery popup
	*/
	if(/\.(?:jpg|jpeg|gif|png)$/i.test($('.gallery-item:first a').attr('href'))){
		$('.gallery-item a').magnificPopup({
			gallery: {
				enabled: true
			},
			type: 'image',
			closeBtnInside: false,
			mainClass: 'mfp-fade'
		});
	}


	/*
		Media popup
	*/
	$('.has-popup-media').magnificPopup({
		type: 'inline',
		overflowY: 'auto',
		closeBtnInside: true,
		mainClass: 'mfp-fade popup-box-inline'
	});


	/*
		Image popup
	*/
	$('.has-popup-image').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-fade',
		image: {
			verticalFit: true
		}
	});

	
	/*
		Video popup
	*/
	$('.has-popup-video').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		iframe: {
			patterns: {
				youtube_short: {
				  index: 'youtu.be/',
				  id: 'youtu.be/',
				  src: 'https://www.youtube.com/embed/%id%?autoplay=1'
				}
			}
		},
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
		mainClass: 'mfp-fade',
		callbacks: {
			markupParse: function(template, values, item) {
				template.find('iframe').attr('allow', 'autoplay');
			}
		}
	});

	
	/*
		Music popup
	*/
	$('.has-popup-music').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
		mainClass: 'mfp-fade'
	});


	/*
		Gallery popup
	*/
	$('.has-popup-gallery').on('click', function() {
		var gallery = $(this).attr('href');
	
		$(gallery).magnificPopup({
			delegate: 'a',
			type:'image',
			closeOnContentClick: false,
			mainClass: 'mfp-fade',
			removalDelay: 160,
			fixedContentPos: false,
			gallery: {
				enabled: true
			}
		}).magnificPopup('open');

		return false;
	});
	
	
	/*
		Validate Contact Form
	*/
	
	$("#cform").validate({
		ignore: ".ignore",
		rules: {
			name: {
				required: true
			},
			message: {
				required: true
			},
			email: {
				required: true,
				email: true
			},
			hiddenRecaptcha: {
				required: function () {
					if (grecaptcha.getResponse() == '') {
						return true;
					} else {
						return false;
					}
				}
			}
		},
		success: "valid",
		submitHandler: function() {
			$.ajax({
				url: 'mailer/feedback.php',
				type: 'post',
				dataType: 'json',
				data: 'name='+ $("#cform").find('input[name="name"]').val() + '&email='+ $("#cform").find('input[name="email"]').val() + '&message=' + $("#cform").find('textarea[name="message"]').val(),
				beforeSend: function() {
				
				},
				complete: function() {
				
				},
				success: function(data) {
					$('#cform').fadeOut();
					$('.alert-success').delay(1000).fadeIn();
				}
			});
		}
	});
	
	
	/*
		Validate Commect Form
	*/
	
	$("#comment_form").validate({
		rules: {
			name: {
				required: true
			},
			message: {
				required: true
			}
		},
		success: "valid",
		submitHandler: function() {
		}
	});
	
	
	/*
		Google Maps
	*/
	
	if($('#map').length) {
		initMap();
	}


	/*
		Tesimonials Carousel
	*/
	var revs_slider = $(".revs-carousel.default-revs .owl-carousel");

	revs_slider.owlCarousel({
		margin: 0,
		items: 1,
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		loop: true,
		rewind: false,
		nav: false,
		dots: true
	});

	var rtl_revs_slider = $(".revs-carousel.rtl-revs .owl-carousel");

	rtl_revs_slider.owlCarousel({
		margin: 0,
		items: 1,
		rtl: true,
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		loop: true,
		rewind: false,
		nav: false,
		dots: true
	});


	/*
		New JS
	*/

	$(window).on('resize', function(){
		/*
			Dotted Skills Line On Resize Window
		*/

		var skills_dotted = $('.skills-list.dotted .progress');
		var skills_dotted_w = skills_dotted.width();
		if(skills_dotted.length){
			skills_dotted.find('.percentage .da').css({'width':skills_dotted_w+1});
		}

		/*
			Testimonials Carousel On Resize Window
		*/

		var revs_slider = $(".revs-carousel .owl-carousel");
		revs_slider.find('.revs-item').css({'max-width':revs_slider.width()});
	});

	/*
		Dotted Skills Line
	*/

	function skills(){
		var skills_dotted = $('.skills-list.dotted .progress');
		var skills_dotted_w = skills_dotted.width();
		if(skills_dotted.length){
			skills_dotted.append('<span class="dg"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>');
			skills_dotted.find('.percentage').append('<span class="da"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>');
			skills_dotted.find('.percentage .da').css({'width':skills_dotted_w});
		}
	}
	setTimeout(skills, 1000);

	/*
		Circle Skills Line
	*/

	var skills_circles = $('.skills-list.circles .progress');
	if(skills_circles.length){
		skills_circles.append('<div class="slice"><div class="bar"></div><div class="fill"></div></div>');
	}

	/*
		Wrap First Title Word
	*/

	$('.content .title').each(function(index) {
	    var title = $(this).text().split(' ');
	    if(title.length>1){
		    var firstWord = title[0];
		    var replaceWord = '<span class="first-word">' + firstWord + '</span>';
		    var newString = $(this).html().replace(firstWord, replaceWord);
		    $(this).html(newString);
		} else {
			$(this).html('<div class="first-letter">'+ $(this).html() + '</div>');
		}
	});

});


/*
	Google Map Options
*/

function initMap() {
	var myLatlng = new google.maps.LatLng(40.773328,-73.960088); // <- Your latitude and longitude
	var styles = [
	{
		"featureType": "water",
		"stylers": [{
			"color": "#d8dee9"
		},
		{
			"visibility": "on"
		}]
	},
	{
		"featureType": "landscape",
		"stylers": [{
			"color": "#eeeeee"
		}]
	}]

	var mapOptions = {
		zoom: 14,
		center: myLatlng,
		mapTypeControl: false,
		disableDefaultUI: true,
		zoomControl: true,
		scrollwheel: false,
		styles: styles
	}
	
	var map = new google.maps.Map(document.getElementById('map'), mapOptions);
	var marker = new google.maps.Marker({
		position: myLatlng,
		map: map,
		title: 'We are here!'
	});
}
