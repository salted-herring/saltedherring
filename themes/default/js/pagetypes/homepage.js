require(['jquery', 'backbone', 'underscore', '_base'], function($) {

	

	$(function() {
		/*
if($('body').is('.mobile')) {
			return;
		}
*/
		var prevPosition = 0,
			scrolled = false,
			latestKnownScrollY = 0,
			winHeight = 0,
			ticking = false;
		
		// setup animation frame.
		if(!$('body').is('.mobile')) {
			requestTick();
		}
		
		
		/*
var index = 100;
		$('#work .block').each(function() {
			$(this).css({
				'z-index': index--
			});
		});
*/
		
		/* ===========================
		 * The background-attachment is
		 * causing issues on load. Scrolling
		 * to the top seems to fix it.
		 * =========================== */
		/*
setTimeout(function() {
		    window.scrollTo(0, 0);
		}, 1);
*/

		/* ===========================
		 * On resize - make sure:
		 * - The footer is in the correct place
		 * - The content container & each block are full height.
		 * =========================== */
		function _resize() {

			var targetHeight = ($('#work .block').length * $(window).height()) - parseInt($('#content').css('padding-top')) - (($('#work .block').length - 1) * $('#header').height());
			if(targetHeight > 0) {
				$('#content, #work').height(targetHeight);
			}

			

			$('#work .block').each(function(i, el) {
				var top = (i * ($(window).height() - $('#header').height()));
				$(this).height($(window).height() - $('#header').height());
				$(this).css({
					width: $(window).width(),
					height: $(window).height(),
					top: top
				});

				$(this).attr('data-top', parseInt($(this).position().top));
				$(this).attr('data-headingtop', parseInt($(this).find('.heading').offset().top));
		        
		        function resize(imgWidth, imgHeight, targetWidth, targetHeight) {
			        var maxWidth = targetWidth,
						maxHeight = targetHeight,
						widthRatio = maxWidth / imgWidth,
						heightRatio = maxHeight / imgHeight,
						ratio = widthRatio;
	
					if (widthRatio * imgHeight < maxHeight) {
					    ratio = heightRatio;
					}
					
					return {
						w: imgWidth * ratio,
						h: imgHeight * ratio
					}	
		        }

				var dimensions = resize($(this).data('imgwidth'), $(this).data('imgheight'), $(window).width(), $(window).height()),
					dimensionsOverlay = resize($(this).data('imgwidth'), $(this).data('imgheight'), $(window).width(), $(window).height());
				
				
				/*
$(this).css({
					'background-size': dimensions.w + 'px ' + dimensions.h + 'px',
					'-webkit-background-size': dimensions.w + 'px ' + dimensions.h + 'px',
					'-moz-background-size': dimensions.w + 'px ' + dimensions.h + 'px'
				}).find('.overlay').css({
					'background-size': dimensionsOverlay.w + 'px ' + dimensionsOverlay.h + 'px',
					'-webkit-background-size': dimensionsOverlay.w + 'px ' + dimensionsOverlay.h + 'px',
					'-moz-background-size': dimensionsOverlay.w + 'px ' + dimensionsOverlay.h + 'px'
				});
*/
				
				/*
$(this).find('img').css({
					width: dimensions.w,
					height: dimensions.h
				});
*/
			});

			$('#footer').show();

			$('body:not(.mobile) #heading').attr('data-top', parseInt(($(window).height() - $('#header').height() + 16) / 2));
			if($('body:not(.mobile) .block:last').length > 0) {
				$('body:not(.mobile) .block:last').attr('data-top', parseInt($('body:not(.mobile) .block:last').offset().top));
			}
			
			positionHeading();
			
			
			if($('#work .block.first').is('.init')) {
				setTimeout(function() {
					$('#work .block.first.init').removeClass('init');
				}, 5000); 
			}
		}
		
		_resize();
		
		$(window).resize(function() {
			
			if($('body').is('.mobile')) {
				return false;
			}

			_resize();
			
		});

		/*
window.addEventListener("orientationchange", function() {
			//$(window).resize();
		}, false);
*/


		// * ===========================
		// * Ensure that the heading attaches itself
		// * to the last block.
		// * ===========================
		function positionHeading() {
			var _max = 95;

			if($('body').is('.mobile')) {
				$('#work .block').find('.heading, .large').show();
				return;
			}

			$('#work .block:visible').each(function(i, el) {
				var top = $(this).offset().top;
				
				$(this).find('.heading').show();

				if(top < (latestKnownScrollY + (winHeight/2))) {

					var condition = top < latestKnownScrollY;
					var _h = condition ? (winHeight / 2) : ((winHeight / 2)) - Math.abs(latestKnownScrollY - top);
					var newTop = $(this).offset().top-latestKnownScrollY;
					
					if($(this).is('.first')) {
						_h += 53;
						//console.log(Math.ceil(newTop + _h), ((winHeight / 2)) - Math.abs(latestKnownScrollY - top));
						if(latestKnownScrollY > -1) {
							$(this).find('.heading').hide();
							$(this).find('.large').show();
						} else {
							$(this).find('.heading').show();
							$(this).find('.large').hide();
						}
					} else {
						if(Math.ceil(newTop + _h) <= 0) {
							$(this).find('.heading').hide();
							$(this).find('.large').show();
						} else {
							$(this).find('.heading').show();
							$(this).find('.large').hide();
						}
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
		}


		/* ===========================
		 * No more to see on mobile.
		 * =========================== */
		/*
if($('body').is('.mobile')) {

			return;
		}
*/

		
		function update() {
			if($(window).width() <= 1024) {
				return false;
			}
			ticking = false;
			latestKnownScrollY = $(window).scrollTop();
			winHeight = $(window).height();
			
			if((latestKnownScrollY + winHeight) >= $('#footer').offset().top) {
				var clone = $('#nextnav').clone(true, true);
				$('#nextnav').remove();
				$('#footer').prepend(clone);
			} else {
				if($('#footer #nextnav').length > 0) {
					var clone = $('#nextnav').clone(true, true);
					$('#nextnav').remove();
					$('#work').after(clone);
				}
				$('#nextnav').removeAttr('style');
			}

			if((latestKnownScrollY + winHeight) >= $('#footer').offset().top) {
				$('#nextnav').addClass('up');
			}

			if(latestKnownScrollY == 0) {
				$('#nextnav').removeClass('up');
			}

			prevPosition = latestKnownScrollY;

			positionHeading();
			scrolled = true;

			/* ===========================
			 * Animate overlays.
			 * =========================== */
			$('body:not(.mobile) #work .block').filter(function() {
				var top = $(this).offset().top,
					bottom = top + winHeight;
				
				return top < (latestKnownScrollY + winHeight) && bottom > latestKnownScrollY;
			}).each(function(i, el) {
				if ((latestKnownScrollY + winHeight) > $(this).offset().top) {
					var top = -200 + (((latestKnownScrollY - $(this).data('top')) / winHeight) * 100);
					
					$(this).find('.overlay').css({
						'background-position': '50% ' + top + '%'
					});
					
					var pos = 0 - (.125 * (latestKnownScrollY - $(this).offset().top));

					$(this).css({
						'background-position': '50% ' + (pos) + 'px'
					});

					if($(this).is('.first') && latestKnownScrollY > 100) {
						$(this).find('.intro').addClass('hide');
					} else {
						$(this).find('.intro').removeClass('hide');
					}
				}
			});
		}
		
		function onScroll() {
			requestTick();
		}
		
		function requestTick() {
			var animationFrame = Modernizr.prefixed('requestAnimationFrame', window);
			if(!ticking && typeof animationFrame == 'function') {
				animationFrame(update);
			} else if(typeof animationFrame != 'function') {
				update();
			}
			ticking = true;
		}

		if(!$('body').is('.mobile')) {
			$(window).scroll(function(e) {
				e.preventDefault();
				onScroll();
			});
			
			/* ===========================
			 * Load in slider images.
			 * =========================== */
			var Images = {
				data: {},
				toLoad: {},
				length: 0,
	
				clone: function() {
					this.toLoad = $.extend(true, {}, this.data);
				},
				
				previousX: 0,
				previousY: 0
			};
	
	
			$.get('themes/default/json/sliders.json', function(response, status, xhr) {
				if(status == 'success') {
					
					for(var i in response) {
						if(response[i].Images) {
							var target = $('#work .block[data-id="' + response[i].Slider + '"]');
	
							Images.data[response[i].Slider] = [];
	
							for(var img in response[i].Images) {
								Images.data[response[i].Slider].push(response[i].Images[img].URL);
								Images.length = ++Images.length;
							}
						}
					}
	
					Images.clone();
	
					function removeItem(images, src) {
						for(var l in images) {
							if(images[l] == src) {
								images.splice(l, 1);
								Images.length = Images.length - 1;
								break;
							}
						}
					}
	
					for(var i in Images.toLoad) {
						for(var j in Images.toLoad[i]) {
							if($('body').is('.mobile') && j>0) {
								break;
							}
							$('<img/>').load(function(response, status, xhr) {
								
								
								// we can't load the image, so remove
								// from list of available images.
								if(status == 'error') {
									var images = Images.data[$(this).attr('id')];
								} else {
									// no error, so remove from toLoad & check if we're ready to roll.
									var images = Images.toLoad[$(this).attr('id')];
								}
								
								
								$('#slider-' + $(this).attr('id')).append($(this));
	
								removeItem(images, $(this).attr('src'));
	
								if(Images.length <= 0) {
									$(window).resize();
									
									$('#work .block').addClass('loaded').on('mousemove', function(e) {
										e.stopPropagation();
										var count = $(this).data('images'),
											id = $(this).data('id'),
											pos = e.clientX,
											target = Math.ceil((pos / ($(window).width() / 2)) * count) % count,
											direction = Math.ceil(Math.ceil((pos / ($(window).width() / 2)) * count)/count) % 2,
											target = direction == 0 ? target : (count - target) % count;
											
											//console.log(Math.abs(Images.previousX - e.clientX), Math.abs(Images.previousY - e.clientY));
	
										if(target != 0) {
											var bg = $(this).css('background-image');
											bg = bg.match(/url\((.*)\);?/);
											
											//$(this).find('img.current').removeClass('current');
											//$(this).find('img').eq(target).addClass('current');
											
											$(this).css('background-image', 'url(' + Images.data[id][target] + ')');
										}
										
										return false;
									});
									
									$('#work .block').addClass('show');
									
								}
							}).attr('id', i).attr('src', Images.toLoad[i][j]);
						}
					}
				}
			}, 'json');
		}
		


		







		$('#nextnav a').click(function(e) {
			e.preventDefault();

			if($(this).parent().is('.up')) {
				var first = $('.block').filter(function() {
					return $(this).offset().top < $(window).scrollTop();
				}).filter(':last');

				if(first.index() == $('.block').length || first.index() == 1) {
					target = first;
				} else {
					target = first.prev();
				}

				$('body,html').animate({
					scrollTop: 0
				}, 500);

				return;

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
				}, 500, function() {
					$('#nextnav').removeClass('up');
				});
			} else {
				$('#nextnav').addClass('up');
				$('body,html').animate({
					scrollTop: $('footer').offset().top
				}, 500);
			}
		});


		$('.first nav a').hover(function() {
			$(this).parents('nav').toggleClass('hover');
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