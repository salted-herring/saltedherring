/* ===========================
 * Router.
 * ---------------------------
 * Simon Winter
 * Nov 6 2013
 * ---------------------------
 * Backbone URL routing for
 * website.
 * =========================== */
define(['jquery', 'backbone'], function($, Backbone) {
	var Router = Backbone.Router.extend({
		routes: {
			'': 'home',
			'about(/)': 'about',
			'work(/)': 'work',
			'work/:section/:fragment(/)': 'work',
			'team(/)': 'team',
			'team/:member(/)': 'team'
		},
		
		initialize: function() {
			this.root = 'themes/default/';
			this.views = {}; // cached views are added here.
			this.prev = '';
			this.work = {}; // add here each cached projects. key should be the category - or 'all' for default.
			this.currentCategory = '';
			
			// build regex from the main nav.
			this.regex = new RegExp(($('#main_nav a').map(function(){ return $(this).text().toLowerCase(); })).get().join('|'));
		},
		
		navigate: function() {
			Backbone.Router.prototype.navigate.apply(this, arguments);
			
			$('html, body').animate({
				scrollTop: 0
			}, 500);
		},
		
		home: function() {
			this.loadPage('homepage', '/');
		},
		
		about: function() {
			this.loadPage('aboutpage', '/about/');
		},
		
		work: function(section, fragment) {
			var that = this;
			var callback = function() {
			
				if(window.location.href.match(/work\/project\//) != null) {
					$.get('/work/getCurrentSession', function(response, status, xhr) {
						that.currentCategory = response;
						$('#banner .filter a').removeClass('all current');
						$('#banner .filter a[href*="' + response + '"').addClass('current');
						
						// load the existing navigation for the category,
						// else get the json file.
						cat = (response == '' || response == null) ? cat = 'all' : response;
						if(that.work[cat]) {
							that.navigation(cat);
						} else {
							$.get(that.root + 'json/' + cat + '.json', function(response, status, xhr) {
								that.work[cat] = response;
								that.navigation(cat);
							});
						}
					});
					
					
				}
			};
			
			if(section == null && fragment == null) {
				$.get('/work/clearSession');
				this.loadPage('workpage', '/work/', callback);
			} else {
				this.loadPage('workpage', '/work/' + section + '/' + fragment, callback);
			}
			
			if(section == 'category') {
				this.currentCategory = fragment;
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
				$('#content').empty().html(views[url].html);
				this.loadMeta(views[url].meta);
				if(callback) {
					callback();
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
					
					that.getMeta(url, views[url]);
					
					if(callback) {
						callback();
					}
					
					require([that.root + 'js/pagetypes/' + page]);
					
					$(this).remove();
				});
			}
		},
		
		getMeta: function(url, result) {
			/* ===========================
			 * Check if we need to change
			 * the selected main nav.
			 * =========================== */
			var match = url.match(this.regex),
				that = this,
				location = window.location.href;
				
			if(match != null) {
				$('#main_nav a').removeClass('current');
				$('#main_nav').find('a[href*="' + match[0] + '"]').addClass('current');
			}
			
			/* ===========================
			 * Re-populate the meta data.
			 * =========================== */
			if(window.location.pathname == '/') {
				location += 'home/';
			}
			
			if(location[location.length - 1] != '/') {
				location += '/';
			}
			
			location += 'meta';
			
			$.get(location, function(response, status, xhr) {
				that.loadMeta(response);
				result.meta = response;
			}, 'html');
		},
		
		loadMeta: function(meta) {
			$('title,meta:not([name="viewport"])').remove();
			$('head').prepend(meta);
		},
		
		navigation: function(category) {
			if(category in this.work) {
				var previous = null,
					next = null,
					current = null;
				
				var currentCat = window.location.href.match(/work\/project\/(.*)/);
								
				if(currentCat != null) {
					currentCat = currentCat[1];
					var projects = category == 'all' ? this.work[category] : this.work[category].Projects;
					console.log(projects);
					for(var i in projects) {
						if(current != null) {
							previous = current;
						}
						
						current = projects[i];
						iplus = parseInt(i) + 1;
						
						if(iplus < projects.length) {
							next = projects[iplus] || null;
						} else {
							next = null;
						}
						
						if(current.URLSegment == currentCat) {
							break;
						}
					}
					
					$('#projectnav a').hide();
					
					console.log(previous, next);
					
					if(previous) {
						$('#projectnav .previous strong').text(previous.Title);
						$('#projectnav .previous em').text(previous.TagLine);
						$('#projectnav .previous').attr('href', '/work/project/' + previous.URLSegment);
						$('#projectnav .previous').show();
					}
					
					if(next) {
						$('#projectnav .next strong').text(next.Title);
						$('#projectnav .next em').text(next.TagLine);
						$('#projectnav .next').attr('href', '/work/project/' + next.URLSegment);
						$('#projectnav .next').show();
					}
					
					$('#projectnav').fadeIn();
				}
				
				
			} else {
				
			}
		}
	});
	
	var router = new Router();
	Backbone.history.start({pushState: true});
	
	return router;
});