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
		
		'bridget': 'components/jquery-bridget/jquery.bridget',
		
		eventie: 'components/eventie/eventie',
		'doc-ready': 'components/doc-ready/doc-ready',
		eventEmitter: 'components/eventEmitter/eventEmitter',
		'get-style-property': 'components/get-style-property/get-style-property',
		'get-size': 'components/get-size/get-size',
		'matches-selector': 'components/matches-selector/matches-selector',
		outlayer: 'components/outlayer/outlayer',
/* 		'masonry': 'components/masonry/masonry', */
		
		'mutate': 'lib/mutate/mutate.min',
		'mutateevents': 'lib/mutate/mutate.events',
		'swfobject': 'lib/swfobject',
		
		isotope: 'components/isotope/jquery.isotope'
		
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
		},
		
		isotope: {
			desp: ['jquery', 'bridget']
		},
		bridget: {
			desp: ['jquery']
		}
	}
});