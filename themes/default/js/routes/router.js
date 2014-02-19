/* ===========================
 * Router.
 * ---------------------------
 * Simon Winter
 * Nov 6 2013
 * ---------------------------
 * Backbone URL routing for
 * website.
 * =========================== */
define(['jquery', 'backbone', 'swfobject', 'masonry'], function($, Backbone, SwfObject, Masonry) {

	var View = Backbone.View.extend();

	var Router = Backbone.Router.extend({
		routes: {
/* 			'about(/)': 'about', */
			'work(/)': 'work',
			'work/:section/:fragment(/)': 'work',
			'team(/)': 'team',
			'team/:member(/)': 'team'
		},
		
		initialize: function() {
			this.root = 'themes/default/';
			this.views = {}; // cached views are added here.
			this.work = {}; // add here each cached projects. key should be the category - or 'all' for default.
			this.team = []; // add the cached team members.
			this.teamImages = {}; // add team portraits here.
			this.currentCategory = '';
			
			this.historyStack = [''];
			
			this.on('route', function() {
				this.historyStack.push('/' + arguments[0] + '/' + arguments[1].join('/'));
			});
			
			// build regex from the main nav.
			this.regex = new RegExp(($('#main_nav a').map(function(){ return $(this).text().toLowerCase(); })).get().join('|'));
		},
		
		navigate: function() {
			Backbone.Router.prototype.navigate.apply(this, arguments);
			
			_gaq.push(['_trackPageview', arguments[0]]);
			
			if(arguments[0] !== '/') {
				$('#menu_icon').removeClass('show').addClass('hide');
				$('#main_nav').removeClass('hide').addClass('show');
			} else {
				$('#menu_icon').removeClass('hide').addClass('show');
				$('#main_nav').removeClass('show').addClass('hide');
			}
			
			$(window).resize();
			
			$('html, body').animate({
				scrollTop: 0
			}, 500);
		},
		
		work: function(section, fragment) {
		
			var that = this;
			var callback = function() {
				
				/*
if($('#work').length > 0) {
					if(window.workMasonry) {
						window.workMasonry.layout();
					} else {
						var masonry = new Masonry($('#work').get(0), {
							hiddenStyle: {transform: 'scale(.8)', opacity: 0},
							transitionDuration: '.5s',
							columnWidth: 320,
							gutter: 0,
							isInitLayout: false,
							itemSelector: '.entry'
						});
						
						masonry.on( 'layoutComplete', function( msnryInstance, laidOutItems ) {
							masonry.hide(laidOutItems);
							$('.entry.hide').removeClass('hide');
							masonry.reveal(laidOutItems);
						});
						
						masonry.layout();
						
						window.workMasonry = masonry;
					}
				}
*/
				
				
				if(window.location.href.match(/work\/project\//) != null) {
					$.get('/work/getCurrentSession', function(response, status, xhr) {
						that.currentCategory = response;
						$('#banner .filter a').removeClass('all current');
						
						// load the existing navigation for the category,
						// else get the json file.
						cat = (response == '' || response == null) ? cat = 'all' : response;
						if(that.work[cat]) {
							that.workNavigation(cat);
						} else {
							$.get(that.root + 'json/' + cat + '.json', function(response, status, xhr) {
								that.work[cat] = typeof response == 'string' ? JSON.parse(response) : response;
								that.workNavigation(cat);
							});
						}
						
						that.loadMedia();
					});
					
					
				} else {
					if($('#work').length == 0) {
						$('#content').append($('<div id="work"/>'));
					}
				}
			};
			
			var transition = function(html) {
				var loaded = $(html),
					i = loaded.find('.filters a.current, .filters a.all').index() - 1,
					entries = $(loaded.get(2)).find('.entry'); // for some reason I can't target the #work element, so have to use 2 instead.
				
				// change the navigation
				$('#banner .filters a').removeClass('all current');
				$('.filters a').eq(i).addClass('current');
				
				var urls = [],
					count = 0;
				
				var ordered = entries;
				
				$('#work .entry').filter(function() {
					return entries.find("[data-sortorder='" + $(this).data('sortorder') + "']").length == 0;
				}).each(function(id, el) {
					$(this).fadeOut(function() {
						$(this).remove();
					});
				});
					
				ordered.sort(function (a, b) {
					a = $(a).data("sortorder");
					b = $(b).data("sortorder");
					
					if(a > b) {
					    return 1;
					} else if(a < b) {
					    return -1;
					} else {
					    return 0;
					}
				});
				
				
				
				ordered.each(function(id, el) {
					var exists = $('#work').find("[data-sortorder='" + $(this).data('sortorder') + "']").length == 1;
					
					if(exists) {
						$('#work').find('.entry').eq(id-1 < 0 ? 0 : id-1).removeClass('hidden').after($('#work').find("[data-sortorder='" + $(this).data('sortorder') + "']"));
					} else {
						$('#work').find('.entry').eq(id-1 < 0 ? 0 : id-1).after($(this));
					}
					
				});
				
				
				
				//callback();
			}
			
			var url = ['work'];
			if(section) {
				url.push(section);
			}
			if(fragment) {
				url.push(fragment);
			}
			
			this.loadPage('workpage', url.join('/'), callback, transition);
			
			if(section == 'category') {
				this.currentCategory = fragment;
			}
		},
		
		team: function(member) {
			
			if(member == null) {
				this.loadPage('teampage', '/team/');
			} else {
				var that = this;
				this.loadPage('teampage', '/team/' + member, function() {
					if($('body').is('.mobile')) {
						return false;
					}
					
					if($.isEmptyObject(that.teamImages[member])) {
						// get image
						$.get(window.location.href + '/portraits/', function(response, status, xhr) {
							data = response.data;
							if(!response.data) {
								data = [];
							}
							that.teamImages[member] = data;
							that.loadPortraits(member);
						}, 'json');
					} else {
						that.loadPortraits(member);
					}
				
					if(that.team.length > 0) {
						that.teamNavigation(member);
					} else {
						$.get(that.root + 'json/team.json', function(response, status, xhr) {
							that.team = response;
							that.teamNavigation(member);
						}, 'json');
					}
				});
			}
		},
		
		loadPage: function(page, url, callback, transitionContent, hideElements) {
			
			views = this.views;
			
/* 			console.log(views); */
			
			if(views.hasOwnProperty(url)) {
				/* ===========================
				 * Grab the cached version.
				 * =========================== */
				$('[rel="stylesheet"]').attr('href', views[url].css);
				
				/* ===========================
				 * If there is a transition
				 * function supplied, call that - otherwise load the content.
				 * - Don't call the transition iff the previous URL is from a 
				 * different section e.g. going from team to work.
				 * =========================== */
				if(typeof transitionContent !== 'undefined' && this.transitionAvailable(url)) {
					transitionContent(views[url].html);
				} else {
					$('#content').removeAttr('style').empty().html(views[url].html);
					if(callback) {
						callback();
					}
				}
				
				this.loadMeta(views[url].meta);
			} else {
				that = this;
				
				/* ===========================
				 * Load correct content.
				 * =========================== */
				views[url] = false;
				if(that.prev && !that.transitionAvailable(url)) {
					this.showLoading();
				}
				
				$('#content').prepend('<div id="loadingcontent"/>');
				
				$('#loadingcontent').load(url + ' #content', function(response, status, xhr) {
					
					var el = this;
					
					require(['pagetypes/' + page], function() {
						views[url] = {
							html: $('#loadingcontent #content').html(),
							css: that.root + 'css/' + page + '.css'
						};					
						
						if(that.prev) {
							$('#loadingcontent').remove();
							/* ===========================
							 * If there is a transition
							 * function supplied, call that - otherwise load the content.
							 * =========================== */
							if(typeof transitionContent !== 'undefined' && that.transitionAvailable(url)) {
								transitionContent(views[url].html);
							} else {
								$('#content, #loadingcontent').empty();
								$('#content').removeAttr('style').html(views[url].html);
							}
						};
						
						/* ===========================
						 * Load in meta data, css & js.
						 * =========================== */
						$('[rel="stylesheet"]').attr('href', views[url].css);
						that.getMeta(url, views[url]);
						
						that.prev = url;
						$(el).remove();
						
						that.hideLoading();
						
						if(callback) {
							callback();
						}
					});
					
				});
			}
		},
		
		loadMedia: function() {
			var that = this,
				loadOrder = {};
			
			function loadSwf(target) {
				target.append($('<div id="' + target.attr('id') + '_swf">'));
						
				$('#' + target.attr('id') + ', #' + target.attr('id') + '_swf').css('min-height', target.data('swf-height'));
				
				$('#' + target.attr('id') + '_swf').hide().load(target.data('swf'), function() {
					SwfObject.embedSWF(target.data('swf'), target.attr('id') + '_swf', target.data('swf-width'), target.data('swf-height'), '9.0.0', that.root + 'js/components/swfobject-amd/expressinstall.swf', {wmode: 'transparent'});
					$('#' + target.attr('id') + '_swf').delay($('#' + target.attr('id') + '_swf').index() * 500).fadeIn(function() {
						$(this).removeClass('notloaded');
					});
				});
			}
			
			function loadImage(target, img, width, height) {
				target.css({
					width: width,
					minHeight: height
				}).append(img);
				img.delay(target.index() * 500).fadeIn(function() {
					target.removeClass('notloaded');
				});
			}
			
			function loadVimeo(target) {
				iframe = $('<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen/>').attr({
							src: '//player.vimeo.com/video/' + target.data('vimeo') + '?title=0&amp;byline=0&amp;portrait=0&amp;badge=0',
							width: 928,
							height: 522,
							frameborder: 0
						});
				target.css('min-height', 522).removeClass('notloaded').append(iframe);
			}
			
			$('#media .image').each(function(i, e) { loadOrder[$(this).data('url')] = i; });
			
			$('#media .image').each(function() {
				var url = $(this).data('url'),
					width = $(this).data('width'),
					height = $(this).data('height'),
					alt = $(this).data('alt');
					
				$('<img/>').attr({
					alt: $(this).data('alt')
				}).load(url, function(status, success, xhr) {
					var img = $(this),
						target = $('#media .image').eq(loadOrder[url]);
						
					$(this).hide()
					
					if(target.is('.swf')) {
						if($('body').not('.mobile')) {
							loadSwf(target);	
						} else {
							$(this).removeClass('notloaded');
						}
					} else if(target.is('.vimeo')) {
						loadVimeo(target);
					} else {
						loadImage(target, img, width, height);
					}
					
				}).attr('src', url);
			});
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
		
		workNavigation: function(category) {
			if(category in this.work) {
				var previous = null,
					next = null,
					current = null;
				
				var currentCat = window.location.href.match(/work\/project\/(.*)/);
								
				if(currentCat != null) {
					currentCat = currentCat[1];
					var projects = category == 'all' ? this.work[category] : this.work[category].Projects;
					
					if(typeof projects == 'string') {
						projects = JSON.parse(projects);
					}
					
					for(var i=0; i<projects.length; i++) {
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
					
					this.showNav(next, previous, '/work/project/');
				}	
			}
		},
		
		teamNavigation: function(member) {
			var previous = null,
				next = null,
				current = null;
					
			for(var i in this.team) {
				if(current != null) {
					previous = current;
				}
				
				current = this.team[i];
				iplus = parseInt(i) + 1;
				
				if(iplus < this.team.length) {
					next = this.team[iplus] || null;
				} else {
					next = null;
				}
				
				if(current.URLSegment == member) {
					break;
				}
			}
			
			this.showNav(next, previous, '/team/');	
		},
		
		showNav: function(next, previous, base) {
			$('#projectnav, #projectnav a').hide();
			
				
					
			if(previous) {
				$('#projectnav .previous strong').text(previous.Title.replace(/&amp;/g, '&'));
				$('#projectnav .previous em').text(previous.TagLine.replace(/&amp;/g, '&'));
				$('#projectnav .previous').attr('href', base + previous.URLSegment);
				$('#projectnav .previous').show();
			}
			
			if(next != null) {
				$('#projectnav .next strong').text(next.Title.replace(/&amp;/g, '&'));
				$('#projectnav .next em').text(next.TagLine.replace(/&amp;/g, '&'));
				$('#projectnav .next').attr('href', base + next.URLSegment);
				$('#projectnav .next').show();
			}
			
			$('#projectnav').css({display: 'block'}).show();
		},
		
		loadPortraits: function(member) {
			if(member in this.teamImages) {
				for(var image in this.teamImages[member]) {
					$('.images').append($('<img/>').attr('src', this.teamImages[member][image]));
				}
				$('.images').addClass('loaded');
			}
		},
		
		transitionAvailable: function(url) {
			/* ===========================
			 * We can't use a transition if
			 * we are moving to or from a
			 * project, or from any other page
			 * to a work page.
			 * =========================== */
			prev = this.historyStack.length > 0 ? this.historyStack[this.historyStack.length-2] : '';
			
			return url.match(/(work\/?$)|category/) != null && prev.match(/(work\/?$)|category/) != null && prev !== url;
		},
		
		showLoading: function() {
			$('#loader').fadeIn('fast');
		},
		
		hideLoading: function() {
			$('#loader').fadeOut('fast');
		}
	});
	
	var router = new Router();
	Backbone.history.start({pushState: true});
	
	return router;
});