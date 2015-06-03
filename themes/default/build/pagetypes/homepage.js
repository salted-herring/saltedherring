
/*!
 * jQuery JavaScript Library v2.0.3
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-07-03T13:30Z
 */

/*!
 * Sizzle CSS Selector Engine v1.9.4-pre
 * http://sizzlejs.com/
 *
 * Copyright 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-06-03
 */

(function(window,undefined){function isArraylike(e){var t=e.length,n=jQuery.type(e);return jQuery.isWindow(e)?!1:e.nodeType===1&&t?!0:n==="array"||n!=="function"&&(t===0||typeof t=="number"&&t>0&&t-1 in e)}function createOptions(e){var t=optionsCache[e]={};return jQuery.each(e.match(core_rnotwhite)||[],function(e,n){t[n]=!0}),t}function Data(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=jQuery.expando+Math.random()}function dataAttr(e,t,n){var r;if(n===undefined&&e.nodeType===1){r="data-"+t.replace(rmultiDash,"-$1").toLowerCase(),n=e.getAttribute(r);if(typeof n=="string"){try{n=n==="true"?!0:n==="false"?!1:n==="null"?null:+n+""===n?+n:rbrace.test(n)?JSON.parse(n):n}catch(i){}data_user.set(e,t,n)}else n=undefined}return n}function returnTrue(){return!0}function returnFalse(){return!1}function safeActiveElement(){try{return document.activeElement}catch(e){}}function sibling(e,t){while((e=e[t])&&e.nodeType!==1);return e}function winnow(e,t,n){if(jQuery.isFunction(t))return jQuery.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return jQuery.grep(e,function(e){return e===t!==n});if(typeof t=="string"){if(isSimple.test(t))return jQuery.filter(t,e,n);t=jQuery.filter(t,e)}return jQuery.grep(e,function(e){return core_indexOf.call(t,e)>=0!==n})}function manipulationTarget(e,t){return jQuery.nodeName(e,"table")&&jQuery.nodeName(t.nodeType===1?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function disableScript(e){return e.type=(e.getAttribute("type")!==null)+"/"+e.type,e}function restoreScript(e){var t=rscriptTypeMasked.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function setGlobalEval(e,t){var n=e.length,r=0;for(;r<n;r++)data_priv.set(e[r],"globalEval",!t||data_priv.get(t[r],"globalEval"))}function cloneCopyEvent(e,t){var n,r,i,s,o,u,a,f;if(t.nodeType!==1)return;if(data_priv.hasData(e)){s=data_priv.access(e),o=data_priv.set(t,s),f=s.events;if(f){delete o.handle,o.events={};for(i in f)for(n=0,r=f[i].length;n<r;n++)jQuery.event.add(t,i,f[i][n])}}data_user.hasData(e)&&(u=data_user.access(e),a=jQuery.extend({},u),data_user.set(t,a))}function getAll(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return t===undefined||t&&jQuery.nodeName(e,t)?jQuery.merge([e],n):n}function fixInput(e,t){var n=t.nodeName.toLowerCase();if(n==="input"&&manipulation_rcheckableType.test(e.type))t.checked=e.checked;else if(n==="input"||n==="textarea")t.defaultValue=e.defaultValue}function vendorPropName(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=cssPrefixes.length;while(i--){t=cssPrefixes[i]+n;if(t in e)return t}return r}function isHidden(e,t){return e=t||e,jQuery.css(e,"display")==="none"||!jQuery.contains(e.ownerDocument,e)}function getStyles(e){return window.getComputedStyle(e,null)}function showHide(e,t){var n,r,i,s=[],o=0,u=e.length;for(;o<u;o++){r=e[o];if(!r.style)continue;s[o]=data_priv.get(r,"olddisplay"),n=r.style.display,t?(!s[o]&&n==="none"&&(r.style.display=""),r.style.display===""&&isHidden(r)&&(s[o]=data_priv.access(r,"olddisplay",css_defaultDisplay(r.nodeName)))):s[o]||(i=isHidden(r),(n&&n!=="none"||!i)&&data_priv.set(r,"olddisplay",i?n:jQuery.css(r,"display")))}for(o=0;o<u;o++){r=e[o];if(!r.style)continue;if(!t||r.style.display==="none"||r.style.display==="")r.style.display=t?s[o]||"":"none"}return e}function setPositiveNumber(e,t,n){var r=rnumsplit.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function augmentWidthOrHeight(e,t,n,r,i){var s=n===(r?"border":"content")?4:t==="width"?1:0,o=0;for(;s<4;s+=2)n==="margin"&&(o+=jQuery.css(e,n+cssExpand[s],!0,i)),r?(n==="content"&&(o-=jQuery.css(e,"padding"+cssExpand[s],!0,i)),n!=="margin"&&(o-=jQuery.css(e,"border"+cssExpand[s]+"Width",!0,i))):(o+=jQuery.css(e,"padding"+cssExpand[s],!0,i),n!=="padding"&&(o+=jQuery.css(e,"border"+cssExpand[s]+"Width",!0,i)));return o}function getWidthOrHeight(e,t,n){var r=!0,i=t==="width"?e.offsetWidth:e.offsetHeight,s=getStyles(e),o=jQuery.support.boxSizing&&jQuery.css(e,"boxSizing",!1,s)==="border-box";if(i<=0||i==null){i=curCSS(e,t,s);if(i<0||i==null)i=e.style[t];if(rnumnonpx.test(i))return i;r=o&&(jQuery.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+augmentWidthOrHeight(e,t,n||(o?"border":"content"),r,s)+"px"}function css_defaultDisplay(e){var t=document,n=elemdisplay[e];if(!n){n=actualDisplay(e,t);if(n==="none"||!n)iframe=(iframe||jQuery("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(iframe[0].contentWindow||iframe[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=actualDisplay(e,t),iframe.detach();elemdisplay[e]=n}return n}function actualDisplay(e,t){var n=jQuery(t.createElement(e)).appendTo(t.body),r=jQuery.css(n[0],"display");return n.remove(),r}function buildParams(e,t,n,r){var i;if(jQuery.isArray(t))jQuery.each(t,function(t,i){n||rbracket.test(e)?r(e,i):buildParams(e+"["+(typeof i=="object"?t:"")+"]",i,n,r)});else if(!n&&jQuery.type(t)==="object")for(i in t)buildParams(e+"["+i+"]",t[i],n,r);else r(e,t)}function addToPrefiltersOrTransports(e){return function(t,n){typeof t!="string"&&(n=t,t="*");var r,i=0,s=t.toLowerCase().match(core_rnotwhite)||[];if(jQuery.isFunction(n))while(r=s[i++])r[0]==="+"?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function inspectPrefiltersOrTransports(e,t,n,r){function i(u){var a;return s[u]=!0,jQuery.each(e[u]||[],function(e,u){var f=u(t,n,r);if(typeof f=="string"&&!o&&!s[f])return t.dataTypes.unshift(f),i(f),!1;if(o)return!(a=f)}),a}var s={},o=e===transports;return i(t.dataTypes[0])||!s["*"]&&i("*")}function ajaxExtend(e,t){var n,r,i=jQuery.ajaxSettings.flatOptions||{};for(n in t)t[n]!==undefined&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&jQuery.extend(!0,e,r),e}function ajaxHandleResponses(e,t,n){var r,i,s,o,u=e.contents,a=e.dataTypes;while(a[0]==="*")a.shift(),r===undefined&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in u)if(u[i]&&u[i].test(r)){a.unshift(i);break}if(a[0]in n)s=a[0];else{for(i in n){if(!a[0]||e.converters[i+" "+a[0]]){s=i;break}o||(o=i)}s=s||o}if(s)return s!==a[0]&&a.unshift(s),n[s]}function ajaxConvert(e,t,n,r){var i,s,o,u,a,f={},l=e.dataTypes.slice();if(l[1])for(o in e.converters)f[o.toLowerCase()]=e.converters[o];s=l.shift();while(s){e.responseFields[s]&&(n[e.responseFields[s]]=t),!a&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),a=s,s=l.shift();if(s)if(s==="*")s=a;else if(a!=="*"&&a!==s){o=f[a+" "+s]||f["* "+s];if(!o)for(i in f){u=i.split(" ");if(u[1]===s){o=f[a+" "+u[0]]||f["* "+u[0]];if(o){o===!0?o=f[i]:f[i]!==!0&&(s=u[0],l.unshift(u[1]));break}}}if(o!==!0)if(o&&e["throws"])t=o(t);else try{t=o(t)}catch(c){return{state:"parsererror",error:o?c:"No conversion from "+a+" to "+s}}}}return{state:"success",data:t}}function createFxNow(){return setTimeout(function(){fxNow=undefined}),fxNow=jQuery.now()}function createTween(e,t,n){var r,i=(tweeners[t]||[]).concat(tweeners["*"]),s=0,o=i.length;for(;s<o;s++)if(r=i[s].call(n,t,e))return r}function Animation(e,t,n){var r,i,s=0,o=animationPrefilters.length,u=jQuery.Deferred().always(function(){delete a.elem}),a=function(){if(i)return!1;var t=fxNow||createFxNow(),n=Math.max(0,f.startTime+f.duration-t),r=n/f.duration||0,s=1-r,o=0,a=f.tweens.length;for(;o<a;o++)f.tweens[o].run(s);return u.notifyWith(e,[f,s,n]),s<1&&a?n:(u.resolveWith(e,[f]),!1)},f=u.promise({elem:e,props:jQuery.extend({},t),opts:jQuery.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:fxNow||createFxNow(),duration:n.duration,tweens:[],createTween:function(t,n){var r=jQuery.Tween(e,f.opts,t,n,f.opts.specialEasing[t]||f.opts.easing);return f.tweens.push(r),r},stop:function(t){var n=0,r=t?f.tweens.length:0;if(i)return this;i=!0;for(;n<r;n++)f.tweens[n].run(1);return t?u.resolveWith(e,[f,t]):u.rejectWith(e,[f,t]),this}}),l=f.props;propFilter(l,f.opts.specialEasing);for(;s<o;s++){r=animationPrefilters[s].call(f,e,l,f.opts);if(r)return r}return jQuery.map(l,createTween,f),jQuery.isFunction(f.opts.start)&&f.opts.start.call(e,f),jQuery.fx.timer(jQuery.extend(a,{elem:e,anim:f,queue:f.opts.queue})),f.progress(f.opts.progress).done(f.opts.done,f.opts.complete).fail(f.opts.fail).always(f.opts.always)}function propFilter(e,t){var n,r,i,s,o;for(n in e){r=jQuery.camelCase(n),i=t[r],s=e[n],jQuery.isArray(s)&&(i=s[1],s=e[n]=s[0]),n!==r&&(e[r]=s,delete e[n]),o=jQuery.cssHooks[r];if(o&&"expand"in o){s=o.expand(s),delete e[r];for(n in s)n in e||(e[n]=s[n],t[n]=i)}else t[r]=i}}function defaultPrefilter(e,t,n){var r,i,s,o,u,a,f=this,l={},c=e.style,h=e.nodeType&&isHidden(e),p=data_priv.get(e,"fxshow");n.queue||(u=jQuery._queueHooks(e,"fx"),u.unqueued==null&&(u.unqueued=0,a=u.empty.fire,u.empty.fire=function(){u.unqueued||a()}),u.unqueued++,f.always(function(){f.always(function(){u.unqueued--,jQuery.queue(e,"fx").length||u.empty.fire()})})),e.nodeType===1&&("height"in t||"width"in t)&&(n.overflow=[c.overflow,c.overflowX,c.overflowY],jQuery.css(e,"display")==="inline"&&jQuery.css(e,"float")==="none"&&(c.display="inline-block")),n.overflow&&(c.overflow="hidden",f.always(function(){c.overflow=n.overflow[0],c.overflowX=n.overflow[1],c.overflowY=n.overflow[2]}));for(r in t){i=t[r];if(rfxtypes.exec(i)){delete t[r],s=s||i==="toggle";if(i===(h?"hide":"show")){if(i!=="show"||!p||p[r]===undefined)continue;h=!0}l[r]=p&&p[r]||jQuery.style(e,r)}}if(!jQuery.isEmptyObject(l)){p?"hidden"in p&&(h=p.hidden):p=data_priv.access(e,"fxshow",{}),s&&(p.hidden=!h),h?jQuery(e).show():f.done(function(){jQuery(e).hide()}),f.done(function(){var t;data_priv.remove(e,"fxshow");for(t in l)jQuery.style(e,t,l[t])});for(r in l)o=createTween(h?p[r]:0,r,f),r in p||(p[r]=o.start,h&&(o.end=o.start,o.start=r==="width"||r==="height"?1:0))}}function Tween(e,t,n,r,i){return new Tween.prototype.init(e,t,n,r,i)}function genFx(e,t){var n,r={height:e},i=0;t=t?1:0;for(;i<4;i+=2-t)n=cssExpand[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function getWindow(e){return jQuery.isWindow(e)?e:e.nodeType===9&&e.defaultView}var rootjQuery,readyList,core_strundefined=typeof undefined,location=window.location,document=window.document,docElem=document.documentElement,_jQuery=window.jQuery,_$=window.$,class2type={},core_deletedIds=[],core_version="2.0.3",core_concat=core_deletedIds.concat,core_push=core_deletedIds.push,core_slice=core_deletedIds.slice,core_indexOf=core_deletedIds.indexOf,core_toString=class2type.toString,core_hasOwn=class2type.hasOwnProperty,core_trim=core_version.trim,jQuery=function(e,t){return new jQuery.fn.init(e,t,rootjQuery)},core_pnum=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,core_rnotwhite=/\S+/g,rquickExpr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,rsingleTag=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,rmsPrefix=/^-ms-/,rdashAlpha=/-([\da-z])/gi,fcamelCase=function(e,t){return t.toUpperCase()},completed=function(){document.removeEventListener("DOMContentLoaded",completed,!1),window.removeEventListener("load",completed,!1),jQuery.ready()};jQuery.fn=jQuery.prototype={jquery:core_version,constructor:jQuery,init:function(e,t,n){var r,i;if(!e)return this;if(typeof e=="string"){e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3?r=[null,e,null]:r=rquickExpr.exec(e);if(r&&(r[1]||!t)){if(r[1]){t=t instanceof jQuery?t[0]:t,jQuery.merge(this,jQuery.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:document,!0));if(rsingleTag.test(r[1])&&jQuery.isPlainObject(t))for(r in t)jQuery.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return i=document.getElementById(r[2]),i&&i.parentNode&&(this.length=1,this[0]=i),this.context=document,this.selector=e,this}return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e)}return e.nodeType?(this.context=this[0]=e,this.length=1,this):jQuery.isFunction(e)?n.ready(e):(e.selector!==undefined&&(this.selector=e.selector,this.context=e.context),jQuery.makeArray(e,this))},selector:"",length:0,toArray:function(){return core_slice.call(this)},get:function(e){return e==null?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e){var t=jQuery.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return jQuery.each(this,e,t)},ready:function(e){return jQuery.ready.promise().done(e),this},slice:function(){return this.pushStack(core_slice.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},map:function(e){return this.pushStack(jQuery.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:core_push,sort:[].sort,splice:[].splice},jQuery.fn.init.prototype=jQuery.fn,jQuery.extend=jQuery.fn.extend=function(){var e,t,n,r,i,s,o=arguments[0]||{},u=1,a=arguments.length,f=!1;typeof o=="boolean"&&(f=o,o=arguments[1]||{},u=2),typeof o!="object"&&!jQuery.isFunction(o)&&(o={}),a===u&&(o=this,--u);for(;u<a;u++)if((e=arguments[u])!=null)for(t in e){n=o[t],r=e[t];if(o===r)continue;f&&r&&(jQuery.isPlainObject(r)||(i=jQuery.isArray(r)))?(i?(i=!1,s=n&&jQuery.isArray(n)?n:[]):s=n&&jQuery.isPlainObject(n)?n:{},o[t]=jQuery.extend(f,s,r)):r!==undefined&&(o[t]=r)}return o},jQuery.extend({expando:"jQuery"+(core_version+Math.random()).replace(/\D/g,""),noConflict:function(e){return window.$===jQuery&&(window.$=_$),e&&window.jQuery===jQuery&&(window.jQuery=_jQuery),jQuery},isReady:!1,readyWait:1,holdReady:function(e){e?jQuery.readyWait++:jQuery.ready(!0)},ready:function(e){if(e===!0?--jQuery.readyWait:jQuery.isReady)return;jQuery.isReady=!0;if(e!==!0&&--jQuery.readyWait>0)return;readyList.resolveWith(document,[jQuery]),jQuery.fn.trigger&&jQuery(document).trigger("ready").off("ready")},isFunction:function(e){return jQuery.type(e)==="function"},isArray:Array.isArray,isWindow:function(e){return e!=null&&e===e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return e==null?String(e):typeof e=="object"||typeof e=="function"?class2type[core_toString.call(e)]||"object":typeof e},isPlainObject:function(e){if(jQuery.type(e)!=="object"||e.nodeType||jQuery.isWindow(e))return!1;try{if(e.constructor&&!core_hasOwn.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}return!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw new Error(e)},parseHTML:function(e,t,n){if(!e||typeof e!="string")return null;typeof t=="boolean"&&(n=t,t=!1),t=t||document;var r=rsingleTag.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=jQuery.buildFragment([e],t,i),i&&jQuery(i).remove(),jQuery.merge([],r.childNodes))},parseJSON:JSON.parse,parseXML:function(e){var t,n;if(!e||typeof e!="string")return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(r){t=undefined}return(!t||t.getElementsByTagName("parsererror").length)&&jQuery.error("Invalid XML: "+e),t},noop:function(){},globalEval:function(code){var script,indirect=eval;code=jQuery.trim(code),code&&(code.indexOf("use strict")===1?(script=document.createElement("script"),script.text=code,document.head.appendChild(script).parentNode.removeChild(script)):indirect(code))},camelCase:function(e){return e.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,s=e.length,o=isArraylike(e);if(n)if(o)for(;i<s;i++){r=t.apply(e[i],n);if(r===!1)break}else for(i in e){r=t.apply(e[i],n);if(r===!1)break}else if(o)for(;i<s;i++){r=t.call(e[i],i,e[i]);if(r===!1)break}else for(i in e){r=t.call(e[i],i,e[i]);if(r===!1)break}return e},trim:function(e){return e==null?"":core_trim.call(e)},makeArray:function(e,t){var n=t||[];return e!=null&&(isArraylike(Object(e))?jQuery.merge(n,typeof e=="string"?[e]:e):core_push.call(n,e)),n},inArray:function(e,t,n){return t==null?-1:core_indexOf.call(t,e,n)},merge:function(e,t){var n=t.length,r=e.length,i=0;if(typeof n=="number")for(;i<n;i++)e[r++]=t[i];else while(t[i]!==undefined)e[r++]=t[i++];return e.length=r,e},grep:function(e,t,n){var r,i=[],s=0,o=e.length;n=!!n;for(;s<o;s++)r=!!t(e[s],s),n!==r&&i.push(e[s]);return i},map:function(e,t,n){var r,i=0,s=e.length,o=isArraylike(e),u=[];if(o)for(;i<s;i++)r=t(e[i],i,n),r!=null&&(u[u.length]=r);else for(i in e)r=t(e[i],i,n),r!=null&&(u[u.length]=r);return core_concat.apply([],u)},guid:1,proxy:function(e,t){var n,r,i;return typeof t=="string"&&(n=e[t],t=e,e=n),jQuery.isFunction(e)?(r=core_slice.call(arguments,2),i=function(){return e.apply(t||this,r.concat(core_slice.call(arguments)))},i.guid=e.guid=e.guid||jQuery.guid++,i):undefined},access:function(e,t,n,r,i,s,o){var u=0,a=e.length,f=n==null;if(jQuery.type(n)==="object"){i=!0;for(u in n)jQuery.access(e,t,u,n[u],!0,s,o)}else if(r!==undefined){i=!0,jQuery.isFunction(r)||(o=!0),f&&(o?(t.call(e,r),t=null):(f=t,t=function(e,t,n){return f.call(jQuery(e),n)}));if(t)for(;u<a;u++)t(e[u],n,o?r:r.call(e[u],u,t(e[u],n)))}return i?e:f?t.call(e):a?t(e[0],n):s},now:Date.now,swap:function(e,t,n,r){var i,s,o={};for(s in t)o[s]=e.style[s],e.style[s]=t[s];i=n.apply(e,r||[]);for(s in t)e.style[s]=o[s];return i}}),jQuery.ready.promise=function(e){return readyList||(readyList=jQuery.Deferred(),document.readyState==="complete"?setTimeout(jQuery.ready):(document.addEventListener("DOMContentLoaded",completed,!1),window.addEventListener("load",completed,!1))),readyList.promise(e)},jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){class2type["[object "+t+"]"]=t.toLowerCase()}),rootjQuery=jQuery(document),function(e,t){function n(e,t,n,r){var i,s,o,u,a,f,l,c,d,v;(t?t.ownerDocument||t:q)!==_&&M(t),t=t||_,n=n||[];if(!e||typeof e!="string")return n;if((u=t.nodeType)!==1&&u!==9)return[];if(P&&!r){if(i=yt.exec(e))if(o=i[1]){if(u===9){s=t.getElementById(o);if(!s||!s.parentNode)return n;if(s.id===o)return n.push(s),n}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(o))&&F(t,s)&&s.id===o)return n.push(s),n}else{if(i[2])return et.apply(n,t.getElementsByTagName(e)),n;if((o=i[3])&&x.getElementsByClassName&&t.getElementsByClassName)return et.apply(n,t.getElementsByClassName(o)),n}if(x.qsa&&(!H||!H.test(e))){c=l=I,d=t,v=u===9&&e;if(u===1&&t.nodeName.toLowerCase()!=="object"){f=h(e),(l=t.getAttribute("id"))?c=l.replace(Et,"\\$&"):t.setAttribute("id",c),c="[id='"+c+"'] ",a=f.length;while(a--)f[a]=c+p(f[a]);d=ht.test(e)&&t.parentNode||t,v=f.join(",")}if(v)try{return et.apply(n,d.querySelectorAll(v)),n}catch(m){}finally{l||t.removeAttribute("id")}}}return E(e.replace(ft,"$1"),t,n,r)}function r(){function e(n,r){return t.push(n+=" ")>N.cacheLength&&delete e[t.shift()],e[n]=r}var t=[];return e}function i(e){return e[I]=!0,e}function s(e){var t=_.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function o(e,t){var n=e.split("|"),r=e.length;while(r--)N.attrHandle[n[r]]=t}function u(e,t){var n=t&&e,r=n&&e.nodeType===1&&t.nodeType===1&&(~t.sourceIndex||K)-(~e.sourceIndex||K);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function a(e){return function(t){var n=t.nodeName.toLowerCase();return n==="input"&&t.type===e}}function f(e){return function(t){var n=t.nodeName.toLowerCase();return(n==="input"||n==="button")&&t.type===e}}function l(e){return i(function(t){return t=+t,i(function(n,r){var i,s=e([],n.length,t),o=s.length;while(o--)n[i=s[o]]&&(n[i]=!(r[i]=n[i]))})})}function c(){}function h(e,t){var r,i,s,o,u,a,f,l=W[e+" "];if(l)return t?0:l.slice(0);u=e,a=[],f=N.preFilter;while(u){if(!r||(i=lt.exec(u)))i&&(u=u.slice(i[0].length)||u),a.push(s=[]);r=!1;if(i=ct.exec(u))r=i.shift(),s.push({value:r,type:i[0].replace(ft," ")}),u=u.slice(r.length);for(o in N.filter)(i=mt[o].exec(u))&&(!f[o]||(i=f[o](i)))&&(r=i.shift(),s.push({value:r,type:o,matches:i}),u=u.slice(r.length));if(!r)break}return t?u.length:u?n.error(e):W(e,a).slice(0)}function p(e){var t=0,n=e.length,r="";for(;t<n;t++)r+=e[t].value;return r}function d(e,t,n){var r=t.dir,i=n&&r==="parentNode",s=U++;return t.first?function(t,n,s){while(t=t[r])if(t.nodeType===1||i)return e(t,n,s)}:function(t,n,o){var u,a,f,l=R+" "+s;if(o){while(t=t[r])if(t.nodeType===1||i)if(e(t,n,o))return!0}else while(t=t[r])if(t.nodeType===1||i){f=t[I]||(t[I]={});if((a=f[r])&&a[0]===l){if((u=a[1])===!0||u===T)return u===!0}else{a=f[r]=[l],a[1]=e(t,n,o)||T;if(a[1]===!0)return!0}}}}function v(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function m(e,t,n,r,i){var s,o=[],u=0,a=e.length,f=t!=null;for(;u<a;u++)if(s=e[u])if(!n||n(s,r,i))o.push(s),f&&t.push(u);return o}function g(e,t,n,r,s,o){return r&&!r[I]&&(r=g(r)),s&&!s[I]&&(s=g(s,o)),i(function(i,o,u,a){var f,l,c,h=[],p=[],d=o.length,v=i||w(t||"*",u.nodeType?[u]:u,[]),g=e&&(i||!t)?m(v,h,e,u,a):v,y=n?s||(i?e:d||r)?[]:o:g;n&&n(g,y,u,a);if(r){f=m(y,p),r(f,[],u,a),l=f.length;while(l--)if(c=f[l])y[p[l]]=!(g[p[l]]=c)}if(i){if(s||e){if(s){f=[],l=y.length;while(l--)(c=y[l])&&f.push(g[l]=c);s(null,y=[],f,a)}l=y.length;while(l--)(c=y[l])&&(f=s?nt.call(i,c):h[l])>-1&&(i[f]=!(o[f]=c))}}else y=m(y===o?y.splice(d,y.length):y),s?s(null,o,y,a):et.apply(o,y)})}function y(e){var t,n,r,i=e.length,s=N.relative[e[0].type],o=s||N.relative[" "],u=s?1:0,a=d(function(e){return e===t},o,!0),f=d(function(e){return nt.call(t,e)>-1},o,!0),l=[function(e,n,r){return!s&&(r||n!==A)||((t=n).nodeType?a(e,n,r):f(e,n,r))}];for(;u<i;u++)if(n=N.relative[e[u].type])l=[d(v(l),n)];else{n=N.filter[e[u].type].apply(null,e[u].matches);if(n[I]){r=++u;for(;r<i;r++)if(N.relative[e[r].type])break;return g(u>1&&v(l),u>1&&p(e.slice(0,u-1).concat({value:e[u-2].type===" "?"*":""})).replace(ft,"$1"),n,u<r&&y(e.slice(u,r)),r<i&&y(e=e.slice(r)),r<i&&p(e))}l.push(n)}return v(l)}function b(e,t){var r=0,s=t.length>0,o=e.length>0,u=function(i,u,a,f,l){var c,h,p,d=[],v=0,g="0",y=i&&[],b=l!=null,w=A,E=i||o&&N.find.TAG("*",l&&u.parentNode||u),S=R+=w==null?1:Math.random()||.1;b&&(A=u!==_&&u,T=r);for(;(c=E[g])!=null;g++){if(o&&c){h=0;while(p=e[h++])if(p(c,u,a)){f.push(c);break}b&&(R=S,T=++r)}s&&((c=!p&&c)&&v--,i&&y.push(c))}v+=g;if(s&&g!==v){h=0;while(p=t[h++])p(y,d,u,a);if(i){if(v>0)while(g--)!y[g]&&!d[g]&&(d[g]=Y.call(f));d=m(d)}et.apply(f,d),b&&!i&&d.length>0&&v+t.length>1&&n.uniqueSort(f)}return b&&(R=S,A=w),y};return s?i(u):u}function w(e,t,r){var i=0,s=t.length;for(;i<s;i++)n(e,t[i],r);return r}function E(e,t,n,r){var i,s,o,u,a,f=h(e);if(!r&&f.length===1){s=f[0]=f[0].slice(0);if(s.length>2&&(o=s[0]).type==="ID"&&x.getById&&t.nodeType===9&&P&&N.relative[s[1].type]){t=(N.find.ID(o.matches[0].replace(St,xt),t)||[])[0];if(!t)return n;e=e.slice(s.shift().value.length)}i=mt.needsContext.test(e)?0:s.length;while(i--){o=s[i];if(N.relative[u=o.type])break;if(a=N.find[u])if(r=a(o.matches[0].replace(St,xt),ht.test(s[0].type)&&t.parentNode||t)){s.splice(i,1),e=r.length&&p(s);if(!e)return et.apply(n,r),n;break}}}return L(e,f)(r,t,!P,n,ht.test(e)),n}var S,x,T,N,C,k,L,A,O,M,_,D,P,H,B,j,F,I="sizzle"+ -(new Date),q=e.document,R=0,U=0,z=r(),W=r(),X=r(),V=!1,$=function(e,t){return e===t?(V=!0,0):0},J=typeof t,K=1<<31,Q={}.hasOwnProperty,G=[],Y=G.pop,Z=G.push,et=G.push,tt=G.slice,nt=G.indexOf||function(e){var t=0,n=this.length;for(;t<n;t++)if(this[t]===e)return t;return-1},rt="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",it="[\\x20\\t\\r\\n\\f]",st="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",ot=st.replace("w","w#"),ut="\\["+it+"*("+st+")"+it+"*(?:([*^$|!~]?=)"+it+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+ot+")|)|)"+it+"*\\]",at=":("+st+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+ut.replace(3,8)+")*)|.*)\\)|)",ft=new RegExp("^"+it+"+|((?:^|[^\\\\])(?:\\\\.)*)"+it+"+$","g"),lt=new RegExp("^"+it+"*,"+it+"*"),ct=new RegExp("^"+it+"*([>+~]|"+it+")"+it+"*"),ht=new RegExp(it+"*[+~]"),pt=new RegExp("="+it+"*([^\\]'\"]*)"+it+"*\\]","g"),dt=new RegExp(at),vt=new RegExp("^"+ot+"$"),mt={ID:new RegExp("^#("+st+")"),CLASS:new RegExp("^\\.("+st+")"),TAG:new RegExp("^("+st.replace("w","w*")+")"),ATTR:new RegExp("^"+ut),PSEUDO:new RegExp("^"+at),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+it+"*(even|odd|(([+-]|)(\\d*)n|)"+it+"*(?:([+-]|)"+it+"*(\\d+)|))"+it+"*\\)|)","i"),bool:new RegExp("^(?:"+rt+")$","i"),needsContext:new RegExp("^"+it+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+it+"*((?:-\\d)?\\d*)"+it+"*\\)|)(?=[^-]|$)","i")},gt=/^[^{]+\{\s*\[native \w/,yt=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,bt=/^(?:input|select|textarea|button)$/i,wt=/^h\d$/i,Et=/'|\\/g,St=new RegExp("\\\\([\\da-f]{1,6}"+it+"?|("+it+")|.)","ig"),xt=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,r&1023|56320)};try{et.apply(G=tt.call(q.childNodes),q.childNodes),G[q.childNodes.length].nodeType}catch(Tt){et={apply:G.length?function(e,t){Z.apply(e,tt.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}k=n.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?t.nodeName!=="HTML":!1},x=n.support={},M=n.setDocument=function(e){var t=e?e.ownerDocument||e:q,n=t.defaultView;if(t===_||t.nodeType!==9||!t.documentElement)return _;_=t,D=t.documentElement,P=!k(t),n&&n.attachEvent&&n!==n.top&&n.attachEvent("onbeforeunload",function(){M()}),x.attributes=s(function(e){return e.className="i",!e.getAttribute("className")}),x.getElementsByTagName=s(function(e){return e.appendChild(t.createComment("")),!e.getElementsByTagName("*").length}),x.getElementsByClassName=s(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",e.getElementsByClassName("i").length===2}),x.getById=s(function(e){return D.appendChild(e).id=I,!t.getElementsByName||!t.getElementsByName(I).length}),x.getById?(N.find.ID=function(e,t){if(typeof t.getElementById!==J&&P){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},N.filter.ID=function(e){var t=e.replace(St,xt);return function(e){return e.getAttribute("id")===t}}):(delete N.find.ID,N.filter.ID=function(e){var t=e.replace(St,xt);return function(e){var n=typeof e.getAttributeNode!==J&&e.getAttributeNode("id");return n&&n.value===t}}),N.find.TAG=x.getElementsByTagName?function(e,t){if(typeof t.getElementsByTagName!==J)return t.getElementsByTagName(e)}:function(e,t){var n,r=[],i=0,s=t.getElementsByTagName(e);if(e==="*"){while(n=s[i++])n.nodeType===1&&r.push(n);return r}return s},N.find.CLASS=x.getElementsByClassName&&function(e,t){if(typeof t.getElementsByClassName!==J&&P)return t.getElementsByClassName(e)},B=[],H=[];if(x.qsa=gt.test(t.querySelectorAll))s(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||H.push("\\["+it+"*(?:value|"+rt+")"),e.querySelectorAll(":checked").length||H.push(":checked")}),s(function(e){var n=t.createElement("input");n.setAttribute("type","hidden"),e.appendChild(n).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&H.push("[*^$]="+it+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||H.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),H.push(",.*:")});return(x.matchesSelector=gt.test(j=D.webkitMatchesSelector||D.mozMatchesSelector||D.oMatchesSelector||D.msMatchesSelector))&&s(function(e){x.disconnectedMatch=j.call(e,"div"),j.call(e,"[s!='']:x"),B.push("!=",at)}),H=H.length&&new RegExp(H.join("|")),B=B.length&&new RegExp(B.join("|")),F=gt.test(D.contains)||D.compareDocumentPosition?function(e,t){var n=e.nodeType===9?e.documentElement:e,r=t&&t.parentNode;return e===r||!!r&&r.nodeType===1&&!!(n.contains?n.contains(r):e.compareDocumentPosition&&e.compareDocumentPosition(r)&16)}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},$=D.compareDocumentPosition?function(e,n){if(e===n)return V=!0,0;var r=n.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(n);return r?r&1||!x.sortDetached&&n.compareDocumentPosition(e)===r?e===t||F(q,e)?-1:n===t||F(q,n)?1:O?nt.call(O,e)-nt.call(O,n):0:r&4?-1:1:e.compareDocumentPosition?-1:1}:function(e,n){var r,i=0,s=e.parentNode,o=n.parentNode,a=[e],f=[n];if(e===n)return V=!0,0;if(!s||!o)return e===t?-1:n===t?1:s?-1:o?1:O?nt.call(O,e)-nt.call(O,n):0;if(s===o)return u(e,n);r=e;while(r=r.parentNode)a.unshift(r);r=n;while(r=r.parentNode)f.unshift(r);while(a[i]===f[i])i++;return i?u(a[i],f[i]):a[i]===q?-1:f[i]===q?1:0},t},n.matches=function(e,t){return n(e,null,null,t)},n.matchesSelector=function(e,t){(e.ownerDocument||e)!==_&&M(e),t=t.replace(pt,"='$1']");if(x.matchesSelector&&P&&(!B||!B.test(t))&&(!H||!H.test(t)))try{var r=j.call(e,t);if(r||x.disconnectedMatch||e.document&&e.document.nodeType!==11)return r}catch(i){}return n(t,_,null,[e]).length>0},n.contains=function(e,t){return(e.ownerDocument||e)!==_&&M(e),F(e,t)},n.attr=function(e,n){(e.ownerDocument||e)!==_&&M(e);var r=N.attrHandle[n.toLowerCase()],i=r&&Q.call(N.attrHandle,n.toLowerCase())?r(e,n,!P):t;return i===t?x.attributes||!P?e.getAttribute(n):(i=e.getAttributeNode(n))&&i.specified?i.value:null:i},n.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},n.uniqueSort=function(e){var t,n=[],r=0,i=0;V=!x.detectDuplicates,O=!x.sortStable&&e.slice(0),e.sort($);if(V){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return e},C=n.getText=function(e){var t,n="",r=0,i=e.nodeType;if(!i)for(;t=e[r];r++)n+=C(t);else if(i===1||i===9||i===11){if(typeof e.textContent=="string")return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=C(e)}else if(i===3||i===4)return e.nodeValue;return n},N=n.selectors={cacheLength:50,createPseudo:i,match:mt,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(St,xt),e[3]=(e[4]||e[5]||"").replace(St,xt),e[2]==="~="&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),e[1].slice(0,3)==="nth"?(e[3]||n.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*(e[3]==="even"||e[3]==="odd")),e[5]=+(e[7]+e[8]||e[3]==="odd")):e[3]&&n.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return mt.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&dt.test(r)&&(n=h(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(St,xt).toLowerCase();return e==="*"?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=z[e+" "];return t||(t=new RegExp("(^|"+it+")"+e+"("+it+"|$)"))&&z(e,function(e){return t.test(typeof e.className=="string"&&e.className||typeof e.getAttribute!==J&&e.getAttribute("class")||"")})},ATTR:function(e,t,r){return function(i){var s=n.attr(i,e);return s==null?t==="!=":t?(s+="",t==="="?s===r:t==="!="?s!==r:t==="^="?r&&s.indexOf(r)===0:t==="*="?r&&s.indexOf(r)>-1:t==="$="?r&&s.slice(-r.length)===r:t==="~="?(" "+s+" ").indexOf(r)>-1:t==="|="?s===r||s.slice(0,r.length+1)===r+"-":!1):!0}},CHILD:function(e,t,n,r,i){var s=e.slice(0,3)!=="nth",o=e.slice(-4)!=="last",u=t==="of-type";return r===1&&i===0?function(e){return!!e.parentNode}:function(t,n,a){var f,l,c,h,p,d,v=s!==o?"nextSibling":"previousSibling",m=t.parentNode,g=u&&t.nodeName.toLowerCase(),y=!a&&!u;if(m){if(s){while(v){c=t;while(c=c[v])if(u?c.nodeName.toLowerCase()===g:c.nodeType===1)return!1;d=v=e==="only"&&!d&&"nextSibling"}return!0}d=[o?m.firstChild:m.lastChild];if(o&&y){l=m[I]||(m[I]={}),f=l[e]||[],p=f[0]===R&&f[1],h=f[0]===R&&f[2],c=p&&m.childNodes[p];while(c=++p&&c&&c[v]||(h=p=0)||d.pop())if(c.nodeType===1&&++h&&c===t){l[e]=[R,p,h];break}}else if(y&&(f=(t[I]||(t[I]={}))[e])&&f[0]===R)h=f[1];else while(c=++p&&c&&c[v]||(h=p=0)||d.pop())if((u?c.nodeName.toLowerCase()===g:c.nodeType===1)&&++h){y&&((c[I]||(c[I]={}))[e]=[R,h]);if(c===t)break}return h-=i,h===r||h%r===0&&h/r>=0}}},PSEUDO:function(e,t){var r,s=N.pseudos[e]||N.setFilters[e.toLowerCase()]||n.error("unsupported pseudo: "+e);return s[I]?s(t):s.length>1?(r=[e,e,"",t],N.setFilters.hasOwnProperty(e.toLowerCase())?i(function(e,n){var r,i=s(e,t),o=i.length;while(o--)r=nt.call(e,i[o]),e[r]=!(n[r]=i[o])}):function(e){return s(e,0,r)}):s}},pseudos:{not:i(function(e){var t=[],n=[],r=L(e.replace(ft,"$1"));return r[I]?i(function(e,t,n,i){var s,o=r(e,null,i,[]),u=e.length;while(u--)if(s=o[u])e[u]=!(t[u]=s)}):function(e,i,s){return t[0]=e,r(t,null,s,n),!n.pop()}}),has:i(function(e){return function(t){return n(e,t).length>0}}),contains:i(function(e){return function(t){return(t.textContent||t.innerText||C(t)).indexOf(e)>-1}}),lang:i(function(e){return vt.test(e||"")||n.error("unsupported lang: "+e),e=e.replace(St,xt).toLowerCase(),function(t){var n;do if(n=P?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||n.indexOf(e+"-")===0;while((t=t.parentNode)&&t.nodeType===1);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===D},focus:function(e){return e===_.activeElement&&(!_.hasFocus||_.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&!!e.checked||t==="option"&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||e.nodeType===3||e.nodeType===4)return!1;return!0},parent:function(e){return!N.pseudos.empty(e)},header:function(e){return wt.test(e.nodeName)},input:function(e){return bt.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&e.type==="button"||t==="button"},text:function(e){var t;return e.nodeName.toLowerCase()==="input"&&e.type==="text"&&((t=e.getAttribute("type"))==null||t.toLowerCase()===e.type)},first:l(function(){return[0]}),last:l(function(e,t){return[t-1]}),eq:l(function(e,t,n){return[n<0?n+t:n]}),even:l(function(e,t){var n=0;for(;n<t;n+=2)e.push(n);return e}),odd:l(function(e,t){var n=1;for(;n<t;n+=2)e.push(n);return e}),lt:l(function(e,t,n){var r=n<0?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:l(function(e,t,n){var r=n<0?n+t:n;for(;++r<t;)e.push(r);return e})}},N.pseudos.nth=N.pseudos.eq;for(S in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})N.pseudos[S]=a(S);for(S in{submit:!0,reset:!0})N.pseudos[S]=f(S);c.prototype=N.filters=N.pseudos,N.setFilters=new c,L=n.compile=function(e,t){var n,r=[],i=[],s=X[e+" "];if(!s){t||(t=h(e)),n=t.length;while(n--)s=y(t[n]),s[I]?r.push(s):i.push(s);s=X(e,b(i,r))}return s},x.sortStable=I.split("").sort($).join("")===I,x.detectDuplicates=V,M(),x.sortDetached=s(function(e){return e.compareDocumentPosition(_.createElement("div"))&1}),s(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild.getAttribute("href")==="#"})||o("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,t.toLowerCase()==="type"?1:2)}),(!x.attributes||!s(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),e.firstChild.getAttribute("value")===""}))&&o("value",function(e,t,n){if(!n&&e.nodeName.toLowerCase()==="input")return e.defaultValue}),s(function(e){return e.getAttribute("disabled")==null})||o(rt,function(e,t,n){var r;if(!n)return(r=e.getAttributeNode(t))&&r.specified?r.value:e[t]===!0?t.toLowerCase():null}),jQuery.find=n,jQuery.expr=n.selectors,jQuery.expr[":"]=jQuery.expr.pseudos,jQuery.unique=n.uniqueSort,jQuery.text=n.getText,jQuery.isXMLDoc=n.isXML,jQuery.contains=n.contains}(window);var optionsCache={};jQuery.Callbacks=function(e){e=typeof e=="string"?optionsCache[e]||createOptions(e):jQuery.extend({},e);var t,n,r,i,s,o,u=[],a=!e.once&&[],f=function(c){t=e.memory&&c,n=!0,o=i||0,i=0,s=u.length,r=!0;for(;u&&o<s;o++)if(u[o].apply(c[0],c[1])===!1&&e.stopOnFalse){t=!1;break}r=!1,u&&(a?a.length&&f(a.shift()):t?u=[]:l.disable())},l={add:function(){if(u){var n=u.length;(function o(t){jQuery.each(t,function(t,n){var r=jQuery.type(n);r==="function"?(!e.unique||!l.has(n))&&u.push(n):n&&n.length&&r!=="string"&&o(n)})})(arguments),r?s=u.length:t&&(i=n,f(t))}return this},remove:function(){return u&&jQuery.each(arguments,function(e,t){var n;while((n=jQuery.inArray(t,u,n))>-1)u.splice(n,1),r&&(n<=s&&s--,n<=o&&o--)}),this},has:function(e){return e?jQuery.inArray(e,u)>-1:!!u&&!!u.length},empty:function(){return u=[],s=0,this},disable:function(){return u=a=t=undefined,this},disabled:function(){return!u},lock:function(){return a=undefined,t||l.disable(),this},locked:function(){return!a},fireWith:function(e,t){return u&&(!n||a)&&(t=t||[],t=[e,t.slice?t.slice():t],r?a.push(t):f(t)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!n}};return l},jQuery.extend({Deferred:function(e){var t=[["resolve","done",jQuery.Callbacks("once memory"),"resolved"],["reject","fail",jQuery.Callbacks("once memory"),"rejected"],["notify","progress",jQuery.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return jQuery.Deferred(function(n){jQuery.each(t,function(t,s){var o=s[0],u=jQuery.isFunction(e[t])&&e[t];i[s[1]](function(){var e=u&&u.apply(this,arguments);e&&jQuery.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[o+"With"](this===r?n.promise():this,u?[e]:arguments)})}),e=null}).promise()},promise:function(e){return e!=null?jQuery.extend(e,r):r}},i={};return r.pipe=r.then,jQuery.each(t,function(e,s){var o=s[2],u=s[3];r[s[1]]=o.add,u&&o.add(function(){n=u},t[e^1][2].disable,t[2][2].lock),i[s[0]]=function(){return i[s[0]+"With"](this===i?r:this,arguments),this},i[s[0]+"With"]=o.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=core_slice.call(arguments),r=n.length,i=r!==1||e&&jQuery.isFunction(e.promise)?r:0,s=i===1?e:jQuery.Deferred(),o=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?core_slice.call(arguments):r,n===u?s.notifyWith(t,n):--i||s.resolveWith(t,n)}},u,a,f;if(r>1){u=new Array(r),a=new Array(r),f=new Array(r);for(;t<r;t++)n[t]&&jQuery.isFunction(n[t].promise)?n[t].promise().done(o(t,f,n)).fail(s.reject).progress(o(t,a,u)):--i}return i||s.resolveWith(f,n),s.promise()}}),jQuery.support=function(e){var t=document.createElement("input"),n=document.createDocumentFragment(),r=document.createElement("div"),i=document.createElement("select"),s=i.appendChild(document.createElement("option"));return t.type?(t.type="checkbox",e.checkOn=t.value!=="",e.optSelected=s.selected,e.reliableMarginRight=!0,e.boxSizingReliable=!0,e.pixelPosition=!1,t.checked=!0,e.noCloneChecked=t.cloneNode(!0).checked,i.disabled=!0,e.optDisabled=!s.disabled,t=document.createElement("input"),t.value="t",t.type="radio",e.radioValue=t.value==="t",t.setAttribute("checked","t"),t.setAttribute("name","t"),n.appendChild(t),e.checkClone=n.cloneNode(!0).cloneNode(!0).lastChild.checked,e.focusinBubbles="onfocusin"in window,r.style.backgroundClip="content-box",r.cloneNode(!0).style.backgroundClip="",e.clearCloneStyle=r.style.backgroundClip==="content-box",jQuery(function(){var t,n,i="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",s=document.getElementsByTagName("body")[0];if(!s)return;t=document.createElement("div"),t.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",s.appendChild(t).appendChild(r),r.innerHTML="",r.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",jQuery.swap(s,s.style.zoom!=null?{zoom:1}:{},function(){e.boxSizing=r.offsetWidth===4}),window.getComputedStyle&&(e.pixelPosition=(window.getComputedStyle(r,null)||{}).top!=="1%",e.boxSizingReliable=(window.getComputedStyle(r,null)||{width:"4px"}).width==="4px",n=r.appendChild(document.createElement("div")),n.style.cssText=r.style.cssText=i,n.style.marginRight=n.style.width="0",r.style.width="1px",e.reliableMarginRight=!parseFloat((window.getComputedStyle(n,null)||{}).marginRight)),s.removeChild(t)}),e):e}({});var data_user,data_priv,rbrace=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,rmultiDash=/([A-Z])/g;Data.uid=1,Data.accepts=function(e){return e.nodeType?e.nodeType===1||e.nodeType===9:!0},Data.prototype={key:function(e){if(!Data.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=Data.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,jQuery.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),s=this.cache[i];if(typeof t=="string")s[t]=n;else if(jQuery.isEmptyObject(s))jQuery.extend(this.cache[i],t);else for(r in t)s[r]=t[r];return s},get:function(e,t){var n=this.cache[this.key(e)];return t===undefined?n:n[t]},access:function(e,t,n){var r;return t===undefined||t&&typeof t=="string"&&n===undefined?(r=this.get(e,t),r!==undefined?r:this.get(e,jQuery.camelCase(t))):(this.set(e,t,n),n!==undefined?n:t)},remove:function(e,t){var n,r,i,s=this.key(e),o=this.cache[s];if(t===undefined)this.cache[s]={};else{jQuery.isArray(t)?r=t.concat(t.map(jQuery.camelCase)):(i=jQuery.camelCase(t),t in o?r=[t,i]:(r=i,r=r in o?[r]:r.match(core_rnotwhite)||[])),n=r.length;while(n--)delete o[r[n]]}},hasData:function(e){return!jQuery.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}},data_user=new Data,data_priv=new Data,jQuery.extend({acceptData:Data.accepts,hasData:function(e){return data_user.hasData(e)||data_priv.hasData(e)},data:function(e,t,n){return data_user.access(e,t,n)},removeData:function(e,t){data_user.remove(e,t)},_data:function(e,t,n){return data_priv.access(e,t,n)},_removeData:function(e,t){data_priv.remove(e,t)}}),jQuery.fn.extend({data:function(e,t){var n,r,i=this[0],s=0,o=null;if(e===undefined){if(this.length){o=data_user.get(i);if(i.nodeType===1&&!data_priv.get(i,"hasDataAttrs")){n=i.attributes;for(;s<n.length;s++)r=n[s].name,r.indexOf("data-")===0&&(r=jQuery.camelCase(r.slice(5)),dataAttr(i,r,o[r]));data_priv.set(i,"hasDataAttrs",!0)}}return o}return typeof e=="object"?this.each(function(){data_user.set(this,e)}):jQuery.access(this,function(t){var n,r=jQuery.camelCase(e);if(i&&t===undefined){n=data_user.get(i,e);if(n!==undefined)return n;n=data_user.get(i,r);if(n!==undefined)return n;n=dataAttr(i,r,undefined);if(n!==undefined)return n;return}this.each(function(){var n=data_user.get(this,r);data_user.set(this,r,t),e.indexOf("-")!==-1&&n!==undefined&&data_user.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){data_user.remove(this,e)})}}),jQuery.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=data_priv.get(e,t),n&&(!r||jQuery.isArray(n)?r=data_priv.access(e,t,jQuery.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=jQuery.queue(e,t),r=n.length,i=n.shift(),s=jQuery._queueHooks(e,t),o=function(){jQuery.dequeue(e,t)};i==="inprogress"&&(i=n.shift(),r--),i&&(t==="fx"&&n.unshift("inprogress"),delete s.stop,i.call(e,o,s)),!r&&s&&s.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return data_priv.get(e,n)||data_priv.access(e,n,{empty:jQuery.Callbacks("once memory").add(function(){data_priv.remove(e,[t+"queue",n])})})}}),jQuery.fn.extend({queue:function(e,t){var n=2;return typeof e!="string"&&(t=e,e="fx",n--),arguments.length<n?jQuery.queue(this[0],e):t===undefined?this:this.each(function(){var n=jQuery.queue(this,e,t);jQuery._queueHooks(this,e),e==="fx"&&n[0]!=="inprogress"&&jQuery.dequeue(this,e)})},dequeue:function(e){return this.each(function(){jQuery.dequeue(this,e)})},delay:function(e,t){return e=jQuery.fx?jQuery.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=jQuery.Deferred(),s=this,o=this.length,u=function(){--r||i.resolveWith(s,[s])};typeof e!="string"&&(t=e,e=undefined),e=e||"fx";while(o--)n=data_priv.get(s[o],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(u));return u(),i.promise(t)}});var nodeHook,boolHook,rclass=/[\t\r\n\f]/g,rreturn=/\r/g,rfocusable=/^(?:input|select|textarea|button)$/i;jQuery.fn.extend({attr:function(e,t){return jQuery.access(this,jQuery.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){jQuery.removeAttr(this,e)})},prop:function(e,t){return jQuery.access(this,jQuery.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[jQuery.propFix[e]||e]})},addClass:function(e){var t,n,r,i,s,o=0,u=this.length,a=typeof e=="string"&&e;if(jQuery.isFunction(e))return this.each(function(t){jQuery(this).addClass(e.call(this,t,this.className))});if(a){t=(e||"").match(core_rnotwhite)||[];for(;o<u;o++){n=this[o],r=n.nodeType===1&&(n.className?(" "+n.className+" ").replace(rclass," "):" ");if(r){s=0;while(i=t[s++])r.indexOf(" "+i+" ")<0&&(r+=i+" ");n.className=jQuery.trim(r)}}}return this},removeClass:function(e){var t,n,r,i,s,o=0,u=this.length,a=arguments.length===0||typeof e=="string"&&e;if(jQuery.isFunction(e))return this.each(function(t){jQuery(this).removeClass(e.call(this,t,this.className))});if(a){t=(e||"").match(core_rnotwhite)||[];for(;o<u;o++){n=this[o],r=n.nodeType===1&&(n.className?(" "+n.className+" ").replace(rclass," "):"");if(r){s=0;while(i=t[s++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?jQuery.trim(r):""}}}return this},toggleClass:function(e,t){var n=typeof e;return typeof t=="boolean"&&n==="string"?t?this.addClass(e):this.removeClass(e):jQuery.isFunction(e)?this.each(function(n){jQuery(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if(n==="string"){var t,r=0,i=jQuery(this),s=e.match(core_rnotwhite)||[];while(t=s[r++])i.hasClass(t)?i.removeClass(t):i.addClass(t)}else if(n===core_strundefined||n==="boolean")this.className&&data_priv.set(this,"__className__",this.className),this.className=this.className||e===!1?"":data_priv.get(this,"__className__")||""})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;n<r;n++)if(this[n].nodeType===1&&(" "+this[n].className+" ").replace(rclass," ").indexOf(t)>=0)return!0;return!1},val:function(e){var t,n,r,i=this[0];if(!arguments.length){if(i)return t=jQuery.valHooks[i.type]||jQuery.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&(n=t.get(i,"value"))!==undefined?n:(n=i.value,typeof n=="string"?n.replace(rreturn,""):n==null?"":n);return}return r=jQuery.isFunction(e),this.each(function(n){var i;if(this.nodeType!==1)return;r?i=e.call(this,n,jQuery(this).val()):i=e,i==null?i="":typeof i=="number"?i+="":jQuery.isArray(i)&&(i=jQuery.map(i,function(e){return e==null?"":e+""})),t=jQuery.valHooks[this.type]||jQuery.valHooks[this.nodeName.toLowerCase()];if(!t||!("set"in t)||t.set(this,i,"value")===undefined)this.value=i})}}),jQuery.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,s=e.type==="select-one"||i<0,o=s?null:[],u=s?i+1:r.length,a=i<0?u:s?i:0;for(;a<u;a++){n=r[a];if((n.selected||a===i)&&(jQuery.support.optDisabled?!n.disabled:n.getAttribute("disabled")===null)&&(!n.parentNode.disabled||!jQuery.nodeName(n.parentNode,"optgroup"))){t=jQuery(n).val();if(s)return t;o.push(t)}}return o},set:function(e,t){var n,r,i=e.options,s=jQuery.makeArray(t),o=i.length;while(o--){r=i[o];if(r.selected=jQuery.inArray(jQuery(r).val(),s)>=0)n=!0}return n||(e.selectedIndex=-1),s}}},attr:function(e,t,n){var r,i,s=e.nodeType;if(!e||s===3||s===8||s===2)return;if(typeof e.getAttribute===core_strundefined)return jQuery.prop(e,t,n);if(s!==1||!jQuery.isXMLDoc(e))t=t.toLowerCase(),r=jQuery.attrHooks[t]||(jQuery.expr.match.bool.test(t)?boolHook:nodeHook);if(n===undefined)return r&&"get"in r&&(i=r.get(e,t))!==null?i:(i=jQuery.find.attr(e,t),i==null?undefined:i);if(n!==null)return r&&"set"in r&&(i=r.set(e,n,t))!==undefined?i:(e.setAttribute(t,n+""),n);jQuery.removeAttr(e,t)},removeAttr:function(e,t){var n,r,i=0,s=t&&t.match(core_rnotwhite);if(s&&e.nodeType===1)while(n=s[i++])r=jQuery.propFix[n]||n,jQuery.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!jQuery.support.radioValue&&t==="radio"&&jQuery.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,s,o=e.nodeType;if(!e||o===3||o===8||o===2)return;return s=o!==1||!jQuery.isXMLDoc(e),s&&(t=jQuery.propFix[t]||t,i=jQuery.propHooks[t]),n!==undefined?i&&"set"in i&&(r=i.set(e,n,t))!==undefined?r:e[t]=n:i&&"get"in i&&(r=i.get(e,t))!==null?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||rfocusable.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),boolHook={set:function(e,t,n){return t===!1?jQuery.removeAttr(e,n):e.setAttribute(n,n),n}},jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g),function(e,t){var n=jQuery.expr.attrHandle[t]||jQuery.find.attr;jQuery.expr.attrHandle[t]=function(e,t,r){var i=jQuery.expr.attrHandle[t],s=r?undefined:(jQuery.expr.attrHandle[t]=undefined)!=n(e,t,r)?t.toLowerCase():null;return jQuery.expr.attrHandle[t]=i,s}}),jQuery.support.optSelected||(jQuery.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),jQuery.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){jQuery.propFix[this.toLowerCase()]=this}),jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]={set:function(e,t){if(jQuery.isArray(t))return e.checked=jQuery.inArray(jQuery(e).val(),t)>=0}},jQuery.support.checkOn||(jQuery.valHooks[this].get=function(e){return e.getAttribute("value")===null?"on":e.value})});var rkeyEvent=/^key/,rmouseEvent=/^(?:mouse|contextmenu)|click/,rfocusMorph=/^(?:focusinfocus|focusoutblur)$/,rtypenamespace=/^([^.]*)(?:\.(.+)|)$/;jQuery.event={global:{},add:function(e,t,n,r,i){var s,o,u,a,f,l,c,h,p,d,v,m=data_priv.get(e);if(!m)return;n.handler&&(s=n,n=s.handler,i=s.selector),n.guid||(n.guid=jQuery.guid++),(a=m.events)||(a=m.events={}),(o=m.handle)||(o=m.handle=function(e){return typeof jQuery===core_strundefined||!!e&&jQuery.event.triggered===e.type?undefined:jQuery.event.dispatch.apply(o.elem,arguments)},o.elem=e),t=(t||"").match(core_rnotwhite)||[""],f=t.length;while(f--){u=rtypenamespace.exec(t[f])||[],p=v=u[1],d=(u[2]||"").split(".").sort();if(!p)continue;c=jQuery.event.special[p]||{},p=(i?c.delegateType:c.bindType)||p,c=jQuery.event.special[p]||{},l=jQuery.extend({type:p,origType:v,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&jQuery.expr.match.needsContext.test(i),namespace:d.join(".")},s),(h=a[p])||(h=a[p]=[],h.delegateCount=0,(!c.setup||c.setup.call(e,r,d,o)===!1)&&e.addEventListener&&e.addEventListener(p,o,!1)),c.add&&(c.add.call(e,l),l.handler.guid||(l.handler.guid=n.guid)),i?h.splice(h.delegateCount++,0,l):h.push(l),jQuery.event.global[p]=!0}e=null},remove:function(e,t,n,r,i){var s,o,u,a,f,l,c,h,p,d,v,m=data_priv.hasData(e)&&data_priv.get(e);if(!m||!(a=m.events))return;t=(t||"").match(core_rnotwhite)||[""],f=t.length;while(f--){u=rtypenamespace.exec(t[f])||[],p=v=u[1],d=(u[2]||"").split(".").sort();if(!p){for(p in a)jQuery.event.remove(e,p+t[f],n,r,!0);continue}c=jQuery.event.special[p]||{},p=(r?c.delegateType:c.bindType)||p,h=a[p]||[],u=u[2]&&new RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"),o=s=h.length;while(s--)l=h[s],(i||v===l.origType)&&(!n||n.guid===l.guid)&&(!u||u.test(l.namespace))&&(!r||r===l.selector||r==="**"&&l.selector)&&(h.splice(s,1),l.selector&&h.delegateCount--,c.remove&&c.remove.call(e,l));o&&!h.length&&((!c.teardown||c.teardown.call(e,d,m.handle)===!1)&&jQuery.removeEvent(e,p,m.handle),delete a[p])}jQuery.isEmptyObject(a)&&(delete m.handle,data_priv.remove(e,"events"))},trigger:function(e,t,n,r){var i,s,o,u,a,f,l,c=[n||document],h=core_hasOwn.call(e,"type")?e.type:e,p=core_hasOwn.call(e,"namespace")?e.namespace.split("."):[];s=o=n=n||document;if(n.nodeType===3||n.nodeType===8)return;if(rfocusMorph.test(h+jQuery.event.triggered))return;h.indexOf(".")>=0&&(p=h.split("."),h=p.shift(),p.sort()),a=h.indexOf(":")<0&&"on"+h,e=e[jQuery.expando]?e:new jQuery.Event(h,typeof e=="object"&&e),e.isTrigger=r?2:3,e.namespace=p.join("."),e.namespace_re=e.namespace?new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=undefined,e.target||(e.target=n),t=t==null?[e]:jQuery.makeArray(t,[e]),l=jQuery.event.special[h]||{};if(!r&&l.trigger&&l.trigger.apply(n,t)===!1)return;if(!r&&!l.noBubble&&!jQuery.isWindow(n)){u=l.delegateType||h,rfocusMorph.test(u+h)||(s=s.parentNode);for(;s;s=s.parentNode)c.push(s),o=s;o===(n.ownerDocument||document)&&c.push(o.defaultView||o.parentWindow||window)}i=0;while((s=c[i++])&&!e.isPropagationStopped())e.type=i>1?u:l.bindType||h,f=(data_priv.get(s,"events")||{})[e.type]&&data_priv.get(s,"handle"),f&&f.apply(s,t),f=a&&s[a],f&&jQuery.acceptData(s)&&f.apply&&f.apply(s,t)===!1&&e.preventDefault();return e.type=h,!r&&!e.isDefaultPrevented()&&(!l._default||l._default.apply(c.pop(),t)===!1)&&jQuery.acceptData(n)&&a&&jQuery.isFunction(n[h])&&!jQuery.isWindow(n)&&(o=n[a],o&&(n[a]=null),jQuery.event.triggered=h,n[h](),jQuery.event.triggered=undefined,o&&(n[a]=o)),e.result},dispatch:function(e){e=jQuery.event.fix(e);var t,n,r,i,s,o=[],u=core_slice.call(arguments),a=(data_priv.get(this,"events")||{})[e.type]||[],f=jQuery.event.special[e.type]||{};u[0]=e,e.delegateTarget=this;if(f.preDispatch&&f.preDispatch.call(this,e)===!1)return;o=jQuery.event.handlers.call(this,e,a),t=0;while((i=o[t++])&&!e.isPropagationStopped()){e.currentTarget=i.elem,n=0;while((s=i.handlers[n++])&&!e.isImmediatePropagationStopped())if(!e.namespace_re||e.namespace_re.test(s.namespace))e.handleObj=s,e.data=s.data,r=((jQuery.event.special[s.origType]||{}).handle||s.handler).apply(i.elem,u),r!==undefined&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation())}return f.postDispatch&&f.postDispatch.call(this,e),e.result},handlers:function(e,t){var n,r,i,s,o=[],u=t.delegateCount,a=e.target;if(u&&a.nodeType&&(!e.button||e.type!=="click"))for(;a!==this;a=a.parentNode||this)if(a.disabled!==!0||e.type!=="click"){r=[];for(n=0;n<u;n++)s=t[n],i=s.selector+" ",r[i]===undefined&&(r[i]=s.needsContext?jQuery(i,this).index(a)>=0:jQuery.find(i,this,null,[a]).length),r[i]&&r.push(s);r.length&&o.push({elem:a,handlers:r})}return u<t.length&&o.push({elem:this,handlers:t.slice(u)}),o},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return e.which==null&&(e.which=t.charCode!=null?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,s=t.button;return e.pageX==null&&t.clientX!=null&&(n=e.target.ownerDocument||document,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),!e.which&&s!==undefined&&(e.which=s&1?1:s&2?3:s&4?2:0),e}},fix:function(e){if(e[jQuery.expando])return e;var t,n,r,i=e.type,s=e,o=this.fixHooks[i];o||(this.fixHooks[i]=o=rmouseEvent.test(i)?this.mouseHooks:rkeyEvent.test(i)?this.keyHooks:{}),r=o.props?this.props.concat(o.props):this.props,e=new jQuery.Event(s),t=r.length;while(t--)n=r[t],e[n]=s[n];return e.target||(e.target=document),e.target.nodeType===3&&(e.target=e.target.parentNode),o.filter?o.filter(e,s):e},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==safeActiveElement()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===safeActiveElement()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if(this.type==="checkbox"&&this.click&&jQuery.nodeName(this,"input"))return this.click(),!1},_default:function(e){return jQuery.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==undefined&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=jQuery.extend(new jQuery.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?jQuery.event.trigger(i,null,t):jQuery.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},jQuery.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},jQuery.Event=function(e,t){if(!(this instanceof jQuery.Event))return new jQuery.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.getPreventDefault&&e.getPreventDefault()?returnTrue:returnFalse):this.type=e,t&&jQuery.extend(this,t),this.timeStamp=e&&e.timeStamp||jQuery.now(),this[jQuery.expando]=!0},jQuery.Event.prototype={isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=returnTrue,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=returnTrue,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=returnTrue,this.stopPropagation()}},jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){jQuery.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,s=e.handleObj;if(!i||i!==r&&!jQuery.contains(r,i))e.type=s.origType,n=s.handler.apply(this,arguments),e.type=t;return n}}}),jQuery.support.focusinBubbles||jQuery.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){jQuery.event.simulate(t,e.target,jQuery.event.fix(e),!0)};jQuery.event.special[t]={setup:function(){n++===0&&document.addEventListener(e,r,!0)},teardown:function(){--n===0&&document.removeEventListener(e,r,!0)}}}),jQuery.fn.extend({on:function(e,t,n,r,i){var s,o;if(typeof e=="object"){typeof t!="string"&&(n=n||t,t=undefined);for(o in e)this.on(o,t,n,e[o],i);return this}n==null&&r==null?(r=t,n=t=undefined):r==null&&(typeof t=="string"?(r=n,n=undefined):(r=n,n=t,t=undefined));if(r===!1)r=returnFalse;else if(!r)return this;return i===1&&(s=r,r=function(e){return jQuery().off(e),s.apply(this,arguments)},r.guid=s.guid||(s.guid=jQuery.guid++)),this.each(function(){jQuery.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,jQuery(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if(typeof e=="object"){for(i in e)this.off(i,t,e[i]);return this}if(t===!1||typeof t=="function")n=t,t=undefined;return n===!1&&(n=returnFalse),this.each(function(){jQuery.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){jQuery.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return jQuery.event.trigger(e,t,n,!0)}});var isSimple=/^.[^:#\[\.,]*$/,rparentsprev=/^(?:parents|prev(?:Until|All))/,rneedsContext=jQuery.expr.match.needsContext,guaranteedUnique={children:!0,contents:!0,next:!0,prev:!0};jQuery.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if(typeof e!="string")return this.pushStack(jQuery(e).filter(function(){for(t=0;t<i;t++)if(jQuery.contains(r[t],this))return!0}));for(t=0;t<i;t++)jQuery.find(e,r[t],n);return n=this.pushStack(i>1?jQuery.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t=jQuery(e,this),n=t.length;return this.filter(function(){var e=0;for(;e<n;e++)if(jQuery.contains(this,t[e]))return!0})},not:function(e){return this.pushStack(winnow(this,e||[],!0))},filter:function(e){return this.pushStack(winnow(this,e||[],!1))},is:function(e){return!!winnow(this,typeof e=="string"&&rneedsContext.test(e)?jQuery(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,s=[],o=rneedsContext.test(e)||typeof e!="string"?jQuery(e,t||this.context):0;for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(o?o.index(n)>-1:n.nodeType===1&&jQuery.find.matchesSelector(n,e))){n=s.push(n);break}return this.pushStack(s.length>1?jQuery.unique(s):s)},index:function(e){return e?typeof e=="string"?core_indexOf.call(jQuery(e),this[0]):core_indexOf.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n=typeof e=="string"?jQuery(e,t):jQuery.makeArray(e&&e.nodeType?[e]:e),r=jQuery.merge(this.get(),n);return this.pushStack(jQuery.unique(r))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}}),jQuery.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return jQuery.dir(e,"parentNode")},parentsUntil:function(e,t,n){return jQuery.dir(e,"parentNode",n)},next:function(e){return sibling(e,"nextSibling")},prev:function(e){return sibling(e,"previousSibling")},nextAll:function(e){return jQuery.dir(e,"nextSibling")},prevAll:function(e){return jQuery.dir(e,"previousSibling")},nextUntil:function(e,t,n){return jQuery.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return jQuery.dir(e,"previousSibling",n)},siblings:function(e){return jQuery.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return jQuery.sibling(e.firstChild)},contents:function(e){return e.contentDocument||jQuery.merge([],e.childNodes)}},function(e,t){jQuery.fn[e]=function(n,r){var i=jQuery.map(this,t,n);return e.slice(-5)!=="Until"&&(r=n),r&&typeof r=="string"&&(i=jQuery.filter(r,i)),this.length>1&&(guaranteedUnique[e]||jQuery.unique(i),rparentsprev.test(e)&&i.reverse()),this.pushStack(i)}}),jQuery.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),t.length===1&&r.nodeType===1?jQuery.find.matchesSelector(r,e)?[r]:[]:jQuery.find.matches(e,jQuery.grep(t,function(e){return e.nodeType===1}))},dir:function(e,t,n){var r=[],i=n!==undefined;while((e=e[t])&&e.nodeType!==9)if(e.nodeType===1){if(i&&jQuery(e).is(n))break;r.push(e)}return r},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)e.nodeType===1&&e!==t&&n.push(e);return n}});var rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,rtagName=/<([\w:]+)/,rhtml=/<|&#?\w+;/,rnoInnerhtml=/<(?:script|style|link)/i,manipulation_rcheckableType=/^(?:checkbox|radio)$/i,rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,rscriptType=/^$|\/(?:java|ecma)script/i,rscriptTypeMasked=/^true\/(.*)/,rcleanScript=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,wrapMap={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};wrapMap.optgroup=wrapMap.option,wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead,wrapMap.th=wrapMap.td,jQuery.fn.extend({text:function(e){return jQuery.access(this,function(e){return e===undefined?jQuery.text(this):this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var t=manipulationTarget(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var t=manipulationTarget(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?jQuery.filter(e,this):this,i=0;for(;(n=r[i])!=null;i++)!t&&n.nodeType===1&&jQuery.cleanData(getAll(n)),n.parentNode&&(t&&jQuery.contains(n.ownerDocument,n)&&setGlobalEval(getAll(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;(e=this[t])!=null;t++)e.nodeType===1&&(jQuery.cleanData(getAll(e,!1)),e.textContent="");return this},clone:function(e,t){return e=e==null?!1:e,t=t==null?e:t,this.map(function(){return jQuery.clone(this,e,t)})},html:function(e){return jQuery.access(this,function(e){var t=this[0]||{},n=0,r=this.length;if(e===undefined&&t.nodeType===1)return t.innerHTML;if(typeof e=="string"&&!rnoInnerhtml.test(e)&&!wrapMap[(rtagName.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(rxhtmlTag,"<$1></$2>");try{for(;n<r;n++)t=this[n]||{},t.nodeType===1&&(jQuery.cleanData(getAll(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=jQuery.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),jQuery(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=core_concat.apply([],e);var r,i,s,o,u,a,f=0,l=this.length,c=this,h=l-1,p=e[0],d=jQuery.isFunction(p);if(d||!(l<=1||typeof p!="string"||jQuery.support.checkClone||!rchecked.test(p)))return this.each(function(r){var i=c.eq(r);d&&(e[0]=p.call(this,r,i.html())),i.domManip(e,t,n)});if(l){r=jQuery.buildFragment(e,this[0].ownerDocument,!1,!n&&this),i=r.firstChild,r.childNodes.length===1&&(r=i);if(i){s=jQuery.map(getAll(r,"script"),disableScript),o=s.length;for(;f<l;f++)u=r,f!==h&&(u=jQuery.clone(u,!0,!0),o&&jQuery.merge(s,getAll(u,"script"))),t.call(this[f],u,f);if(o){a=s[s.length-1].ownerDocument,jQuery.map(s,restoreScript);for(f=0;f<o;f++)u=s[f],rscriptType.test(u.type||"")&&!data_priv.access(u,"globalEval")&&jQuery.contains(a,u)&&(u.src?jQuery._evalUrl(u.src):jQuery.globalEval(u.textContent.replace(rcleanScript,"")))}}}return this}}),jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){jQuery.fn[e]=function(e){var n,r=[],i=jQuery(e),s=i.length-1,o=0;for(;o<=s;o++)n=o===s?this:this.clone(!0),jQuery(i[o])[t](n),core_push.apply(r,n.get());return this.pushStack(r)}}),jQuery.extend({clone:function(e,t,n){var r,i,s,o,u=e.cloneNode(!0),a=jQuery.contains(e.ownerDocument,e);if(!jQuery.support.noCloneChecked&&(e.nodeType===1||e.nodeType===11)&&!jQuery.isXMLDoc(e)){o=getAll(u),s=getAll(e);for(r=0,i=s.length;r<i;r++)fixInput(s[r],o[r])}if(t)if(n){s=s||getAll(e),o=o||getAll(u);for(r=0,i=s.length;r<i;r++)cloneCopyEvent(s[r],o[r])}else cloneCopyEvent(e,u);return o=getAll(u,"script"),o.length>0&&setGlobalEval(o,!a&&getAll(e,"script")),u},buildFragment:function(e,t,n,r){var i,s,o,u,a,f,l=0,c=e.length,h=t.createDocumentFragment(),p=[];for(;l<c;l++){i=e[l];if(i||i===0)if(jQuery.type(i)==="object")jQuery.merge(p,i.nodeType?[i]:i);else if(!rhtml.test(i))p.push(t.createTextNode(i));else{s=s||h.appendChild(t.createElement("div")),o=(rtagName.exec(i)||["",""])[1].toLowerCase(),u=wrapMap[o]||wrapMap._default,s.innerHTML=u[1]+i.replace(rxhtmlTag,"<$1></$2>")+u[2],f=u[0];while(f--)s=s.lastChild;jQuery.merge(p,s.childNodes),s=h.firstChild,s.textContent=""}}h.textContent="",l=0;while(i=p[l++]){if(r&&jQuery.inArray(i,r)!==-1)continue;a=jQuery.contains(i.ownerDocument,i),s=getAll(h.appendChild(i),"script"),a&&setGlobalEval(s);if(n){f=0;while(i=s[f++])rscriptType.test(i.type||"")&&n.push(i)}}return h},cleanData:function(e){var t,n,r,i,s,o,u=jQuery.event.special,a=0;for(;(n=e[a])!==undefined;a++){if(Data.accepts(n)){s=n[data_priv.expando];if(s&&(t=data_priv.cache[s])){r=Object.keys(t.events||{});if(r.length)for(o=0;(i=r[o])!==undefined;o++)u[i]?jQuery.event.remove(n,i):jQuery.removeEvent(n,i,t.handle);data_priv.cache[s]&&delete data_priv.cache[s]}}delete data_user.cache[n[data_user.expando]]}},_evalUrl:function(e){return jQuery.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),jQuery.fn.extend({wrapAll:function(e){var t;return jQuery.isFunction(e)?this.each(function(t){jQuery(this).wrapAll(e.call(this,t))}):(this[0]&&(t=jQuery(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return jQuery.isFunction(e)?this.each(function(t){jQuery(this).wrapInner(e.call(this,t))}):this.each(function(){var t=jQuery(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=jQuery.isFunction(e);return this.each(function(n){jQuery(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){jQuery.nodeName(this,"body")||jQuery(this).replaceWith(this.childNodes)}).end()}});var curCSS,iframe,rdisplayswap=/^(none|table(?!-c[ea]).+)/,rmargin=/^margin/,rnumsplit=new RegExp("^("+core_pnum+")(.*)$","i"),rnumnonpx=new RegExp("^("+core_pnum+")(?!px)[a-z%]+$","i"),rrelNum=new RegExp("^([+-])=("+core_pnum+")","i"),elemdisplay={BODY:"block"},cssShow={position:"absolute",visibility:"hidden",display:"block"},cssNormalTransform={letterSpacing:0,fontWeight:400},cssExpand=["Top","Right","Bottom","Left"],cssPrefixes=["Webkit","O","Moz","ms"];jQuery.fn.extend({css:function(e,t){return jQuery.access(this,function(e,t,n){var r,i,s={},o=0;if(jQuery.isArray(t)){r=getStyles(e),i=t.length;for(;o<i;o++)s[t[o]]=jQuery.css(e,t[o],!1,r);return s}return n!==undefined?jQuery.style(e,t,n):jQuery.css(e,t)},e,t,arguments.length>1)},show:function(){return showHide(this,!0)},hide:function(){return showHide(this)},toggle:function(e){return typeof e=="boolean"?e?this.show():this.hide():this.each(function(){isHidden(this)?jQuery(this).show():jQuery(this).hide()})}}),jQuery.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=curCSS(e,"opacity");return n===""?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,r){if(!e||e.nodeType===3||e.nodeType===8||!e.style)return;var i,s,o,u=jQuery.camelCase(t),a=e.style;t=jQuery.cssProps[u]||(jQuery.cssProps[u]=vendorPropName(a,u)),o=jQuery.cssHooks[t]||jQuery.cssHooks[u];if(n===undefined)return o&&"get"in o&&(i=o.get(e,!1,r))!==undefined?i:a[t];s=typeof n,s==="string"&&(i=rrelNum.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(jQuery.css(e,t)),s="number");if(n==null||s==="number"&&isNaN(n))return;s==="number"&&!jQuery.cssNumber[u]&&(n+="px"),!jQuery.support.clearCloneStyle&&n===""&&t.indexOf("background")===0&&(a[t]="inherit");if(!o||!("set"in o)||(n=o.set(e,n,r))!==undefined)a[t]=n},css:function(e,t,n,r){var i,s,o,u=jQuery.camelCase(t);return t=jQuery.cssProps[u]||(jQuery.cssProps[u]=vendorPropName(e.style,u)),o=jQuery.cssHooks[t]||jQuery.cssHooks[u],o&&"get"in o&&(i=o.get(e,!0,n)),i===undefined&&(i=curCSS(e,t,r)),i==="normal"&&t in cssNormalTransform&&(i=cssNormalTransform[t]),n===""||n?(s=parseFloat(i),n===!0||jQuery.isNumeric(s)?s||0:i):i}}),curCSS=function(e,t,n){var r,i,s,o=n||getStyles(e),u=o?o.getPropertyValue(t)||o[t]:undefined,a=e.style;return o&&(u===""&&!jQuery.contains(e.ownerDocument,e)&&(u=jQuery.style(e,t)),rnumnonpx.test(u)&&rmargin.test(t)&&(r=a.width,i=a.minWidth,s=a.maxWidth,a.minWidth=a.maxWidth=a.width=u,u=o.width,a.width=r,a.minWidth=i,a.maxWidth=s)),u},jQuery.each(["height","width"],function(e,t){jQuery.cssHooks[t]={get:function(e,n,r){if(n)return e.offsetWidth===0&&rdisplayswap.test(jQuery.css(e,"display"))?jQuery.swap(e,cssShow,function(){return getWidthOrHeight(e,t,r)}):getWidthOrHeight(e,t,r)},set:function(e,n,r){var i=r&&getStyles(e);return setPositiveNumber(e,n,r?augmentWidthOrHeight(e,t,r,jQuery.support.boxSizing&&jQuery.css(e,"boxSizing",!1,i)==="border-box",i):0)}}}),jQuery(function(){jQuery.support.reliableMarginRight||(jQuery.cssHooks.marginRight={get:function(e,t){if(t)return jQuery.swap(e,{display:"inline-block"},curCSS,[e,"marginRight"])}}),!jQuery.support.pixelPosition&&jQuery.fn.position&&jQuery.each(["top","left"],function(e,t){jQuery.cssHooks[t]={get:function(e,n){if(n)return n=curCSS(e,t),rnumnonpx.test(n)?jQuery(e).position()[t]+"px":n}}})}),jQuery.expr&&jQuery.expr.filters&&(jQuery.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0},jQuery.expr.filters.visible=function(e){return!jQuery.expr.filters.hidden(e)}),jQuery.each({margin:"",padding:"",border:"Width"},function(e,t){jQuery.cssHooks[e+t]={expand:function(n){var r=0,i={},s=typeof n=="string"?n.split(" "):[n];for(;r<4;r++)i[e+cssExpand[r]+t]=s[r]||s[r-2]||s[0];return i}},rmargin.test(e)||(jQuery.cssHooks[e+t].set=setPositiveNumber)});var r20=/%20/g,rbracket=/\[\]$/,rCRLF=/\r?\n/g,rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,rsubmittable=/^(?:input|select|textarea|keygen)/i;jQuery.fn.extend({serialize:function(){return jQuery.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=jQuery.prop(this,"elements");return e?jQuery.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!jQuery(this).is(":disabled")&&rsubmittable.test(this.nodeName)&&!rsubmitterTypes.test(e)&&(this.checked||!manipulation_rcheckableType.test(e))}).map(function(e,t){var n=jQuery(this).val();return n==null?null:jQuery.isArray(n)?jQuery.map(n,function(e){return{name:t.name,value:e.replace(rCRLF,"\r\n")}}):{name:t.name,value:n.replace(rCRLF,"\r\n")}}).get()}}),jQuery.param=function(e,t){var n,r=[],i=function(e,t){t=jQuery.isFunction(t)?t():t==null?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};t===undefined&&(t=jQuery.ajaxSettings&&jQuery.ajaxSettings.traditional);if(jQuery.isArray(e)||e.jquery&&!jQuery.isPlainObject(e))jQuery.each(e,function(){i(this.name,this.value)});else for(n in e)buildParams(n,e[n],t,i);return r.join("&").replace(r20,"+")},jQuery.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){jQuery.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),jQuery.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)}});var ajaxLocParts,ajaxLocation,ajax_nonce=jQuery.now(),ajax_rquery=/\?/,rhash=/#.*$/,rts=/([?&])_=[^&]*/,rheaders=/^(.*?):[ \t]*([^\r\n]*)$/mg,rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//,rurl=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,_load=jQuery.fn.load,prefilters={},transports={},allTypes="*/".concat("*");try{ajaxLocation=location.href}catch(e){ajaxLocation=document.createElement("a"),ajaxLocation.href="",ajaxLocation=ajaxLocation.href}ajaxLocParts=rurl.exec(ajaxLocation.toLowerCase())||[],jQuery.fn.load=function(e,t,n){if(typeof e!="string"&&_load)return _load.apply(this,arguments);var r,i,s,o=this,u=e.indexOf(" ");return u>=0&&(r=e.slice(u),e=e.slice(0,u)),jQuery.isFunction(t)?(n=t,t=undefined):t&&typeof t=="object"&&(i="POST"),o.length>0&&jQuery.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){s=arguments,o.html(r?jQuery("<div>").append(jQuery.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){o.each(n,s||[e.responseText,t,e])}),this},jQuery.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){jQuery.fn[t]=function(e){return this.on(t,e)}}),jQuery.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ajaxLocation,type:"GET",isLocal:rlocalProtocol.test(ajaxLocParts[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":allTypes,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":jQuery.parseJSON,"text xml":jQuery.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?ajaxExtend(ajaxExtend(e,jQuery.ajaxSettings),t):ajaxExtend(jQuery.ajaxSettings,e)},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports),ajax:function(e,t){function n(e,t,n,o){var a,l,g,y,w,S=t;if(b===2)return;b=2,u&&clearTimeout(u),r=undefined,s=o||"",E.readyState=e>0?4:0,a=e>=200&&e<300||e===304,n&&(y=ajaxHandleResponses(c,E,n)),y=ajaxConvert(c,y,E,a);if(a)c.ifModified&&(w=E.getResponseHeader("Last-Modified"),w&&(jQuery.lastModified[i]=w),w=E.getResponseHeader("etag"),w&&(jQuery.etag[i]=w)),e===204||c.type==="HEAD"?S="nocontent":e===304?S="notmodified":(S=y.state,l=y.data,g=y.error,a=!g);else{g=S;if(e||!S)S="error",e<0&&(e=0)}E.status=e,E.statusText=(t||S)+"",a?d.resolveWith(h,[l,S,E]):d.rejectWith(h,[E,S,g]),E.statusCode(m),m=undefined,f&&p.trigger(a?"ajaxSuccess":"ajaxError",[E,c,a?l:g]),v.fireWith(h,[E,S]),f&&(p.trigger("ajaxComplete",[E,c]),--jQuery.active||jQuery.event.trigger("ajaxStop"))}typeof e=="object"&&(t=e,e=undefined),t=t||{};var r,i,s,o,u,a,f,l,c=jQuery.ajaxSetup({},t),h=c.context||c,p=c.context&&(h.nodeType||h.jquery)?jQuery(h):jQuery.event,d=jQuery.Deferred(),v=jQuery.Callbacks("once memory"),m=c.statusCode||{},g={},y={},b=0,w="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(b===2){if(!o){o={};while(t=rheaders.exec(s))o[t[1].toLowerCase()]=t[2]}t=o[e.toLowerCase()]}return t==null?null:t},getAllResponseHeaders:function(){return b===2?s:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=y[n]=y[n]||e,g[e]=t),this},overrideMimeType:function(e){return b||(c.mimeType=e),this},statusCode:function(e){var t;if(e)if(b<2)for(t in e)m[t]=[m[t],e[t]];else E.always(e[E.status]);return this},abort:function(e){var t=e||w;return r&&r.abort(t),n(0,t),this}};d.promise(E).complete=v.add,E.success=E.done,E.error=E.fail,c.url=((e||c.url||ajaxLocation)+"").replace(rhash,"").replace(rprotocol,ajaxLocParts[1]+"//"),c.type=t.method||t.type||c.method||c.type,c.dataTypes=jQuery.trim(c.dataType||"*").toLowerCase().match(core_rnotwhite)||[""],c.crossDomain==null&&(a=rurl.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===ajaxLocParts[1]&&a[2]===ajaxLocParts[2]&&(a[3]||(a[1]==="http:"?"80":"443"))===(ajaxLocParts[3]||(ajaxLocParts[1]==="http:"?"80":"443")))),c.data&&c.processData&&typeof c.data!="string"&&(c.data=jQuery.param(c.data,c.traditional)),inspectPrefiltersOrTransports(prefilters,c,t,E);if(b===2)return E;f=c.global,f&&jQuery.active++===0&&jQuery.event.trigger("ajaxStart"),c.type=c.type.toUpperCase(),c.hasContent=!rnoContent.test(c.type),i=c.url,c.hasContent||(c.data&&(i=c.url+=(ajax_rquery.test(i)?"&":"?")+c.data,delete c.data),c.cache===!1&&(c.url=rts.test(i)?i.replace(rts,"$1_="+ajax_nonce++):i+(ajax_rquery.test(i)?"&":"?")+"_="+ajax_nonce++)),c.ifModified&&(jQuery.lastModified[i]&&E.setRequestHeader("If-Modified-Since",jQuery.lastModified[i]),jQuery.etag[i]&&E.setRequestHeader("If-None-Match",jQuery.etag[i])),(c.data&&c.hasContent&&c.contentType!==!1||t.contentType)&&E.setRequestHeader("Content-Type",c.contentType),E.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+(c.dataTypes[0]!=="*"?", "+allTypes+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)E.setRequestHeader(l,c.headers[l]);if(!c.beforeSend||c.beforeSend.call(h,E,c)!==!1&&b!==2){w="abort";for(l in{success:1,error:1,complete:1})E[l](c[l]);r=inspectPrefiltersOrTransports(transports,c,t,E);if(!r)n(-1,"No Transport");else{E.readyState=1,f&&p.trigger("ajaxSend",[E,c]),c.async&&c.timeout>0&&(u=setTimeout(function(){E.abort("timeout")},c.timeout));try{b=1,r.send(g,n)}catch(S){if(!(b<2))throw S;n(-1,S)}}return E}return E.abort()},getJSON:function(e,t,n){return jQuery.get(e,t,n,"json")},getScript:function(e,t){return jQuery.get(e,undefined,t,"script")}}),jQuery.each(["get","post"],function(e,t){jQuery[t]=function(e,n,r,i){return jQuery.isFunction(n)&&(i=i||r,r=n,n=undefined),jQuery.ajax({url:e,type:t,dataType:i,data:n,success:r})}}),jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return jQuery.globalEval(e),e}}}),jQuery.ajaxPrefilter("script",function(e){e.cache===undefined&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),jQuery.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=jQuery("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i(e.type==="error"?404:200,e.type)}),document.head.appendChild(t[0])},abort:function(){n&&n()}}}});var oldCallbacks=[],rjsonp=/(=)\?(?=&|$)|\?\?/;jQuery.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=oldCallbacks.pop()||jQuery.expando+"_"+ajax_nonce++;return this[e]=!0,e}}),jQuery.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,s,o=e.jsonp!==!1&&(rjsonp.test(e.url)?"url":typeof e.data=="string"&&!(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&rjsonp.test(e.data)&&"data");if(o||e.dataTypes[0]==="jsonp")return r=e.jsonpCallback=jQuery.isFunction(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,o?e[o]=e[o].replace(rjsonp,"$1"+r):e.jsonp!==!1&&(e.url+=(ajax_rquery.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return s||jQuery.error(r+" was not called"),s[0]},e.dataTypes[0]="json",i=window[r],window[r]=function(){s=arguments},n.always(function(){window[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,oldCallbacks.push(r)),s&&jQuery.isFunction(i)&&i(s[0]),s=i=undefined}),"script"}),jQuery.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var xhrSupported=jQuery.ajaxSettings.xhr(),xhrSuccessStatus={0:200,1223:204},xhrId=0,xhrCallbacks={};window.ActiveXObject&&jQuery(window).on("unload",function(){for(var e in xhrCallbacks)xhrCallbacks[e]();xhrCallbacks=undefined}),jQuery.support.cors=!!xhrSupported&&"withCredentials"in xhrSupported,jQuery.support.ajax=xhrSupported=!!xhrSupported,jQuery.ajaxTransport(function(e){var t;if(jQuery.support.cors||xhrSupported&&!e.crossDomain)return{send:function(n,r){var i,s,o=e.xhr();o.open(e.type,e.url,e.async,e.username,e.password);if(e.xhrFields)for(i in e.xhrFields)o[i]=e.xhrFields[i];e.mimeType&&o.overrideMimeType&&o.overrideMimeType(e.mimeType),!e.crossDomain&&!n["X-Requested-With"]&&(n["X-Requested-With"]="XMLHttpRequest");for(i in n)o.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete xhrCallbacks[s],t=o.onload=o.onerror=null,e==="abort"?o.abort():e==="error"?r(o.status||404,o.statusText):r(xhrSuccessStatus[o.status]||o.status,o.statusText,typeof o.responseText=="string"?{text:o.responseText}:undefined,o.getAllResponseHeaders()))}},o.onload=t(),o.onerror=t("error"),t=xhrCallbacks[s=xhrId++]=t("abort"),o.send(e.hasContent&&e.data||null)},abort:function(){t&&t()}}});var fxNow,timerId,rfxtypes=/^(?:toggle|show|hide)$/,rfxnum=new RegExp("^(?:([+-])=|)("+core_pnum+")([a-z%]*)$","i"),rrun=/queueHooks$/,animationPrefilters=[defaultPrefilter],tweeners={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=rfxnum.exec(t),s=i&&i[3]||(jQuery.cssNumber[e]?"":"px"),o=(jQuery.cssNumber[e]||s!=="px"&&+r)&&rfxnum.exec(jQuery.css(n.elem,e)),u=1,a=20;if(o&&o[3]!==s){s=s||o[3],i=i||[],o=+r||1;do u=u||".5",o/=u,jQuery.style(n.elem,e,o+s);while(u!==(u=n.cur()/r)&&u!==1&&--a)}return i&&(o=n.start=+o||+r||0,n.unit=s,n.end=i[1]?o+(i[1]+1)*i[2]:+i[2]),n}]};jQuery.Animation=jQuery.extend(Animation,{tweener:function(e,t){jQuery.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;r<i;r++)n=e[r],tweeners[n]=tweeners[n]||[],tweeners[n].unshift(t)},prefilter:function(e,t){t?animationPrefilters.unshift(e):animationPrefilters.push(e)}}),jQuery.Tween=Tween,Tween.prototype={constructor:Tween,init:function(e,t,n,r,i,s){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=s||(jQuery.cssNumber[n]?"":"px")},cur:function(){var e=Tween.propHooks[this.prop];return e&&e.get?e.get(this):Tween.propHooks._default.get(this)},run:function(e){var t,n=Tween.propHooks[this.prop];return this.options.duration?this.pos=t=jQuery.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Tween.propHooks._default.set(this),this}},Tween.prototype.init.prototype=Tween.prototype,Tween.propHooks={_default:{get:function(e){var t;return e.elem[e.prop]==null||!!e.elem.style&&e.elem.style[e.prop]!=null?(t=jQuery.css(e.elem,e.prop,""),!t||t==="auto"?0:t):e.elem[e.prop]},set:function(e){jQuery.fx.step[e.prop]?jQuery.fx.step[e.prop](e):e.elem.style&&(e.elem.style[jQuery.cssProps[e.prop]]!=null||jQuery.cssHooks[e.prop])?jQuery.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Tween.propHooks.scrollTop=Tween.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},jQuery.each(["toggle","show","hide"],function(e,t){var n=jQuery.fn[t];jQuery.fn[t]=function(e,r,i){return e==null||typeof e=="boolean"?n.apply(this,arguments):this.animate(genFx(t,!0),e,r,i)}}),jQuery.fn.extend({fadeTo:function(e,t,n,r){return this.filter(isHidden).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=jQuery.isEmptyObject(e),s=jQuery.speed(t,n,r),o=function(){var t=Animation(this,jQuery.extend({},e),s);(i||data_priv.get(this,"finish"))&&t.stop(!0)};return o.finish=o,i||s.queue===!1?this.each(o):this.queue(s.queue,o)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return typeof e!="string"&&(n=t,t=e,e=undefined),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=e!=null&&e+"queueHooks",s=jQuery.timers,o=data_priv.get(this);if(i)o[i]&&o[i].stop&&r(o[i]);else for(i in o)o[i]&&o[i].stop&&rrun.test(i)&&r(o[i]);for(i=s.length;i--;)s[i].elem===this&&(e==null||s[i].queue===e)&&(s[i].anim.stop(n),t=!1,s.splice(i,1));(t||!n)&&jQuery.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=data_priv.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],s=jQuery.timers,o=r?r.length:0;n.finish=!0,jQuery.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0);for(t=s.length;t--;)s[t].elem===this&&s[t].queue===e&&(s[t].anim.stop(!0),s.splice(t,1));for(t=0;t<o;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),jQuery.each({slideDown:genFx("show"),slideUp:genFx("hide"),slideToggle:genFx("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){jQuery.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),jQuery.speed=function(e,t,n){var r=e&&typeof e=="object"?jQuery.extend({},e):{complete:n||!n&&t||jQuery.isFunction(e)&&e,duration:e,easing:n&&t||t&&!jQuery.isFunction(t)&&t};r.duration=jQuery.fx.off?0:typeof r.duration=="number"?r.duration:r.duration in jQuery.fx.speeds?jQuery.fx.speeds[r.duration]:jQuery.fx.speeds._default;if(r.queue==null||r.queue===!0)r.queue="fx";return r.old=r.complete,r.complete=function(){jQuery.isFunction(r.old)&&r.old.call(this),r.queue&&jQuery.dequeue(this,r.queue)},r},jQuery.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},jQuery.timers=[],jQuery.fx=Tween.prototype.init,jQuery.fx.tick=function(){var e,t=jQuery.timers,n=0;fxNow=jQuery.now();for(;n<t.length;n++)e=t[n],!e()&&t[n]===e&&t.splice(n--,1);t.length||jQuery.fx.stop(),fxNow=undefined},jQuery.fx.timer=function(e){e()&&jQuery.timers.push(e)&&jQuery.fx.start()},jQuery.fx.interval=13,jQuery.fx.start=function(){timerId||(timerId=setInterval(jQuery.fx.tick,jQuery.fx.interval))},jQuery.fx.stop=function(){clearInterval(timerId),timerId=null},jQuery.fx.speeds={slow:600,fast:200,_default:400},jQuery.fx.step={},jQuery.expr&&jQuery.expr.filters&&(jQuery.expr.filters.animated=function(e){return jQuery.grep(jQuery.timers,function(t){return e===t.elem}).length}),jQuery.fn.offset=function(e){if(arguments.length)return e===undefined?this:this.each(function(t){jQuery.offset.setOffset(this,e,t)});var t,n,r=this[0],i={top:0,left:0},s=r&&r.ownerDocument;if(!s)return;return t=s.documentElement,jQuery.contains(t,r)?(typeof r.getBoundingClientRect!==core_strundefined&&(i=r.getBoundingClientRect()),n=getWindow(s),{top:i.top+n.pageYOffset-t.clientTop,left:i.left+n.pageXOffset-t.clientLeft}):i},jQuery.offset={setOffset:function(e,t,n){var r,i,s,o,u,a,f,l=jQuery.css(e,"position"),c=jQuery(e),h={};l==="static"&&(e.style.position="relative"),u=c.offset(),s=jQuery.css(e,"top"),a=jQuery.css(e,"left"),f=(l==="absolute"||l==="fixed")&&(s+a).indexOf("auto")>-1,f?(r=c.position(),o=r.top,i=r.left):(o=parseFloat(s)||0,i=parseFloat(a)||0),jQuery.isFunction(t)&&(t=t.call(e,n,u)),t.top!=null&&(h.top=t.top-u.top+o),t.left!=null&&(h.left=t.left-u.left+i),"using"in t?t.using.call(e,h):c.css(h)}},jQuery.fn.extend({position:function(){if(!this[0])return;var e,t,n=this[0],r={top:0,left:0};return jQuery.css(n,"position")==="fixed"?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),jQuery.nodeName(e[0],"html")||(r=e.offset()),r.top+=jQuery.css(e[0],"borderTopWidth",!0),r.left+=jQuery.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-jQuery.css(n,"marginTop",!0),left:t.left-r.left-jQuery.css(n,"marginLeft",!0)}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||docElem;while(e&&!jQuery.nodeName(e,"html")&&jQuery.css(e,"position")==="static")e=e.offsetParent;return e||docElem})}}),jQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;jQuery.fn[e]=function(r){return jQuery.access(this,function(e,r,i){var s=getWindow(e);if(i===undefined)return s?s[t]:e[r];s?s.scrollTo(n?window.pageXOffset:i,n?i:window.pageYOffset):e[r]=i},e,r,arguments.length,null)}}),jQuery.each({Height:"height",Width:"width"},function(e,t){jQuery.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){jQuery.fn[r]=function(r,i){var s=arguments.length&&(n||typeof r!="boolean"),o=n||(r===!0||i===!0?"margin":"border");return jQuery.access(this,function(t,n,r){var i;return jQuery.isWindow(t)?t.document.documentElement["client"+e]:t.nodeType===9?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):r===undefined?jQuery.css(t,n,o):jQuery.style(t,n,r,o)},t,s?r:undefined,s,null)}})}),jQuery.fn.size=function(){return this.length},jQuery.fn.andSelf=jQuery.fn.addBack,typeof module=="object"&&module&&typeof module.exports=="object"?module.exports=jQuery:typeof define=="function"&&define.amd&&define("jquery",[],function(){return jQuery}),typeof window=="object"&&typeof window.document=="object"&&(window.jQuery=window.$=jQuery)})(window);
//     Underscore.js 1.4.4
//     http://underscorejs.org
//     (c) 2009-2013 Jeremy Ashkenas, DocumentCloud Inc.
//     Underscore may be freely distributed under the MIT license.

(function(){var e=this,t=e._,n={},r=Array.prototype,i=Object.prototype,s=Function.prototype,o=r.push,u=r.slice,a=r.concat,f=i.toString,l=i.hasOwnProperty,c=r.forEach,h=r.map,p=r.reduce,d=r.reduceRight,v=r.filter,m=r.every,g=r.some,y=r.indexOf,b=r.lastIndexOf,w=Array.isArray,E=Object.keys,S=s.bind,x=function(e){if(e instanceof x)return e;if(!(this instanceof x))return new x(e);this._wrapped=e};typeof exports!="undefined"?(typeof module!="undefined"&&module.exports&&(exports=module.exports=x),exports._=x):e._=x,x.VERSION="1.4.4";var T=x.each=x.forEach=function(e,t,r){if(e==null)return;if(c&&e.forEach===c)e.forEach(t,r);else if(e.length===+e.length){for(var i=0,s=e.length;i<s;i++)if(t.call(r,e[i],i,e)===n)return}else for(var o in e)if(x.has(e,o)&&t.call(r,e[o],o,e)===n)return};x.map=x.collect=function(e,t,n){var r=[];return e==null?r:h&&e.map===h?e.map(t,n):(T(e,function(e,i,s){r[r.length]=t.call(n,e,i,s)}),r)};var N="Reduce of empty array with no initial value";x.reduce=x.foldl=x.inject=function(e,t,n,r){var i=arguments.length>2;e==null&&(e=[]);if(p&&e.reduce===p)return r&&(t=x.bind(t,r)),i?e.reduce(t,n):e.reduce(t);T(e,function(e,s,o){i?n=t.call(r,n,e,s,o):(n=e,i=!0)});if(!i)throw new TypeError(N);return n},x.reduceRight=x.foldr=function(e,t,n,r){var i=arguments.length>2;e==null&&(e=[]);if(d&&e.reduceRight===d)return r&&(t=x.bind(t,r)),i?e.reduceRight(t,n):e.reduceRight(t);var s=e.length;if(s!==+s){var o=x.keys(e);s=o.length}T(e,function(u,a,f){a=o?o[--s]:--s,i?n=t.call(r,n,e[a],a,f):(n=e[a],i=!0)});if(!i)throw new TypeError(N);return n},x.find=x.detect=function(e,t,n){var r;return C(e,function(e,i,s){if(t.call(n,e,i,s))return r=e,!0}),r},x.filter=x.select=function(e,t,n){var r=[];return e==null?r:v&&e.filter===v?e.filter(t,n):(T(e,function(e,i,s){t.call(n,e,i,s)&&(r[r.length]=e)}),r)},x.reject=function(e,t,n){return x.filter(e,function(e,r,i){return!t.call(n,e,r,i)},n)},x.every=x.all=function(e,t,r){t||(t=x.identity);var i=!0;return e==null?i:m&&e.every===m?e.every(t,r):(T(e,function(e,s,o){if(!(i=i&&t.call(r,e,s,o)))return n}),!!i)};var C=x.some=x.any=function(e,t,r){t||(t=x.identity);var i=!1;return e==null?i:g&&e.some===g?e.some(t,r):(T(e,function(e,s,o){if(i||(i=t.call(r,e,s,o)))return n}),!!i)};x.contains=x.include=function(e,t){return e==null?!1:y&&e.indexOf===y?e.indexOf(t)!=-1:C(e,function(e){return e===t})},x.invoke=function(e,t){var n=u.call(arguments,2),r=x.isFunction(t);return x.map(e,function(e){return(r?t:e[t]).apply(e,n)})},x.pluck=function(e,t){return x.map(e,function(e){return e[t]})},x.where=function(e,t,n){return x.isEmpty(t)?n?null:[]:x[n?"find":"filter"](e,function(e){for(var n in t)if(t[n]!==e[n])return!1;return!0})},x.findWhere=function(e,t){return x.where(e,t,!0)},x.max=function(e,t,n){if(!t&&x.isArray(e)&&e[0]===+e[0]&&e.length<65535)return Math.max.apply(Math,e);if(!t&&x.isEmpty(e))return-Infinity;var r={computed:-Infinity,value:-Infinity};return T(e,function(e,i,s){var o=t?t.call(n,e,i,s):e;o>=r.computed&&(r={value:e,computed:o})}),r.value},x.min=function(e,t,n){if(!t&&x.isArray(e)&&e[0]===+e[0]&&e.length<65535)return Math.min.apply(Math,e);if(!t&&x.isEmpty(e))return Infinity;var r={computed:Infinity,value:Infinity};return T(e,function(e,i,s){var o=t?t.call(n,e,i,s):e;o<r.computed&&(r={value:e,computed:o})}),r.value},x.shuffle=function(e){var t,n=0,r=[];return T(e,function(e){t=x.random(n++),r[n-1]=r[t],r[t]=e}),r};var k=function(e){return x.isFunction(e)?e:function(t){return t[e]}};x.sortBy=function(e,t,n){var r=k(t);return x.pluck(x.map(e,function(e,t,i){return{value:e,index:t,criteria:r.call(n,e,t,i)}}).sort(function(e,t){var n=e.criteria,r=t.criteria;if(n!==r){if(n>r||n===void 0)return 1;if(n<r||r===void 0)return-1}return e.index<t.index?-1:1}),"value")};var L=function(e,t,n,r){var i={},s=k(t||x.identity);return T(e,function(t,o){var u=s.call(n,t,o,e);r(i,u,t)}),i};x.groupBy=function(e,t,n){return L(e,t,n,function(e,t,n){(x.has(e,t)?e[t]:e[t]=[]).push(n)})},x.countBy=function(e,t,n){return L(e,t,n,function(e,t){x.has(e,t)||(e[t]=0),e[t]++})},x.sortedIndex=function(e,t,n,r){n=n==null?x.identity:k(n);var i=n.call(r,t),s=0,o=e.length;while(s<o){var u=s+o>>>1;n.call(r,e[u])<i?s=u+1:o=u}return s},x.toArray=function(e){return e?x.isArray(e)?u.call(e):e.length===+e.length?x.map(e,x.identity):x.values(e):[]},x.size=function(e){return e==null?0:e.length===+e.length?e.length:x.keys(e).length},x.first=x.head=x.take=function(e,t,n){return e==null?void 0:t!=null&&!n?u.call(e,0,t):e[0]},x.initial=function(e,t,n){return u.call(e,0,e.length-(t==null||n?1:t))},x.last=function(e,t,n){return e==null?void 0:t!=null&&!n?u.call(e,Math.max(e.length-t,0)):e[e.length-1]},x.rest=x.tail=x.drop=function(e,t,n){return u.call(e,t==null||n?1:t)},x.compact=function(e){return x.filter(e,x.identity)};var A=function(e,t,n){return T(e,function(e){x.isArray(e)?t?o.apply(n,e):A(e,t,n):n.push(e)}),n};x.flatten=function(e,t){return A(e,t,[])},x.without=function(e){return x.difference(e,u.call(arguments,1))},x.uniq=x.unique=function(e,t,n,r){x.isFunction(t)&&(r=n,n=t,t=!1);var i=n?x.map(e,n,r):e,s=[],o=[];return T(i,function(n,r){if(t?!r||o[o.length-1]!==n:!x.contains(o,n))o.push(n),s.push(e[r])}),s},x.union=function(){return x.uniq(a.apply(r,arguments))},x.intersection=function(e){var t=u.call(arguments,1);return x.filter(x.uniq(e),function(e){return x.every(t,function(t){return x.indexOf(t,e)>=0})})},x.difference=function(e){var t=a.apply(r,u.call(arguments,1));return x.filter(e,function(e){return!x.contains(t,e)})},x.zip=function(){var e=u.call(arguments),t=x.max(x.pluck(e,"length")),n=new Array(t);for(var r=0;r<t;r++)n[r]=x.pluck(e,""+r);return n},x.object=function(e,t){if(e==null)return{};var n={};for(var r=0,i=e.length;r<i;r++)t?n[e[r]]=t[r]:n[e[r][0]]=e[r][1];return n},x.indexOf=function(e,t,n){if(e==null)return-1;var r=0,i=e.length;if(n){if(typeof n!="number")return r=x.sortedIndex(e,t),e[r]===t?r:-1;r=n<0?Math.max(0,i+n):n}if(y&&e.indexOf===y)return e.indexOf(t,n);for(;r<i;r++)if(e[r]===t)return r;return-1},x.lastIndexOf=function(e,t,n){if(e==null)return-1;var r=n!=null;if(b&&e.lastIndexOf===b)return r?e.lastIndexOf(t,n):e.lastIndexOf(t);var i=r?n:e.length;while(i--)if(e[i]===t)return i;return-1},x.range=function(e,t,n){arguments.length<=1&&(t=e||0,e=0),n=arguments[2]||1;var r=Math.max(Math.ceil((t-e)/n),0),i=0,s=new Array(r);while(i<r)s[i++]=e,e+=n;return s},x.bind=function(e,t){if(e.bind===S&&S)return S.apply(e,u.call(arguments,1));var n=u.call(arguments,2);return function(){return e.apply(t,n.concat(u.call(arguments)))}},x.partial=function(e){var t=u.call(arguments,1);return function(){return e.apply(this,t.concat(u.call(arguments)))}},x.bindAll=function(e){var t=u.call(arguments,1);return t.length===0&&(t=x.functions(e)),T(t,function(t){e[t]=x.bind(e[t],e)}),e},x.memoize=function(e,t){var n={};return t||(t=x.identity),function(){var r=t.apply(this,arguments);return x.has(n,r)?n[r]:n[r]=e.apply(this,arguments)}},x.delay=function(e,t){var n=u.call(arguments,2);return setTimeout(function(){return e.apply(null,n)},t)},x.defer=function(e){return x.delay.apply(x,[e,1].concat(u.call(arguments,1)))},x.throttle=function(e,t){var n,r,i,s,o=0,u=function(){o=new Date,i=null,s=e.apply(n,r)};return function(){var a=new Date,f=t-(a-o);return n=this,r=arguments,f<=0?(clearTimeout(i),i=null,o=a,s=e.apply(n,r)):i||(i=setTimeout(u,f)),s}},x.debounce=function(e,t,n){var r,i;return function(){var s=this,o=arguments,u=function(){r=null,n||(i=e.apply(s,o))},a=n&&!r;return clearTimeout(r),r=setTimeout(u,t),a&&(i=e.apply(s,o)),i}},x.once=function(e){var t=!1,n;return function(){return t?n:(t=!0,n=e.apply(this,arguments),e=null,n)}},x.wrap=function(e,t){return function(){var n=[e];return o.apply(n,arguments),t.apply(this,n)}},x.compose=function(){var e=arguments;return function(){var t=arguments;for(var n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},x.after=function(e,t){return e<=0?t():function(){if(--e<1)return t.apply(this,arguments)}},x.keys=E||function(e){if(e!==Object(e))throw new TypeError("Invalid object");var t=[];for(var n in e)x.has(e,n)&&(t[t.length]=n);return t},x.values=function(e){var t=[];for(var n in e)x.has(e,n)&&t.push(e[n]);return t},x.pairs=function(e){var t=[];for(var n in e)x.has(e,n)&&t.push([n,e[n]]);return t},x.invert=function(e){var t={};for(var n in e)x.has(e,n)&&(t[e[n]]=n);return t},x.functions=x.methods=function(e){var t=[];for(var n in e)x.isFunction(e[n])&&t.push(n);return t.sort()},x.extend=function(e){return T(u.call(arguments,1),function(t){if(t)for(var n in t)e[n]=t[n]}),e},x.pick=function(e){var t={},n=a.apply(r,u.call(arguments,1));return T(n,function(n){n in e&&(t[n]=e[n])}),t},x.omit=function(e){var t={},n=a.apply(r,u.call(arguments,1));for(var i in e)x.contains(n,i)||(t[i]=e[i]);return t},x.defaults=function(e){return T(u.call(arguments,1),function(t){if(t)for(var n in t)e[n]==null&&(e[n]=t[n])}),e},x.clone=function(e){return x.isObject(e)?x.isArray(e)?e.slice():x.extend({},e):e},x.tap=function(e,t){return t(e),e};var O=function(e,t,n,r){if(e===t)return e!==0||1/e==1/t;if(e==null||t==null)return e===t;e instanceof x&&(e=e._wrapped),t instanceof x&&(t=t._wrapped);var i=f.call(e);if(i!=f.call(t))return!1;switch(i){case"[object String]":return e==String(t);case"[object Number]":return e!=+e?t!=+t:e==0?1/e==1/t:e==+t;case"[object Date]":case"[object Boolean]":return+e==+t;case"[object RegExp]":return e.source==t.source&&e.global==t.global&&e.multiline==t.multiline&&e.ignoreCase==t.ignoreCase}if(typeof e!="object"||typeof t!="object")return!1;var s=n.length;while(s--)if(n[s]==e)return r[s]==t;n.push(e),r.push(t);var o=0,u=!0;if(i=="[object Array]"){o=e.length,u=o==t.length;if(u)while(o--)if(!(u=O(e[o],t[o],n,r)))break}else{var a=e.constructor,l=t.constructor;if(a!==l&&!(x.isFunction(a)&&a instanceof a&&x.isFunction(l)&&l instanceof l))return!1;for(var c in e)if(x.has(e,c)){o++;if(!(u=x.has(t,c)&&O(e[c],t[c],n,r)))break}if(u){for(c in t)if(x.has(t,c)&&!(o--))break;u=!o}}return n.pop(),r.pop(),u};x.isEqual=function(e,t){return O(e,t,[],[])},x.isEmpty=function(e){if(e==null)return!0;if(x.isArray(e)||x.isString(e))return e.length===0;for(var t in e)if(x.has(e,t))return!1;return!0},x.isElement=function(e){return!!e&&e.nodeType===1},x.isArray=w||function(e){return f.call(e)=="[object Array]"},x.isObject=function(e){return e===Object(e)},T(["Arguments","Function","String","Number","Date","RegExp"],function(e){x["is"+e]=function(t){return f.call(t)=="[object "+e+"]"}}),x.isArguments(arguments)||(x.isArguments=function(e){return!!e&&!!x.has(e,"callee")}),typeof /./!="function"&&(x.isFunction=function(e){return typeof e=="function"}),x.isFinite=function(e){return isFinite(e)&&!isNaN(parseFloat(e))},x.isNaN=function(e){return x.isNumber(e)&&e!=+e},x.isBoolean=function(e){return e===!0||e===!1||f.call(e)=="[object Boolean]"},x.isNull=function(e){return e===null},x.isUndefined=function(e){return e===void 0},x.has=function(e,t){return l.call(e,t)},x.noConflict=function(){return e._=t,this},x.identity=function(e){return e},x.times=function(e,t,n){var r=Array(e);for(var i=0;i<e;i++)r[i]=t.call(n,i);return r},x.random=function(e,t){return t==null&&(t=e,e=0),e+Math.floor(Math.random()*(t-e+1))};var M={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};M.unescape=x.invert(M.escape);var _={escape:new RegExp("["+x.keys(M.escape).join("")+"]","g"),unescape:new RegExp("("+x.keys(M.unescape).join("|")+")","g")};x.each(["escape","unescape"],function(e){x[e]=function(t){return t==null?"":(""+t).replace(_[e],function(t){return M[e][t]})}}),x.result=function(e,t){if(e==null)return null;var n=e[t];return x.isFunction(n)?n.call(e):n},x.mixin=function(e){T(x.functions(e),function(t){var n=x[t]=e[t];x.prototype[t]=function(){var e=[this._wrapped];return o.apply(e,arguments),j.call(this,n.apply(x,e))}})};var D=0;x.uniqueId=function(e){var t=++D+"";return e?e+t:t},x.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var P=/(.)^/,H={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},B=/\\|'|\r|\n|\t|\u2028|\u2029/g;x.template=function(e,t,n){var r;n=x.defaults({},n,x.templateSettings);var i=new RegExp([(n.escape||P).source,(n.interpolate||P).source,(n.evaluate||P).source].join("|")+"|$","g"),s=0,o="__p+='";e.replace(i,function(t,n,r,i,u){return o+=e.slice(s,u).replace(B,function(e){return"\\"+H[e]}),n&&(o+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'"),r&&(o+="'+\n((__t=("+r+"))==null?'':__t)+\n'"),i&&(o+="';\n"+i+"\n__p+='"),s=u+t.length,t}),o+="';\n",n.variable||(o="with(obj||{}){\n"+o+"}\n"),o="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+o+"return __p;\n";try{r=new Function(n.variable||"obj","_",o)}catch(u){throw u.source=o,u}if(t)return r(t,x);var a=function(e){return r.call(this,e,x)};return a.source="function("+(n.variable||"obj")+"){\n"+o+"}",a},x.chain=function(e){return x(e).chain()};var j=function(e){return this._chain?x(e).chain():e};x.mixin(x),T(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var t=r[e];x.prototype[e]=function(){var n=this._wrapped;return t.apply(n,arguments),(e=="shift"||e=="splice")&&n.length===0&&delete n[0],j.call(this,n)}}),T(["concat","join","slice"],function(e){var t=r[e];x.prototype[e]=function(){return j.call(this,t.apply(this._wrapped,arguments))}}),x.extend(x.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);
define("underscore", (function (global) {
    return function () {
        var ret, fn;
        return ret || global._;
    };
}(this)));

//     (c) 2010-2013 Jeremy Ashkenas, DocumentCloud Inc.
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

(function(){var e=this,t=e.Backbone,n=[],r=n.push,i=n.slice,s=n.splice,o;typeof exports!="undefined"?o=exports:o=e.Backbone={},o.VERSION="1.0.0";var u=e._;!u&&typeof require!="undefined"&&(u=require("underscore")),o.$=e.jQuery||e.Zepto||e.ender||e.$,o.noConflict=function(){return e.Backbone=t,this},o.emulateHTTP=!1,o.emulateJSON=!1;var a=o.Events={on:function(e,t,n){if(!l(this,"on",e,[t,n])||!t)return this;this._events||(this._events={});var r=this._events[e]||(this._events[e]=[]);return r.push({callback:t,context:n,ctx:n||this}),this},once:function(e,t,n){if(!l(this,"once",e,[t,n])||!t)return this;var r=this,i=u.once(function(){r.off(e,i),t.apply(this,arguments)});return i._callback=t,this.on(e,i,n)},off:function(e,t,n){var r,i,s,o,a,f,c,h;if(!this._events||!l(this,"off",e,[t,n]))return this;if(!e&&!t&&!n)return this._events={},this;o=e?[e]:u.keys(this._events);for(a=0,f=o.length;a<f;a++){e=o[a];if(s=this._events[e]){this._events[e]=r=[];if(t||n)for(c=0,h=s.length;c<h;c++)i=s[c],(t&&t!==i.callback&&t!==i.callback._callback||n&&n!==i.context)&&r.push(i);r.length||delete this._events[e]}}return this},trigger:function(e){if(!this._events)return this;var t=i.call(arguments,1);if(!l(this,"trigger",e,t))return this;var n=this._events[e],r=this._events.all;return n&&c(n,t),r&&c(r,arguments),this},stopListening:function(e,t,n){var r=this._listeners;if(!r)return this;var i=!t&&!n;typeof t=="object"&&(n=this),e&&((r={})[e._listenerId]=e);for(var s in r)r[s].off(t,n,this),i&&delete this._listeners[s];return this}},f=/\s+/,l=function(e,t,n,r){if(!n)return!0;if(typeof n=="object"){for(var i in n)e[t].apply(e,[i,n[i]].concat(r));return!1}if(f.test(n)){var s=n.split(f);for(var o=0,u=s.length;o<u;o++)e[t].apply(e,[s[o]].concat(r));return!1}return!0},c=function(e,t){var n,r=-1,i=e.length,s=t[0],o=t[1],u=t[2];switch(t.length){case 0:while(++r<i)(n=e[r]).callback.call(n.ctx);return;case 1:while(++r<i)(n=e[r]).callback.call(n.ctx,s);return;case 2:while(++r<i)(n=e[r]).callback.call(n.ctx,s,o);return;case 3:while(++r<i)(n=e[r]).callback.call(n.ctx,s,o,u);return;default:while(++r<i)(n=e[r]).callback.apply(n.ctx,t)}},h={listenTo:"on",listenToOnce:"once"};u.each(h,function(e,t){a[t]=function(t,n,r){var i=this._listeners||(this._listeners={}),s=t._listenerId||(t._listenerId=u.uniqueId("l"));return i[s]=t,typeof n=="object"&&(r=this),t[e](n,r,this),this}}),a.bind=a.on,a.unbind=a.off,u.extend(o,a);var p=o.Model=function(e,t){var n,r=e||{};t||(t={}),this.cid=u.uniqueId("c"),this.attributes={},u.extend(this,u.pick(t,d)),t.parse&&(r=this.parse(r,t)||{});if(n=u.result(this,"defaults"))r=u.defaults({},r,n);this.set(r,t),this.changed={},this.initialize.apply(this,arguments)},d=["url","urlRoot","collection"];u.extend(p.prototype,a,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(e){return u.clone(this.attributes)},sync:function(){return o.sync.apply(this,arguments)},get:function(e){return this.attributes[e]},escape:function(e){return u.escape(this.get(e))},has:function(e){return this.get(e)!=null},set:function(e,t,n){var r,i,s,o,a,f,l,c;if(e==null)return this;typeof e=="object"?(i=e,n=t):(i={})[e]=t,n||(n={});if(!this._validate(i,n))return!1;s=n.unset,a=n.silent,o=[],f=this._changing,this._changing=!0,f||(this._previousAttributes=u.clone(this.attributes),this.changed={}),c=this.attributes,l=this._previousAttributes,this.idAttribute in i&&(this.id=i[this.idAttribute]);for(r in i)t=i[r],u.isEqual(c[r],t)||o.push(r),u.isEqual(l[r],t)?delete this.changed[r]:this.changed[r]=t,s?delete c[r]:c[r]=t;if(!a){o.length&&(this._pending=!0);for(var h=0,p=o.length;h<p;h++)this.trigger("change:"+o[h],this,c[o[h]],n)}if(f)return this;if(!a)while(this._pending)this._pending=!1,this.trigger("change",this,n);return this._pending=!1,this._changing=!1,this},unset:function(e,t){return this.set(e,void 0,u.extend({},t,{unset:!0}))},clear:function(e){var t={};for(var n in this.attributes)t[n]=void 0;return this.set(t,u.extend({},e,{unset:!0}))},hasChanged:function(e){return e==null?!u.isEmpty(this.changed):u.has(this.changed,e)},changedAttributes:function(e){if(!e)return this.hasChanged()?u.clone(this.changed):!1;var t,n=!1,r=this._changing?this._previousAttributes:this.attributes;for(var i in e){if(u.isEqual(r[i],t=e[i]))continue;(n||(n={}))[i]=t}return n},previous:function(e){return e==null||!this._previousAttributes?null:this._previousAttributes[e]},previousAttributes:function(){return u.clone(this._previousAttributes)},fetch:function(e){e=e?u.clone(e):{},e.parse===void 0&&(e.parse=!0);var t=this,n=e.success;return e.success=function(r){if(!t.set(t.parse(r,e),e))return!1;n&&n(t,r,e),t.trigger("sync",t,r,e)},j(this,e),this.sync("read",this,e)},save:function(e,t,n){var r,i,s,o=this.attributes;e==null||typeof e=="object"?(r=e,n=t):(r={})[e]=t;if(r&&(!n||!n.wait)&&!this.set(r,n))return!1;n=u.extend({validate:!0},n);if(!this._validate(r,n))return!1;r&&n.wait&&(this.attributes=u.extend({},o,r)),n.parse===void 0&&(n.parse=!0);var a=this,f=n.success;return n.success=function(e){a.attributes=o;var t=a.parse(e,n);n.wait&&(t=u.extend(r||{},t));if(u.isObject(t)&&!a.set(t,n))return!1;f&&f(a,e,n),a.trigger("sync",a,e,n)},j(this,n),i=this.isNew()?"create":n.patch?"patch":"update",i==="patch"&&(n.attrs=r),s=this.sync(i,this,n),r&&n.wait&&(this.attributes=o),s},destroy:function(e){e=e?u.clone(e):{};var t=this,n=e.success,r=function(){t.trigger("destroy",t,t.collection,e)};e.success=function(i){(e.wait||t.isNew())&&r(),n&&n(t,i,e),t.isNew()||t.trigger("sync",t,i,e)};if(this.isNew())return e.success(),!1;j(this,e);var i=this.sync("delete",this,e);return e.wait||r(),i},url:function(){var e=u.result(this,"urlRoot")||u.result(this.collection,"url")||B();return this.isNew()?e:e+(e.charAt(e.length-1)==="/"?"":"/")+encodeURIComponent(this.id)},parse:function(e,t){return e},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return this.id==null},isValid:function(e){return this._validate({},u.extend(e||{},{validate:!0}))},_validate:function(e,t){if(!t.validate||!this.validate)return!0;e=u.extend({},this.attributes,e);var n=this.validationError=this.validate(e,t)||null;return n?(this.trigger("invalid",this,n,u.extend(t||{},{validationError:n})),!1):!0}});var v=["keys","values","pairs","invert","pick","omit"];u.each(v,function(e){p.prototype[e]=function(){var t=i.call(arguments);return t.unshift(this.attributes),u[e].apply(u,t)}});var m=o.Collection=function(e,t){t||(t={}),t.url&&(this.url=t.url),t.model&&(this.model=t.model),t.comparator!==void 0&&(this.comparator=t.comparator),this._reset(),this.initialize.apply(this,arguments),e&&this.reset(e,u.extend({silent:!0},t))},g={add:!0,remove:!0,merge:!0},y={add:!0,merge:!1,remove:!1};u.extend(m.prototype,a,{model:p,initialize:function(){},toJSON:function(e){return this.map(function(t){return t.toJSON(e)})},sync:function(){return o.sync.apply(this,arguments)},add:function(e,t){return this.set(e,u.defaults(t||{},y))},remove:function(e,t){e=u.isArray(e)?e.slice():[e],t||(t={});var n,r,i,s;for(n=0,r=e.length;n<r;n++){s=this.get(e[n]);if(!s)continue;delete this._byId[s.id],delete this._byId[s.cid],i=this.indexOf(s),this.models.splice(i,1),this.length--,t.silent||(t.index=i,s.trigger("remove",s,this,t)),this._removeReference(s)}return this},set:function(e,t){t=u.defaults(t||{},g),t.parse&&(e=this.parse(e,t)),u.isArray(e)||(e=e?[e]:[]);var n,i,o,a,f,l,c=t.at,h=this.comparator&&c==null&&t.sort!==!1,p=u.isString(this.comparator)?this.comparator:null,d=[],v=[],m={};for(n=0,i=e.length;n<i;n++){if(!(o=this._prepareModel(e[n],t)))continue;(f=this.get(o))?(t.remove&&(m[f.cid]=!0),t.merge&&(f.set(o.attributes,t),h&&!l&&f.hasChanged(p)&&(l=!0))):t.add&&(d.push(o),o.on("all",this._onModelEvent,this),this._byId[o.cid]=o,o.id!=null&&(this._byId[o.id]=o))}if(t.remove){for(n=0,i=this.length;n<i;++n)m[(o=this.models[n]).cid]||v.push(o);v.length&&this.remove(v,t)}d.length&&(h&&(l=!0),this.length+=d.length,c!=null?s.apply(this.models,[c,0].concat(d)):r.apply(this.models,d)),l&&this.sort({silent:!0});if(t.silent)return this;for(n=0,i=d.length;n<i;n++)(o=d[n]).trigger("add",o,this,t);return l&&this.trigger("sort",this,t),this},reset:function(e,t){t||(t={});for(var n=0,r=this.models.length;n<r;n++)this._removeReference(this.models[n]);return t.previousModels=this.models,this._reset(),this.add(e,u.extend({silent:!0},t)),t.silent||this.trigger("reset",this,t),this},push:function(e,t){return e=this._prepareModel(e,t),this.add(e,u.extend({at:this.length},t)),e},pop:function(e){var t=this.at(this.length-1);return this.remove(t,e),t},unshift:function(e,t){return e=this._prepareModel(e,t),this.add(e,u.extend({at:0},t)),e},shift:function(e){var t=this.at(0);return this.remove(t,e),t},slice:function(e,t){return this.models.slice(e,t)},get:function(e){return e==null?void 0:this._byId[e.id!=null?e.id:e.cid||e]},at:function(e){return this.models[e]},where:function(e,t){return u.isEmpty(e)?t?void 0:[]:this[t?"find":"filter"](function(t){for(var n in e)if(e[n]!==t.get(n))return!1;return!0})},findWhere:function(e){return this.where(e,!0)},sort:function(e){if(!this.comparator)throw new Error("Cannot sort a set without a comparator");return e||(e={}),u.isString(this.comparator)||this.comparator.length===1?this.models=this.sortBy(this.comparator,this):this.models.sort(u.bind(this.comparator,this)),e.silent||this.trigger("sort",this,e),this},sortedIndex:function(e,t,n){t||(t=this.comparator);var r=u.isFunction(t)?t:function(e){return e.get(t)};return u.sortedIndex(this.models,e,r,n)},pluck:function(e){return u.invoke(this.models,"get",e)},fetch:function(e){e=e?u.clone(e):{},e.parse===void 0&&(e.parse=!0);var t=e.success,n=this;return e.success=function(r){var i=e.reset?"reset":"set";n[i](r,e),t&&t(n,r,e),n.trigger("sync",n,r,e)},j(this,e),this.sync("read",this,e)},create:function(e,t){t=t?u.clone(t):{};if(!(e=this._prepareModel(e,t)))return!1;t.wait||this.add(e,t);var n=this,r=t.success;return t.success=function(i){t.wait&&n.add(e,t),r&&r(e,i,t)},e.save(null,t),e},parse:function(e,t){return e},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0,this.models=[],this._byId={}},_prepareModel:function(e,t){if(e instanceof p)return e.collection||(e.collection=this),e;t||(t={}),t.collection=this;var n=new this.model(e,t);return n._validate(e,t)?n:(this.trigger("invalid",this,e,t),!1)},_removeReference:function(e){this===e.collection&&delete e.collection,e.off("all",this._onModelEvent,this)},_onModelEvent:function(e,t,n,r){if((e==="add"||e==="remove")&&n!==this)return;e==="destroy"&&this.remove(t,r),t&&e==="change:"+t.idAttribute&&(delete this._byId[t.previous(t.idAttribute)],t.id!=null&&(this._byId[t.id]=t)),this.trigger.apply(this,arguments)}});var b=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","indexOf","shuffle","lastIndexOf","isEmpty","chain"];u.each(b,function(e){m.prototype[e]=function(){var t=i.call(arguments);return t.unshift(this.models),u[e].apply(u,t)}});var w=["groupBy","countBy","sortBy"];u.each(w,function(e){m.prototype[e]=function(t,n){var r=u.isFunction(t)?t:function(e){return e.get(t)};return u[e](this.models,r,n)}});var E=o.View=function(e){this.cid=u.uniqueId("view"),this._configure(e||{}),this._ensureElement(),this.initialize.apply(this,arguments),this.delegateEvents()},S=/^(\S+)\s*(.*)$/,x=["model","collection","el","id","attributes","className","tagName","events"];u.extend(E.prototype,a,{tagName:"div",$:function(e){return this.$el.find(e)},initialize:function(){},render:function(){return this},remove:function(){return this.$el.remove(),this.stopListening(),this},setElement:function(e,t){return this.$el&&this.undelegateEvents(),this.$el=e instanceof o.$?e:o.$(e),this.el=this.$el[0],t!==!1&&this.delegateEvents(),this},delegateEvents:function(e){if(!e&&!(e=u.result(this,"events")))return this;this.undelegateEvents();for(var t in e){var n=e[t];u.isFunction(n)||(n=this[e[t]]);if(!n)continue;var r=t.match(S),i=r[1],s=r[2];n=u.bind(n,this),i+=".delegateEvents"+this.cid,s===""?this.$el.on(i,n):this.$el.on(i,s,n)}return this},undelegateEvents:function(){return this.$el.off(".delegateEvents"+this.cid),this},_configure:function(e){this.options&&(e=u.extend({},u.result(this,"options"),e)),u.extend(this,u.pick(e,x)),this.options=e},_ensureElement:function(){if(!this.el){var e=u.extend({},u.result(this,"attributes"));this.id&&(e.id=u.result(this,"id")),this.className&&(e["class"]=u.result(this,"className"));var t=o.$("<"+u.result(this,"tagName")+">").attr(e);this.setElement(t,!1)}else this.setElement(u.result(this,"el"),!1)}}),o.sync=function(e,t,n){var r=T[e];u.defaults(n||(n={}),{emulateHTTP:o.emulateHTTP,emulateJSON:o.emulateJSON});var i={type:r,dataType:"json"};n.url||(i.url=u.result(t,"url")||B()),n.data==null&&t&&(e==="create"||e==="update"||e==="patch")&&(i.contentType="application/json",i.data=JSON.stringify(n.attrs||t.toJSON(n))),n.emulateJSON&&(i.contentType="application/x-www-form-urlencoded",i.data=i.data?{model:i.data}:{});if(n.emulateHTTP&&(r==="PUT"||r==="DELETE"||r==="PATCH")){i.type="POST",n.emulateJSON&&(i.data._method=r);var s=n.beforeSend;n.beforeSend=function(e){e.setRequestHeader("X-HTTP-Method-Override",r);if(s)return s.apply(this,arguments)}}i.type!=="GET"&&!n.emulateJSON&&(i.processData=!1),i.type==="PATCH"&&window.ActiveXObject&&(!window.external||!window.external.msActiveXFilteringEnabled)&&(i.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")});var a=n.xhr=o.ajax(u.extend(i,n));return t.trigger("request",t,a,n),a};var T={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};o.ajax=function(){return o.$.ajax.apply(o.$,arguments)};var N=o.Router=function(e){e||(e={}),e.routes&&(this.routes=e.routes),this._bindRoutes(),this.initialize.apply(this,arguments)},C=/\((.*?)\)/g,k=/(\(\?)?:\w+/g,L=/\*\w+/g,A=/[\-{}\[\]+?.,\\\^$|#\s]/g;u.extend(N.prototype,a,{initialize:function(){},route:function(e,t,n){u.isRegExp(e)||(e=this._routeToRegExp(e)),u.isFunction(t)&&(n=t,t=""),n||(n=this[t]);var r=this;return o.history.route(e,function(i){var s=r._extractParameters(e,i);n&&n.apply(r,s),r.trigger.apply(r,["route:"+t].concat(s)),r.trigger("route",t,s),o.history.trigger("route",r,t,s)}),this},navigate:function(e,t){return o.history.navigate(e,t),this},_bindRoutes:function(){if(!this.routes)return;this.routes=u.result(this,"routes");var e,t=u.keys(this.routes);while((e=t.pop())!=null)this.route(e,this.routes[e])},_routeToRegExp:function(e){return e=e.replace(A,"\\$&").replace(C,"(?:$1)?").replace(k,function(e,t){return t?e:"([^/]+)"}).replace(L,"(.*?)"),new RegExp("^"+e+"$")},_extractParameters:function(e,t){var n=e.exec(t).slice(1);return u.map(n,function(e){return e?decodeURIComponent(e):null})}});var O=o.History=function(){this.handlers=[],u.bindAll(this,"checkUrl"),typeof window!="undefined"&&(this.location=window.location,this.history=window.history)},M=/^[#\/]|\s+$/g,_=/^\/+|\/+$/g,D=/msie [\w.]+/,P=/\/$/;O.started=!1,u.extend(O.prototype,a,{interval:50,getHash:function(e){var t=(e||this).location.href.match(/#(.*)$/);return t?t[1]:""},getFragment:function(e,t){if(e==null)if(this._hasPushState||!this._wantsHashChange||t){e=this.location.pathname;var n=this.root.replace(P,"");e.indexOf(n)||(e=e.substr(n.length))}else e=this.getHash();return e.replace(M,"")},start:function(e){if(O.started)throw new Error("Backbone.history has already been started");O.started=!0,this.options=u.extend({},{root:"/"},this.options,e),this.root=this.options.root,this._wantsHashChange=this.options.hashChange!==!1,this._wantsPushState=!!this.options.pushState,this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);var t=this.getFragment(),n=document.documentMode,r=D.exec(navigator.userAgent.toLowerCase())&&(!n||n<=7);this.root=("/"+this.root+"/").replace(_,"/"),r&&this._wantsHashChange&&(this.iframe=o.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow,this.navigate(t)),this._hasPushState?o.$(window).on("popstate",this.checkUrl):this._wantsHashChange&&"onhashchange"in window&&!r?o.$(window).on("hashchange",this.checkUrl):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval)),this.fragment=t;var i=this.location,s=i.pathname.replace(/[^\/]$/,"$&/")===this.root;if(this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!s)return this.fragment=this.getFragment(null,!0),this.location.replace(this.root+this.location.search+"#"+this.fragment),!0;this._wantsPushState&&this._hasPushState&&s&&i.hash&&(this.fragment=this.getHash().replace(M,""),this.history.replaceState({},document.title,this.root+this.fragment+i.search));if(!this.options.silent)return this.loadUrl()},stop:function(){o.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl),clearInterval(this._checkUrlInterval),O.started=!1},route:function(e,t){this.handlers.unshift({route:e,callback:t})},checkUrl:function(e){var t=this.getFragment();t===this.fragment&&this.iframe&&(t=this.getFragment(this.getHash(this.iframe)));if(t===this.fragment)return!1;this.iframe&&this.navigate(t),this.loadUrl()||this.loadUrl(this.getHash())},loadUrl:function(e){var t=this.fragment=this.getFragment(e),n=u.any(this.handlers,function(e){if(e.route.test(t))return e.callback(t),!0});return n},navigate:function(e,t){if(!O.started)return!1;if(!t||t===!0)t={trigger:t};e=this.getFragment(e||"");if(this.fragment===e)return;this.fragment=e;var n=this.root+e;if(this._hasPushState)this.history[t.replace?"replaceState":"pushState"]({},document.title,n);else{if(!this._wantsHashChange)return this.location.assign(n);this._updateHash(this.location,e,t.replace),this.iframe&&e!==this.getFragment(this.getHash(this.iframe))&&(t.replace||this.iframe.document.open().close(),this._updateHash(this.iframe.location,e,t.replace))}t.trigger&&this.loadUrl(e)},_updateHash:function(e,t,n){if(n){var r=e.href.replace(/(javascript:|#).*$/,"");e.replace(r+"#"+t)}else e.hash="#"+t}}),o.history=new O;var H=function(e,t){var n=this,r;e&&u.has(e,"constructor")?r=e.constructor:r=function(){return n.apply(this,arguments)},u.extend(r,n,t);var i=function(){this.constructor=r};return i.prototype=n.prototype,r.prototype=new i,e&&u.extend(r.prototype,e),r.__super__=n.prototype,r};p.extend=m.extend=N.extend=E.extend=O.extend=H;var B=function(){throw new Error('A "url" property or function must be specified')},j=function(e,t){var n=t.error;t.error=function(r){n&&n(e,r,t),e.trigger("error",e,r,t)}}}).call(this);
define("backbone", ["jquery","underscore"], (function (global) {
    return function () {
        var ret, fn;
        return ret || global.Backbone;
    };
}(this)));

/*!    SWFObject v2.3.20120118 <http://github.com/swfobject/swfobject>
    is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
*/

(function(e,t){typeof module!="undefined"?module.exports=t():typeof define=="function"&&typeof define.amd!="undefined"?define('swfobject',t):e.swfobject=t()})(this,function(){function e(){if(z||!document.getElementsByTagName("body")[0])return;try{var e,t=g("span");t.style.display="none",e=_.getElementsByTagName("body")[0].appendChild(t),e.parentNode.removeChild(e),e=null,t=null}catch(n){return}z=!0;var r=H.length;for(var i=0;i<r;i++)H[i]()}function t(e){z?e():H[H.length]=e}function n(e){if(typeof M.addEventListener!=T)M.addEventListener("load",e,!1);else if(typeof _.addEventListener!=T)_.addEventListener("load",e,!1);else if(typeof M.attachEvent!=T)b(M,"onload",e);else if(typeof M.onload=="function"){var t=M.onload;M.onload=function(){t(),e()}}else M.onload=e}function r(){var e=_.getElementsByTagName("body")[0],t=g(N);t.setAttribute("style","visibility: hidden;"),t.setAttribute("type",L);var n=e.appendChild(t);if(n){var r=0;(function s(){if(typeof n.GetVariable!=T)try{var o=n.GetVariable("$version");o&&(o=o.split(" ")[1].split(","),K.pv=[y(o[0]),y(o[1]),y(o[2])])}catch(u){K.pv=[8,0,0]}else if(r<10){r++,setTimeout(s,10);return}e.removeChild(t),n=null,i()})()}else i()}function i(){var e=B.length;if(e>0)for(var t=0;t<e;t++){var n=B[t].id,r=B[t].callbackFn,i={success:!1,id:n};if(K.pv[0]>0){var f=m(n);if(f)if(w(B[t].swfVersion)&&!(K.wk&&K.wk<312))S(n,!0),r&&(i.success=!0,i.ref=s(n),i.id=n,r(i));else if(B[t].expressInstall&&o()){var l={};l.data=B[t].expressInstall,l.width=f.getAttribute("width")||"0",l.height=f.getAttribute("height")||"0",f.getAttribute("class")&&(l.styleclass=f.getAttribute("class")),f.getAttribute("align")&&(l.align=f.getAttribute("align"));var c={},h=f.getElementsByTagName("param"),p=h.length;for(var d=0;d<p;d++)h[d].getAttribute("name").toLowerCase()!="movie"&&(c[h[d].getAttribute("name")]=h[d].getAttribute("value"));u(l,c,n,r)}else a(f),r&&r(i)}else{S(n,!0);if(r){var v=s(n);v&&typeof v.SetVariable!=T&&(i.success=!0,i.ref=v,i.id=v.id),r(i)}}}}function s(e){var t=null,n=m(e);return n&&n.nodeName.toUpperCase()==="OBJECT"&&(typeof n.SetVariable!==T?t=n:t=n.getElementsByTagName(N)[0]||n),t}function o(){return!W&&w("6.0.65")&&(K.win||K.mac)&&!(K.wk&&K.wk<312)}function u(e,t,n,r){var i=m(n);n=v(n),W=!0,R=r||null,U={success:!1,id:n};if(i){i.nodeName.toUpperCase()=="OBJECT"?(I=f(i),q=null):(I=i,q=n),e.id=A;if(typeof e.width==T||!/%$/.test(e.width)&&y(e.width)<310)e.width="310";if(typeof e.height==T||!/%$/.test(e.height)&&y(e.height)<137)e.height="137";_.title=_.title.slice(0,47)+" - Flash Player Installation";var s=K.ie?"ActiveX":"PlugIn",o="MMredirectURL="+encodeURIComponent(M.location.toString().replace(/&/g,"%26"))+"&MMplayerType="+s+"&MMdoctitle="+_.title;typeof t.flashvars!=T?t.flashvars+="&"+o:t.flashvars=o;if(K.ie&&i.readyState!=4){var u=g("div");n+="SWFObjectNew",u.setAttribute("id",n),i.parentNode.insertBefore(u,i),i.style.display="none",p(i)}c(e,t,n)}}function a(e){if(K.ie&&e.readyState!=4){e.style.display="none";var t=g("div");e.parentNode.insertBefore(t,e),t.parentNode.replaceChild(f(e),t),p(e)}else e.parentNode.replaceChild(f(e),e)}function f(e){var t=g("div");if(K.win&&K.ie)t.innerHTML=e.innerHTML;else{var n=e.getElementsByTagName(N)[0];if(n){var r=n.childNodes;if(r){var i=r.length;for(var s=0;s<i;s++)(r[s].nodeType!=1||r[s].nodeName!="PARAM")&&r[s].nodeType!=8&&t.appendChild(r[s].cloneNode(!0))}}}return t}function l(e,t){var n=g("div");return n.innerHTML="<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'><param name='movie' value='"+e+"'>"+t+"</object>",n.firstChild}function c(e,t,n){var r,i=m(n);n=v(n);if(K.wk&&K.wk<312)return r;if(i){var s=K.ie?g("div"):g(N),o,u,a;typeof e.id==T&&(e.id=n);for(a in t)t.hasOwnProperty(a)&&a.toLowerCase()!=="movie"&&h(s,a,t[a]);K.ie&&(s=l(e.data,s.innerHTML));for(o in e)e.hasOwnProperty(o)&&(u=o.toLowerCase(),u==="styleclass"?s.setAttribute("class",e[o]):u!=="classid"&&u!=="data"&&s.setAttribute(o,e[o]));K.ie?j[j.length]=e.id:(s.setAttribute("type",L),s.setAttribute("data",e.data)),i.parentNode.replaceChild(s,i),r=s}return r}function h(e,t,n){var r=g("param");r.setAttribute("name",t),r.setAttribute("value",n),e.appendChild(r)}function p(e){var t=m(e);t&&t.nodeName.toUpperCase()=="OBJECT"&&(K.ie?(t.style.display="none",function n(){if(t.readyState==4){for(var e in t)typeof t[e]=="function"&&(t[e]=null);t.parentNode.removeChild(t)}else setTimeout(n,10)}()):t.parentNode.removeChild(t))}function d(e){return e&&e.nodeType&&e.nodeType===1}function v(e){return d(e)?e.id:e}function m(e){if(d(e))return e;var t=null;try{t=_.getElementById(e)}catch(n){}return t}function g(e){return _.createElement(e)}function y(e){return parseInt(e,10)}function b(e,t,n){e.attachEvent(t,n),F[F.length]=[e,t,n]}function w(e){e+="";var t=K.pv,n=e.split(".");return n[0]=y(n[0]),n[1]=y(n[1])||0,n[2]=y(n[2])||0,t[0]>n[0]||t[0]==n[0]&&t[1]>n[1]||t[0]==n[0]&&t[1]==n[1]&&t[2]>=n[2]?!0:!1}function E(e,t,n,r){var i=_.getElementsByTagName("head")[0];if(!i)return;var s=typeof n=="string"?n:"screen";r&&(X=null,V=null);if(!X||V!=s){var o=g("style");o.setAttribute("type","text/css"),o.setAttribute("media",s),X=i.appendChild(o),K.ie&&typeof _.styleSheets!=T&&_.styleSheets.length>0&&(X=_.styleSheets[_.styleSheets.length-1]),V=s}X&&(typeof X.addRule!=T?X.addRule(e,t):typeof _.createTextNode!=T&&X.appendChild(_.createTextNode(e+" {"+t+"}")))}function S(e,t){if(!$)return;var n=t?"visible":"hidden",r=m(e);z&&r?r.style.visibility=n:typeof e=="string"&&E("#"+e,"visibility:"+n)}function x(e){var t=/[\\\"<>\.;]/,n=t.exec(e)!=null;return n&&typeof encodeURIComponent!=T?encodeURIComponent(e):e}var T="undefined",N="object",C="Shockwave Flash",k="ShockwaveFlash.ShockwaveFlash",L="application/x-shockwave-flash",A="SWFObjectExprInst",O="onreadystatechange",M=window,_=document,D=navigator,P=!1,H=[],B=[],j=[],F=[],I,q,R,U,z=!1,W=!1,X,V,$=!0,J=!1,K=function(){var e=typeof _.getElementById!=T&&typeof _.getElementsByTagName!=T&&typeof _.createElement!=T,t=D.userAgent.toLowerCase(),n=D.platform.toLowerCase(),r=n?/win/.test(n):/win/.test(t),i=n?/mac/.test(n):/mac/.test(t),s=/webkit/.test(t)?parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,o=D.appName==="Microsoft Internet Explorer",u=[0,0,0],a=null;if(typeof D.plugins!=T&&typeof D.plugins[C]==N)a=D.plugins[C].description,a&&typeof D.mimeTypes!=T&&D.mimeTypes[L]&&D.mimeTypes[L].enabledPlugin&&(P=!0,o=!1,a=a.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),u[0]=y(a.replace(/^(.*)\..*$/,"$1")),u[1]=y(a.replace(/^.*\.(.*)\s.*$/,"$1")),u[2]=/[a-zA-Z]/.test(a)?y(a.replace(/^.*[a-zA-Z]+(.*)$/,"$1")):0);else if(typeof M.ActiveXObject!=T)try{var f=new ActiveXObject(k);f&&(a=f.GetVariable("$version"),a&&(o=!0,a=a.split(" ")[1].split(","),u=[y(a[0]),y(a[1]),y(a[2])]))}catch(l){}return{w3:e,pv:u,wk:s,ie:o,win:r,mac:i}}(),Q=function(){if(!K.w3)return;(typeof _.readyState!=T&&(_.readyState==="complete"||_.readyState==="interactive")||typeof _.readyState==T&&(_.getElementsByTagName("body")[0]||_.body))&&e(),z||(typeof _.addEventListener!=T&&_.addEventListener("DOMContentLoaded",e,!1),K.ie&&(_.attachEvent(O,function t(){_.readyState=="complete"&&(_.detachEvent(O,t),e())}),M==top&&function n(){if(z)return;try{_.documentElement.doScroll("left")}catch(t){setTimeout(n,0);return}e()}()),K.wk&&function r(){if(z)return;if(!/loaded|complete/.test(_.readyState)){setTimeout(r,0);return}e()}())}();H[0]=function(){P?r():i()};var G=function(){K.ie&&window.attachEvent("onunload",function(){var e=F.length;for(var t=0;t<e;t++)F[t][0].detachEvent(F[t][1],F[t][2]);var n=j.length;for(var r=0;r<n;r++)p(j[r]);for(var i in K)K[i]=null;K=null;for(var s in swfobject)swfobject[s]=null;swfobject=null})}();return{registerObject:function(e,t,n,r){if(K.w3&&e&&t){var i={};i.id=e,i.swfVersion=t,i.expressInstall=n,i.callbackFn=r,B[B.length]=i,S(e,!1)}else r&&r({success:!1,id:e})},getObjectById:function(e){if(K.w3)return s(e)},embedSWF:function(e,n,r,i,s,a,f,l,h,p){var d=v(n),m={success:!1,id:d};K.w3&&!(K.wk&&K.wk<312)&&e&&n&&r&&i&&s?(S(d,!1),t(function(){r+="",i+="";var t={};if(h&&typeof h===N)for(var v in h)t[v]=h[v];t.data=e,t.width=r,t.height=i;var g={};if(l&&typeof l===N)for(var y in l)g[y]=l[y];if(f&&typeof f===N)for(var b in f)if(f.hasOwnProperty(b)){var E=J?encodeURIComponent(b):b,x=J?encodeURIComponent(f[b]):f[b];typeof g.flashvars!=T?g.flashvars+="&"+E+"="+x:g.flashvars=E+"="+x}if(w(s)){var C=c(t,g,n);t.id==d&&S(d,!0),m.success=!0,m.ref=C,m.id=C.id}else{if(a&&o()){t.data=a,u(t,g,n,p);return}S(d,!0)}p&&p(m)})):p&&p(m)},switchOffAutoHideShow:function(){$=!1},enableUriEncoding:function(e){J=typeof e===T?!0:e},ua:K,getFlashPlayerVersion:function(){return{major:K.pv[0],minor:K.pv[1],release:K.pv[2]}},hasFlashPlayerVersion:w,createSWF:function(e,t,n){return K.w3?c(e,t,n):undefined},showExpressInstall:function(e,t,n,r){K.w3&&o()&&u(e,t,n,r)},removeSWF:function(e){K.w3&&p(e)},createCSS:function(e,t,n,r){K.w3&&E(e,t,n,r)},addDomLoadEvent:t,addLoadEvent:n,getQueryParamValue:function(e){var t=_.location.search||_.location.hash;if(t){/\?/.test(t)&&(t=t.split("?")[1]);if(e==null)return x(t);var n=t.split("&");for(var r=0;r<n.length;r++)if(n[r].substring(0,n[r].indexOf("="))==e)return x(n[r].substring(n[r].indexOf("=")+1))}return""},expressInstallCallback:function(){if(W){var e=m(A);e&&I&&(e.parentNode.replaceChild(I,e),q&&(S(q,!0),K.ie&&(I.style.display="block")),R&&R(U)),W=!1}},version:"2.3"}});
/* ===========================
 * Router.
 * ---------------------------
 * Simon Winter
 * Nov 6 2013
 * ---------------------------
 * Backbone URL routing for
 * website.
 * =========================== */
define('router',['jquery', 'backbone', 'swfobject'], function($, Backbone, SwfObject) {

	var View = Backbone.View.extend();

	var Router = Backbone.Router.extend({
		routes: {
/* 			'about(/)': 'about', */
			'work(/)': 'work',
			'work/:section/:fragment(/)': 'work',
			'team(/)': 'team',
			'team/:member(/)': 'team'
		},

		initialize: function() {
			this.root = 'themes/default/';
			this.views = {}; // cached views are added here.
			this.work = {}; // add here each cached projects. key should be the category - or 'all' for default.
			this.team = []; // add the cached team members.
			this.teamImages = {}; // add team portraits here.
			this.currentCategory = '';

			this.historyStack = [''];

			this.on('route', function() {
				/*
if($('body').is('.mobile')) {
					var target = '/' + arguments[0] + '/' + arguments[1].join('/');

					console.log(window.location.href.indexOf(target));

					if(window.location.href.indexOf(target) == 0) {
						window.location.href = '/' + arguments[0] + '/' + arguments[1].join('/');
					}
				} else {
*/
					this.historyStack.push('/' + arguments[0] + '/' + arguments[1].join('/'));
/* 				} */
			});

			// build regex from the main nav.
			this.regex = new RegExp(($('#main_nav a').map(function(){ return $(this).text().toLowerCase(); })).get().join('|'));
		},

		navigate: function() {
			Backbone.Router.prototype.navigate.apply(this, arguments);

			_gaq.push(['_trackPageview', arguments[0]]);

			if(arguments[0] !== '/') {
				$('#menu_icon').removeClass('show').addClass('hide');
				$('#main_nav').removeClass('hide').addClass('show');
			} else {
				$('#menu_icon').removeClass('hide').addClass('show');
				$('#main_nav').removeClass('show').addClass('hide');
			}

			$(window).resize();

			$('html, body').animate({
				scrollTop: 0
			}, 500);
		},

		work: function(section, fragment) {

			var that = this;
			var callback = function() {

				/*
if($('#work').length > 0) {
					if(window.workMasonry) {
						window.workMasonry.layout();
					} else {
						var masonry = new Masonry($('#work').get(0), {
							hiddenStyle: {transform: 'scale(.8)', opacity: 0},
							transitionDuration: '.5s',
							columnWidth: 320,
							gutter: 0,
							isInitLayout: false,
							itemSelector: '.entry'
						});

						masonry.on( 'layoutComplete', function( msnryInstance, laidOutItems ) {
							masonry.hide(laidOutItems);
							$('.entry.hide').removeClass('hide');
							masonry.reveal(laidOutItems);
						});

						masonry.layout();

						window.workMasonry = masonry;
					}
				}
*/


				if(window.location.href.match(/work\/project\//) != null) {
					$.get('/work/getCurrentSession', function(response, status, xhr) {
						that.currentCategory = response;
						$('#banner .filter a').removeClass('all current');

						// load the existing navigation for the category,
						// else get the json file.
						cat = (response == '' || response == null) ? cat = 'all' : response;
						if(that.work[cat]) {
							that.workNavigation(cat);
						} else {
							$.get(that.root + 'json/' + cat + '.json', function(response, status, xhr) {
								that.work[cat] = typeof response == 'string' ? JSON.parse(response) : response;
								that.workNavigation(cat);
							});
						}

						that.loadMedia();
					});


				} else {
					if($('#work').length == 0) {
						$('#content').append($('<div id="work"/>'));
					}
				}
			};

			var transition = function(html) {
				var loaded = $(html),
					i = loaded.find('.filters a.current, .filters a.all').index() - 1,
					entries = $(loaded.get(2)).find('.entry'); // for some reason I can't target the #work element, so have to use 2 instead.

				// change the navigation
				$('#banner .filters a').removeClass('all current');
				$('.filters a').eq(i).addClass('current');

				var urls = [],
					count = 0;

				var ordered = entries;

				$('#work .entry').filter(function() {
					return entries.find("[data-sortorder='" + $(this).data('sortorder') + "']").length == 0;
				}).each(function(id, el) {
					$(this).fadeOut(function() {
						$(this).remove();
					});
				});

				ordered.sort(function (a, b) {
					a = $(a).data("sortorder");
					b = $(b).data("sortorder");

					if(a > b) {
					    return 1;
					} else if(a < b) {
					    return -1;
					} else {
					    return 0;
					}
				});



				ordered.each(function(id, el) {
					var exists = $('#work').find("[data-sortorder='" + $(this).data('sortorder') + "']").length == 1;

					if(exists) {
						$('#work').find('.entry').eq(id-1 < 0 ? 0 : id-1).removeClass('hidden').after($('#work').find("[data-sortorder='" + $(this).data('sortorder') + "']"));
					} else {
						$('#work').find('.entry').eq(id-1 < 0 ? 0 : id-1).after($(this));
					}

				});



				//callback();
			}

			var url = ['work'];
			if(section) {
				url.push(section);
			}
			if(fragment) {
				url.push(fragment);
			}

			this.loadPage('workpage', url.join('/'), callback, transition);

			if(section == 'category') {
				this.currentCategory = fragment;
			}
		},

		team: function(member) {

			if(member == null) {
				this.loadPage('teampage', '/team/');
			} else {
				var that = this;
				this.loadPage('teampage', '/team/' + member, function() {
					if($('body').is('.mobile')) {
						return false;
					}

					if($.isEmptyObject(that.teamImages[member])) {
						// get image
						$.get(window.location.href + '/portraits/', function(response, status, xhr) {
							data = response.data;
							if(!response.data) {
								data = [];
							}
							that.teamImages[member] = data;
							that.loadPortraits(member);
						}, 'json');
					} else {
						that.loadPortraits(member);
					}

					if(that.team.length > 0) {
						that.teamNavigation(member);
					} else {
						$.get('/team/members', function(response, status, xhr) {
							that.team = response;
							that.teamNavigation(member);
						}, 'json');
					}
				});
			}
		},

		loadPage: function(page, url, callback, transitionContent, hideElements) {

			views = this.views;

/* 			console.log(views); */

			if(views.hasOwnProperty(url)) {
				/* ===========================
				 * Grab the cached version.
				 * =========================== */
				$('[rel="stylesheet"]').attr('href', views[url].css);

				/* ===========================
				 * If there is a transition
				 * function supplied, call that - otherwise load the content.
				 * - Don't call the transition iff the previous URL is from a
				 * different section e.g. going from team to work.
				 * =========================== */
				if(typeof transitionContent !== 'undefined' && this.transitionAvailable(url)) {
					transitionContent(views[url].html);
				} else {
					$('#content').removeAttr('style').empty().html(views[url].html);
					if(callback) {
						callback();
					}
				}

				this.loadMeta(views[url].meta);
			} else {
				that = this;

				/* ===========================
				 * Load correct content.
				 * =========================== */
				views[url] = false;
				if(that.prev && !that.transitionAvailable(url)) {
					this.showLoading();
				}

				$('#content').prepend('<div id="loadingcontent"/>');

				$('#loadingcontent').load(url + ' #content', function(response, status, xhr) {

					var el = this;

					require(['pagetypes/' + page], function() {
						views[url] = {
							html: $('#loadingcontent #content').html(),
							css: that.root + 'css/' + page + '.css'
						};

						if(that.prev) {
							$('#loadingcontent').remove();
							/* ===========================
							 * If there is a transition
							 * function supplied, call that - otherwise load the content.
							 * =========================== */
							if(typeof transitionContent !== 'undefined' && that.transitionAvailable(url)) {
								transitionContent(views[url].html);
							} else {
								$('#content, #loadingcontent').empty();
								$('#content').removeAttr('style').html(views[url].html);
							}
						};

						/* ===========================
						 * Load in meta data, css & js.
						 * =========================== */
						$('[rel="stylesheet"]').attr('href', views[url].css);
						that.getMeta(url, views[url]);

						that.prev = url;
						$(el).remove();

						that.hideLoading();

						if(callback) {
							callback();
						}
					});

				});
			}
		},

		loadMedia: function() {
			var that = this,
				loadOrder = {};

			function loadSwf(target) {
				target.append($('<div id="' + target.attr('id') + '_swf">'));

				$('#' + target.attr('id') + ', #' + target.attr('id') + '_swf').css('min-height', target.data('swf-height'));

				$('#' + target.attr('id') + '_swf').hide().load(target.data('swf'), function() {
					SwfObject.embedSWF(target.data('swf'), target.attr('id') + '_swf', target.data('swf-width'), target.data('swf-height'), '9.0.0', that.root + 'js/components/swfobject-amd/expressinstall.swf', {wmode: 'transparent'});
					$('#' + target.attr('id') + '_swf').delay($('#' + target.attr('id') + '_swf').index() * 500).fadeIn(function() {
						$(this).removeClass('notloaded');
					});
				});
			}

			function loadImage(target, img, width, height) {
				target.css({
					width: width,
					minHeight: height
				}).append(img);
				img.delay(target.index() * 500).fadeIn(function() {
					target.removeClass('notloaded');
				});
			}

			function loadVimeo(target) {
				iframe = $('<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen/>').attr({
							src: '//player.vimeo.com/video/' + target.data('vimeo') + '?title=0&amp;byline=0&amp;portrait=0&amp;badge=0',
							width: 928,
							height: 522,
							frameborder: 0
						});
				target.css('min-height', 522).removeClass('notloaded').append(iframe);
			}

			$('#media .image').each(function(i, e) { loadOrder[$(this).data('url')] = i; });

			$('#media .image').each(function() {
				var url = $(this).data('url'),
					width = $(this).data('width'),
					height = $(this).data('height'),
					alt = $(this).data('alt');

				$('<img/>').attr({
					alt: $(this).data('alt')
				}).load(url, function(status, success, xhr) {
					var img = $(this),
						target = $('#media .image').eq(loadOrder[url]);

					$(this).hide()

					if(target.is('.swf')) {
						if($('body').not('.mobile')) {
							loadSwf(target);
						} else {
							$(this).removeClass('notloaded');
						}
					} else if(target.is('.vimeo')) {
						loadVimeo(target);
					} else {
						loadImage(target, img, width, height);
					}

				}).attr('src', url);
			});
		},

		getMeta: function(url, result) {
			/* ===========================
			 * Check if we need to change
			 * the selected main nav.
			 * =========================== */
			var match = url.match(this.regex),
				that = this,
				location = window.location.href;

			if(match != null) {
				$('#main_nav a').removeClass('current');
				$('#main_nav').find('a[href*="' + match[0] + '"]').addClass('current');
			}

			/* ===========================
			 * Re-populate the meta data.
			 * =========================== */
			if(window.location.pathname == '/') {
				location += 'home/';
			}

			if(location[location.length - 1] != '/') {
				location += '/';
			}

			location += 'meta';

			$.get(location, function(response, status, xhr) {
				that.loadMeta(response);
				result.meta = response;
			}, 'html');
		},

		loadMeta: function(meta) {
			$('title,meta:not([name="viewport"])').remove();
			$('head').prepend(meta);
		},

		workNavigation: function(category) {
			if(category in this.work) {
				var previous = null,
					next = null,
					current = null;

				var currentCat = window.location.href.match(/work\/project\/(.*)/);

				if(currentCat != null) {
					currentCat = currentCat[1];
					var projects = category == 'all' ? this.work[category] : this.work[category].Projects;

					if(typeof projects == 'string') {
						projects = JSON.parse(projects);
					}

					for(var i=0; i<projects.length; i++) {
						if(current != null) {
							previous = current;
						}

						current = projects[i];
						iplus = parseInt(i) + 1;

						if(iplus < projects.length) {
							next = projects[iplus] || null;
						} else {
							next = null;
						}

						if(current.URLSegment == currentCat) {
							break;
						}
					}

					this.showNav(next, previous, '/work/project/');
				}
			}
		},

		teamNavigation: function(member) {
			var previous = null,
				next = null,
				current = null;

			for(var i in this.team) {
				if(current != null) {
					previous = current;
				}

				current = this.team[i];
				iplus = parseInt(i) + 1;

				if(iplus < this.team.length) {
					next = this.team[iplus] || null;
				} else {
					next = null;
				}

				if(current.URLSegment == member) {
					break;
				}
			}

			this.showNav(next, previous, '/team/');
		},

		showNav: function(next, previous, base) {
			$('#projectnav, #projectnav a').hide();



			if(previous) {
				$('#projectnav .previous strong').text(previous.Title.replace(/&amp;/g, '&'));
				$('#projectnav .previous em').text(previous.TagLine.replace(/&amp;/g, '&'));
				$('#projectnav .previous').attr('href', base + previous.URLSegment);
				$('#projectnav .previous').show();
			}

			if(next != null) {
				$('#projectnav .next strong').text(next.Title.replace(/&amp;/g, '&'));
				$('#projectnav .next em').text(next.TagLine.replace(/&amp;/g, '&'));
				$('#projectnav .next').attr('href', base + next.URLSegment);
				$('#projectnav .next').show();
			}

			$('#projectnav').css({display: 'block'}).show();
		},

		loadPortraits: function(member) {
			if(member in this.teamImages) {
				for(var image in this.teamImages[member]) {
					$('.images').append($('<img/>').attr('src', this.teamImages[member][image]));
				}
				$('.images').addClass('loaded');
			}
		},

		transitionAvailable: function(url) {
			/* ===========================
			 * We can't use a transition if
			 * we are moving to or from a
			 * project, or from any other page
			 * to a work page.
			 * =========================== */
			prev = this.historyStack.length > 0 ? this.historyStack[this.historyStack.length-2] : '';

			return url.match(/(work\/?$)|category/) != null && prev.match(/(work\/?$)|category/) != null && prev !== url;
		},

		showLoading: function() {
			$('#loader').fadeIn('fast');
		},

		hideLoading: function() {
			$('#loader').fadeOut('fast');
		}
	});



	var router = new Router(),
		routerOptions = {};

	//if($('body').not('.mobile')) {
		routerOptions.pushState = true;
	//}

	Backbone.history.start(routerOptions);

	return router;
});

define('_base',["jquery","backbone","router"],function(e,t,n){window.docHeight=function(){var e=document.body,t=document.documentElement;return Math.max(e.scrollHeight,e.offsetHeight,t.clientHeight,t.scrollHeight,t.offsetHeight)},e("#menu_icon").click(function(t){e("#main_nav").toggleClass("collapse expand")}),e(document).on("click","#main_nav a, #logo a",function(){e("#main_nav a, #logo a").removeClass("current"),e(this).addClass("current")}),e("#projectnav a").hover(function(){var t=e(this).outerWidth(!0)+Math.max(e(this).find("strong").outerWidth(),e(this).find("em").outerWidth());e(this).is(".next")?e(this).find("em, strong").width(Math.max(e(this).find("strong").outerWidth(),e(this).find("em").outerWidth())).css("right",e(this).outerWidth(!0)):e(this).find("em, strong").css("left",e(this).outerWidth(!0)),e(this).addClass("over").width(t)},function(){e(this).removeClass("over").removeAttr("style")}),e(document).on("hover","#projectnav a",function(){e(this).width(e(this).outerWidth(!0)+Math.max(e(this).find("strong").outerWidth(),e(this).find("em").outerWidth())),e(this).addClass("over")},function(){e(this).removeAttr("style"),e(this).removeClass("over")}),e(window).scroll(function(t){e(window).scrollTop()+e(window).height()>=e(document).height()?e("footer .salt").addClass("animate"):e("footer .salt").removeClass("animate");if(e("body:not(.mobile) header.overlay:not(.no-images)").length>0){var n=e("header.overlay").outerHeight(!0),r=30;e(window).scrollTop()<180?(e(".detailscontainer:not(.nofix)").addClass("fixedcontainer"),e(".detailscontainer:not(.nofix)").css("margin-top",0).parent().height(e(".detailscontainer:not(.nofix)").height())):(e(".detailscontainer:not(.nofix)").is(".fixedcontainer")&&e(".detailscontainer:not(.nofix)").css("margin-top",216),e(".detailscontainer:not(.nofix)").removeClass("fixedcontainer")),e(window).scrollTop()>157?e(".overlay").addClass("small"):e(".overlay").removeClass("small").css("top",0)}e("body:not(.mobile) nav#banner").length>0?e(window).scrollTop()>200?e("nav#banner").addClass("small"):e("nav#banner").removeClass("small"):e("body:not(.mobile) div#banner").length>0&&(e(window).scrollTop()>50?e("header").addClass("small"):e("header").removeClass("delay").removeClass("small"));if(e("#projectnav").length>0){var i=docHeight()-e("footer").height(),s=parseInt(e("#content").css("padding-bottom")),o=i-s,u=e(window).scrollTop()+e(window).height();u>=o?(e("#projectnav .next").css({right:0-(u-o)}),e("#projectnav .previous").css({left:0-(u-o)}),e(".overlay").css({top:102-(u-o)})):(e("#projectnav .next").css({right:0}),e("#projectnav .previous").css({left:0}),e(".overlay").css({top:102}))}})});
require(['jquery', 'backbone', 'underscore', '_base'], function($) {

	$(function() {
		/*
if($('body').is('.mobile')) {
			return;
		}
*/
		var prevPosition = 0,
			scrolled = false,
			latestKnownScrollY = 0,
			winHeight = 0,
			ticking = false;

		// setup animation frame.
		if(!$('body').is('.mobile')) {
			requestTick();
		}

		// this multiplies each slide taller than the window height
		// increase = 1;
		increase = 1.15;

		/* ===========================
		 * On resize - make sure:
		 * - The footer is in the correct place
		 * - The content container & each block are full height.
		 * =========================== */
		function _resize() {
			var targetHeight = ($('#work .block').length * $(window).height()) - parseInt($('#content').css('padding-top')) - (($('#work .block').length - 1) * $('#header').height());
			if(targetHeight > 0) {
				$('#content, #work').height((targetHeight)*increase);
			}

			var w = window,
			    d = document,
			    e = d.documentElement,
			    g = d.getElementsByTagName('body')[0],
			    x = w.innerWidth || e.clientWidth || g.clientWidth,
			    y = w.innerHeight|| e.clientHeight|| g.clientHeight;





			$('#work .block').each(function(i, el) {
				var top = (i * ((y*increase) - $('#header').height()));

				$(this).css({
					width: $(window).width(),
					height: (y*increase) - $('#header').height(),
					top: top
				});

				$(this).attr('data-top', parseInt($(this).position().top));
				$(this).attr('data-headingtop', parseInt($(this).find('.heading').offset().top));

		        function resize(imgWidth, imgHeight, targetWidth, targetHeight) {
			        var maxWidth = targetWidth,
						maxHeight = targetHeight,
						widthRatio = maxWidth / imgWidth,
						heightRatio = maxHeight / imgHeight,
						ratio = widthRatio;

					if (widthRatio * imgHeight < maxHeight) {
					    ratio = heightRatio;
					}

					return {
						w: imgWidth * ratio,
						h: imgHeight * ratio
					}
		        }


				var dimensions = resize($(this).data('imgwidth'), $(this).data('imgheight'), $(window).width(), $(window).height()),
					dimensionsOverlay = resize($(this).data('imgwidth'), $(this).data('imgheight'), $(window).width(), $(window).height());

				$(this).show();
			});

			$('#footer').show();

			$('body:not(.mobile) #heading').attr('data-top', parseInt(($(window).height() - $('#header').height() + 16) / 2));
			if($('body:not(.mobile) .block:last').length > 0) {
				$('body:not(.mobile) .block:last').attr('data-top', parseInt($('body:not(.mobile) .block:last').offset().top));
			}

			positionHeading();
			positionExplanation();


			if($('#work .block.first').is('.init')) {
				setTimeout(function() {
					$('#work .block.first.init').removeClass('init');
				}, 5000);
			}
		}

		_resize();

		if(!$('body').is('.mobile')) {
			$(window).resize(function() {
				_resize();
			});
		}





		// for varying height text explanations margin top.
		// as they are transform 50% from the top. they need to float
		// with other things
		function positionExplanation() {

			$('#work .block:visible').each(function(i, el) {
				exptop = $(this).find(".explanation").height();
				// console.log(exptop);

				if($(this).is('.first')) {} else {
					$(this).find('.explanation').css({
						marginTop: 20+(exptop/2)
					});
				}
			});

		}


		// * ===========================
		// * Ensure that the heading attaches itself
		// * to the last block.
		// * ===========================
		function positionHeading() {
			var _max = 95;

			if($('body').is('.mobile')) {
				$('#work .block').find('.heading, .large').show();
				return;
			}

			$('#work .block:visible').each(function(i, el) {
				var top = $(this).offset().top;

				$(this).find('.heading').show();

				if(top < (latestKnownScrollY + (winHeight/2))) {

					var condition = top < latestKnownScrollY;
					var _h = condition ? (winHeight / 2) : ((winHeight / 2)) - Math.abs(latestKnownScrollY - top);
					var newTop = $(this).offset().top-latestKnownScrollY;

					var newTop = newTop;


					if($(this).is('.first')) {
						_h += 53;
						if(latestKnownScrollY > -1) {
							$(this).find('.heading').hide();
							$(this).find('.large').show();
						} else {
							$(this).find('.heading').show();
							$(this).find('.large').hide();
						}
					} else {
						if(Math.ceil(newTop) <= $('#header').height()) {
							$(this).find('.heading').hide();
							$(this).find('.large').show();
						} else {
							$(this).find('.heading').show();
							$(this).find('.large').hide();
						}
					}



					$(this).find('.heading').css({
						height: _h,
						top: newTop
					});


					$(this).find('.heading > h1').css({
						top: Math.ceil(newTop + _h)*increase
					});

				} else {
					$(this).find('.heading').show().css({
						height: 0
					});
					$(this).find('.large').hide();
				}
			});
		}


		/* ===========================
		 * No more to see on mobile.
		 * =========================== */
		/*
if($('body').is('.mobile')) {

			return;
		}
*/


		function update() {
			if($(window).width() <= 1024) {
				return false;
			}
			ticking = false;
			latestKnownScrollY = $(window).scrollTop();
			winHeight = $(window).height();

			if((latestKnownScrollY + winHeight) >= $('#footer').offset().top) {
				var clone = $('#nextnav').clone(true, true);
				$('#nextnav').remove();
				$('#footer').prepend(clone);
			} else {
				if($('#footer #nextnav').length > 0) {
					var clone = $('#nextnav').clone(true, true);
					$('#nextnav').remove();
					$('#work').after(clone);
				}
				$('#nextnav').removeAttr('style');
			}

			if((latestKnownScrollY + winHeight) >= $('#footer').offset().top) {
				$('#nextnav').addClass('up');
			}

			if(latestKnownScrollY == 0) {
				$('#nextnav').removeClass('up');
			}

			prevPosition = latestKnownScrollY;

			positionHeading();
			// positionExplanation();
			scrolled = true;

			/* ===========================
			 * Animate overlays.
			 * =========================== */
			$('body:not(.mobile) #work .block').filter(function() {
				var top = $(this).offset().top,
					bottom = top + winHeight;

				return top < (latestKnownScrollY + winHeight) && bottom > latestKnownScrollY;
			}).each(function(i, el) {
				if ((latestKnownScrollY + winHeight) > $(this).offset().top) {
					var top = (-330 + (((latestKnownScrollY - $(this).data('top')) / winHeight) * 500));

					$(this).find('.overlay').css({
						'background-position': '50% ' + top + '%'
					});

					var pos = 0 - (.125 * (latestKnownScrollY - $(this).offset().top));

					$(this).css({
						'background-position': '50% ' + (pos) + 'px'
					});

					if($(this).is('.first') && latestKnownScrollY > 100) {
						$(this).find('.intro').addClass('hideFooter');
					} else {
						$(this).find('.intro').removeClass('hideFooter');
					}
				}
			});
		}

		function onScroll() {
			requestTick();
		}

		function requestTick() {
			var animationFrame = Modernizr.prefixed('requestAnimationFrame', window);
			if(!ticking && typeof animationFrame == 'function') {
				animationFrame(update);
			} else if(typeof animationFrame != 'function') {
				update();
			}
			ticking = true;
		}

		if(!$('body').is('.mobile')) {
			$(window).scroll(function(e) {
				e.preventDefault();
				onScroll();
			});

			/* ===========================
			 * Load in slider images.
			 * =========================== */
			var Images = {
				data: {},
				toLoad: {},
				length: 0,

				clone: function() {
					this.toLoad = $.extend(true, {}, this.data);
				},

				previousX: 0,
				previousY: 0
			};


			$.get('themes/default/json/sliders.json', function(response, status, xhr) {
				if(status == 'success') {

					for(var i in response) {
						if(response[i].Images) {
							var target = $('#work .block[data-id="' + response[i].Slider + '"]');

							Images.data[response[i].Slider] = [];

							for(var img in response[i].Images) {
								Images.data[response[i].Slider].push(response[i].Images[img].URL);
								Images.length = ++Images.length;
							}
						}
					}

					Images.clone();

					function removeItem(images, src) {
						for(var l in images) {
							if(images[l] == src) {
								images.splice(l, 1);
								Images.length = Images.length - 1;
								break;
							}
						}
					}

					for(var i in Images.toLoad) {
						for(var j in Images.toLoad[i]) {
							if($('body').is('.mobile') && j>0) {
								break;
							}
							$('<img/>').load(function(response, status, xhr) {


								// we can't load the image, so remove
								// from list of available images.
								if(status == 'error') {
									var images = Images.data[$(this).attr('id')];
								} else {
									// no error, so remove from toLoad & check if we're ready to roll.
									var images = Images.toLoad[$(this).attr('id')];
								}


								$('#slider-' + $(this).attr('id')).append($(this));

								removeItem(images, $(this).attr('src'));

								if(Images.length <= 0) {
									$(window).resize();

									$('#work .block').addClass('loaded').on('mousemove', function(e) {
										e.stopPropagation();
										var count = $(this).data('images'),
											id = $(this).data('id'),
											pos = e.clientX,
											target = Math.ceil((pos / ($(window).width() / 2)) * count) % count,
											direction = Math.ceil(Math.ceil((pos / ($(window).width() / 2)) * count)/count) % 2,
											target = direction == 0 ? target : (count - target) % count;

											//console.log(Math.abs(Images.previousX - e.clientX), Math.abs(Images.previousY - e.clientY));

										if(target != 0) {
											var bg = $(this).css('background-image');
											bg = bg.match(/url\((.*)\);?/);

											//$(this).find('img.current').removeClass('current');
											//$(this).find('img').eq(target).addClass('current');

											$(this).css('background-image', 'url(' + Images.data[id][target] + ')');
										}

										return false;
									});

									$('#work .block').addClass('show');

								}
							}).attr('id', i).attr('src', Images.toLoad[i][j]);
						}
					}
				}
			}, 'json');

			$('#nextnav a').click(function(e) {
				e.preventDefault();

				if($(this).parent().is('.up')) {
					var first = $('.block').filter(function() {
						return $(this).offset().top < $(window).scrollTop();
					}).filter(':last');

					if(first.index() == $('.block').length || first.index() == 1) {
						target = first;
					} else {
						target = first.prev();
					}

					$('body,html').animate({
						scrollTop: 0
					}, 500);

					return;

				} else {
					var first = $('.block').filter(function() {
						return $(this).offset().top >= $(window).scrollTop();
					}).filter(':first'),
						target = first.next();
				}

				if(target.length > 0 && target.index() == 1) {
					$('#nextnav').removeClass('up');
				}

				if(first && target.length > 0) {
					$('body,html').animate({
						scrollTop: target.offset().top - $('#header').height()
					}, 500, function() {
						$('#nextnav').removeClass('up');
					});
				} else {
					$('#nextnav').addClass('up');
					$('body,html').animate({
						scrollTop: $('footer').offset().top
					}, 500);
				}
			});


			$('.first nav a').hover(function() {
				$(this).parents('nav').toggleClass('hover');
			});

			/* ===========================
			 * Animate news
			 * =========================== */
			if($('.news li').length > 0) {
				var interval;

				$('.news').each(function() {
					$(this).hover(function() {
						clearInterval(interval);
					}, function() {
						interval = getInterval();
					});
				});
				function getInterval() {
					return setInterval(function() {
						$('.news li.active').animate({
							top: '-24px'
						}, 500, function() {
							var clone = $(this).removeClass('active').removeAttr('style').clone();
							$(this).next().addClass('active');
							$('.news').append(clone);
							$(this).remove();
						});

						$('.news li.active').next().animate({
							top: 0
						}, 500);
					}, 4000);
				}


				interval = getInterval();
			}
		}

	});

});

define("pagetypes/homepage", function(){});
