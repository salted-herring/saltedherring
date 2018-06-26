/*!
 * VERSION: 0.6.2
 * DATE: 2018-02-15
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */

var _gsScope=typeof module!="undefined"&&module.exports&&typeof global!="undefined"?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){var e=function(t){var n=t.nodeType,r="";if(n===1||n===9||n===11){if(typeof t.textContent=="string")return t.textContent;for(t=t.firstChild;t;t=t.nextSibling)r+=e(t)}else if(n===3||n===4)return t.nodeValue;return r},t="[-]|�[�-�]|�[�-�]|[⚔-⚗]|�[�-�]|[�-�][�-�]",n=new RegExp(t),r=new RegExp(t+"|.","g"),i=function(e,t){return(t===""||!t)&&n.test(e)?e.match(r):e.split(t||"")},s=_gsScope._gsDefine.plugin({propName:"text",API:2,version:"0.6.2",init:function(t,n,r,s){var o=t.nodeName.toUpperCase(),u;typeof n=="function"&&(n=n(s,t)),this._svg=t.getBBox&&(o==="TEXT"||o==="TSPAN");if("innerHTML"in t||!!this._svg){this._target=t,typeof n!="object"&&(n={value:n});if(n.value===undefined)return this._text=this._original=[""],!0;this._delimiter=n.delimiter||"",this._original=i(e(t).replace(/\s+/g," "),this._delimiter),this._text=i(n.value.replace(/\s+/g," "),this._delimiter),this._runBackwards=r.vars.runBackwards===!0,this._runBackwards&&(o=this._original,this._original=this._text,this._text=o),typeof n.newClass=="string"&&(this._newClass=n.newClass,this._hasClass=!0),typeof n.oldClass=="string"&&(this._oldClass=n.oldClass,this._hasClass=!0),o=this._original.length-this._text.length,u=o<0?this._original:this._text,this._fillChar=n.fillChar||(n.padSpace?"&nbsp;":""),o<0&&(o=-o);while(--o>-1)u.push(this._fillChar);return!0}return!1},set:function(e){e>1?e=1:e<0&&(e=0),this._runBackwards&&(e=1-e);var t=this._text.length,n=e*t+.5|0,r,i,s;this._hasClass?(r=this._newClass&&n!==0,i=this._oldClass&&n!==t,s=(r?"<span class='"+this._newClass+"'>":"")+this._text.slice(0,n).join(this._delimiter)+(r?"</span>":"")+(i?"<span class='"+this._oldClass+"'>":"")+this._delimiter+this._original.slice(n).join(this._delimiter)+(i?"</span>":"")):s=this._text.slice(0,n).join(this._delimiter)+this._delimiter+this._original.slice(n).join(this._delimiter),this._svg?this._target.textContent=s:this._target.innerHTML=this._fillChar==="&nbsp;"&&s.indexOf("  ")!==-1?s.split("  ").join("&nbsp;&nbsp;"):s}}),o=s.prototype;o._newClass=o._oldClass=o._delimiter=""}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(e){var t=function(){return(_gsScope.GreenSockGlobals||_gsScope)[e]};typeof module!="undefined"&&module.exports?(require("../TweenLite.js"),module.exports=t()):typeof define=="function"&&define.amd&&define(["TweenLite"],t)}("TextPlugin");