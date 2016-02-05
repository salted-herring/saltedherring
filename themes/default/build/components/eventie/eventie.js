/*!
 * eventie v1.0.6
 * event binding helper
 *   eventie.bind( elem, 'click', myFn )
 *   eventie.unbind( elem, 'click', myFn )
 * MIT license
 */

(function(e){function t(t){var n=e.event;return n.target=n.target||n.srcElement||t,n}var n=document.documentElement,r=function(){};n.addEventListener?r=function(e,t,n){e.addEventListener(t,n,!1)}:n.attachEvent&&(r=function(e,n,r){e[n+r]=r.handleEvent?function(){var n=t(e);r.handleEvent.call(r,n)}:function(){var n=t(e);r.call(e,n)},e.attachEvent("on"+n,e[n+r])});var i=function(){};n.removeEventListener?i=function(e,t,n){e.removeEventListener(t,n,!1)}:n.detachEvent&&(i=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(r){e[t+n]=undefined}});var s={bind:r,unbind:i};typeof define=="function"&&define.amd?define(s):typeof exports=="object"?module.exports=s:e.eventie=s})(window);