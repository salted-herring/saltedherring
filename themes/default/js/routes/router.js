define(['jquery', 'backbone'], function($, Backbone) {
	var Router = Backbone.Router.extend({
		routes: {
			'': 'home',
			'about(/)': 'about',
			'work(/)': 'work',
			'work/:section/:fragment': 'work',
			'team(/)': 'team',
			'team/:member(/)': 'team'
		},
		
		initialize: function() {
			this.root = 'themes/default/';
			this.views = {}; // cached views are added here.
			this.prev = '';
			
			this.regex = '';
			
			$('#main_nav a').each(function() {
				return $(this).text();	
			});
			
			// build regex from the main nav.
			this.regex = new RegExp(($('#main_nav a').map(function(){ return $(this).text().toLowerCase(); })).get().join('|'));
		},
		
		home: function() {
			this.loadPage('homepage', '/');
		},
		
		about: function() {
			this.loadPage('aboutpage', '/about/');
		},
		
		work: function(section, fragment) {
			var callback = function() {
				$.get('/work/getCurrentSession', function(response, status, xhr) {
					console.log(response);
					if(window.location.href.match(/work\/$/) != null || response == '') {
						$('#banner .filters a').removeClass('current');
						$('#banner .filters a:first').addClass('all');
					} else {
						$('#banner .filters a').removeClass('current all');
						$('#banner .filters a[href*="' + response + '"]').addClass('current');
					}
					
				});
			};
			
			if(section == null && fragment == null) {
				$.get('/work/clearSession');
				this.loadPage('workpage', '/work/', callback);
			} else {
				this.loadPage('workpage', '/work/' + section + '/' + fragment, callback);
			}
		},
		
		team: function(member) {
			if(member == null) {
				this.loadPage('teampage', '/team/');
			} else {
				this.loadPage('teampage', '/team/' + member);
			}
		},
		
		loadPage: function(page, url, callback) {
			views = this.views;
			
			if(views.hasOwnProperty(url)) {
				/* ===========================
				 * Grab the cached version.
				 * =========================== */
				$('[rel="stylesheet"]').attr('href', views[url].css);
				$('#content, #loadingcontent').empty().html(views[url].html);
				if(callback) {
					callback();
					this.getMeta(url);
				}
			} else {
			
				/* ===========================
				 * Load correct content.
				 * =========================== */
				views[url] = false;
				
				that = this;
				
				$('#content').prepend('<div id="loadingcontent"/>');
				
				$('#loadingcontent').hide().load(url + ' #content', function(response, status, xhr) {
					views[url] = {
						html: $('#loadingcontent #content').html(),
						css: that.root + 'css/' + page + '.css'
					};
					
					$('[rel="stylesheet"]').attr('href', views[url].css);
					
					if(that.prev) {
						$('#content, #loadingcontent').empty();
						$('#content').html(views[url].html);
					};
					that.prev = url;
					if(callback) {
						callback();
						that.getMeta(url);	
					}
					
					require([that.root + 'js/pagetypes/' + page]);
					
				});
			}
		},
		
		getMeta: function(url) {
			/* ===========================
			 * Check if we need to change
			 * the selected main nav.
			 * =========================== */
			var match = url.match(this.regex);
			if(match != null) {
				$('#main_nav a').removeClass('current');
				$('#main_nav').find('a[href*="' + match[0] + '"]').addClass('current');
			}
			
			/* ===========================
			 * Re-populate the meta data.
			 * =========================== */
			var location = window.location.href;
			if(window.location.pathname == '/') {
				location += 'home/';
			}
			
			if(location[location.length - 1] != '/') {
				location += '/';
			}
			
			location += 'meta';
			
			$.get(location, function(response, status, xhr) {
				$('title,meta:not([name="viewport"])').remove();
				$('head').prepend(response);
			}, 'html');
		}
	});
	
	var router = new Router();
	Backbone.history.start({pushState: true});
	
	return router;
});