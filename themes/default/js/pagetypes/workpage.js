

require(['jquery', 'backbone', 'underscore', '_base', 'bridget', 'isotope'], function($, Backbone, _) {

	var $container = $('#work');
	
	$container.isotope({
		itemSelector: '.entry',
		
		cellsByColumn: {
			columnWidth: 320,
			rowHeight: 320
		},
		
		/*
masonry: {
			columnWidth: 320,
			gutter: 0
		},
*/
		
		sortby: 'id',
		
		getSortData : {
	    	id : function ( $elem ) {
				return $elem.data('sortorder');
			}
	    },
		
		filter: function() {
			var target = $('.filters .current');
			
			if(target.length == 0) {
				target = $('.filters .all');
			}
			
			return $(this).hasClass(target.data('class'));
		}
	});


	var Router = Backbone.Router.extend({
		routes: {
			'work(/)': 'work',
			'work/:section/:fragment(/)': 'work',
		},
		
		navigate: function(url, options) {
			Backbone.Router.prototype.navigate.apply(this, arguments);
			
			_gaq.push(['_trackPageview', url]);
			
			$('#menu_icon').removeClass('show').addClass('hide');
			$('#main_nav').removeClass('hide').addClass('show');
			
			$('.filters a[href="' + url + '"]').addClass('current').siblings().removeClass('current');
			
			$(window).resize();
			
			$('html, body').animate({
				scrollTop: 0
			}, 500);
			
			$container.isotope({ filter: '.' + $('.filters .current').data('class')});
		},
		
		work: function(section, fragment) {
			
		}
	});
	
	var Router = new Router();

	$(document).on("click", "#banner:not(.collapsed) .filters a", function(e){
		e.preventDefault();
		
		Router.navigate($(this).attr('href'), {trigger: true});
	});


	$(window).resize(function(e) {
		$('#work').css('min-height', $(window).height());
		var els = $('.entry.hide');
		
	}).resize();
	
	$(document).on('click', '.fullstory', function(e) {
		e.preventDefault();
		$('.content p').toggle(0, function() { $('.detailscontainer').parent().height($('.detailscontainer').height())} );
		$('html,body').animate({
			scrollTop: $('.content p:first').offset().top - $('#banner').height() - $('#header').height() - $('blockquote').height() - 128
		});
	});
	
	$(document).on('mouseover', '#projectnav a', function() {
		$(this).width(Math.max($(this).find('strong').width(), $(this).find('em').width()) + 100);
	}).on('mouseout', '#projectnav a', function() {
		$(this).removeAttr('style');
	});
});