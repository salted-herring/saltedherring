/* ===========================
 * Default Router.
 * ---------------
 * Simon Winter
 * Nov 8 2013
 * ---------------------------
 * This is the base router that
 * will be decorated by other routers to provide 
 * additional functionality.
 * =========================== */

define(['jquery', 'backbone'], function($, Backbone) {
	
	return Backbone.Router.extend({
		routes: {
			'': 'home',
			'about(/)': 'about'
		},
		
		initiailize: function(options) {
			this.root = 'themes/default/';
			
			this.view = this.options.view || { loadPage: function(){} };
			
			// build regex from the main nav.
			this.regex = new RegExp(($('#main_nav a').map(function(){ return $(this).text().toLowerCase(); })).get().join('|'));
		},
		
		home: function() {
			this.view.loadPage('homepage', '/');
		},
		
		about: function() {
			this.view.loadPage('aboutpage', '/about/');
		},
		
		showNavigation: function() {
			
		}
	});
});