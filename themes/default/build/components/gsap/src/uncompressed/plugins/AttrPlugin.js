/*!
 * VERSION: 0.5.0
 * DATE: 2015-08-29
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */

var _gsScope=typeof module!="undefined"&&module.exports&&typeof global!="undefined"?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){_gsScope._gsDefine.plugin({propName:"attr",API:2,version:"0.5.0",init:function(e,t,n){var r;if(typeof e.setAttribute!="function")return!1;for(r in t)this._addTween(e,"setAttribute",e.getAttribute(r)+"",t[r]+"",r,!1,r),this._overwriteProps.push(r);return!0}})}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();