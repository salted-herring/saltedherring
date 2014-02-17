
require(['jquery', 'backbone', 'underscore', '_base'], function($, Backbone, _) {
	
	//$(function() {
		var lastOffset = $(window).scrollTop();
		var lastDate = new Date().getTime();
	
		$(window).scroll(function(e) {
		
		
			var delayInMs = e.timeStamp - lastDate;
		    var offset = $(window).scrollTop() - lastOffset;
		    var speedInpxPerMs = offset / delayInMs;
		    
		    //console.log($(window).scrollTop(), lastOffset);
		
		    lastDate = e.timeStamp;
		    lastOffset = $(window).scrollTop();
			
			$('.overlay').css({
				top: 0 - ($(window).scrollTop() / 17) 
			});
			
		});//.scroll();
	//});
	
});