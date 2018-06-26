/*!
 * VERSION: 0.3.1
 * DATE: 2018-02-15
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/

var _gsScope=typeof module!="undefined"&&module.exports&&typeof global!="undefined"?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){_gsScope._gsDefine.plugin({propName:"directionalRotation",version:"0.3.1",API:2,init:function(e,t,n,r){typeof t!="object"&&(t={rotation:t}),this.finals={};var i=t.useRadians===!0?Math.PI*2:360,s=1e-6,o,u,a,f,l,c;for(o in t)if(o!=="useRadians"){f=t[o],typeof f=="function"&&(f=f(r,e)),c=(f+"").split("_"),u=c[0],a=parseFloat(typeof e[o]!="function"?e[o]:e[o.indexOf("set")||typeof e["get"+o.substr(3)]!="function"?o:"get"+o.substr(3)]()),f=this.finals[o]=typeof u=="string"&&u.charAt(1)==="="?a+parseInt(u.charAt(0)+"1",10)*Number(u.substr(2)):Number(u)||0,l=f-a,c.length&&(u=c.join("_"),u.indexOf("short")!==-1&&(l%=i,l!==l%(i/2)&&(l=l<0?l+i:l-i)),u.indexOf("_cw")!==-1&&l<0?l=(l+i*9999999999)%i-(l/i|0)*i:u.indexOf("ccw")!==-1&&l>0&&(l=(l-i*9999999999)%i-(l/i|0)*i));if(l>s||l<-s)this._addTween(e,o,a,a+l,o),this._overwriteProps.push(o)}return!0},set:function(e){var t;if(e!==1)this._super.setRatio.call(this,e);else{t=this._firstPT;while(t)t.f?t.t[t.p](this.finals[t.p]):t.t[t.p]=this.finals[t.p],t=t._next}}})._autoCSS=!0}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(e){var t=function(){return(_gsScope.GreenSockGlobals||_gsScope)[e]};typeof module!="undefined"&&module.exports?(require("../TweenLite.js"),module.exports=t()):typeof define=="function"&&define.amd&&define(["TweenLite"],t)}("DirectionalRotationPlugin");