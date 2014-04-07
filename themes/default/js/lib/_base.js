/*
 * Miscellaneous Global Functions.
 * -------------------------------
 * This file gets pulled in to each
 * page type. Place any globally required
 * functionality here.
 */


define(['jquery', 'backbone', 'router'], function($, Backbone, Router) {

	
	/* ===========================
	 * Cross browser compatible docheight
	 * =========================== */
	window.docHeight = function() {
		var body = document.body,
    		html = document.documentElement;
    	
		return Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
    }
		
	// ============================
	// Show / hide the mobile menu.
	//============================
	$('#menu_icon').click(function(e) {
		e.preventDefault();
		$(this).toggleClass('collapse expand');
		$('#main_nav').toggleClass('collapse expand');
	});
	
	$(document).on('click', '#main_nav a, #logo a', function() {
		$('#main_nav a, #logo a').removeClass('current');
		$(this).addClass('current');
	});
	
	$('#projectnav a').hover(function() {
		var _w = $(this).outerWidth(true) + Math.max($(this).find('strong').outerWidth(), $(this).find('em').outerWidth());
		if($(this).is('.next')) {
			$(this).find('em, strong').width(Math.max($(this).find('strong').outerWidth(), $(this).find('em').outerWidth())).css('right', $(this).outerWidth(true));
		} else {
			$(this).find('em, strong').css('left', $(this).outerWidth(true));
		}
		$(this).addClass('over').width(_w);
	}, function() {
		$(this).removeClass('over').removeAttr('style');
	});
	
	
	$(document).on('hover', '#projectnav a', function() {
		$(this).width($(this).outerWidth(true) + Math.max($(this).find('strong').outerWidth(), $(this).find('em').outerWidth()));
		$(this).addClass('over');
	}, function() {
		$(this).removeAttr('style');
		$(this).removeClass('over');
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
			
			if($('body:not(.mobile) nav#banner').length > 0) {
				if($(window).scrollTop() > 200) {
					$('nav#banner').addClass('small');
				} else {
					$('nav#banner').removeClass('small');
				}
			} else if($('body:not(.mobile) div#banner').length > 0) {
				if($(window).scrollTop() > 50) {
					$('header').addClass('small');
				} else {
					$('header').removeClass('delay').removeClass('small');//.css('top',0);
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