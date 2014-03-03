/*!    SWFObject v2.3.20120118 <http://github.com/swfobject/swfobject>
    is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
*/

(function(e,t){typeof module!="undefined"?module.exports=t():typeof define=="function"&&typeof define.amd!="undefined"?define(t):e.swfobject=t()})(this,function(){function e(){if(z||!document.getElementsByTagName("body")[0])return;try{var e,t=g("span");t.style.display="none",e=_.getElementsByTagName("body")[0].appendChild(t),e.parentNode.removeChild(e),e=null,t=null}catch(n){return}z=!0;var r=H.length;for(var i=0;i<r;i++)H[i]()}function t(e){z?e():H[H.length]=e}function n(e){if(typeof M.addEventListener!=T)M.addEventListener("load",e,!1);else if(typeof _.addEventListener!=T)_.addEventListener("load",e,!1);else if(typeof M.attachEvent!=T)b(M,"onload",e);else if(typeof M.onload=="function"){var t=M.onload;M.onload=function(){t(),e()}}else M.onload=e}function r(){var e=_.getElementsByTagName("body")[0],t=g(N);t.setAttribute("style","visibility: hidden;"),t.setAttribute("type",L);var n=e.appendChild(t);if(n){var r=0;(function s(){if(typeof n.GetVariable!=T)try{var o=n.GetVariable("$version");o&&(o=o.split(" ")[1].split(","),K.pv=[y(o[0]),y(o[1]),y(o[2])])}catch(u){K.pv=[8,0,0]}else if(r<10){r++,setTimeout(s,10);return}e.removeChild(t),n=null,i()})()}else i()}function i(){var e=B.length;if(e>0)for(var t=0;t<e;t++){var n=B[t].id,r=B[t].callbackFn,i={success:!1,id:n};if(K.pv[0]>0){var f=m(n);if(f)if(w(B[t].swfVersion)&&!(K.wk&&K.wk<312))S(n,!0),r&&(i.success=!0,i.ref=s(n),i.id=n,r(i));else if(B[t].expressInstall&&o()){var l={};l.data=B[t].expressInstall,l.width=f.getAttribute("width")||"0",l.height=f.getAttribute("height")||"0",f.getAttribute("class")&&(l.styleclass=f.getAttribute("class")),f.getAttribute("align")&&(l.align=f.getAttribute("align"));var c={},h=f.getElementsByTagName("param"),p=h.length;for(var d=0;d<p;d++)h[d].getAttribute("name").toLowerCase()!="movie"&&(c[h[d].getAttribute("name")]=h[d].getAttribute("value"));u(l,c,n,r)}else a(f),r&&r(i)}else{S(n,!0);if(r){var v=s(n);v&&typeof v.SetVariable!=T&&(i.success=!0,i.ref=v,i.id=v.id),r(i)}}}}function s(e){var t=null,n=m(e);return n&&n.nodeName.toUpperCase()==="OBJECT"&&(typeof n.SetVariable!==T?t=n:t=n.getElementsByTagName(N)[0]||n),t}function o(){return!W&&w("6.0.65")&&(K.win||K.mac)&&!(K.wk&&K.wk<312)}function u(e,t,n,r){var i=m(n);n=v(n),W=!0,R=r||null,U={success:!1,id:n};if(i){i.nodeName.toUpperCase()=="OBJECT"?(I=f(i),q=null):(I=i,q=n),e.id=A;if(typeof e.width==T||!/%$/.test(e.width)&&y(e.width)<310)e.width="310";if(typeof e.height==T||!/%$/.test(e.height)&&y(e.height)<137)e.height="137";_.title=_.title.slice(0,47)+" - Flash Player Installation";var s=K.ie?"ActiveX":"PlugIn",o="MMredirectURL="+encodeURIComponent(M.location.toString().replace(/&/g,"%26"))+"&MMplayerType="+s+"&MMdoctitle="+_.title;typeof t.flashvars!=T?t.flashvars+="&"+o:t.flashvars=o;if(K.ie&&i.readyState!=4){var u=g("div");n+="SWFObjectNew",u.setAttribute("id",n),i.parentNode.insertBefore(u,i),i.style.display="none",p(i)}c(e,t,n)}}function a(e){if(K.ie&&e.readyState!=4){e.style.display="none";var t=g("div");e.parentNode.insertBefore(t,e),t.parentNode.replaceChild(f(e),t),p(e)}else e.parentNode.replaceChild(f(e),e)}function f(e){var t=g("div");if(K.win&&K.ie)t.innerHTML=e.innerHTML;else{var n=e.getElementsByTagName(N)[0];if(n){var r=n.childNodes;if(r){var i=r.length;for(var s=0;s<i;s++)(r[s].nodeType!=1||r[s].nodeName!="PARAM")&&r[s].nodeType!=8&&t.appendChild(r[s].cloneNode(!0))}}}return t}function l(e,t){var n=g("div");return n.innerHTML="<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'><param name='movie' value='"+e+"'>"+t+"</object>",n.firstChild}function c(e,t,n){var r,i=m(n);n=v(n);if(K.wk&&K.wk<312)return r;if(i){var s=K.ie?g("div"):g(N),o,u,a;typeof e.id==T&&(e.id=n);for(a in t)t.hasOwnProperty(a)&&a.toLowerCase()!=="movie"&&h(s,a,t[a]);K.ie&&(s=l(e.data,s.innerHTML));for(o in e)e.hasOwnProperty(o)&&(u=o.toLowerCase(),u==="styleclass"?s.setAttribute("class",e[o]):u!=="classid"&&u!=="data"&&s.setAttribute(o,e[o]));K.ie?j[j.length]=e.id:(s.setAttribute("type",L),s.setAttribute("data",e.data)),i.parentNode.replaceChild(s,i),r=s}return r}function h(e,t,n){var r=g("param");r.setAttribute("name",t),r.setAttribute("value",n),e.appendChild(r)}function p(e){var t=m(e);t&&t.nodeName.toUpperCase()=="OBJECT"&&(K.ie?(t.style.display="none",function n(){if(t.readyState==4){for(var e in t)typeof t[e]=="function"&&(t[e]=null);t.parentNode.removeChild(t)}else setTimeout(n,10)}()):t.parentNode.removeChild(t))}function d(e){return e&&e.nodeType&&e.nodeType===1}function v(e){return d(e)?e.id:e}function m(e){if(d(e))return e;var t=null;try{t=_.getElementById(e)}catch(n){}return t}function g(e){return _.createElement(e)}function y(e){return parseInt(e,10)}function b(e,t,n){e.attachEvent(t,n),F[F.length]=[e,t,n]}function w(e){e+="";var t=K.pv,n=e.split(".");return n[0]=y(n[0]),n[1]=y(n[1])||0,n[2]=y(n[2])||0,t[0]>n[0]||t[0]==n[0]&&t[1]>n[1]||t[0]==n[0]&&t[1]==n[1]&&t[2]>=n[2]?!0:!1}function E(e,t,n,r){var i=_.getElementsByTagName("head")[0];if(!i)return;var s=typeof n=="string"?n:"screen";r&&(X=null,V=null);if(!X||V!=s){var o=g("style");o.setAttribute("type","text/css"),o.setAttribute("media",s),X=i.appendChild(o),K.ie&&typeof _.styleSheets!=T&&_.styleSheets.length>0&&(X=_.styleSheets[_.styleSheets.length-1]),V=s}X&&(typeof X.addRule!=T?X.addRule(e,t):typeof _.createTextNode!=T&&X.appendChild(_.createTextNode(e+" {"+t+"}")))}function S(e,t){if(!$)return;var n=t?"visible":"hidden",r=m(e);z&&r?r.style.visibility=n:typeof e=="string"&&E("#"+e,"visibility:"+n)}function x(e){var t=/[\\\"<>\.;]/,n=t.exec(e)!=null;return n&&typeof encodeURIComponent!=T?encodeURIComponent(e):e}var T="undefined",N="object",C="Shockwave Flash",k="ShockwaveFlash.ShockwaveFlash",L="application/x-shockwave-flash",A="SWFObjectExprInst",O="onreadystatechange",M=window,_=document,D=navigator,P=!1,H=[],B=[],j=[],F=[],I,q,R,U,z=!1,W=!1,X,V,$=!0,J=!1,K=function(){var e=typeof _.getElementById!=T&&typeof _.getElementsByTagName!=T&&typeof _.createElement!=T,t=D.userAgent.toLowerCase(),n=D.platform.toLowerCase(),r=n?/win/.test(n):/win/.test(t),i=n?/mac/.test(n):/mac/.test(t),s=/webkit/.test(t)?parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,o=D.appName==="Microsoft Internet Explorer",u=[0,0,0],a=null;if(typeof D.plugins!=T&&typeof D.plugins[C]==N)a=D.plugins[C].description,a&&typeof D.mimeTypes!=T&&D.mimeTypes[L]&&D.mimeTypes[L].enabledPlugin&&(P=!0,o=!1,a=a.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),u[0]=y(a.replace(/^(.*)\..*$/,"$1")),u[1]=y(a.replace(/^.*\.(.*)\s.*$/,"$1")),u[2]=/[a-zA-Z]/.test(a)?y(a.replace(/^.*[a-zA-Z]+(.*)$/,"$1")):0);else if(typeof M.ActiveXObject!=T)try{var f=new ActiveXObject(k);f&&(a=f.GetVariable("$version"),a&&(o=!0,a=a.split(" ")[1].split(","),u=[y(a[0]),y(a[1]),y(a[2])]))}catch(l){}return{w3:e,pv:u,wk:s,ie:o,win:r,mac:i}}(),Q=function(){if(!K.w3)return;(typeof _.readyState!=T&&(_.readyState==="complete"||_.readyState==="interactive")||typeof _.readyState==T&&(_.getElementsByTagName("body")[0]||_.body))&&e(),z||(typeof _.addEventListener!=T&&_.addEventListener("DOMContentLoaded",e,!1),K.ie&&(_.attachEvent(O,function t(){_.readyState=="complete"&&(_.detachEvent(O,t),e())}),M==top&&function n(){if(z)return;try{_.documentElement.doScroll("left")}catch(t){setTimeout(n,0);return}e()}()),K.wk&&function r(){if(z)return;if(!/loaded|complete/.test(_.readyState)){setTimeout(r,0);return}e()}())}();H[0]=function(){P?r():i()};var G=function(){K.ie&&window.attachEvent("onunload",function(){var e=F.length;for(var t=0;t<e;t++)F[t][0].detachEvent(F[t][1],F[t][2]);var n=j.length;for(var r=0;r<n;r++)p(j[r]);for(var i in K)K[i]=null;K=null;for(var s in swfobject)swfobject[s]=null;swfobject=null})}();return{registerObject:function(e,t,n,r){if(K.w3&&e&&t){var i={};i.id=e,i.swfVersion=t,i.expressInstall=n,i.callbackFn=r,B[B.length]=i,S(e,!1)}else r&&r({success:!1,id:e})},getObjectById:function(e){if(K.w3)return s(e)},embedSWF:function(e,n,r,i,s,a,f,l,h,p){var d=v(n),m={success:!1,id:d};K.w3&&!(K.wk&&K.wk<312)&&e&&n&&r&&i&&s?(S(d,!1),t(function(){r+="",i+="";var t={};if(h&&typeof h===N)for(var v in h)t[v]=h[v];t.data=e,t.width=r,t.height=i;var g={};if(l&&typeof l===N)for(var y in l)g[y]=l[y];if(f&&typeof f===N)for(var b in f)if(f.hasOwnProperty(b)){var E=J?encodeURIComponent(b):b,x=J?encodeURIComponent(f[b]):f[b];typeof g.flashvars!=T?g.flashvars+="&"+E+"="+x:g.flashvars=E+"="+x}if(w(s)){var C=c(t,g,n);t.id==d&&S(d,!0),m.success=!0,m.ref=C,m.id=C.id}else{if(a&&o()){t.data=a,u(t,g,n,p);return}S(d,!0)}p&&p(m)})):p&&p(m)},switchOffAutoHideShow:function(){$=!1},enableUriEncoding:function(e){J=typeof e===T?!0:e},ua:K,getFlashPlayerVersion:function(){return{major:K.pv[0],minor:K.pv[1],release:K.pv[2]}},hasFlashPlayerVersion:w,createSWF:function(e,t,n){return K.w3?c(e,t,n):undefined},showExpressInstall:function(e,t,n,r){K.w3&&o()&&u(e,t,n,r)},removeSWF:function(e){K.w3&&p(e)},createCSS:function(e,t,n,r){K.w3&&E(e,t,n,r)},addDomLoadEvent:t,addLoadEvent:n,getQueryParamValue:function(e){var t=_.location.search||_.location.hash;if(t){/\?/.test(t)&&(t=t.split("?")[1]);if(e==null)return x(t);var n=t.split("&");for(var r=0;r<n.length;r++)if(n[r].substring(0,n[r].indexOf("="))==e)return x(n[r].substring(n[r].indexOf("=")+1))}return""},expressInstallCallback:function(){if(W){var e=m(A);e&&I&&(e.parentNode.replaceChild(I,e),q&&(S(q,!0),K.ie&&(I.style.display="block")),R&&R(U)),W=!1}},version:"2.3"}});