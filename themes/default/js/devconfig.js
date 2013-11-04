require.config({
/* 	baseUrl: './', */
	paths: {
		'jquery': 'themes/default/js/lib/jquery',
		'underscore': 'themes/default/js/lib/underscore',
		'backbone': 'themes/default/js/lib/backbone',
		'modernizr': 'themes/default/js/lib/modernizr',
		'_base': 'themes/default/js/lib/_base',
		'svg': 'themes/default/js/lib/svg',
		'router': 'themes/default/js/routes/router'
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
			deps: ['jquery', 'router']
		},
		router: {
			deps: ['jquery', 'backbone'],
			exports: 'Router'
		}
	}
});