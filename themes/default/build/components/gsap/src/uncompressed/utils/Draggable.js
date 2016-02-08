/*!
 * VERSION: 0.14.3
 * DATE: 2015-12-19
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * Requires TweenLite and CSSPlugin version 1.17.0 or later (TweenMax contains both TweenLite and CSSPlugin). ThrowPropsPlugin is required for momentum-based continuation of movement after the mouse/touch is released (ThrowPropsPlugin is a membership benefit of Club GreenSock - http://greensock.com/club/).
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */

var _gsScope=typeof module!="undefined"&&module.exports&&typeof global!="undefined"?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){_gsScope._gsDefine("utils.Draggable",["events.EventDispatcher","TweenLite","plugins.CSSPlugin"],function(e,t,n){var r={css:{}},i={css:{}},s={css:{}},o={css:{}},u=_gsScope._gsDefine.globals,a={},f=document,l=f.documentElement||{},c=function(e){return f.createElementNS?f.createElementNS("http://www.w3.org/1999/xhtml",e):f.createElement(e)},h=c("div"),p=[],d=function(){return!1},v=180/Math.PI,m=999999999999999,g=Date.now||function(){return(new Date).getTime()},y=!f.addEventListener&&!!f.all,b=f.createElement("div"),w=[],E={},S=0,x=/^(?:a|input|textarea|button|select)$/i,T=0,N,C,k=navigator.userAgent.toLowerCase().indexOf("android")!==-1,L=0,A={},O={},M={},_=function(e){typeof e=="string"&&(e=t.selector(e));if(!e||e.nodeType)return[e];var n=[],r=e.length,i;for(i=0;i!==r;n.push(e[i++]));return n},D=function(e){var t={},n;for(n in e)t[n]=e[n];return t},P,H=function(){var e=w.length;while(--e>-1)w[e]()},B=function(e){w.push(e),w.length===1&&t.ticker.addEventListener("tick",H,this,!1,1)},j=function(e){var n=w.length;while(--n>-1)w[n]===e&&w.splice(n,1);t.to(F,0,{overwrite:"all",delay:15,onComplete:F})},F=function(){w.length||t.ticker.removeEventListener("tick",H)},I=function(e,t){var n;for(n in t)e[n]===undefined&&(e[n]=t[n]);return e},q=function(){return window.pageYOffset!=null?window.pageYOffset:f.scrollTop!=null?f.scrollTop:l.scrollTop||f.body.scrollTop||0},R=function(){return window.pageXOffset!=null?window.pageXOffset:f.scrollLeft!=null?f.scrollLeft:l.scrollLeft||f.body.scrollLeft||0},U=function(e,t){Dt(e,"scroll",t),W(e.parentNode)||U(e.parentNode,t)},z=function(e,t){Pt(e,"scroll",t),W(e.parentNode)||z(e.parentNode,t)},W=function(e){return!e||e===l||e===f||e===f.body||e===window||!e.nodeType||!e.parentNode},X=function(e,t){var n=t==="x"?"Width":"Height",r="scroll"+n,i="client"+n,s=f.body;return Math.max(0,W(e)?Math.max(l[r],s[r])-(window["inner"+n]||l[i]||s[i]):e[r]-e[i])},V=function(e){var t=W(e),n=X(e,"x"),r=X(e,"y");t?e=M:V(e.parentNode),e._gsMaxScrollX=n,e._gsMaxScrollY=r,e._gsScrollX=e.scrollLeft||0,e._gsScrollY=e.scrollTop||0},$=function(e,t){return e=e||window.event,a.pageX=e.clientX+f.body.scrollLeft+l.scrollLeft,a.pageY=e.clientY+f.body.scrollTop+l.scrollTop,t&&(e.returnValue=!1),a},J=function(e){return e?(typeof e=="string"&&(e=t.selector(e)),e.length&&e!==window&&e[0]&&e[0].style&&!e.nodeType&&(e=e[0]),e===window||e.nodeType&&e.style?e:null):e},K=function(e,t){var n=e.style,r,i,s;if(n[t]===undefined){s=["O","Moz","ms","Ms","Webkit"],i=5,r=t.charAt(0).toUpperCase()+t.substr(1);while(--i>-1&&n[s[i]+r]===undefined);if(i<0)return"";N=i===3?"ms":s[i],t=N+r}return t},Q=function(e,t,n){var r=e.style;if(!r)return;r[t]===undefined&&(t=K(e,t)),n==null?r.removeProperty?r.removeProperty(t.replace(/([A-Z])/g,"-$1").toLowerCase()):r.removeAttribute(t):r[t]!==undefined&&(r[t]=n)},G=f.defaultView?f.defaultView.getComputedStyle:d,Y=/(?:Left|Right|Width)/i,Z=/(?:\d|\-|\+|=|#|\.)*/g,et=function(e,t,n,r,i){if(r==="px"||!r)return n;if(r==="auto"||!n)return 0;var s=Y.test(t),o=e,u=h.style,a=n<0,l;return a&&(n=-n),r==="%"&&t.indexOf("border")!==-1?l=n/100*(s?e.clientWidth:e.clientHeight):(u.cssText="border:0 solid red;position:"+nt(e,"position",!0)+";line-height:0;",r==="%"||!o.appendChild?(o=e.parentNode||f.body,u[s?"width":"height"]=n+r):u[s?"borderLeftWidth":"borderTopWidth"]=n+r,o.appendChild(h),l=parseFloat(h[s?"offsetWidth":"offsetHeight"]),o.removeChild(h),l===0&&!i&&(l=et(e,t,n,r,!0))),a?-l:l},tt=function(e,t){if(nt(e,"position",!0)!=="absolute")return 0;var n=t==="left"?"Left":"Top",r=nt(e,"margin"+n,!0);return e["offset"+n]-(et(e,t,parseFloat(r),(r+"").replace(Z,""))||0)},nt=function(e,t,n){var r=(e._gsTransform||{})[t],i;return r||r===0?r:(e.style[t]?r=e.style[t]:(i=G(e))?(r=i.getPropertyValue(t.replace(/([A-Z])/g,"-$1").toLowerCase()),r=r||i.length?r:i[t]):e.currentStyle&&(r=e.currentStyle[t]),r==="auto"&&(t==="top"||t==="left")&&(r=tt(e,t)),n?r:parseFloat(r)||0)},rt=function(e,t,n){var r=e.vars,i=r[n],s=e._listeners[t];typeof i=="function"&&i.apply(r[n+"Scope"]||r.callbackScope||e,r[n+"Params"]||[e.pointerEvent]),s&&e.dispatchEvent(t)},it=function(e,t){var n=J(e),r,i,s;return n?Lt(n,t):e.left!==undefined?(s=St(t),{left:e.left-s.x,top:e.top-s.y,width:e.width,height:e.height}):(i=e.min||e.minX||e.minRotation||0,r=e.min||e.minY||0,{left:i,top:r,width:(e.max||e.maxX||e.maxRotation||0)-i,height:(e.max||e.maxY||0)-r})},st,ot,ut,at,ft=function(){if(!f.createElementNS){st=0,ot=!1;return}var e=c("div"),t=f.createElementNS("http://www.w3.org/2000/svg","svg"),n=c("div"),r=e.style,i=f.body||l,s,o,u,a;f.body&&ht&&(r.position=n.style.position="absolute",i.appendChild(n),n.appendChild(e),r.height="10px",a=e.offsetTop,n.style.border="5px solid red",at=a!==e.offsetTop,i.removeChild(n)),r=t.style,t.setAttributeNS(null,"width","400px"),t.setAttributeNS(null,"height","400px"),t.setAttributeNS(null,"viewBox","0 0 400 400"),r.display="block",r.boxSizing="border-box",r.border="0px solid red",r.transform="none",e.style.cssText="width:100px;height:100px;overflow:scroll;-ms-overflow-style:none;",i.appendChild(e),e.appendChild(t),u=t.createSVGPoint().matrixTransform(t.getScreenCTM()),o=u.y,e.scrollTop=100,u.x=u.y=0,u=u.matrixTransform(t.getScreenCTM()),ut=o-u.y<100.1?0:o-u.y-150,e.removeChild(t),i.removeChild(e),i.appendChild(t),s=t.getScreenCTM(),o=s.e,r.border="50px solid red",s=t.getScreenCTM(),o===0&&s.e===0&&s.f===0&&s.a===1?(st=1,ot=!0):(st=o!==s.e?1:0,ot=s.a!==1),i.removeChild(t)},lt=K(h,"perspective")!=="",ct=K(h,"transformOrigin").replace(/^ms/g,"Ms").replace(/([A-Z])/g,"-$1").toLowerCase(),ht=K(h,"transform"),pt=ht.replace(/^ms/g,"Ms").replace(/([A-Z])/g,"-$1").toLowerCase(),dt={},vt={},mt=window.SVGElement,gt=function(e){return!!(mt&&typeof e.getBBox=="function"&&e.getCTM&&(!e.parentNode||e.parentNode.getBBox&&e.parentNode.getCTM))},yt=(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(navigator.userAgent)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(navigator.userAgent))&&parseFloat(RegExp.$1)<11,bt=[],wt=[],Et=function(e){if(!e.getBoundingClientRect||!e.parentNode||!ht)return{offsetTop:0,offsetLeft:0,scaleX:1,scaleY:1,offsetParent:l};if(Wt.cacheSVGData!==!1&&e._gsCache&&e._gsCache.lastUpdate===t.ticker.frame)return e._gsCache;var n=e,r=xt(e),i,s,o,u,a,c,h,p,d,v,m,g;r.lastUpdate=t.ticker.frame;if(e.getBBox&&!r.isSVGRoot){n=e.parentNode,i=e.getBBox();while(n&&(n.nodeName+"").toLowerCase()!=="svg")n=n.parentNode;return u=Et(n),r.offsetTop=i.y*u.scaleY,r.offsetLeft=i.x*u.scaleX,r.scaleX=u.scaleX,r.scaleY=u.scaleY,r.offsetParent=n||l,r}o=r.offsetParent,o===f.body&&(o=l),wt.length=bt.length=0;while(n){a=nt(n,ht,!0),a!=="matrix(1, 0, 0, 1, 0, 0)"&&a!=="none"&&a!=="translate3d(0px, 0px, 0px)"&&(wt.push(n),bt.push(n.style[ht]),n.style[ht]="none");if(n===o)break;n=n.parentNode}s=o.getBoundingClientRect(),a=e.getScreenCTM(),p=e.createSVGPoint(),h=p.matrixTransform(a),p.x=p.y=10,p=p.matrixTransform(a),r.scaleX=(p.x-h.x)/10,r.scaleY=(p.y-h.y)/10,st===undefined&&ft(),r.borderBox&&!ot&&e.getAttribute("width")&&(u=G(e)||{},d=parseFloat(u.borderLeftWidth)+parseFloat(u.borderRightWidth)||0,v=parseFloat(u.borderTopWidth)+parseFloat(u.borderBottomWidth)||0,m=parseFloat(u.width)||0,g=parseFloat(u.height)||0,r.scaleX*=(m-d)/m,r.scaleY*=(g-v)/g),ut?(i=e.getBoundingClientRect(),r.offsetLeft=i.left-s.left,r.offsetTop=i.top-s.top):(r.offsetLeft=h.x-s.left,r.offsetTop=h.y-s.top),r.offsetParent=o,c=wt.length;while(--c>-1)wt[c].style[ht]=bt[c];return r},St=function(e,n){n=n||{};if(!e||e===l||!e.parentNode||e===window)return{x:0,y:0};var r=G(e),i=ct&&r?r.getPropertyValue(ct):"50% 50%",s=i.split(" "),o=i.indexOf("left")!==-1?"0%":i.indexOf("right")!==-1?"100%":s[0],u=i.indexOf("top")!==-1?"0%":i.indexOf("bottom")!==-1?"100%":s[1];if(u==="center"||u==null)u="50%";if(o==="center"||isNaN(parseFloat(o)))o="50%";return e.getBBox&&gt(e)?(e._gsTransform||(t.set(e,{x:"+=0",overwrite:!1}),e._gsTransform.xOrigin===undefined&&console.log("Draggable requires at least GSAP 1.17.0")),i=e.getBBox(),n.x=e._gsTransform.xOrigin-i.x,n.y=e._gsTransform.yOrigin-i.y):(e.getBBox&&!e.offsetWidth&&(o+u).indexOf("%")!==-1&&(e=e.getBBox(),e={offsetWidth:e.width,offsetHeight:e.height}),n.x=o.indexOf("%")!==-1?e.offsetWidth*parseFloat(o)/100:parseFloat(o),n.y=u.indexOf("%")!==-1?e.offsetHeight*parseFloat(u)/100:parseFloat(u)),n},xt=function(e){if(Wt.cacheSVGData!==!1&&e._gsCache&&e._gsCache.lastUpdate===t.ticker.frame)return e._gsCache;var n=e._gsCache=e._gsCache||{},r=G(e),i=e.getBBox&&gt(e),s=(e.nodeName+"").toLowerCase()==="svg",o;n.isSVG=i,n.isSVGRoot=s,n.borderBox=r.boxSizing==="border-box",n.computedStyle=r;if(s)(n.offsetParent=e.offsetParent)||(o=e.parentNode||l,o.insertBefore(h,e),n.offsetParent=h.offsetParent||l,o.removeChild(h));else if(i){o=e.parentNode;while(o&&(o.nodeName+"").toLowerCase()!=="svg")o=o.parentNode;n.offsetParent=o}return n},Tt=function(e,t,n,r){if(e===window||!e||!e.style||!e.parentNode)return[1,0,0,1,0,0];var i=e._gsCache||xt(e),s=e.parentNode,o=s._gsCache||xt(s),u=i.computedStyle,a=i.isSVG?o.offsetParent:s.offsetParent,c,h,p,d,v,m,g,y,b,w,E,S,x,T;return c=i.isSVG&&(e.style[ht]+"").indexOf("matrix")!==-1?e.style[ht]:u?u.getPropertyValue(pt):e.currentStyle?e.currentStyle[ht]:"1,0,0,1,0,0",e.getBBox&&(e.getAttribute("transform")+"").indexOf("matrix")!==-1&&(c=e.getAttribute("transform")),c=(c+"").match(/(?:\-|\b)[\d\-\.e]+\b/g)||[1,0,0,1,0,0],c.length>6&&(c=[c[0],c[1],c[4],c[5],c[12],c[13]]),r?c[4]=c[5]=0:i.isSVG&&(v=e._gsTransform)&&(v.xOrigin||v.yOrigin)&&(c[0]=parseFloat(c[0]),c[1]=parseFloat(c[1]),c[2]=parseFloat(c[2]),c[3]=parseFloat(c[3]),c[4]=parseFloat(c[4])-(v.xOrigin-(v.xOrigin*c[0]+v.yOrigin*c[2])),c[5]=parseFloat(c[5])-(v.yOrigin-(v.xOrigin*c[1]+v.yOrigin*c[3]))),t&&(st===undefined&&ft(),p=i.isSVG||i.isSVGRoot?Et(e):e,i.isSVG?(d=e.getBBox(),w=o.isSVGRoot?{x:0,y:0}:s.getBBox(),p={offsetLeft:d.x-w.x,offsetTop:d.y-w.y,offsetParent:i.offsetParent}):i.isSVGRoot?(E=parseInt(u.borderTopWidth,10)||0,S=parseInt(u.borderLeftWidth,10)||0,x=(c[0]-st)*S+c[2]*E,T=c[1]*S+(c[3]-st)*E,m=t.x,g=t.y,y=m-(m*c[0]+g*c[2]),b=g-(m*c[1]+g*c[3]),c[4]=parseFloat(c[4])+y,c[5]=parseFloat(c[5])+b,t.x-=y,t.y-=b,m=p.scaleX,g=p.scaleY,t.x*=m,t.y*=g,c[0]*=m,c[1]*=g,c[2]*=m,c[3]*=g,yt||(t.x+=x,t.y+=T)):!at&&e.offsetParent&&(t.x+=parseInt(nt(e.offsetParent,"borderLeftWidth"),10)||0,t.y+=parseInt(nt(e.offsetParent,"borderTopWidth"),10)||0),h=s===l||s===f.body,c[4]=Number(c[4])+t.x+(p.offsetLeft||0)-n.x-(h?0:s.scrollLeft||0),c[5]=Number(c[5])+t.y+(p.offsetTop||0)-n.y-(h?0:s.scrollTop||0),s&&nt(e,"position",u)==="fixed"&&(c[4]+=R(),c[5]+=q()),s&&s!==l&&a===p.offsetParent&&(c[4]-=s.offsetLeft||0,c[5]-=s.offsetTop||0,!at&&s.offsetParent&&!i.isSVG&&!i.isSVGRoot&&(c[4]-=parseInt(nt(s.offsetParent,"borderLeftWidth"),10)||0,c[5]-=parseInt(nt(s.offsetParent,"borderTopWidth"),10)||0))),c},Nt=function(e,t){if(!e||e===window||!e.parentNode)return[1,0,0,1,0,0];var n=St(e,dt),r=St(e.parentNode,vt),i=Tt(e,n,r),s,o,u,a,f,c,h,p;while((e=e.parentNode)&&e.parentNode&&e!==l)n=r,r=St(e.parentNode,n===dt?vt:dt),h=Tt(e,n,r),s=i[0],o=i[1],u=i[2],a=i[3],f=i[4],c=i[5],i[0]=s*h[0]+o*h[2],i[1]=s*h[1]+o*h[3],i[2]=u*h[0]+a*h[2],i[3]=u*h[1]+a*h[3],i[4]=f*h[0]+c*h[2]+h[4],i[5]=f*h[1]+c*h[3]+h[5];return t&&(s=i[0],o=i[1],u=i[2],a=i[3],f=i[4],c=i[5],p=s*a-o*u,i[0]=a/p,i[1]=-o/p,i[2]=-u/p,i[3]=s/p,i[4]=(u*c-a*f)/p,i[5]=-(s*c-o*f)/p),i},Ct=function(e,t,n,r,i){e=J(e);var s=Nt(e,!1,i),o=t.x,u=t.y;return n&&(St(e,t),o-=t.x,u-=t.y),r=r===!0?t:r||{},r.x=o*s[0]+u*s[2]+s[4],r.y=o*s[1]+u*s[3]+s[5],r},kt=function(e,t,n){var r=e.x*t[0]+e.y*t[2]+t[4],i=e.x*t[1]+e.y*t[3]+t[5];return e.x=r*n[0]+i*n[2]+n[4],e.y=r*n[1]+i*n[3]+n[5],e},Lt=function(e,t,n){if(!(e=J(e)))return null;t=J(t);var r=e.getBBox&&gt(e),i,s,o,u,a,c,h,p,d,v,m,g,b,w,E,S,x,T,N,C,k,L;if(e===window)u=q(),s=R(),o=s+(l.clientWidth||e.innerWidth||f.body.clientWidth||0),a=u+((e.innerHeight||0)-20<l.clientHeight?l.clientHeight:e.innerHeight||f.body.clientHeight||0);else{if(t===undefined||t===window)return e.getBoundingClientRect();i=St(e),s=-i.x,u=-i.y,r?(g=e.getBBox(),b=g.width,w=g.height):e.offsetWidth?(b=e.offsetWidth,w=e.offsetHeight):(k=G(e),b=parseFloat(k.width),w=parseFloat(k.height)),o=s+b,a=u+w,e.nodeName.toLowerCase()==="svg"&&!y&&(E=Et(e),L=E.computedStyle||{},T=(e.getAttribute("viewBox")||"0 0").split(" "),N=parseFloat(T[0]),C=parseFloat(T[1]),S=parseFloat(L.borderLeftWidth)||0,x=parseFloat(L.borderTopWidth)||0,o-=b-(b-S)/E.scaleX-N,a-=w-(w-x)/E.scaleY-C,s-=S/E.scaleX-N,u-=x/E.scaleY-C,k&&(o+=(parseFloat(L.borderRightWidth)+S)/E.scaleX,a+=(x+parseFloat(L.borderBottomWidth))/E.scaleY))}return e===t?{left:s,top:u,width:o-s,height:a-u}:(c=Nt(e),h=Nt(t,!0),p=kt({x:s,y:u},c,h),d=kt({x:o,y:u},c,h),v=kt({x:o,y:a},c,h),m=kt({x:s,y:a},c,h),s=Math.min(p.x,d.x,v.x,m.x),u=Math.min(p.y,d.y,v.y,m.y),A.x=A.y=0,n&&St(t,A),{left:s+A.x,top:u+A.y,width:Math.max(p.x,d.x,v.x,m.x)-s,height:Math.max(p.y,d.y,v.y,m.y)-u})},At=function(e){return e&&e.length&&e[0]&&(e[0].nodeType&&e[0].style&&!e.nodeType||e[0].length&&e[0][0])?!0:!1},Ot=function(e){var t=[],n=e.length,r,i,s;for(r=0;r<n;r++){i=e[r];if(At(i)){s=i.length;for(s=0;s<i.length;s++)t.push(i[s])}else i&&i.length!==0&&t.push(i)}return t},Mt="ontouchstart"in l&&"orientation"in window,_t=function(e){var t=e.split(","),n=(h.onpointerdown!==undefined?"pointerdown,pointermove,pointerup,pointercancel":h.onmspointerdown!==undefined?"MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel":e).split(","),r={},i=8;while(--i>-1)r[t[i]]=n[i],r[n[i]]=t[i];return r}("touchstart,touchmove,touchend,touchcancel"),Dt=function(e,t,n,r){e.addEventListener?e.addEventListener(_t[t]||t,n,r):e.attachEvent&&e.attachEvent("on"+t,n)},Pt=function(e,t,n){e.removeEventListener?e.removeEventListener(_t[t]||t,n):e.detachEvent&&e.detachEvent("on"+t,n)},Ht=function(e,t){var n=e.length;while(--n>-1)if(e[n].identifier===t)return!0;return!1},Bt=function(e){C=e.touches&&T<e.touches.length,Pt(e.target,"touchend",Bt)},jt=function(e){C=e.touches&&T<e.touches.length,Dt(e.target,"touchend",Bt)},Ft=function(e,t,n,r,i,s){var o={},u,a,f;if(t)if(i!==1&&t instanceof Array){o.end=u=[],f=t.length;for(a=0;a<f;a++)u[a]=t[a]*i;n+=1.1,r-=1.1}else typeof t=="function"?o.end=function(n){return t.call(e,n)*i}:o.end=t;if(n||n===0)o.max=n;if(r||r===0)o.min=r;return s&&(o.velocity=0),o},It=function(e){var t;return!e||!e.getAttribute||e.nodeName==="BODY"?!1:(t=e.getAttribute("data-clickable"))==="true"||t!=="false"&&(e.onclick||x.test(e.nodeName+"")||e.getAttribute("contentEditable")==="true")?!0:It(e.parentNode)},qt=function(e,t){var n=e.length,r;while(--n>-1)r=e[n],r.ondragstart=r.onselectstart=t?null:d,Q(r,"userSelect",t?"text":"none")},Rt,Ut=function(){var e=f.createElement("div"),t=f.createElement("div"),n=t.style,r=f.body||h,i;return n.display="inline-block",n.position="relative",e.style.cssText=t.innerHTML="width:90px; height:40px; padding:10px; overflow:auto; visibility: hidden",e.appendChild(t),r.appendChild(e),Rt=t.offsetHeight+18>e.scrollHeight,n.width="100%",ht||(n.paddingRight="500px",i=e.scrollLeft=e.scrollWidth-e.clientWidth,n.left="-90px",i=i!==e.scrollLeft),r.removeChild(e),i}(),zt=function(e,n){e=J(e),n=n||{};var r=f.createElement("div"),i=r.style,s=e.firstChild,o=0,u=0,a=e.scrollTop,l=e.scrollLeft,c=e.scrollWidth,h=e.scrollHeight,p=0,d=0,v=0,m,g,b,w,E,S;lt&&n.force3D!==!1?(E="translate3d(",S="px,0px)"):ht&&(E="translate(",S="px)"),this.scrollTop=function(e,t){if(!arguments.length)return-this.top();this.top(-e,t)},this.scrollLeft=function(e,t){if(!arguments.length)return-this.left();this.left(-e,t)},this.left=function(r,s){if(!arguments.length)return-(e.scrollLeft+u);var a=e.scrollLeft-l,f=u;if((a>2||a<-2)&&!s){l=e.scrollLeft,t.killTweensOf(this,!0,{left:1,scrollLeft:1}),this.left(-l),n.onKill&&n.onKill();return}r=-r,r<0?(u=r-.5|0,r=0):r>d?(u=r-d|0,r=d):u=0;if(u||f)E?this._suspendTransforms||(i[ht]=E+ -u+"px,"+ -o+S):i.left=-u+"px",Ut&&u+p>=0&&(i.paddingRight=u+p+"px");e.scrollLeft=r|0,l=e.scrollLeft},this.top=function(r,s){if(!arguments.length)return-(e.scrollTop+o);var f=e.scrollTop-a,l=o;if((f>2||f<-2)&&!s){a=e.scrollTop,t.killTweensOf(this,!0,{top:1,scrollTop:1}),this.top(-a),n.onKill&&n.onKill();return}r=-r,r<0?(o=r-.5|0,r=0):r>v?(o=r-v|0,r=v):o=0;if(o||l)E?this._suspendTransforms||(i[ht]=E+ -u+"px,"+ -o+S):i.top=-o+"px";e.scrollTop=r|0,a=e.scrollTop},this.maxScrollTop=function(){return v},this.maxScrollLeft=function(){return d},this.disable=function(){s=r.firstChild;while(s)w=s.nextSibling,e.appendChild(s),s=w;e===r.parentNode&&e.removeChild(r)},this.enable=function(){s=e.firstChild;if(s===r)return;while(s)w=s.nextSibling,r.appendChild(s),s=w;e.appendChild(r),this.calibrate()},this.calibrate=function(t){var n=e.clientWidth===m,s,f;a=e.scrollTop,l=e.scrollLeft;if(n&&e.clientHeight===g&&r.offsetHeight===b&&c===e.scrollWidth&&h===e.scrollHeight&&!t)return;if(o||u)s=this.left(),f=this.top(),this.left(-e.scrollLeft),this.top(-e.scrollTop);if(!n||t)i.display="block",i.width="auto",i.paddingRight="0px",p=Math.max(0,e.scrollWidth-e.clientWidth),p&&(p+=nt(e,"paddingLeft")+(Rt?nt(e,"paddingRight"):0));i.display="inline-block",i.position="relative",i.overflow="visible",i.verticalAlign="top",i.width="100%",i.paddingRight=p+"px",Rt&&(i.paddingBottom=nt(e,"paddingBottom",!0)),y&&(i.zoom="1"),m=e.clientWidth,g=e.clientHeight,c=e.scrollWidth,h=e.scrollHeight,d=e.scrollWidth-m,v=e.scrollHeight-g,b=r.offsetHeight,i.display="block";if(s||f)this.left(s),this.top(f)},this.content=r,this.element=e,this._suspendTransforms=!1,this.enable()},Wt=function(a,c){e.call(this,a),a=J(a),P||(P=u.com.greensock.plugins.ThrowPropsPlugin),this.vars=c=D(c||{}),this.target=a,this.x=this.y=this.rotation=0,this.dragResistance=parseFloat(c.dragResistance)||0,this.edgeResistance=isNaN(c.edgeResistance)?1:parseFloat(c.edgeResistance)||0,this.lockAxis=c.lockAxis,this.autoScroll=c.autoScroll||0,this.lockedAxis=null,this.allowEventDefault=!!c.allowEventDefault;var h=(c.type||(y?"top,left":"x,y")).toLowerCase(),d=h.indexOf("x")!==-1||h.indexOf("y")!==-1,w=h.indexOf("rotation")!==-1,x=w?"rotation":d?"x":"left",N=d?"y":"top",A=h.indexOf("x")!==-1||h.indexOf("left")!==-1||h==="scroll",O=h.indexOf("y")!==-1||h.indexOf("top")!==-1||h==="scroll",H=c.minimumMovement||2,F=this,q=_(c.trigger||c.handle||a),R={},X=0,K=!1,G=c.clickableTest||It,Y,Z,et,tt,st,ot,ut,at,ft,lt,ct,ht,pt,dt,vt,mt,gt,yt,bt,wt,Et,St,xt,Tt,kt,Lt,At,Ot,Bt,Rt,Ut,Xt,Vt,$t=function(e){if(F.autoScroll&&(K||F.isDragging&&yt)){var t=a,n=F.autoScroll*15,r,i,s,o,u,c,h,p;K=!1,M.scrollTop=window.pageYOffset!=null?window.pageYOffset:l.scrollTop!=null?l.scrollTop:f.body.scrollTop,M.scrollLeft=window.pageXOffset!=null?window.pageXOffset:l.scrollLeft!=null?l.scrollLeft:f.body.scrollLeft,o=F.pointerX-M.scrollLeft,u=F.pointerY-M.scrollTop;while(t&&!i)i=W(t.parentNode),r=i?M:t.parentNode,s=i?{bottom:Math.max(l.clientHeight,window.innerHeight||0),right:Math.max(l.clientWidth,window.innerWidth||0),left:0,top:0}:r.getBoundingClientRect(),c=h=0,O&&(p=r._gsMaxScrollY-r.scrollTop,p<0?h=p:u>s.bottom-40&&p?(K=!0,h=Math.min(p,n*(1-Math.max(0,s.bottom-u)/40)|0)):u<s.top+40&&r.scrollTop&&(K=!0,h=-Math.min(r.scrollTop,n*(1-Math.max(0,u-s.top)/40)|0)),h&&(r.scrollTop+=h)),A&&(p=r._gsMaxScrollX-r.scrollLeft,p<0?c=p:o>s.right-40&&p?(K=!0,c=Math.min(p,n*(1-Math.max(0,s.right-o)/40)|0)):o<s.left+40&&r.scrollLeft&&(K=!0,c=-Math.min(r.scrollLeft,n*(1-Math.max(0,o-s.left)/40)|0)),c&&(r.scrollLeft+=c)),i&&(c||h)&&(window.scrollTo(r.scrollLeft,r.scrollTop),un(F.pointerX+c,F.pointerY+h)),t=r}if(yt){var v=F.x,m=F.y,g=1e-6;v<g&&v>-g&&(v=0),m<g&&m>-g&&(m=0),w?(Bt.data.rotation=F.rotation=v,Bt.setRatio(1)):Z?(O&&Z.top(m),A&&Z.left(v)):d?(O&&(Bt.data.y=m),A&&(Bt.data.x=v),Bt.setRatio(1)):(O&&(a.style.top=m+"px"),A&&(a.style.left=v+"px")),at&&!e&&!Xt&&(Xt=!0,rt(F,"drag","onDrag"),Xt=!1)}yt=!1},Kt=function(e,n){var r=F.x,i=F.y,s;!a._gsTransform&&(d||w)&&t.set(a,{x:"+=0",overwrite:!1}),d?(F.y=a._gsTransform.y,F.x=a._gsTransform.x):w?F.x=F.rotation=a._gsTransform.rotation:Z?(F.y=Z.top(),F.x=Z.left()):(F.y=parseInt(a.style.top,10)||0,F.x=parseInt(a.style.left,10)||0),(wt||Et)&&!n&&(wt&&(s=wt(F.x),s!==F.x&&(F.x=s,w&&(F.rotation=s))),Et&&(s=Et(F.y),s!==F.y&&(F.y=s))),(r!==F.x||i!==F.y)&&$t(!0),e||rt(F,"throwupdate","onThrowUpdate")},Qt=function(){var e,t,n,r;ut=!1,Z?(Z.calibrate(),F.minX=lt=-Z.maxScrollLeft(),F.minY=ht=-Z.maxScrollTop(),F.maxX=ft=F.maxY=ct=0,ut=!0):!c.bounds||(e=it(c.bounds,a.parentNode),w?(F.minX=lt=e.left,F.maxX=ft=e.left+e.width,F.minY=ht=F.maxY=ct=0):c.bounds.maxX!==undefined||c.bounds.maxY!==undefined?(e=c.bounds,F.minX=lt=e.minX,F.minY=ht=e.minY,F.maxX=ft=e.maxX,F.maxY=ct=e.maxY):(t=it(a,a.parentNode),F.minX=lt=nt(a,x)+e.left-t.left,F.minY=ht=nt(a,N)+e.top-t.top,F.maxX=ft=lt+(e.width-t.width),F.maxY=ct=ht+(e.height-t.height)),lt>ft&&(F.minX=ft,F.maxX=ft=lt,lt=F.minX),ht>ct&&(F.minY=ct,F.maxY=ct=ht,ht=F.minY),w&&(F.minRotation=lt,F.maxRotation=ft),ut=!0),c.liveSnap&&(n=c.liveSnap===!0?c.snap||{}:c.liveSnap,r=n instanceof Array||typeof n=="function",w?(wt=rn(r?n:n.rotation,lt,ft,1),Et=null):(A&&(wt=rn(r?n:n.x||n.left||n.scrollLeft,lt,ft,Z?-1:1)),O&&(Et=rn(r?n:n.y||n.top||n.scrollTop,ht,ct,Z?-1:1))))},Gt=function(){F.isThrowing=!1,rt(F,"throwcomplete","onThrowComplete")},Yt=function(){F.isThrowing=!1},Zt=function(e,t){var n,r,i,s;e&&P?(e===!0&&(n=c.snap||{},r=n instanceof Array||typeof n=="function",e={resistance:(c.throwResistance||c.resistance||1e3)/(w?10:1)},w?e.rotation=Ft(F,r?n:n.rotation,ft,lt,1,t):(A&&(e[x]=Ft(F,r?n:n.x||n.left||n.scrollLeft,ft,lt,Z?-1:1,t||F.lockedAxis==="x")),O&&(e[N]=Ft(F,r?n:n.y||n.top||n.scrollTop,ct,ht,Z?-1:1,t||F.lockedAxis==="y")))),F.isThrowing=!0,s=isNaN(c.overshootTolerance)?c.edgeResistance===1?0:1-F.edgeResistance+.2:c.overshootTolerance,F.tween=i=P.to(Z||a,{throwProps:e,ease:c.ease||u.Power3.easeOut,onComplete:Gt,onOverwrite:Yt,onUpdate:c.fastMode?rt:Kt,onUpdateParams:c.fastMode?[F,"onthrowupdate","onThrowUpdate"]:p},isNaN(c.maxDuration)?2:c.maxDuration,isNaN(c.minDuration)?s===0?0:.5:c.minDuration,s),c.fastMode||(Z&&(Z._suspendTransforms=!0),i.render(i.duration(),!0,!0),Kt(!0,!0),F.endX=F.x,F.endY=F.y,w&&(F.endRotation=F.x),i.play(0),Kt(!0,!0),Z&&(Z._suspendTransforms=!1))):ut&&F.applyBounds()},en=function(){var e=Tt||[1,0,0,1,0,0],t,n,r,i,s,o,u,f,l;Tt=Nt(a.parentNode,!0),F.isPressed&&e.join(",")!==Tt.join(",")&&(t=e[0],n=e[1],r=e[2],i=e[3],s=e[4],o=e[5],u=t*i-n*r,f=et*(i/u)+tt*(-r/u)+(r*o-i*s)/u,l=et*(-n/u)+tt*(t/u)+ -(t*o-n*s)/u,tt=f*Tt[1]+l*Tt[3]+Tt[5],et=f*Tt[0]+l*Tt[2]+Tt[4]),!Tt[1]&&!Tt[2]&&Tt[0]==1&&Tt[3]==1&&Tt[4]==0&&Tt[5]==0&&(Tt=null)},tn=function(){var e=1-F.edgeResistance;en(),Z?(Qt(),ot=Z.top(),st=Z.left()):(nn()?(Kt(!0,!0),Qt()):F.applyBounds(),w?(gt=Ct(a,{x:0,y:0}),Kt(!0,!0),st=F.x,ot=F.y=Math.atan2(gt.y-tt,et-gt.x)*v):(At=a.parentNode?a.parentNode.scrollTop||0:0,Ot=a.parentNode?a.parentNode.scrollLeft||0:0,ot=nt(a,N),st=nt(a,x))),ut&&e&&(st>ft?st=ft+(st-ft)/e:st<lt&&(st=lt-(lt-st)/e),w||(ot>ct?ot=ct+(ot-ct)/e:ot<ht&&(ot=ht-(ht-ot)/e)))},nn=function(){return F.tween&&F.tween.isActive()},rn=function(e,t,n,r){return typeof e=="function"?function(i){var s=F.isPressed?1-F.edgeResistance:1;return e.call(F,i>n?n+(i-n)*s:i<t?t+(i-t)*s:i)*r}:e instanceof Array?function(r){var i=e.length,s=0,o=m,u,a;while(--i>-1)u=e[i],a=u-r,a<0&&(a=-a),a<o&&u>=t&&u<=n&&(s=i,o=a);return e[s]}:isNaN(e)?function(e){return e}:function(){return e*r}},sn=function(e){var n,r;if(!Y||F.isPressed||!e||e.type==="mousedown"&&g()-Lt<30&&_t[F.pointerEvent.type])return;kt=nn(),F.pointerEvent=e,_t[e.type]?(xt=e.type.indexOf("touch")!==-1?e.currentTarget||e.target:f,Dt(xt,"touchend",an),Dt(xt,"touchmove",on),Dt(xt,"touchcancel",an),Dt(f,"touchstart",jt)):(xt=null,Dt(f,"mousemove",on)),Ut=null,Dt(f,"mouseup",an),e&&e.target&&Dt(e.target,"mouseup",an),St=G.call(F,e.target)&&!c.dragClickables;if(St){Dt(e.target,"change",an),rt(F,"press","onPress"),qt(q,!0);return}Rt=!xt||A===O||Z||F.vars.allowNativeTouchScrolling===!1?!1:A?"y":"x",y?e=$(e,!0):!Rt&&!F.allowEventDefault&&(e.preventDefault(),e.preventManipulation&&e.preventManipulation()),e.changedTouches?(e=vt=e.changedTouches[0],mt=e.identifier):e.pointerId?mt=e.pointerId:vt=mt=null,T++,B($t),tt=F.pointerY=e.pageY,et=F.pointerX=e.pageX,(Rt||F.autoScroll)&&V(a.parentNode),F.autoScroll&&!w&&!Z&&a.parentNode&&!a.getBBox&&a.parentNode._gsMaxScrollX&&!b.parentNode&&(b.style.width=a.parentNode.scrollWidth+"px",a.parentNode.appendChild(b)),tn(),Tt&&(n=et*Tt[0]+tt*Tt[2]+Tt[4],tt=et*Tt[1]+tt*Tt[3]+Tt[5],et=n),F.tween&&F.tween.kill(),F.isThrowing=!1,t.killTweensOf(Z||a,!0,R),Z&&t.killTweensOf(a,!0,{scrollTo:1}),F.tween=F.lockedAxis=null;if(c.zIndexBoost||!w&&!Z&&c.zIndexBoost!==!1)a.style.zIndex=Wt.zIndex++;F.isPressed=!0,at=!!c.onDrag||!!F._listeners.drag;if(!w){r=q.length;while(--r>-1)Q(q[r],"cursor",c.cursor||"move")}rt(F,"press","onPress")},on=function(e){var t=e,n,r,i,s;if(!Y||C||!F.isPressed||!e)return;F.pointerEvent=e,n=e.changedTouches;if(n){e=n[0];if(e!==vt&&e.identifier!==mt){s=n.length;while(--s>-1&&(e=n[s]).identifier!==mt);if(s<0)return}}else if(e.pointerId&&mt&&e.pointerId!==mt)return;if(y)e=$(e,!0);else{if(xt&&Rt&&!Ut){r=e.pageX,i=e.pageY,Tt&&(s=r*Tt[0]+i*Tt[2]+Tt[4],i=r*Tt[1]+i*Tt[3]+Tt[5],r=s),Ut=Math.abs(r-et)>Math.abs(i-tt)&&A?"x":"y",F.vars.lockAxisOnTouchScroll!==!1&&(F.lockedAxis=Ut==="x"?"y":"x",typeof F.vars.onLockAxis=="function"&&F.vars.onLockAxis.call(F,t));if(k&&Rt===Ut){an(t);return}}!F.allowEventDefault&&(!Rt||Ut&&Rt!==Ut)&&t.cancelable!==!1&&(t.preventDefault(),t.preventManipulation&&t.preventManipulation())}F.autoScroll&&(K=!0),un(e.pageX,e.pageY)},un=function(e,t){var n=1-F.dragResistance,r=1-F.edgeResistance,i,s,o,u,a,f;F.pointerX=e,F.pointerY=t,w?(u=Math.atan2(gt.y-t,e-gt.x)*v,a=F.y-u,F.y=u,a>180?ot-=360:a<-180&&(ot+=360),o=st+(ot-u)*n):(Tt&&(f=e*Tt[0]+t*Tt[2]+Tt[4],t=e*Tt[1]+t*Tt[3]+Tt[5],e=f),s=t-tt,i=e-et,s<H&&s>-H&&(s=0),i<H&&i>-H&&(i=0),(F.lockAxis||F.lockedAxis)&&(i||s)&&(f=F.lockedAxis,f||(F.lockedAxis=f=A&&Math.abs(i)>Math.abs(s)?"y":O?"x":null,f&&typeof F.vars.onLockAxis=="function"&&F.vars.onLockAxis.call(F,F.pointerEvent)),f==="y"?s=0:f==="x"&&(i=0)),o=st+i*n,u=ot+s*n),wt||Et?(wt&&(o=wt(o)),Et&&(u=Et(u))):ut&&(o>ft?o=ft+(o-ft)*r:o<lt&&(o=lt+(o-lt)*r),w||(u>ct?u=ct+(u-ct)*r:u<ht&&(u=ht+(u-ht)*r))),w||(o=Math.round(o),u=Math.round(u));if(F.x!==o||F.y!==u&&!w)w?F.endRotation=F.x=F.endX=o:(O&&(F.y=F.endY=u),A&&(F.x=F.endX=o)),yt=!0,!F.isDragging&&F.isPressed&&(F.isDragging=!0,rt(F,"dragstart","onDragStart"))},an=function(e,n){if(!Y||!F.isPressed||e&&mt!=null&&!n&&(e.pointerId&&e.pointerId!==mt||e.changedTouches&&!Ht(e.changedTouches,mt)))return;F.isPressed=!1;var r=e,i=F.isDragging,s,o,u,l;xt?(Pt(xt,"touchend",an),Pt(xt,"touchmove",on),Pt(xt,"touchcancel",an),Pt(f,"touchstart",jt)):Pt(f,"mousemove",on),Pt(f,"mouseup",an),e&&e.target&&Pt(e.target,"mouseup",an),yt=!1,b.parentNode&&b.parentNode.removeChild(b);if(St){e&&Pt(e.target,"change",an),qt(q,!1),rt(F,"release","onRelease"),rt(F,"click","onClick"),St=!1;return}j($t);if(!w){o=q.length;while(--o>-1)Q(q[o],"cursor",c.cursor||"move")}i&&(X=L=g(),F.isDragging=!1),T--;if(e){y&&(e=$(e,!1)),s=e.changedTouches;if(s){e=s[0];if(e!==vt&&e.identifier!==mt){o=s.length;while(--o>-1&&(e=s[o]).identifier!==mt);if(o<0)return}}F.pointerEvent=r,F.pointerX=e.pageX,F.pointerY=e.pageY}if(r&&!i){kt&&(c.snap||c.bounds)&&Zt(c.throwProps),rt(F,"release","onRelease");if(!k||r.type!=="touchmove")rt(F,"click","onClick"),l=r.target||r.srcElement||a,Lt=g(),t.delayedCall(1e-5,function(){Lt!==Vt&&F.enabled()&&!F.isPressed&&(l.click?l.click():f.createEvent&&(u=f.createEvent("MouseEvents"),u.initMouseEvent("click",!0,!0,window,1,F.pointerEvent.screenX,F.pointerEvent.screenY,F.pointerX,F.pointerY,!1,!1,!1,!1,0,null),l.dispatchEvent(u)))})}else Zt(c.throwProps),!y&&!F.allowEventDefault&&r&&(c.dragClickables||!G.call(F,r.target))&&i&&(!Rt||Ut&&Rt===Ut)&&r.cancelable!==!1&&(r.preventDefault(),r.preventManipulation&&r.preventManipulation()),rt(F,"release","onRelease");return i&&rt(F,"dragend","onDragEnd"),!0},fn=function(e){if(e&&F.isDragging){var t=e.target||e.srcElement||a.parentNode,n=t.scrollLeft-t._gsScrollX,r=t.scrollTop-t._gsScrollY;if(n||r)et-=n,tt-=r,t._gsScrollX+=n,t._gsScrollY+=r,un(F.pointerX,F.pointerY)}},ln=function(e){var t=g(),n=t-Lt<40,r=t-X<40;if(n&&Vt!==Lt){Vt=Lt;return}if(F.isPressed||r||n)e.preventDefault?(e.preventDefault(),(n||r&&F.vars.suppressClickOnDrag!==!1)&&e.stopImmediatePropagation()):e.returnValue=!1,e.preventManipulation&&e.preventManipulation()};bt=Wt.get(this.target),bt&&bt.kill(),this.startDrag=function(e){sn(e),F.isDragging||(F.isDragging=!0,rt(F,"dragstart","onDragStart"))},this.drag=on,this.endDrag=function(e){an(e,!0)},this.timeSinceDrag=function(){return F.isDragging?0:(g()-X)/1e3},this.hitTest=function(e,t){return Wt.hitTest(F.target,e,t)},this.getDirection=function(e,t){var n=e==="velocity"&&P?e:typeof e=="object"&&!w?"element":"start",r,i,s,o,u,a;return n==="element"&&(u=Jt(F.target),a=Jt(e)),r=n==="start"?F.x-st:n==="velocity"?P.getVelocity(this.target,x):u.left+u.width/2-(a.left+a.width/2),w?r<0?"counter-clockwise":"clockwise":(t=t||2,i=n==="start"?F.y-ot:n==="velocity"?P.getVelocity(this.target,N):u.top+u.height/2-(a.top+a.height/2),s=Math.abs(r/i),o=s<1/t?"":r<0?"left":"right",s<t&&(o!==""&&(o+="-"),o+=i<0?"up":"down"),o)},this.applyBounds=function(e){var t,n,r;if(e&&c.bounds!==e)return c.bounds=e,F.update(!0);Kt(!0),Qt();if(ut){t=F.x,n=F.y,ut&&(t>ft?t=ft:t<lt&&(t=lt),n>ct?n=ct:n<ht&&(n=ht));if(F.x!==t||F.y!==n)r=!0,F.x=F.endX=t,w?F.endRotation=t:F.y=F.endY=n,yt=!0,$t();F.isThrowing&&(r||F.endX>ft||F.endX<lt||F.endY>ct||F.endY<ht)&&Zt(c.throwProps,r)}return F},this.update=function(e,t){var n=F.x,r=F.y;return en(),e?F.applyBounds():(yt&&t&&$t(),Kt(!0)),F.isPressed&&(A&&Math.abs(n-F.x)>.01||O&&Math.abs(r-F.y)>.01&&!w)&&tn(),F.autoScroll&&(V(a.parentNode),K=!0,$t()),F},this.enable=function(e){var r,i,s;if(e!=="soft"){i=q.length;while(--i>-1)s=q[i],Dt(s,"mousedown",sn),Dt(s,"touchstart",sn),Dt(s,"click",ln,!0),w||Q(s,"cursor",c.cursor||"move"),Q(s,"touchCallout","none"),Q(s,"touchAction",A===O||Z?"none":A?"pan-y":"pan-x");qt(q,!1)}return U(F.target,fn),Y=!0,P&&e!=="soft"&&P.track(Z||a,d?"x,y":w?"rotation":"top,left"),Z&&Z.enable(),a._gsDragID=r="d"+S++,E[r]=this,Z&&(Z.element._gsDragID=r),t.set(a,{x:"+=0",overwrite:!1}),Bt={t:a,data:y?dt:a._gsTransform,tween:{},setRatio:y?function(){t.set(a,pt)}:n._internals.setTransformRatio||n._internals.set3DTransformRatio},F.update(!0),F},this.disable=function(e){var t=F.isDragging,n,r;if(!w){n=q.length;while(--n>-1)Q(q[n],"cursor",null)}if(e!=="soft"){n=q.length;while(--n>-1)r=q[n],Q(r,"touchCallout",null),Q(r,"touchAction",null),Pt(r,"mousedown",sn),Pt(r,"touchstart",sn),Pt(r,"click",ln);qt(q,!0),xt&&(Pt(xt,"touchcancel",an),Pt(xt,"touchend",an),Pt(xt,"touchmove",on)),Pt(f,"mouseup",an),Pt(f,"mousemove",on)}return z(a,fn),Y=!1,P&&e!=="soft"&&P.untrack(Z||a,d?"x,y":w?"rotation":"top,left"),Z&&Z.disable(),j($t),F.isDragging=F.isPressed=St=!1,t&&rt(F,"dragend","onDragEnd"),F},this.enabled=function(e,t){return arguments.length?e?F.enable(t):F.disable(t):Y},this.kill=function(){return F.isThrowing=!1,t.killTweensOf(Z||a,!0,R),F.disable(),delete E[a._gsDragID],F},h.indexOf("scroll")!==-1&&(Z=this.scrollProxy=new zt(a,I({onKill:function(){F.isPressed&&an(null)}},c)),a.style.overflowY=O&&!Mt?"auto":"hidden",a.style.overflowX=A&&!Mt?"auto":"hidden",a=Z.content),c.force3D!==!1&&t.set(a,{force3D:!0}),w?R.rotation=1:(A&&(R[x]=1),O&&(R[N]=1)),w?(pt=o,dt=pt.css,pt.overwrite=!1):d&&(pt=A&&O?r:A?i:s,dt=pt.css,pt.overwrite=!1),this.enable()},Xt=Wt.prototype=new e;Xt.constructor=Wt,Xt.pointerX=Xt.pointerY=0,Xt.isDragging=Xt.isPressed=!1,Wt.version="0.14.3",Wt.zIndex=1e3,Dt(f,"touchcancel",function(){}),Dt(f,"contextmenu",function(e){var t;for(t in E)E[t].isPressed&&E[t].endDrag()}),Wt.create=function(e,n){typeof e=="string"&&(e=t.selector(e));var r=!e||e.length===0?[]:At(e)?Ot(e):[e],i=r.length;while(--i>-1)r[i]=new Wt(r[i],n);return r},Wt.get=function(e){return E[(J(e)||{})._gsDragID]},Wt.timeSinceDrag=function(){return(g()-L)/1e3};var Vt={},$t=function(e){var t=0,n=0,r,i;e=J(e),r=e.offsetWidth,i=e.offsetHeight;while(e)t+=e.offsetTop,n+=e.offsetLeft,e=e.offsetParent;return{top:t,left:n,width:r,height:i}},Jt=function(e,t){if(e===window)return Vt.left=Vt.top=0,Vt.width=Vt.right=l.clientWidth||e.innerWidth||f.body.clientWidth||0,Vt.height=Vt.bottom=(e.innerHeight||0)-20<l.clientHeight?l.clientHeight:e.innerHeight||f.body.clientHeight||0,Vt;var n=e.pageX!==t?{left:e.pageX-R(),top:e.pageY-q(),right:e.pageX-R()+1,bottom:e.pageY-q()+1}:!e.nodeType&&e.left!==t&&e.top!==t?e:y?$t(e):J(e).getBoundingClientRect();return n.right===t&&n.width!==t?(n.right=n.left+n.width,n.bottom=n.top+n.height):n.width===t&&(n={width:n.right-n.left,height:n.bottom-n.top,right:n.right,left:n.left,bottom:n.bottom,top:n.top}),n};return Wt.hitTest=function(e,t,n){if(e===t)return!1;var r=Jt(e),i=Jt(t),s=i.left>r.right||i.right<r.left||i.top>r.bottom||i.bottom<r.top,o,u,a;return s||!n?!s:(a=(n+"").indexOf("%")!==-1,n=parseFloat(n)||0,o={left:Math.max(r.left,i.left),top:Math.max(r.top,i.top)},o.width=Math.min(r.right,i.right)-o.left,o.height=Math.min(r.bottom,i.bottom)-o.top,o.width<0||o.height<0?!1:a?(n*=.01,u=o.width*o.height,u>=r.width*r.height*n||u>=i.width*i.height*n):o.width>n&&o.height>n)},b.style.cssText="visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;",Wt},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(e){var t=function(){return(_gsScope.GreenSockGlobals||_gsScope)[e]};typeof define=="function"&&define.amd?define(["TweenLite"],t):typeof module!="undefined"&&module.exports&&(require("../TweenLite.js"),require("../plugins/CSSPlugin.js"),module.exports=t())}("Draggable");