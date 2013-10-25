require.config({
	paths: {
		'jquery': '../lib/jquery',
		'underscore': '../lib/underscore',
		'backbone': '../lib/backbone',
		'modernizr': '../lib/modernizr',
		'_base': '../lib/_base'
	},
	shim: {
		backbone: {
			deps: ['jquery', 'underscore'],
			exports: 'Backbone'
		},
		underscore: {
			exports: '_'
		},
		_base: {
			deps: ['jquery']
		}
	}
});

require(['jquery', 'backbone', 'underscore', '_base'], function($, Backbone, _) {
	
	$(function() {
		$(window).resize(function() {
			$('#work .block').height($(window).height() - $('#header').height());
			
			
			$('body:not(.mobile) .contain').each(function() {
				var _h = 0;
				$(this).children().each(function() {
					_h += $(this).height();
				});
				
				$(this).attr("data-top", -_h/2);
				$(this).height(_h).css('margin-top', -_h/2);
			});
		});
		
		$(window).resize();
		
		$(window).scroll(function() {
			if($(window).scrollTop() + $(window).height() >= $('#footer').offset().top) {
				$('#nextnav').css('bottom', $(window).scrollTop() + $(window).height() - $('#footer').offset().top);
			} else {
				$('#nextnav').css('bottom', 0);
			}
			
			if($(window).scrollTop() + $(window).height() >= $('#footer').offset().top) {
				$('#nextnav').addClass('up');
			}
			
			if($(window).scrollTop() == 0) {
				$('#nextnav').removeClass('up');
			}
		});
		
		$('a[href="/#footer"]').click(function(e) {
			e.preventDefault();
			
			$('html,body').animate({
				scrollTop: $('footer').offset().top
			});
		});
		
		$('#nextnav').click(function(e) {
			e.preventDefault();
			
			if($(this).is('.up')) {
				var first = $('.block').filter(function() {
					return $(this).offset().top < $(window).scrollTop();
				}).filter(':last');
				
				if(first.index() == $('.block').length || first.index() == 1) {
					target = first;
				} else {
					target = first.prev();
				}
				
			} else {
				var first = $('.block').filter(function() {
					return $(this).offset().top >= $(window).scrollTop();
				}).filter(':first'),
					target = first.next();
			}
			
			if(target.length > 0 && target.index() == 1) {
				$('#nextnav').removeClass('up');
			}
			
			if(first && target.length > 0) {
				$('body,html').animate({
					scrollTop: target.offset().top - $('#header').height()
				}, 500);
			} else {
				$('#nextnav').addClass('up');
				$('body,html').animate({
					scrollTop: $('footer').offset().top
				}, 500);
			}
		});
		
		
		
		/* ===========================
		 * Animate news
		 * =========================== */
		if($('.news li').length > 0) {
			var interval;
			
			$('.news').each(function() {
				$(this).hover(function() {
					clearInterval(interval);
				}, function() {
					interval = getInterval();
				});
			});
			function getInterval() {
				return setInterval(function() {
					//console.log('called', $('.news li.active').next().length);
					$('.news li.active').animate({
						top: '-24px'
					}, 500, function() {
						var clone = $(this).removeClass('active').removeAttr('style').clone();
						$(this).next().addClass('active');
						$('.news').append(clone);
						$(this).remove();
					});
					
					$('.news li.active').next().animate({
						top: 0
					}, 500);
				}, 4000);
			}
			
			
			interval = getInterval();
		}
		
		
		/* ===========================
		 * Animate overlays.
		 * =========================== */
		/*
$('.block .overlay').each(function() {
			if($(window).scrollTop() > x) {
				
			}
		});
*/
		var previousScroll = 0;
		$(window).scroll(function() {
			var down = (previousScroll - $(window).scrollTop()) < 0,
				current = $('#work .block').filter(function() {
					return (($(this).offset().top - $('#header').height()) <= $(window).scrollTop()) &&
								($(window).scrollTop() <= ($(this).offset().top - $('#header').height() + $(this).height()));
				}).last(),
				margin = parseInt(current.find('.overlay').css('background-position-y'));
			
			margin = ($(window).scrollTop() / 2.75);
			
			current.find('.overlay').css({
				'background-position-y': margin
			})
			
			previousScroll = $(window).scrollTop();
		});
	});
	
});