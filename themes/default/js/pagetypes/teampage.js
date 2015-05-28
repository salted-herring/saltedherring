

require(['jquery', '_base'], function($) {
	$(document).on("mousemove", "#teammember .images.loaded", function(e) {
		var count = $(this).find('img').length,
			_width = $(this).width()/count,
			pos = e.pageX - $(this).offset().left,
			target = Math.ceil(pos / _width);

		if(target < count) {
			$(this).find('img').removeClass('current');
			$(this).find('img').eq(target).addClass('current');
		}

	});

	/*

	$(window).scroll(function(e) {
		if($("#teammember .images").is('.loaded') && $(window).scrollTop() < $("#teammember .images").height()) {
			var count = $("#teammember .images").find('img').length,
				_width = $("#teammember .images").height(),
				pos = $(window).scrollTop(),
				target = Math.ceil((pos / ($("#teammember .images").height()-160) / .6) * count);


				console.log(pos / $("#teammember .images").height());

				if(target < count) {
					$("#teammember .images").find('img').removeClass('current');
					$("#teammember .images").find('img').eq(target).addClass('current');
				}
		}
	}).scroll();
*/
});