/* ===========================
 * Work Router.
 * ---------------
 * Simon Winter
 * Nov 8 2013
 * ---------------------------
 * This router decorates default router with work
 * specific routes.
 * =========================== */

define(['jquery', 'underscore', 'backbone', 'defaultrouter'], function($, _, Backbone, Router) {
	var cache = Backbone.Collection.extend();
	window.Cache = new cache();

	var WorkView = Backbone.View.extend({
		render: function(url) {

			var record = window.Cache.findWhere({urlsegment: url});

			if(record) {
				$(this.el).html(record.html);
			} else {

			}
			//$(this.el).html(html);
		}
	});

	var WorkModel = Backbone.Model.extend({
		constructor: function(options) {
			options || (options = {});

			this.html = options.html ? options.html : '';
			this.urlsegment = options.urlsegment ? options.urlsegment : '';
		}
	});

	/*
var WorkRouter = function(router) {
		this.router = router;

		for(key in router) {
			this[key] = router[key];
		}

		_.extend(this.prototype, {
			work:
		});

		_.extend(this.routes, {
			'work(/)': 'work',
			'work/:section/:fragment(/)': 'work'
		});


	};
*/

	var WorkRouter = Backbone.Router.extend({
		routes: {
			'work(/)': 'work',
            'work/:section(/)': 'work',
			'work/:section/:fragment(/)': 'work'
		},
		work: function(section, fragment) {
			var that = this;
			/*
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
							that.workNavigation(cat);
						} else {
							$.get(that.root + 'json/' + cat + '.json', function(response, status, xhr) {
								that.work[cat] = typeof response == 'string' ? JSON.parse(response) : response;
								that.workNavigation(cat);
							});
						}
					});


				}
			};
*/

			if(section == null && fragment == null) {
				$.get('/work/clearSession');
				this.view.render('/work/');
				//this.view.loadPage('workpage', '/work/', callback);
			} else {
				this.view.render('/work/' + section + '/' + fragment);
				//this.loadPage('workpage', '/work/' + section + '/' + fragment, callback);
			}

			if(section == 'category') {
				this.currentCategory = fragment;
			}
		},
		initialize: function() {
			this.view = new WorkView({el: $('#content')});
		}
	});




	//window.Router = new WorkRouter();

	var route = new WorkRouter();//new Router());

	//var route = new WorkRouter(Router);
	Backbone.history.start({pushState: true});

	return route;
});
