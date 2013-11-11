/* ===========================
 * Default Model.
 * ---------------
 * Simon Winter
 * Nov 11 2013
 * ---------------------------
 * This is the base model that other
 * models extend
 * =========================== */

define(['jquery', 'backbone'], function($, Backbone) {
	
	return Backbone.Model.extend({
		initialize: function(options) {
			this.html = this.initFromOptions(options, 'html', '');
			this.urlsegment = this.initFromOptions(options, 'urlsegment', '');
		},
		
		initFromOptions: function(options, key, fallback) {
			return typeof options == 'undefined' ? fallback : (key in options ? options[key] : fallback);
		}
	});
});