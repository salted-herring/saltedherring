/*!
 * VERSION: 1.5.3
 * DATE: 2018-02-15
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/

var _gsScope=typeof module!="undefined"&&module.exports&&typeof global!="undefined"?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){var e=/(\d|\.)+/g,t=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,n={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},r=function(e,t,n){return e=e<0?e+1:e>1?e-1:e,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*255+.5|0},i=function(i,s){var o,u,a,f,l,c,h,p,d,v,m;if(!i)o=n.black;else if(typeof i=="number")o=[i>>16,i>>8&255,i&255];else{i.charAt(i.length-1)===","&&(i=i.substr(0,i.length-1));if(n[i])o=n[i];else if(i.charAt(0)==="#")i.length===4&&(u=i.charAt(1),a=i.charAt(2),f=i.charAt(3),i="#"+u+u+a+a+f+f),i=parseInt(i.substr(1),16),o=[i>>16,i>>8&255,i&255];else if(i.substr(0,3)==="hsl"){o=m=i.match(e);if(!s)l=Number(o[0])%360/360,c=Number(o[1])/100,h=Number(o[2])/100,a=h<=.5?h*(c+1):h+c-h*c,u=h*2-a,o.length>3&&(o[3]=Number(o[3])),o[0]=r(l+1/3,u,a),o[1]=r(l,u,a),o[2]=r(l-1/3,u,a);else if(i.indexOf("=")!==-1)return i.match(t)}else o=i.match(e)||n.transparent;o[0]=Number(o[0]),o[1]=Number(o[1]),o[2]=Number(o[2]),o.length>3&&(o[3]=Number(o[3]))}return s&&!m&&(u=o[0]/255,a=o[1]/255,f=o[2]/255,p=Math.max(u,a,f),d=Math.min(u,a,f),h=(p+d)/2,p===d?l=c=0:(v=p-d,c=h>.5?v/(2-p-d):v/(p+d),l=p===u?(a-f)/v+(a<f?6:0):p===a?(f-u)/v+2:(u-a)/v+4,l*=60),o[0]=l+.5|0,o[1]=c*100+.5|0,o[2]=h*100+.5|0),o},s=function(e,t){var n=(e+"").match(f)||[],r=0,s="",o,u,a;if(!n.length)return e;for(o=0;o<n.length;o++)u=n[o],a=e.substr(r,e.indexOf(u,r)-r),r+=a.length+u.length,u=i(u,t),u.length===3&&u.push(1),s+=a+(t?"hsla("+u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:"rgba("+u.join(","))+")";return s+e.substr(r)},o,u,a=(_gsScope.GreenSockGlobals||_gsScope).TweenLite,f="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b",l=_gsScope._gsDefine.plugin({propName:"colorProps",version:"1.5.3",priority:-1,API:2,global:!0,init:function(e,t,n,r){var s,o,a,f;this._target=e,this._proxy=o=(t.format+"").toUpperCase()==="NUMBER"?{}:0;for(s in t)s!=="format"&&(o?(this._firstNumPT=a={_next:this._firstNumPT,t:e,p:s,f:typeof e[s]=="function"},o[s]="rgb("+i(a.f?e[s.indexOf("set")||typeof e["get"+s.substr(3)]!="function"?s:"get"+s.substr(3)]():e[s]).join(",")+")",f=t[s],typeof f=="function"&&(f=f(r,e)),this._addTween(o,s,"get",typeof f=="number"?"rgb("+i(f,!1).join(",")+")":f,s,null,null,u)):this._addTween(e,s,"get",t[s],s,null,null,u,r));return!0},set:function(e){var t=this._firstNumPT,n;this._super.setRatio.call(this,e);while(t)n=i(this._proxy[t.p],!1),n=n[0]<<16|n[1]<<8|n[2],t.f?this._target[t.p](n):this._target[t.p]=n,t=t._next}});for(o in n)f+="|"+o+"\\b";f=new RegExp(f+")","gi"),l.colorStringFilter=u=function(e){var t=e[0]+" "+e[1],n;f.lastIndex=0,f.test(t)&&(n=t.indexOf("hsl(")!==-1||t.indexOf("hsla(")!==-1,e[0]=s(e[0],n),e[1]=s(e[1],n))},a.defaultStringFilter||(a.defaultStringFilter=l.colorStringFilter),l.parseColor=i,o=l.prototype,o._firstNumPT=null,o._kill=function(e){var t=this._firstNumPT,n;while(t)t.p in e?(t===o._firstNumPT&&(this._firstNumPT=t._next),n&&(n._next=t._next)):n=t,t=t._next;return this._super._kill(e)}}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(e){var t=function(){return(_gsScope.GreenSockGlobals||_gsScope)[e]};typeof module!="undefined"&&module.exports?(require("../TweenLite.js"),module.exports=t()):typeof define=="function"&&define.amd&&define(["TweenLite"],t)}("ColorPropsPlugin");