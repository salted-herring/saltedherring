/*!
 * eventie v1.0.6
 * event binding helper
 *   eventie.bind( elem, 'click', myFn )
 *   eventie.unbind( elem, 'click', myFn )
 * MIT license
 */

(function(e){function r(t){var n=e.event;return n.target=n.target||n.srcElement||t,n}var t=document.documentElement,n=function(){};t.addEventListener?n=function(e,t,n){e.addEventListener(t,n,!1)}:t.attachEvent&&(n=function(e,t,n){e[t+n]=n.handleEvent?function(){var t=r(e);n.handleEvent.call(n,t)}:function(){var t=r(e);n.call(e,t)},e.attachEvent("on"+t,e[t+n])});var i=function(){};t.removeEventListener?i=function(e,t,n){e.removeEventListener(t,n,!1)}:t.detachEvent&&(i=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(r){e[t+n]=undefined}});var s={bind:n,unbind:i};typeof define=="function"&&define.amd?define(s):typeof exports=="object"?module.exports=s:e.eventie=s})(window);