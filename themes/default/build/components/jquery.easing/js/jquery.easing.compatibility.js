/*
 * jQuery Easing Compatibility v1 - http://gsgd.co.uk/sandbox/jquery.easing.php
 *
 * Adds compatibility for applications that use the pre 1.2 easing names
 *
 * Copyright (c) 2007 George Smith
 * Licensed under the MIT License:
 *   http://www.opensource.org/licenses/mit-license.php
 */

jQuery.extend(jQuery.easing,{easeIn:function(e,t,n,r,i){return jQuery.easing.easeInQuad(e,t,n,r,i)},easeOut:function(e,t,n,r,i){return jQuery.easing.easeOutQuad(e,t,n,r,i)},easeInOut:function(e,t,n,r,i){return jQuery.easing.easeInOutQuad(e,t,n,r,i)},expoin:function(e,t,n,r,i){return jQuery.easing.easeInExpo(e,t,n,r,i)},expoout:function(e,t,n,r,i){return jQuery.easing.easeOutExpo(e,t,n,r,i)},expoinout:function(e,t,n,r,i){return jQuery.easing.easeInOutExpo(e,t,n,r,i)},bouncein:function(e,t,n,r,i){return jQuery.easing.easeInBounce(e,t,n,r,i)},bounceout:function(e,t,n,r,i){return jQuery.easing.easeOutBounce(e,t,n,r,i)},bounceinout:function(e,t,n,r,i){return jQuery.easing.easeInOutBounce(e,t,n,r,i)},elasin:function(e,t,n,r,i){return jQuery.easing.easeInElastic(e,t,n,r,i)},elasout:function(e,t,n,r,i){return jQuery.easing.easeOutElastic(e,t,n,r,i)},elasinout:function(e,t,n,r,i){return jQuery.easing.easeInOutElastic(e,t,n,r,i)},backin:function(e,t,n,r,i){return jQuery.easing.easeInBack(e,t,n,r,i)},backout:function(e,t,n,r,i){return jQuery.easing.easeOutBack(e,t,n,r,i)},backinout:function(e,t,n,r,i){return jQuery.easing.easeInOutBack(e,t,n,r,i)}});