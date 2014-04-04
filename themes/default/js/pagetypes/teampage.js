

require(['jquery', '_base'], function($) {
	$(document).on("mousemove", "#teammember .images.loaded", function(e) {
		var count = $(this).find('img').length,
			_width = $(this).width()/count,
			pos = e.clientX;
		
		$(this).find('img').removeClass('current');
		$(this).find('img').eq(Math.ceil(pos / _width) % count).addClass('current');
	});
	
	/*
$(window).scroll(function(e) {
		if($("#teammember .images").is('.loaded')) {
			
		}
	}).scroll();
*/
});