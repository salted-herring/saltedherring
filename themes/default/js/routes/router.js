define(['jquery', 'backbone'], function($, Backbone) {
	var Router = Backbone.Router.extend({
		routes: {
			'': 'home',
			'about(/)': 'about',
			'work(/)': 'work',
			'work/category/:category': 'work',
			'team/(:member)(/)': 'team'
		},
		
		initialize: function() {
			this.root = 'themes/default/';
			this.views = {}; // cached views are added here.
			this.prev = '';
		},
		
		home: function() {
			this.loadPage('homepage', '/');
		},
		
		about: function() {
			this.loadPage('aboutpage', '/about/');
		},
		
		work: function(category) {
			if(category == null) {
				this.loadPage('workpage', '/work/');
			} else {
				this.loadPage('workpage', '/work/category/' + category);
			}
		},
		
		team: function(member) {
			if(member == null) {
				this.loadPage('teampage', '/team/');
			} else {
				this.loadPage('teampage', '/team/' + member);
			}
		},
		
		loadPage: function(page, url) {
			views = this.views;
			
			if(views.hasOwnProperty(url)) {
				$('[rel="stylesheet"]').attr('href', views[url].css);
				$('#content, #loadingcontent').empty().html(views[url].html);
			} else {
				views[url] = false;
				
				that = this;
				
				$('#content').prepend('<div id="loadingcontent"/>');
				
				
				
				require([this.root + 'js/pagetypes/' + page], function() {
					$('#loadingcontent').hide().load(url + ' #content', function(response, status, xhr) {
					views[url] = {
						html: $('#loadingcontent #content').html(),
						css: that.root + 'css/' + page + '.css'
					};
					
					$('[rel="stylesheet"]').attr('href', views[url].css);
					
/* 					if(that.prev) { */
						$('#content, #loadingcontent').empty().html(views[url].html);
/* 					}; */
					that.prev = url;
					
				});
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
	
	var router = new Router();
	Backbone.history.start({pushState: true});
	
	return router;
});