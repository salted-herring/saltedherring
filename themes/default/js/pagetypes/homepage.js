require(['jquery', 'backbone', 'underscore', '_base', 'svg'], function($) {
	
	$(function() {
	
			
		/* ===========================
		 * On resize - make sure:
		 * - The fotter is in the correct place
		 * - The content container & each block are full height.
		 * =========================== */
		$(window).resize(function() {
			var targetHeight = ($('#work .block').length * $(window).height()) - parseInt($('#content').css('padding-top')) - (($('#work .block').length - 1) * $('#header').height());
			if(targetHeight > 0) {
				$('#content, #work').height(targetHeight);
			}
			
			$('#work .block').each(function(i, el) {
				var top = (i * ($(window).height() - $('#header').height()));
				$(this).height($(window).height() - $('#header').height());
				$(this).css({
					'top': top
				});
				
				$(this).attr('data-top', parseInt($(this).offset().top));
				$(this).attr('data-headingtop', parseInt($(this).find('.heading').offset().top));
				
/* 				$(this).find('h1').css('z-index', i); */
			});
			
			$('#footer').show();
			
			$('body:not(.mobile) #heading').attr('data-top', parseInt(($(window).height() - $('#header').height() + 16) / 2));
			if($('body:not(.mobile) .block:last').length > 0) {
				$('body:not(.mobile) .block:last').attr('data-top', parseInt($('body:not(.mobile) .block:last').offset().top));
			}
			
			positionHeading();
		}).resize();
		
		var prevPosition = 0,
			scrolled = false;
			
		$(window).scroll(function(e) {
			e.preventDefault();
		
			if(($(window).scrollTop() + $(window).height()) >= $('#footer').offset().top) {
				$('#nextnav').css({
					'margin-bottom': Math.round(($(window).scrollTop() + $(window).height()) - $('#footer').offset().top)
				});
			} else {
				$('#nextnav').removeAttr('style');//.css('position', 'fixed');
			}
			
			if(($(window).scrollTop() + $(window).height()) >= $('#footer').offset().top) {
				$('#nextnav').addClass('up');
			}
			
			if($(window).scrollTop() == 0) {
				$('#nextnav').removeClass('up');
			}
			
			prevPosition = $(window).scrollTop();
			
			positionHeading();
			scrolled = true;
			
			if($('.block').length > 0 && $(window).scrollTop() < ($('.block:first').offset().top + $(window).height() - $('#header').height())) {
				$('#menu_icon').removeClass('hide').addClass('show');
				$('#main_nav').removeClass('show').addClass('hide');
			} else {
				$('#menu_icon').removeClass('show').addClass('hide');
				$('#main_nav').removeClass('hide').addClass('show');
			}
			
			/* ===========================
			 * Animate overlays.
			 * =========================== */
			$('#work .block').each(function(i, el) {
				if (($(window).scrollTop() + $(window).height()) > $(this).offset().top && ($(this).offset().top + $(this).height()) > $(window).scrollTop()) {
					$(this).find('.overlay').css({
						'background-position': '0 ' + Math.min(0, -(($(window).scrollTop() - $('#header').height()) * .125)) + 'px'
					});
					
					$(this).css({
						'background-position': '0 ' + Math.min(0, -(($(window).scrollTop() - $('#header').height()) * .2)) + 'px'
					});
					
					if($(this).is('.first') && $(window).scrollTop() > 100) {
						$(this).find('.intro').hide();
					} else {
						$(this).find('.intro').show();
					}
				}
			});
			
		}).scroll();
		
		// * ===========================
		// * Ensure that the heading attaches itself
		// * to the last block.
		// * ===========================
		function positionHeading() {
			var _max = 95;
			
			$('#work .block').each(function() {
				var top = $(this).data('top');
				console.log(top, $(window).scrollTop() + $('#header').height());
				
				/*
if((top - $('#header').height()) < $(window).scrollTop()) {
					
					$(this).find('.heading').css({
						top: top
					});
				} else {
*/
/* 					if($(window).scrollTop() >= top && (top) < ($(window).scrollTop() + ($(window).height()/2))) { */
				if(top < ($(window).scrollTop() + ($(window).height()/2))) {
					
					var condition = top < $(window).scrollTop();
					var _h = condition ? ($(window).height() / 2) : (($(window).height() / 2)) - Math.abs($(window).scrollTop() - top);
					var newTop = top < ($(window).scrollTop() + $('#header').height()) ? 0 - Math.abs($(window).scrollTop() + $('#header').height() - top) : Math.abs($(window).scrollTop() - top);
					
					
					if(newTop <= 0) {
						$(this).find('.heading').hide();
						$(this).find('.large').show();
					} else {
						$(this).find('.heading').show();
						$(this).find('.large').hide();
					}
					$(this).find('.heading').css({
						height: _h,
						top: newTop
					});
					
						
					$(this).find('.heading > h1').css({
						top: Math.ceil(newTop + _h)
					});
					
				} else {
					$(this).find('.heading').show().css({
						height: 0
					});
					$(this).find('.large').hide();
				}
			});
			
			
			/*
if($(window).scrollTop() >= ($('#work .block:last').data('top') - $('#header').height())) {
				$('#heading').css({
					top: $('#heading').data('top') - ($(window).scrollTop() - ($('#work .block:last').data('top') - $('#header').height()))
				});
				
			} else {
				$('#heading').css({
					top: '50%'//$('#heading').data('top')
				});
			}
*/
		}
		
		
		
		$('#nextnav a').click(function(e) {
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
		 * SVG - for the diagonals.
		 * =========================== */
		/*
$('#keyword').empty();
		var draw = SVG('keyword').size(960, 120),
			svgPaths = [];
		
		draw.move(0,0);
*/
		
		/*
function drawPath(width, offsetY, offsetX) {
			var group = draw.group();
			offsetY = (typeof offsetY != 'undefined') ? offsetY : -500;
			offsetX = (typeof offsetX != 'undefined') ? offsetX : 0;
			for(var i=0; i<100; i++) {
				var rect = draw.rect(width, $(window).width()).attr({ fill: '#fff' });
				rect.move(offsetX + (i*(2*width)), offsetY);
				rect.rotate(25,0,0);
				group.add(rect);
			}
			
			group.move(0,0);
			return group;
		}
*/
		
		
		
		/* ===========================
		 * This section will need to be repeated per block.
		 * =========================== */
		 
		/*
$('.block').each(function() {
			var text = draw.text($(this).data('keyword').toUpperCase()).attr({fill: '#fff'});
			text.font({
				family:   'BrandonGrotesque',
				size:     120,
				weight:   'bold'
			});
			var g = drawPath(5, -1000, 0);
			
			text.show();
			text.style({'text-align': 'left', width: '100%', 'background-color': 'red'});
			text.maskWith(g);
			
			var group = draw.group();
			text.center(($(window).width() - text.bbox().width)/2, 40);
			group.add(text);
			
			group.style({'text-align': 'center', width: '100%'});
			var path = drawPath(5, -1000, 0 - 10);
			
			group.maskWith(path);
			group.move(-((960-group.bbox().width)/2),0);
			
			if(!$(this).is('.first')) {
				path.x(($(window).scrollTop() /  ( $('.block:first').offset().top + $('.block:first').height() )) -5);
				g.hide();
			}
			
			svgPaths.push({path: path, block: $(this), g: g});
		});
*/
		
			
		
		
		/*
var prevScroll = 0,
			currentOffset = 0;
		$(window).scroll(function() {
			var current = $('.block').filter(function() {
				return $(window).scrollTop() >= ($(this).offset().top - $('#header').height() + 1) &&
							($(this).offset().top - $('#header').height() + $(this).height()) <= (($(window).scrollTop() + $(window).height()));
			}).last();
			
			current = $(svgPaths).filter(function() {
				return this.block.attr('id') == current.attr('id');
			});
			
			for(var i in svgPaths) {
				svgPaths[i].g.hide();
			}
			
			if(current.length) {
				current = current[0];
				
				current.g.show();
				
				var offset = ($(window).scrollTop() /  ( current.block.offset().top + current.block.height() )) * 10;
				current.path.x((prevScroll - $(window).scrollTop()) >= 0 ? -offset : offset);
			}
			
			prevScroll = $(window).scrollTop();
		});
*/
		
		
		
		
		
	
		/*
$(window).resize(function() {
			var _h = 0;
			
			$('#work .block').each(function() {
				$(this).height($(window).height() - $('#header').height());
				_h += $(this).height();
			});
			
			$('#content,#work').height(_h);
			
			_h = 0;
			
			$('body:not(.mobile) .contain').each(function() {
				_h = 0;
				$(this).children().each(function() {
					_h += $(this).height();
				});
				
				$(this).attr("data-top", (-_h/2) + 180);
				$(this).height(_h).css('margin-top', (-_h/2) + 180);
			});
			
			$('body:not(.mobile) #heading').css({
				top: ($(window).height() - $('body:not(.mobile) #heading').height() - 100) /2
			}).attr('data-top', ($(window).height() - $('body:not(.mobile) #heading').height() - 100) /2);
			
			$('body:not(.mobile) .heading').css({
				left: ($(window).width() - 960) / 2
			});
			
			
		});
*/
		
		
		
		/*
$(window).resize();
		
		$(window).scroll(function() {
			if(($(window).scrollTop() + $(window).height()) >= $('#footer').offset().top) {
				$('#nextnav').css('position', 'absolute');
			} else {
				$('#nextnav').css('position', 'fixed');
			}
			
			if(($(window).scrollTop() + $(window).height()) >= $('#footer').offset().top) {
				$('#nextnav').addClass('up');
			}
			
			if($(window).scrollTop() == 0) {
				$('#nextnav').removeClass('up');
			}
			
			
			// * ===========================
			// * Ensure that the heading attaches itself
			// * to the last block.
			// * ===========================
			if($('#work .block:last').length > 0 && $(window).scrollTop() >= ($('#work .block:last').offset().top - $('#header').height())) {
				$('#heading').css({
					top: $('#heading').data('top') - ($(window).scrollTop() - ($('#work .block:last').offset().top - $('#header').height()))
				});
				
			} else {
				$('#heading').css({
					top: $('#heading').data('top')
				});
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
*/
		
		
		
		/* ===========================
		 * Animate news
		 * =========================== */
		/*
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
*/
		
		
		/* ===========================
		 * Animate overlays.
		 * =========================== */
		/*
var previousScroll = 0;
		$(window).scroll(function() {
			$('#work .block').each(function(i, el) {
				if (($(window).scrollTop() + $(window).height()) > $(this).offset().top && ($(this).offset().top + $(this).height()) > $(window).scrollTop()) {
					$(this).find('.overlay').css({
						'background-position-y': Math.min(0, -(($(window).scrollTop() - $('#header').height()) / 7))
					});
					
					$(this).css({
						'background-position-y': Math.min(0, -(($(window).scrollTop() - $('#header').height()) / 20))
					});
					
					if($(this).is('.first') && $(window).scrollTop() > 100) {
						$(this).find('.intro').hide();
					} else {
						$(this).find('.intro').show();
					}
				}
			});
		});
*/
	});
	
});