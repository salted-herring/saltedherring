

require(['jquery', 'backbone', 'underscore', '_base', 'router'], function($, Backbone, _, undefined, Router) {
	
	$(function() {
		$(document).on('click', '.fullstory', function(e) {
			e.preventDefault();
			$('.content p').toggle(0, function() { $('.detailscontainer').parent().height($('.detailscontainer').height())} );
			$('html,body').animate({
				scrollTop: $('.content p:first').offset().top - $('#banner').height() - $('#header').height() - $('blockquote').height() - 128
			});
		});
	});
	
});