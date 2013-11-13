require.config({
	baseUrl: 'themes/default/js/',
	paths: {
		'jquery': 'lib/jquery',
		'underscore': 'lib/underscore',
		'backbone': 'lib/backbone',
		'modernizr': 'lib/modernizr',
		'_base': 'lib/_base',
		'svg': 'lib/svg',
		'router': 'routes/router',
		
		eventie: 'components/eventie/eventie',
		'doc-ready': 'components/doc-ready/doc-ready',
		eventEmitter: 'components/eventEmitter/eventEmitter',
		'get-style-property': 'components/get-style-property/get-style-property',
		'get-size': 'components/get-size/get-size',
		'matches-selector': 'components/matches-selector/matches-selector',
		outlayer: 'components/outlayer/outlayer',
		'masonry': 'components/masonry/masonry',
		
		'mutate': 'lib/mutate/mutate.min',
		'mutateevents': 'lib/mutate/mutate.events',
		
/* 		'defaultrouter': 'routes/defaultRouter', */
		
		
/* 		'defaultmodel': 'models/defaultModel', */
		'swfobject': 'lib/swfobject',
		
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
		
		mutate: {
			deps: ['jquery', 'mutateevents'],
			exports: '$.mutate'
		}
		/*
workrouter: {
			deps: ['jquery', 'underscore', 'backbone', 'defaultrouter'],
			exports: 'WorkRouter'
		},
*/
		/*
defaultrouter: {
			deps: ['jquery', 'backbone'],
			exports: 'Router'
		},
*/
		
		/*
defaultmodel: {
			deps: ['jquery', 'backbone'],
			exports: 'Model'
		},
*/
		
		/*
masonry: {
			deps: ['jquery', 'eventie', 'doc-ready', 'eventEmitter', 'get-style-property', 'get-size', 'matches-selector', 'outlayer'],
			exports: 'Masonry'
		}
*/
	}
});