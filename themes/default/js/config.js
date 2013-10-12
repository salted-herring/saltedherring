require.config({
	paths: {
		'jquery': 'lib/jquery',
		'underscore': 'lib/underscore',
		'backbone': 'lib/backbone',
		'modernizr': 'lib/modernizr',
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