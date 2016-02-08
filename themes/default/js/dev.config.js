require.config({
	baseUrl: 'themes/default/js/',
	paths: {
		'jquery': 'lib/jquery',
		'underscore': 'lib/underscore',
		'backbone': 'lib/backbone',
		'modernizr': 'lib/modernizr',
		'_base': 'lib/_base',
		'visible': 'lib/visible',
		'router': 'routes/router',
		'tweenmax': 'lib/TweenMax',
		'bridget': 'components/jquery-bridget/jquery.bridget',
		
		eventie: 'components/eventie/eventie',
		'doc-ready': 'components/doc-ready/doc-ready',
		eventEmitter: 'components/eventEmitter/eventEmitter',
		'get-style-property': 'components/get-style-property/get-style-property',
		'get-size': 'components/get-size/get-size',
		'matches-selector': 'components/matches-selector/matches-selector',
		outlayer: 'components/outlayer/outlayer',
		
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
		visible: {
			deps: ['jquery']
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
			deps: ['jquery', 'bridget']
		},
		bridget: {
			deps: ['jquery']
		}
	}
});
