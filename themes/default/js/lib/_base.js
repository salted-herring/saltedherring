/*
 * Miscellaneous Global Functions.
 * -------------------------------
 * This file gets pulled in to each
 * page type. Place any globally required
 * functionality here.
 */


define(['jquery', 'backbone', 'router'], function($, Backbone, Router) {

	
	/* ===========================
	 * Croxx browser compatible docheight
	 * =========================== */
	window.docHeight = function() {
		var body = document.body,
    		html = document.documentElement;
    	
		return Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
    }

/* 	console.log(WorkModel); */
	
	//$(function() {
		
		//
		// Show / hide the mobile menu.
		//
		$('#menu_icon').click(function(e) {
			e.preventDefault();
			$(this).toggleClass('collapse expand');
			$('#main_nav').toggleClass('collapse expand');
		});
		
	//});
	
	$(document).on('click', '#main_nav a, #logo a', function() {
		$('#main_nav a, #logo a').removeClass('current');
		$(this).addClass('current');
	});
	
	$(document).on("mousemove", "#teammember .images.loaded", function(e) {
		var count = $(this).find('img').length,
			_width = 50,
			pos = e.clientX;
		
		$(this).find('img').removeClass('current');
		$(this).find('img').eq(Math.ceil(pos / _width) % count).addClass('current');
	});
	
	$('#projectnav a').hover(function() {
		$(this).addClass('over');
	}, function() {
		$(this).removeClass('over');
	});
	
	
	$(document).on('mouseover', '#projectnav a', function() {
		$(this).width($(this).outerWidth(true) + Math.max($(this).find('strong').outerWidth(), $(this).find('em').outerWidth()));
	}).on('mouseout', '#projectnav a', function() {
		$(this).removeAttr('style');
	});
	
	
	$(window).scroll(function(e) {
			if($(window).scrollTop() + $(window).height() >= $(document).height()) {
				$('footer .salt').addClass('animate');
			} else {
				$('footer .salt').removeClass('animate');
			}
			
			if($('body:not(.mobile) header.overlay:not(.no-images)').length > 0) {
				/* ===========================
				 * Animation for overlay as seen
				 * on work & team.
				 * =========================== */
				var headerHeight = $('header.overlay').outerHeight(true),
					offset = 30;
				
				if($(window).scrollTop() < (180)) {
					$('.detailscontainer:not(.nofix)').addClass('fixedcontainer');
					$('.detailscontainer:not(.nofix)').css('margin-top', 0).parent().height($('.detailscontainer:not(.nofix)').height());
				} else {
					if($('.detailscontainer:not(.nofix)').is('.fixedcontainer')) {
						$('.detailscontainer:not(.nofix)').css('margin-top', 216);
					}
				
					$('.detailscontainer:not(.nofix)').removeClass('fixedcontainer');
				}
				
				if($(window).scrollTop() > 157) {
					$('.overlay').addClass('small');
				} else {
					$('.overlay').removeClass('small').css('top',0);
				}
			}
			
			/* ===========================
			 * Animation for banner as seen on
			 * work & team landing pages.
			 * =========================== */
			if($('nav#banner').length > 0) {
				if($(window).scrollTop() > 100) {
					$('nav#banner').addClass('small');
				} else {
					$('nav#banner').removeClass('small');
				}
			}
			
			/* ===========================
			 * Hide navigation at bottom 
			 * of the page.
			 * =========================== */
			if($('#projectnav').length > 0) {
				var bottom = docHeight() - $('footer').height(),
					contentbottom = parseInt($('#content').css('padding-bottom')),
					top = bottom-contentbottom,
					current = $(window).scrollTop()+$(window).height();
				
				if(current >= top) {
					$('#projectnav .next').css({
						right: 0 - (current-top)
					});
					
					$('#projectnav .previous').css({
						left: 0 - (current-top)
					});
					
					$('.overlay.small').css({
						top: 102 - (current-top)
					});
				} else {
					$('#projectnav .next').css({
						right: 0
					});
					
					$('#projectnav .previous').css({
						left: 0
					});
					
					$('.overlay.small').css({
						top: 102
					});
				}
			}
		});
});