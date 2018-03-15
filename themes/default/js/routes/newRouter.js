/* ===========================
 * Router.
 * ---------------------------
 * Simon Winter
 * Nov 6 2013
 * ---------------------------
 * Backbone URL routing for
 * website.
 * =========================== */
define(['jquery', 'backbone', 'swfobject'], function($, Backbone, SwfObject) {

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

		},

		navigate: function() {
			Backbone.Router.prototype.navigate.apply(this, arguments);

			$('html, body').animate({
				scrollTop: 0
			}, 500);
		},

		home: function() {
			view.loadPage(url)
		},

		about: function() {
			view.loadPage(url)
		},

		work: function(section, fragment) {
			view.loadPage(url)
		},

		team: function(member) {
			view.loadPage(url)
		}
	});

	var router = new Router();
	Backbone.history.start({pushState: true});

	return router;
});
