/*!
 * eventie v1.0.3
 * event binding helper
 *   eventie.bind( elem, 'click', myFn )
 *   eventie.unbind( elem, 'click', myFn )
 */

(function(e){var t=document.documentElement,n=function(){};t.addEventListener?n=function(e,t,n){e.addEventListener(t,n,!1)}:t.attachEvent&&(n=function(t,n,r){t[n+r]=r.handleEvent?function(){var t=e.event;t.target=t.target||t.srcElement,r.handleEvent.call(r,t)}:function(){var n=e.event;n.target=n.target||n.srcElement,r.call(t,n)},t.attachEvent("on"+n,t[n+r])});var r=function(){};t.removeEventListener?r=function(e,t,n){e.removeEventListener(t,n,!1)}:t.detachEvent&&(r=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(r){e[t+n]=undefined}});var i={bind:n,unbind:r};typeof define=="function"&&define.amd?define(i):e.eventie=i})(this);