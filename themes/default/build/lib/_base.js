define(["jquery","backbone","router"],function(e,t,n){document.addEventListener("touchstart",function(){},!0);var r=!1;/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)&&(r=!0),window.docHeight=function(){var e=document.body,t=document.documentElement;return Math.max(e.scrollHeight,e.offsetHeight,t.clientHeight,t.scrollHeight,t.offsetHeight)},r?(e("#btn-to-bottom").length>0&&(e("#btn-to-bottom").click(function(e){e.preventDefault()}),e("#btn-to-bottom")[0].addEventListener("touchend",function(){e("html,body").animate({scrollTop:e("#footer").offset().top},500)})),e("#menu_icon")[0].addEventListener("touchend",function(){console.log("clicked"),e("#main_nav").toggleClass("collapse expand")})):e("#menu_icon").click(function(t){e("#main_nav").toggleClass("collapse expand")}),e(document).on("click","#main_nav a, #logo a",function(){e("#main_nav a, #logo a").removeClass("current"),e(this).addClass("current")}),e("#projectnav a").hover(function(){var t=e(this).outerWidth(!0)+Math.max(e(this).find("strong").outerWidth(),e(this).find("em").outerWidth());e(this).is(".next")?e(this).find("em, strong").width(Math.max(e(this).find("strong").outerWidth(),e(this).find("em").outerWidth())).css("right",e(this).outerWidth(!0)):e(this).find("em, strong").css("left",e(this).outerWidth(!0)),e(this).addClass("over").width(t)},function(){e(this).removeClass("over").removeAttr("style")}),e(document).on("hover","#projectnav a",function(){e(this).width(e(this).outerWidth(!0)+Math.max(e(this).find("strong").outerWidth(),e(this).find("em").outerWidth())),e(this).addClass("over")},function(){e(this).removeAttr("style"),e(this).removeClass("over")}),e(window).scroll(function(t){e(window).scrollTop()+e(window).height()>=e(document).height()?e("footer .salt").addClass("animate"):e("footer .salt").removeClass("animate");if(e("body:not(.mobile) header.overlay:not(.no-images)").length>0){var n=e("header.overlay").outerHeight(!0),r=30;e(window).scrollTop()<180?e(".detailscontainer:not(.nofix)").addClass("fixedcontainer"):e(".detailscontainer:not(.nofix)").removeClass("fixedcontainer"),e(window).scrollTop()>157?e(".overlay").addClass("small"):e(".overlay").removeClass("small").css("top",0)}e("body:not(.mobile) nav#banner").length>0?e(window).scrollTop()>200?e("nav#banner").addClass("small"):e("nav#banner").removeClass("small"):e("body:not(.mobile) div#banner").length>0&&(e(window).scrollTop()>50?e("header").addClass("small"):e("header").removeClass("delay").removeClass("small"));if(e("#projectnav").length>0){var i=docHeight()-e("footer").height(),s=parseInt(e("#content").css("padding-bottom")),o=i-s,u=e(window).scrollTop()+e(window).height();u>=o?(e("#projectnav .next").css({right:0-(u-o)}),e("#projectnav .previous").css({left:0-(u-o)}),e(".overlay").css({top:102-(u-o)})):(e("#projectnav .next").css({right:0}),e("#projectnav .previous").css({left:0}),e(".overlay").css({top:102}))}})});