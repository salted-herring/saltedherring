require(['jquery', 'backbone', 'underscore', '_base'], function($) {
	
     //   alert($(window).width() +', ' + $(window).height());
    
	
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

		// this multiplies each slide taller than the window height
		// increase = 1;
		increase = 1.15;

		/* ===========================
		 * On resize - make sure:
		 * - The footer is in the correct place
		 * - The content container & each block are full height.
		 * =========================== */
		function _resize() {
			var targetHeight = ($('#work .block').length * $(window).height()) - parseInt($('#content').css('padding-top')) - (($('#work .block').length - 1) * $('#header').height());
			if(targetHeight > 0) {
				$('#content, #work').height((targetHeight)*increase);
			}

			var w = window,
			    d = document,
			    e = d.documentElement,
			    g = d.getElementsByTagName('body')[0],
			    x = w.innerWidth || e.clientWidth || g.clientWidth,
			    y = w.innerHeight|| e.clientHeight|| g.clientHeight;





			$('#work .block').each(function(i, el) {
				var top = (i * ((y*increase) - $('#header').height()));
				$(this).css({
					width: $(window).width(),
					height: (y*increase) - $('#header').height(),
					top: top
				});
				if ($(window).width() > 480 && $(window).width()<=768) {
					$(this).height(Math.ceil($(window).width()*0.8533) -1);
				}

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

				$(this).show();
				if($('body').is('.mobile')) {
					if ($(window).width() <= 1024) {
						$(this).height($(window).height() - (i == 0?0:-$('#header').height()));
					}
				}else{
					if ($(window).width() <= 1024) {
						$(this).height($(window).height() - (i == 0?0:$('#header').height()));
					}
				}
			});

			$('#footer').show();

			$('body:not(.mobile) #heading').attr('data-top', parseInt(($(window).height() - $('#header').height() + 16) / 2));
			if($('body:not(.mobile) .block:last').length > 0) {
				$('body:not(.mobile) .block:last').attr('data-top', parseInt($('body:not(.mobile) .block:last').offset().top));
			}

			positionHeading();
			positionExplanation();


			if($('#work .block.first').is('.init')) {
				setTimeout(function() {
					$('#work .block.first.init').removeClass('init');
				}, 5000);
			}
		}

		_resize();
		if(!$('body').is('.mobile')) {
			$(window).resize(_resize);
		}else{
			$(window).resize(function(e) {
                $('body').removeClass('landscape');
				if ($(window).height() >= 1024 || $(window).width() > 1024) {
					if ($(window).width() >= $(window).height()) {
						$('body').addClass('landscape');
					}
				}
            });
		}
			

		// for varying height text explanations margin top.
		// as they are transform 50% from the top. they need to float
		// with other things
		function positionExplanation() {

			$('#work .block:visible').each(function(i, el) {
				exptop = $(this).find(".explanation").height();
				// console.log(exptop);

				if($(this).is('.first')) {} else {
					$(this).find('.explanation').css({
						marginTop: 20+(exptop/2)
					});
				}
			});

		}


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
				$(this).css('z-index', $('#work .block').length - i);
				var top = $(this).offset().top;

				$(this).find('.heading').show();
				if(top < (latestKnownScrollY + (winHeight/2))) {

					var condition = top < latestKnownScrollY;
					var _h = condition ? (winHeight / 2) : ((winHeight / 2)) - Math.abs(latestKnownScrollY - top);
					
					var newTop = top-latestKnownScrollY + $(this).find('.heading h1').height();

					if($(this).is('.first')) {
						_h += 53;
						if(latestKnownScrollY > -1) {
							$(this).find('.heading').hide();
							$(this).find('.large').show();
						} else {
							$(this).find('.heading').show();
							$(this).find('.large').hide();
						}
					} else {
						if(Math.ceil(newTop) <= $('#header').height() + $(this).find('.heading h1').height() * 2) {
							$(this).find('.heading').hide();
							$(this).find('.large').show();
						} else {
							$(this).find('.heading').show();
							$(this).find('.large').hide();
						}
					}

					
					
				} else {
					
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
			
			latestKnownScrollY = $(window).scrollTop();
			
			/* ===========================
			 * Intro bar work
			 * =========================== */
			if(latestKnownScrollY > 100) {
				$('#content .intro').addClass('hideFooter');
			} else {
				$('#content .intro').removeClass('hideFooter');
			}
			
			if($(window).width() <= 1024) {
				return false;
			}
			
			ticking = false;
			
			winHeight = $(window).height();

			if((latestKnownScrollY + winHeight) >= $('#footer').offset().top) {
				
				$('#footer').prepend($('#nextnav'));
			} else {
				if($('#footer #nextnav').length > 0) {
					$('#work').append($('#nextnav'));
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
			// positionExplanation();
			scrolled = true;

			/* ===========================
			 * Animate overlays.
			 * =========================== */
			$('body:not(.mobile) #work .block').each(function(i, el) {
				
				var this_top = $(this).offset().top,
				bottom = this_top + winHeight;
				
				if (this_top < (latestKnownScrollY + winHeight) && bottom > latestKnownScrollY) {
				
					if ((latestKnownScrollY + winHeight) > $(this).offset().top) {
						var top = (-330 + (((latestKnownScrollY - $(this).data('top')) / winHeight) * 500));
	
						$(this).find('.overlay').css({
							'background-position': '50% ' + top + '%'
						});
	
						var pos = 0 - (.125 * (latestKnownScrollY - $(this).offset().top));
	
						$(this).css({
							'background-position': '50% ' + (pos) + 'px'
						});
	
						
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
								console.log(Images.length);
								if(Images.length <= 1) {
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
		}else{
			$(window).scroll(function(e) {
				var latestKnownScrollY = $(window).scrollTop();
                if(latestKnownScrollY > 100) {
					$('#content .intro').addClass('hideFooter');
				} else {
					$('#content .intro').removeClass('hideFooter');
				}
            });
		}

	});

});
