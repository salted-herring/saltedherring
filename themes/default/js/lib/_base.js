/*
 * Miscellaneous Global Functions.
 * -------------------------------
 * This file gets pulled in to each
 * page type. Place any globally required
 * functionality here.
 */


define(['jquery', 'backbone', 'router'], function($, Backbone, Router) {
	
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
	
	
	/*
$('#main_nav a').click(function(e) {
		e.preventDefault();
		Router.navigate($(this).attr('href'), {trigger: true});
	});
*/
	
	$('a').on('click', function(e) {
		e.preventDefault();
		alert();
		Router.navigate($(this).attr('href'), {trigger: true});
	});
	
	
	$(function() {
		$(window).scroll(function() {
			if($(window).scrollTop() + $(window).height() >= $(document).height()) {
				$('footer .salt').addClass('animate');
			} else {
				$('footer .salt').removeClass('animate');
			}
			
			
			if($(window).scrollTop() > ($('.individualentry header').height() + $('#banner').height())) {
				$('.individualentry header').addClass('small');
			} else {
				$('.individualentry header').removeClass('small');
			}
		}).scroll();
	});
});