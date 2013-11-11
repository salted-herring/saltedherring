require.config({
/* 	baseUrl: './', */
	paths: {
		'jquery': 'themes/default/js/lib/jquery',
		'underscore': 'themes/default/js/lib/underscore',
		'backbone': 'themes/default/js/lib/backbone',
		'modernizr': 'themes/default/js/lib/modernizr',
		'_base': 'themes/default/js/lib/_base',
		'svg': 'themes/default/js/lib/svg',
		'router': 'themes/default/js/routes/router',
		
/* 		'workrouter': 'themes/default/js/routes/workRouter', */
		'defaultrouter': 'themes/default/js/routes/defaultRouter',
		
		
		'defaultmodel': 'themes/default/js/models/defaultModel',
		'swfobject': 'themes/default/js/lib/swfobject'
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
			deps: ['jquery', 'backbone', 'router']
		},
		
		router: {
			deps: ['jquery', 'underscore', 'backbone', 'swfobject'],
			exports: 'WorkRouter'
		},
		/*
workrouter: {
			deps: ['jquery', 'underscore', 'backbone', 'defaultrouter'],
			exports: 'WorkRouter'
		},
*/
		defaultrouter: {
			deps: ['jquery', 'backbone'],
			exports: 'Router'
		},
		
		defaultmodel: {
			deps: ['jquery', 'backbone'],
			exports: 'Model'
		}
	}
});