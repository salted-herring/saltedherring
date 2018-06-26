/*!
 * VERSION: 0.6.1
 * DATE: 2018-02-15
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */

var _gsScope=typeof module!="undefined"&&module.exports&&typeof global!="undefined"?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){_gsScope._gsDefine.plugin({propName:"attr",API:2,version:"0.6.1",init:function(e,t,n,r){var i,s;if(typeof e.setAttribute!="function")return!1;for(i in t)s=t[i],typeof s=="function"&&(s=s(r,e)),this._addTween(e,"setAttribute",e.getAttribute(i)+"",s+"",i,!1,i),this._overwriteProps.push(i);return!0}})}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(e){var t=function(){return(_gsScope.GreenSockGlobals||_gsScope)[e]};typeof module!="undefined"&&module.exports?(require("../TweenLite.js"),module.exports=t()):typeof define=="function"&&define.amd&&define(["TweenLite"],t)}("AttrPlugin");