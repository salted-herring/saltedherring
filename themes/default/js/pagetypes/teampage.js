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
		$(window).scroll(function() {
			if($(window).scrollTop() > ($('article > header').height() + $('#banner').height())) {
				$('article > header').addClass('small');
			} else {
				$('article > header').removeClass('small');
			}
		});
	});
	
});