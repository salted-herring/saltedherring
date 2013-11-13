

require(['jquery', 'backbone', 'underscore', '_base', 'router', 'masonry'], function($, Backbone, _, undefined, Router, Masonry) {
	
/* 	console.log($.fn.mutate); */
	
	//$(function() {
		var masonry = new Masonry($('#work').get(0), {
/* 			visibleStyle: {transform: } */
			hiddenStyle: {transform: 'scale(.8)', opacity: 0},
			transitionDuration: '.5s'/*
,
			containerStyle: null
*/
		});
		masonry.layout();
		
		window.workMasonry = masonry;
		
		
		$(window).resize(function(e) {
			$('#work').css('min-height', $(window).height());
		}).resize();
		
		$(document).on('click', '.fullstory', function(e) {
			e.preventDefault();
			$('.content p').toggle(0, function() { $('.detailscontainer').parent().height($('.detailscontainer').height())} );
			$('html,body').animate({
				scrollTop: $('.content p:first').offset().top - $('#banner').height() - $('#header').height() - $('blockquote').height() - 128
			});
		});
	//});
	
});