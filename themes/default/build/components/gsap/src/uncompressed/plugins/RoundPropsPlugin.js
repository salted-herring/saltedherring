/*!
 * VERSION: 1.7.0
 * DATE: 2018-05-21
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/

var _gsScope=typeof module!="undefined"&&module.exports&&typeof global!="undefined"?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){var e=_gsScope._gsDefine.plugin({propName:"roundProps",version:"1.7.0",priority:-1,API:2,init:function(e,t,n){return this._tween=n,!0}}),t=function(e){var t=e<1?Math.pow(10,(e+"").length-2):1;return function(n){return(Math.round(n/e)*e*t|0)/t}},n=function(e,t){while(e)!e.f&&!e.blob&&(e.m=t||Math.round),e=e._next},r=e.prototype;r._onInitAllProps=function(){var e=this._tween,r=e.vars.roundProps,i={},s=e._propLookup.roundProps,o,u,a,f;if(typeof r=="object"&&!r.push)for(f in r)i[f]=t(r[f]);else{typeof r=="string"&&(r=r.split(",")),a=r.length;while(--a>-1)i[r[a]]=Math.round}for(f in i){o=e._firstPT;while(o)u=o._next,o.pg?o.t._mod(i):o.n===f&&(o.f===2&&o.t?n(o.t._firstPT,i[f]):(this._add(o.t,f,o.s,o.c,i[f]),u&&(u._prev=o._prev),o._prev?o._prev._next=u:e._firstPT===o&&(e._firstPT=u),o._next=o._prev=null,e._propLookup[f]=s)),o=u}return!1},r._add=function(e,t,n,r,i){this._addTween(e,t,n,n+r,t,i||Math.round),this._overwriteProps.push(t)}}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();