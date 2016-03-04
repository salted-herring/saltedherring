/*!
 * VERSION: 0.1.12
 * DATE: 2015-08-11
 * UPDATES AND DOCS AT: http://greensock.com/jquery-gsap-plugin/
 *
 * Requires TweenLite version 1.8.0 or higher and CSSPlugin.
 *
 * @license Copyright (c) 2013-2016, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */

(function(e){var t=e.fn.animate,n=e.fn.stop,r=!0,i,s,o,u=function(e){var t={},n;for(n in e)t[n]=e[n];return t},a={overwrite:1,delay:1,useFrames:1,runBackwards:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,autoCSS:1},f=",scrollTop,scrollLeft,show,hide,toggle,",l=f,c=function(e,t){for(var n in a)a[n]&&e[n]!==undefined&&(t[n]=e[n])},h=function(e){return function(t){return e.getRatio(t)}},p={},d=function(){var t=window.GreenSockGlobals||window,n,r,u;i=t.TweenMax||t.TweenLite,i&&(n=(i.version+".0.0").split("."),r=!(Number(n[0])>0&&Number(n[1])>7),t=t.com.greensock,s=t.plugins.CSSPlugin,p=t.easing.Ease.map||{});if(!i||!s||r){i=null,!o&&window.console&&(window.console.log("The jquery.gsap.js plugin requires the TweenMax (or at least TweenLite and CSSPlugin) JavaScript file(s)."+(r?" Version "+n.join(".")+" is too old.":"")),o=!0);return}if(e.easing){for(u in p)e.easing[u]=h(p[u]);d=!1}};e.fn.animate=function(n,o,a,f){n=n||{};if(d){d();if(!i||!s)return t.call(this,n,o,a,f)}if(!r||n.skipGSAP===!0||typeof o=="object"&&typeof o.step=="function")return t.call(this,n,o,a,f);var h=e.speed(o,a,f),v={ease:p[h.easing]||(h.easing===!1?p.linear:p.swing)},m=this,g=typeof o=="object"?o.specialEasing:null,y,b,w,E;for(b in n){y=n[b],y instanceof Array&&p[y[1]]&&(g=g||{},g[b]=y[1],y=y[0]);if(y==="show"||y==="hide"||y==="toggle"||l.indexOf(b)!==-1&&l.indexOf(","+b+",")!==-1)return t.call(this,n,o,a,f);v[b.indexOf("-")===-1?b:e.camelCase(b)]=y}if(g){v=u(v),E=[];for(b in g)y=E[E.length]={},c(v,y),y.ease=p[g[b]]||v.ease,b.indexOf("-")!==-1&&(b=e.camelCase(b)),y[b]=v[b],delete v[b];E.length===0&&(E=null)}return w=function(t){var n=u(v),r;if(E){r=E.length;while(--r>-1)i.to(this,e.fx.off?0:h.duration/1e3,E[r])}n.onComplete=function(){t?t():h.old&&e(this).each(h.old)},i.to(this,e.fx.off?0:h.duration/1e3,n)},h.queue!==!1?(m.queue(h.queue,w),typeof h.old=="function"&&e(m[m.length-1]).queue(h.queue,function(e){h.old.call(m),e()})):w.call(m),m},e.fn.stop=function(e,t){n.call(this,e,t);if(i){if(t){var r=i.getTweensOf(this),s=r.length,o;while(--s>-1)o=r[s].totalTime()/r[s].totalDuration(),o>0&&o<1&&r[s].seek(r[s].totalDuration())}i.killTweensOf(this)}return this},e.gsap={enabled:function(e){r=e},version:"0.1.12",legacyProps:function(e){l=f+e+","}}})(jQuery);