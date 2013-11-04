define(['jquery', 'backbone'], function($, Backbone) {
	var Router = Backbone.Router.extend({
		routes: {
			'': 'home',
			'about(/)': 'about',
			'work(/)': 'work',
			'work/category/:category(/)': 'work',
			'team/(:member)(/)': 'team'
		},
		
		root: 'themes/default/js/',
		
		views: {}, // cached views are added here.
		
		home: function() {
			console.log('home URL');
		},
		
		about: function() {
			console.log('about URL');
			this.loadPage('aboutpage');
		},
		
		work: function(category) {
			console.log('work URL', arguments);
		},
		
		team: function(member) {
			console.log('team URL', arguments);
		},
		
		loadPage: function(page) {
			views = this.views;
			
			if(views.hasOwnProperty(page)) {
				
			} else {
				view[page] = false;
				
				$.get()
				
				require([this.root + 'pagetypes/' + page], function() {
/* 					views[page] = this; */
				});
			}
			/*
if(page in 'views') {
				// load page.
				
			} else {
*/
				
				
/* 			} */
		}
	});
	
	//var router = new Router();
	//Backbone.history.start({pushState: true});
	
	var router = {
		navigate: function(){}
	};
	
	return router;
});