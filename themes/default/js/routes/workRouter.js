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
	
	
	
	var WorkRouter = {
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
			
			if(section == null && fragment == null) {
				$.get('/work/clearSession');
				this.loadPage('workpage', '/work/', callback);
			} else {
				this.loadPage('workpage', '/work/' + section + '/' + fragment, callback);
			}
			
			if(section == 'category') {
				this.currentCategory = fragment;
			}
		}
	};
	
	_.extend(WorkRouter, new Router());
	_.extend(WorkRouter.routes, {
		'work(/)': 'work',
		'work/:section/:fragment(/)': 'work'
	});
	
	window.Router = WorkRouter;
	
	return WorkRouter;
});