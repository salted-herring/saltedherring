/*
 * Miscellaneous Global Functions.
 * -------------------------------
 * This file gets pulled in to each
 * page type. Place any globally required
 * functionality here.
 */


define(['jquery', 'backbone', 'router', 'workrouter'], function($, Backbone, Router, WorkRouter) {
	
	$(function() {
		
		//
		// Show / hide the mobile menu.
		//
		$('#menu_icon').click(function(e) {
			e.preventDefault();
			$(this).toggleClass('collapse expand');
			$('#main_nav').toggleClass('collapse expand');
		});
		
	});
	
	$(document).on('click', '#main_nav a, #logo a', function() {
		$('#main_nav a, #logo a').removeClass('current');
		$(this).addClass('current');
	});
	
	$(document).on("click", "a:not([target='_blank']):not([href*='#'])", function(e){
		e.preventDefault();
		
		Router.navigate($(this).attr('href'), {trigger: true});
	});
	
	$(document).on("mousemove", "#teammember .images.loaded", function(e) {
		var count = $(this).find('img').length,
			_width = 50,
			pos = e.clientX;
		
		$(this).find('img').removeClass('current');
		$(this).find('img').eq(Math.ceil(pos / _width) % count).addClass('current');
	});
	
	
	$(function() {
		$(window).scroll(function() {
			if($(window).scrollTop() + $(window).height() >= $(document).height()) {
				$('footer .salt').addClass('animate');
			} else {
				$('footer .salt').removeClass('animate');
			}
			
			if($('header.overlay:not(.no-images)').length > 0) {
				/* ===========================
				 * Animation for overlay as seen
				 * on work & team.
				 * =========================== */
				var headerHeight = $('header.overlay').outerHeight(true);
						
				if($(window).scrollTop() < (headerHeight)) {
					$('.detailscontainer').removeAttr('style');
					$('.detailscontainer, footer').addClass('fixedcontainer');
					$('.overlay').removeClass('fixedoverlay');
					
					$('.detailscontainer').parent().height($('.detailscontainer').height());
				} else {
					$('.overlay').addClass('fixedoverlay');
					if($('.detailscontainer').is('.fixedcontainer')) {
						$('.detailscontainer').css('margin-top', headerHeight + 60);
					}
					
					$('.detailscontainer, footer').removeClass('fixedcontainer');
					$('#content').removeAttr('style');
				}
			} else {
				$('.detailscontainer, footer').removeClass('fixedcontainer');
				$('#content').removeAttr('style');
				
				/* ===========================
				 * Animation for banner as seen on
				 * work & team landing pages.
				 * =========================== */
				
				if($('#banner').length > 0) {
					if($(window).scrollTop() > 100) {
						$('#banner').addClass('small');
					} else {
						$('#banner').removeClass('small');
					}
				}
			}
			
			
			
			
			// lock next/prev project navigation on last image.
			/*
if() {
				
			}
*/
		}).scroll();
	});
});