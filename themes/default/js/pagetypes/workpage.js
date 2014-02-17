

require(['jquery', 'backbone', 'underscore', '_base', 'bridget', 'isotope'], function($, Backbone, _) {

	var $container = $('#work');
	
	$container.isotope({
		itemSelector: '.entry',
		
		masonry : {
          columnWidth : 320
        },
        masonryHorizontal : {
          rowHeight: 320
        },
        
        containerStyle: {
	      'min-height': 200  
        },
		
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
			
			$('.filters a[href="' + url + '"]').addClass('current').siblings().removeClass('current');
			
			$container.isotope({ filter: '.' + $('.filters .current').data('class')});
			
			$('#menu_icon').removeClass('show').addClass('hide');
			$('#main_nav').removeClass('hide').addClass('show');
			
			showHiddenMessage();
		},
		
		work: function(section, fragment) {
			
		}
	});
	
	var Router = new Router();

	$(document).on("click", "#banner:not(.collapsed) .filters a", function(e){
		e.preventDefault();
		
		$('html, body').animate({
			scrollTop: 0
		}, 500);
		
		Router.navigate($(this).attr('href'), {trigger: true});
	});
	
	$(document).on('click', '.fullstory', function(e) {
		e.preventDefault();
		$('.content p').toggle(0, function() { $('.detailscontainer').parent().height($('.detailscontainer').height())} );
		$('html,body').animate({
			scrollTop: $('.content p:first').offset().top - $('#banner').height() - $('#header').height() - $('blockquote').height() - 128
		});
	});
	
	
	
	
	/* ===========================
	 * Show/hide the no work message.
	 * =========================== */
	(window.showHiddenMessage = function() {
		if($('.filters .current').length > 0 && $('.entry.' + $('.filters .current').data('class')).length == 0) {
			$('.noelems').fadeIn();
		} else {
			
			$('.noelems').fadeOut();
		}
	})();
});