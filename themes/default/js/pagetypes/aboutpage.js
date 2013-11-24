
require(['jquery', 'backbone', 'underscore', '_base'], function($, Backbone, _) {
	
	$(function() {
		$(window).scroll(function() {
			var offset = $(window).scrollTop();
			
			$('.overlay').css({
				top: 0 - (offset / 17) 
			});
			
		}).scroll();
	});
	
});