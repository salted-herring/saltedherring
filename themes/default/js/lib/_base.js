/*
 * Miscellaneous Global Functions.
 * -------------------------------
 * This file gets pulled in to each
 * page type. Place any globally required
 * functionality here.
 */


define(['jquery', 'backbone', 'router'], function($, Backbone, Router) {

/* 	console.log(WorkModel); */
	
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
					
				if($(window).scrollTop() < (headerHeight + 78)) {
					$('.detailscontainer').removeAttr('style');
					$('.detailscontainer, footer').addClass('fixedcontainer');
					$('.detailscontainer').parent().height($('.detailscontainer').height());
					
					if($(window).scrollTop() > 157) {
						$('.overlay').addClass('small');
					} else {
						$('.overlay').removeClass('small');
					}
				} else {
					if($('.detailscontainer').is('.fixedcontainer')) {
						$('.detailscontainer').css('margin-top', headerHeight + 135);
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
			
			
			/* ===========================
			 * Hide navigation at bottom 
			 * of the page.
			 * =========================== */
			if($('#projectnav').length > 0) {
				var offset = $('#content').offset().top + $('#content').height() - $('#footer').outerHeight(true) - 1000;
				//console.log($('#content').offset().top + $('#content').height() - $('#footer').outerHeight(true) - 200, $(window).scrollTop());
				if($(window).scrollTop() >= offset) {
					//alert(0 + (400 - $(window).scrollTop()));
					$('#projectnav .next').css({
						right: 0 + ((offset - $(window).scrollTop()) / 10)
					});
					
					$('#projectnav .previous').css({
						left: 0 + ((offset - $(window).scrollTop()) / 10)
					});
				}
			}
		}).scroll();
	});
});