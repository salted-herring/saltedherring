/*
 * Miscellaneous Global Functions.
 * -------------------------------
 * This file gets pulled in to each
 * page type. Place any globally required
 * functionality here.
 */


(function($) {
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
	
	
	$(function() {
		$(window).scroll(function() {
			if($(window).scrollTop() + $(window).height() >= $(document).height()) {
				$('footer .salt').addClass('animate');
			} else {
				$('footer .salt').removeClass('animate');
			}
		});
	});
})(jQuery);