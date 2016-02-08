/*!
 * VERSION: 1.5
 * DATE: 2015-08-28
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/

var _gsScope=typeof module!="undefined"&&module.exports&&typeof global!="undefined"?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){var e=_gsScope._gsDefine.plugin({propName:"roundProps",version:"1.5",priority:-1,API:2,init:function(e,t,n){return this._tween=n,!0}}),t=function(e){while(e)!e.f&&!e.blob&&(e.r=1),e=e._next},n=e.prototype;n._onInitAllProps=function(){var e=this._tween,n=e.vars.roundProps.join?e.vars.roundProps:e.vars.roundProps.split(","),r=n.length,i={},s=e._propLookup.roundProps,o,u,a;while(--r>-1)i[n[r]]=1;r=n.length;while(--r>-1){o=n[r],u=e._firstPT;while(u)a=u._next,u.pg?u.t._roundProps(i,!0):u.n===o&&(u.f===2&&u.t?t(u.t._firstPT):(this._add(u.t,o,u.s,u.c),a&&(a._prev=u._prev),u._prev?u._prev._next=a:e._firstPT===u&&(e._firstPT=a),u._next=u._prev=null,e._propLookup[o]=s)),u=a}return!1},n._add=function(e,t,n,r){this._addTween(e,t,n,n+r,t,!0),this._overwriteProps.push(t)}}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();