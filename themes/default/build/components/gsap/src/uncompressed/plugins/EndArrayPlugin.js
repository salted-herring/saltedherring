/*!
 * VERSION: 0.1.3
 * DATE: 2018-02-15
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */

var _gsScope=typeof module!="undefined"&&module.exports&&typeof global!="undefined"?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){_gsScope._gsDefine.plugin({propName:"endArray",API:2,version:"0.1.3",init:function(e,t,n){var r=t.length,i=this.a=[],s,o;this.target=e,this._mod=0;if(!r)return!1;while(--r>-1)s=e[r],o=t[r],s!==o&&i.push({i:r,s:s,c:o-s});return!0},mod:function(e){typeof e.endArray=="function"&&(this._mod=e.endArray)},set:function(e){var t=this.target,n=this.a,r=n.length,i=this._mod,s,o;if(i)while(--r>-1)s=n[r],t[s.i]=i(s.s+s.c*e,t);else while(--r>-1)s=n[r],o=s.s+s.c*e,t[s.i]=o<1e-6&&o>-0.000001?0:o}})}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();