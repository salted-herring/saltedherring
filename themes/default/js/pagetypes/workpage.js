

require(['jquery', 'backbone', 'underscore', '_base', 'router'], function($, Backbone, _, undefined, Router) {
	
	$(function() {
		
		
		
	
		$('.fullstory').click(function(e) {
			e.preventDefault();
			$('.content p').toggle();
			$('html,body').animate({
				scrollTop: $('.content p:first').offset().top - $('#banner').height() - $('#header').height() - $('blockquote').height() - 128
			});
		});
	});
	
});