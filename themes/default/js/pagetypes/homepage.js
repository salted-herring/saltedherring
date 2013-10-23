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
			$('#work .block').height($(window).height() - $('.down').height());
			
			
			$('body:not(.mobile) .contain').each(function() {
				var _h = 0;
				$(this).children().each(function() {
					_h += $(this).height();
				});
				var marginTop = 0;//$(this).parents('.block').is('.first') ? - $('.down').height() : 0;
				
				$(this).height(_h).css('margin-top', marginTop - (_h/2));
			});
		});
		
		$(window).resize();
		
		$(window).scroll(function() {
			if($(window).scrollTop() + $(window).height() >= $('#footer').offset().top) {
				$('#nextnav').css('bottom', $(window).scrollTop() + $(window).height() - $('#footer').offset().top);
			} else {
				$('#nextnav').css('bottom', 0);
			}
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
	});
	
});