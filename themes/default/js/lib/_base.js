define(['jquery', 'backbone', 'router', 'tweenmax'], function($, Backbone, Router) {

    document.addEventListener("touchstart", function() {}, true);
    var isMobile = false;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        isMobile = true;
    }

    window.docHeight = function() {
        var body = document.body,
            html = document.documentElement;

        return Math.max(body.scrollHeight, body.offsetHeight,
            html.clientHeight, html.scrollHeight, html.offsetHeight);
    }

    if (!isMobile) {
        $('#menu_icon').click(function(e) {
            $('#main_nav').toggleClass('collapse expand');
        });

    } else {
        if ($('#btn-to-bottom').length > 0) {
            $('#btn-to-bottom').click(function(e) {
                e.preventDefault();
            });
            $('#btn-to-bottom')[0].addEventListener('touchend', function() {
                $('html,body').animate({
                    scrollTop: $('#footer').offset().top
                }, 500);
            });
        }
        $('#menu_icon')[0].addEventListener('touchend', function() {
            $('#main_nav').toggleClass('on');
            TweenMax.to($('#main_nav'), 0.5, {
                top: $('#main_nav').hasClass('on') ? 55 : 0
            });

        });
    }

    $(document).on('click', '#main_nav a, #logo a', function() {
        $('#main_nav a, #logo a').removeClass('current');
        $(this).addClass('current');
    });

    $('#projectnav a').hover(function() {
        var _w = $(this).outerWidth(true) + Math.max($(this).find('strong').outerWidth(), $(this).find('em').outerWidth());
        if ($(this).is('.next')) {
            $(this).find('em, strong').width(Math.max($(this).find('strong').outerWidth(), $(this).find('em').outerWidth())).css('right', $(this).outerWidth(true));
        } else {
            $(this).find('em, strong').css('left', $(this).outerWidth(true));
        }
        $(this).addClass('over').width(_w);
    }, function() {
        $(this).removeClass('over').removeAttr('style');
    });


    $(document).on('hover', '#projectnav a', function() {
        $(this).width($(this).outerWidth(true) + Math.max($(this).find('strong').outerWidth(), $(this).find('em').outerWidth()));
        $(this).addClass('over');
    }, function() {
        $(this).removeAttr('style');
        $(this).removeClass('over');
    });


    $(window).scroll(function(e) {
        if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
            $('footer .salt').addClass('animate');
        } else {
            $('footer .salt').removeClass('animate');
        }

        if ($('body:not(.mobile) header.overlay:not(.no-images)').length > 0) {

            var headerHeight = $('header.overlay').outerHeight(true),
                offset = 30;

            if ($(window).scrollTop() < (180)) {
                $('.detailscontainer:not(.nofix)').addClass('fixedcontainer');
            } else {

                $('.detailscontainer:not(.nofix)').removeClass('fixedcontainer');
            }

            if ($(window).scrollTop() > 157) {
                $('.overlay').addClass('small');
            } else {
                $('.overlay').removeClass('small').css('top', 0);
            }
        }



        if ($('body:not(.mobile) nav#banner').length > 0) {
            if ($(window).scrollTop() > 200) {
                $('nav#banner').addClass('small');
            } else {
                $('nav#banner').removeClass('small');
            }
        } else if ($('body:not(.mobile) div#banner').length > 0) {
            if ($(window).scrollTop() > 50) {
                $('header').addClass('small');
            } else {
                $('header').removeClass('delay').removeClass('small'); //.css('top',0);
            }
        }


        if ($('#projectnav').length > 0) {
            var bottom = docHeight() - $('footer').height(),
                contentbottom = parseInt($('#content').css('padding-bottom')),
                top = bottom - contentbottom,
                current = $(window).scrollTop() + $(window).height();

            if (current >= top) {
                $('#projectnav .next').css({
                    right: 0 - (current - top)
                });

                $('#projectnav .previous').css({
                    left: 0 - (current - top)
                });

                $('.overlay').css({
                    top: 102 - (current - top)
                });
            } else {
                $('#projectnav .next').css({
                    right: 0
                });

                $('#projectnav .previous').css({
                    left: 0
                });

                $('.overlay').css({
                    top: 102
                });
            }
        }
    });
});
