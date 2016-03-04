/*!
 * VERSION: 0.5.2
 * DATE: 2014-07-17
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */

var _gsScope=typeof module!="undefined"&&module.exports&&typeof global!="undefined"?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){var e={scale:1,shadowOffset:1,fillPatternOffset:1,offset:1,fill:2,stroke:2,shadowColor:2},t={},n={},r=/(\d|\.)+/g,i=/(?:_cw|_ccw|_short)/,s=_gsScope._gsDefine.globals.com.greensock.plugins,o={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},u=function(e,t,n){return e=e<0?e+1:e>1?e-1:e,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*255+.5|0},a=function(e){if(e===""||e==null||e==="none")return o.transparent;if(o[e])return o[e];if(typeof e=="number")return[e>>16,e>>8&255,e&255];if(e.charAt(0)==="#")return e.length===4&&(e="#"+e.charAt(1)+e.charAt(1)+e.charAt(2)+e.charAt(2)+e.charAt(3)+e.charAt(3)),e=parseInt(e.substr(1),16),[e>>16,e>>8&255,e&255];if(e.substr(0,3)==="hsl"){e=e.match(r);var t=Number(e[0])%360/360,n=Number(e[1])/100,i=Number(e[2])/100,s=i<=.5?i*(n+1):i+n-i*n,a=i*2-s;return e.length>3&&(e[3]=Number(e[3])),e[0]=u(t+1/3,a,s),e[1]=u(t,a,s),e[2]=u(t-1/3,a,s),e}var f=e.match(r)||o.transparent,l=f.length;while(--l>-1)f[l]=Number(f[l]);return f},f=function(e,t,n,r){this.getter=t,this.setter=n;var i=a(e[t]());this.proxy={r:i[0],g:i[1],b:i[2],a:i.length>3?i[3]:1},r&&(this._next=r,r._prev=this)},l=[],c,h,p=function(){var e=l.length;if(e!==0){while(--e>-1)l[e].draw(),l[e]._gsDraw=!1;l.length=0}else c.removeEventListener("tick",p),h=!1},d=function(e,r){var i=r==="x"?"y":"x",s="_gs_"+e;t[e]=function(){return this["get"+e]()[r]},n[e]=function(t){var n=this["get"+e](),o=this[s];return o||(o=this[s]={}),o[r]=t,o[i]=n[i],this[e](o),this}},v=function(e,t){return function(n){return arguments.length?t(n):e()}},m=function(r,i){var s=[],o,u,a,f;for(o in i){u=i[o],o!=="bezier"&&o!=="autoDraw"&&o.substr(0,3)!=="set"&&r[o]===undefined&&(s.push(o),delete i[o],o="set"+o.charAt(0).toUpperCase()+o.substr(1),i[o]=u);if(e[o]){if(e[o]===1)return i[o+"X"]=i[o+"Y"]=i[o],delete i[o],m(r,i);!r[o]&&n[o]&&(f=r.prototype||r,f[o]=v(t[o],n[o]))}else if(o==="bezier"){u=u instanceof Array?u:u.values||[],a=u.length;while(--a>-1)a===0?s=s.concat(m(r,u[a])):m(r,u[a])}}return s},g=function(e){var t={},n;for(n in e)t[n]=e[n];return t},y,b;for(b in e)e[b]===1&&(d(b,"x"),d(b,"y"));var w=_gsScope._gsDefine.plugin({propName:"kinetic",API:2,version:"0.5.2",init:function(t,n,r){var o,u,l,h,p,d;if(!y&&(y=parseInt(Kinetic.version.split(".")[0],10)<5))throw"The GSAP KineticPlugin that's loaded requires KineticJS version 5.0.0 or later. For earlier versions, use KineticPlugin from GSAP 1.11.3 or earlier.";this._overwriteProps=m(t,n),this._target=t,this._layer=n.autoDraw!==!1?t.getLayer():null,!c&&this._layer&&(c=r.constructor.ticker);for(o in n){u=n[o];if(e[o]===2)h=this._firstSP=new f(t,o,o,this._firstSP),u=a(u),h.proxy.r!==u[0]&&this._addTween(h.proxy,"r",h.proxy.r,u[0],o),h.proxy.g!==u[1]&&this._addTween(h.proxy,"g",h.proxy.g,u[1],o),h.proxy.b!==u[2]&&this._addTween(h.proxy,"b",h.proxy.b,u[2],o),(u.length>3||h.proxy.a!==1)&&h.proxy.a!==u[3]&&this._addTween(h.proxy,"a",h.proxy.a,u.length>3?u[3]:1,o);else if(o==="bezier"){p=s.BezierPlugin;if(!p)throw"BezierPlugin not loaded";p=this._bezier=new p,typeof u=="object"&&u.autoRotate===!0&&(u.autoRotate=["x","y","rotation",0,!1]),p._onInitTween(t,u,r),this._overwriteProps=this._overwriteProps.concat(p._overwriteProps),this._addTween(p,"setRatio",0,1,o)}else if(o!=="rotation"&&o!=="rotationDeg"||typeof u!="string"||!i.test(u))u instanceof Array?this._initArrayTween(t[o](),u,o):o!=="autoDraw"&&(l="get"+o.substr(3),this._addTween(t,o,(typeof t[o]=="function"?t[l!=="get"&&typeof t[l]=="function"?l:o]():t[o])||0,u,o));else{d=s.DirectionalRotationPlugin;if(!d)throw"DirectionalRotationPlugin not loaded";d=this._directionalRotation=new d,l={useRadians:!1},l[o]=u,d._onInitTween(t,l,r),this._addTween(d,"setRatio",0,1,o)}this._overwriteProps.push(o)}return!0},kill:function(e){return e=g(e),m(this._target,e),this._bezier&&this._bezier._kill(e),this._directionalRotation&&this._directionalRotation._kill(e),this._super._kill.call(this,e)},round:function(e,t){return e=g(e),m(this._target,e),this._bezier&&this._bezier._roundProps(e,t),this._super._roundProps.call(this,e,t)},set:function(e){this._super.setRatio.call(this,e);var t=this._firstSP,n=this._layer,r=this._arrayTweens,i,s,o,u,a,f;if(t){a=this._target;while(t)f=t.proxy,a[t.setter]((f.a!==1?"rgba(":"rgb(")+(f.r|0)+", "+(f.g|0)+", "+(f.b|0)+(f.a!==1?", "+f.a:"")+")"),t=t._next}if(r){i=r.length;while(--i>-1)s=r[i],u=s.s+s.c*e,s.a[s.i]=u<1e-6&&u>-0.000001?0:u;for(o in this._arrayProps)this._target[o](this._arrayProps[o])}n&&!n._gsDraw&&(l.push(n),n._gsDraw=!0,h||(c.addEventListener("tick",p),h=!0))}});b=w.prototype,b._initArrayTween=function(e,t,n){this._arrayTweens||(this._arrayTweens=[],this._arrayProps={});var r=e.length,i=this._arrayTweens,s,o;while(--r>-1)s=e[r],o=t[r],s!==o&&i.push({a:e,i:r,s:s,c:o-s});i.length&&(this._arrayProps[n]=e)}}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();