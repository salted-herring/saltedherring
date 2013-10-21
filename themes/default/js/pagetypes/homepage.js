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
					console.log($(this).height());
					_h += $(this).height();
				});
				$(this).height(_h).css('margin-top', -_h/2);
			});
		});
		
		$(window).resize();
	});
	
});