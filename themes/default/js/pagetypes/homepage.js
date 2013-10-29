require.config({
	paths: {
		'jquery': '../lib/jquery',
		'underscore': '../lib/underscore',
		'backbone': '../lib/backbone',
		'modernizr': '../lib/modernizr',
		'_base': '../lib/_base',
		'svg': '../lib/svg'
	},
	shim: {
		backbone: {
			deps: ['jquery', 'underscore'],
			exports: 'Backbone'
		},
		underscore: {
			exports: '_'
		},
		_base: {
			deps: ['jquery']
		}
	}
});

require(['jquery', 'backbone', 'underscore', '_base', 'svg'], function($, Backbone, _) {
	
	console.log(arguments, SVG);
	
	$(function() {
	
		// SVG
		$('#keyword').empty();
		var draw = SVG('keyword').size($(window).width(), 120);
		draw.move(0,0);
/* 		var group = null; */
		var prev = null;
		var text = draw.text("HERRING").attr({fill: '#ffffff'});
		var pos = 10;
		text.font({
			family:   'BrandonGrotesque',
			size:     120,
			anchor:   'left',
			weight:   'bold'
		});
		text.hide();
		
		function drawPath(width, offsetY, offsetX) {
			var group = draw.group();
			offsetY = (typeof offsetY != 'undefined') ? offsetY : -500;
			offsetX = (typeof offsetX != 'undefined') ? offsetX : 0;
			for(var i=0; i<90; i++) {
				var rect = draw.rect(width, 1000).attr({ fill: '#fff' });
				rect.move(offsetX + pos + (i*(2*width)), offsetY);
				rect.rotate(25,0,0);
				group.add(rect);
			}
			
			group.move(($(window).width() - 960)/2,0);
/* 			--pos; */
			return group;
			
		}
		
		var i = 0,
			y = 0,
			direction = 1;
			
		//var interval = setInterval(function() {
			var g = drawPath(5, -500);
			//g.style('opacity',0.5);
			text.show();
			text.maskWith(g);
			
			var group = draw.group();
			text.center(($(window).width() - text.bbox().width)/2, 40);
			group.add(text);
			
			group.style({'text-align': 'center', width: '100%'});
			var path = drawPath(5, -600, 10);
			
			group.maskWith(path);
			
			/*
var interval = setInterval(function() {
				if(i == 7) {
					clearInterval(interval);
					return;
				}
				
				
				if(i == 100) {
					direction = -1;
				}
				
				if(i == -100) {
					direction = 1;
				}
				
				i = i += (direction > 0 ? 1 : -1);
				
				path.move(i, 0);
			}, 500);
*/
	
		$(window).resize(function() {
			$('#work .block').height($(window).height() - $('#header').height());
			
			var _h = 0;
			
			$('body:not(.mobile) .contain').each(function() {
				_h = 0;
				$(this).children().each(function() {
					_h += $(this).height();
				});
				
				$(this).attr("data-top", -_h/2);
				$(this).height(_h).css('margin-top', -_h/2);
			});
			
			$('body:not(.mobile) #heading').css({
				top: ($(window).height() - $('body:not(.mobile) #heading').height() - 100) /2
			});
			
			$('body:not(.mobile) .heading').css({
				left: ($(window).width() - 960) / 2
			});
		});
		
		
		$(window).scroll(function() {
			if(i == 100) {
				direction = -1;
			}
			
			if(i == -100) {
				direction = 1;
			}
			
			i += ((direction > 0 ? 1 : -1)) / $(window).height();
			
			path.move(i, 0);
		});
		
		$(window).resize();
		
		$(window).scroll(function() {
			if($(window).scrollTop() + $(window).height() >= $('#footer').offset().top) {
				$('#nextnav').css('bottom', $(window).scrollTop() + $(window).height() - $('#footer').offset().top);
			} else {
				$('#nextnav').css('bottom', 0);
			}
			
			if($(window).scrollTop() + $(window).height() >= $('#footer').offset().top) {
				$('#nextnav').addClass('up');
			}
			
			if($(window).scrollTop() == 0) {
				$('#nextnav').removeClass('up');
			}
			
			
			if($(window).scrollTop() >= ($('#work .block:last').offset().top - $('#header').height())) {
				$('#heading').hide();
				$('#work .block:last .heading').show();
			} else {
				$('#heading').show();
				$('#work .block:last .heading').hide();
			}
		});
		
		$('a[href="/#footer"]').click(function(e) {
			e.preventDefault();
			
			$('html,body').animate({
				scrollTop: $('footer').offset().top
			});
		});
		
		$('#nextnav').click(function(e) {
			e.preventDefault();
			
			if($(this).is('.up')) {
				var first = $('.block').filter(function() {
					return $(this).offset().top < $(window).scrollTop();
				}).filter(':last');
				
				if(first.index() == $('.block').length || first.index() == 1) {
					target = first;
				} else {
					target = first.prev();
				}
				
			} else {
				var first = $('.block').filter(function() {
					return $(this).offset().top >= $(window).scrollTop();
				}).filter(':first'),
					target = first.next();
			}
			
			if(target.length > 0 && target.index() == 1) {
				$('#nextnav').removeClass('up');
			}
			
			if(first && target.length > 0) {
				$('body,html').animate({
					scrollTop: target.offset().top - $('#header').height()
				}, 500);
			} else {
				$('#nextnav').addClass('up');
				$('body,html').animate({
					scrollTop: $('footer').offset().top
				}, 500);
			}
		});
		
		
		
		/* ===========================
		 * Animate news
		 * =========================== */
		if($('.news li').length > 0) {
			var interval;
			
			$('.news').each(function() {
				$(this).hover(function() {
					clearInterval(interval);
				}, function() {
					interval = getInterval();
				});
			});
			function getInterval() {
				return setInterval(function() {
					//console.log('called', $('.news li.active').next().length);
					$('.news li.active').animate({
						top: '-24px'
					}, 500, function() {
						var clone = $(this).removeClass('active').removeAttr('style').clone();
						$(this).next().addClass('active');
						$('.news').append(clone);
						$(this).remove();
					});
					
					$('.news li.active').next().animate({
						top: 0
					}, 500);
				}, 4000);
			}
			
			
			interval = getInterval();
		}
		
		
		/* ===========================
		 * Animate overlays.
		 * =========================== */
		/*
$('.block .overlay').each(function() {
			if($(window).scrollTop() > x) {
				
			}
		});
*/
		var previousScroll = 0;
		$(window).scroll(function() {
			var down = (previousScroll - $(window).scrollTop()) < 0,
				current = $('#work .block').filter(function() {
					return (($(this).offset().top - $('#header').height()) <= $(window).scrollTop()) &&
								($(window).scrollTop() <= ($(this).offset().top - $('#header').height() + $(this).height()));
				}).last(),
				margin = parseInt(current.find('.overlay').css('background-position-y'));
			
			margin = ($(window).scrollTop() / 1.65);
			
			current.find('.overlay').css({
				'background-position-y': margin
			})
			
			previousScroll = $(window).scrollTop();
		});
	});
	
});