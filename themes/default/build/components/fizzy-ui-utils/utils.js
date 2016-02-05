/**
 * Fizzy UI utils v1.0.1
 * MIT license
 */

(function(e,t){typeof define=="function"&&define.amd?define(["doc-ready/doc-ready","matches-selector/matches-selector"],function(n,r){return t(e,n,r)}):typeof exports=="object"?module.exports=t(e,require("doc-ready"),require("desandro-matches-selector")):e.fizzyUIUtils=t(e,e.docReady,e.matchesSelector)})(window,function(t,n,r){var i={};i.extend=function(e,t){for(var n in t)e[n]=t[n];return e},i.modulo=function(e,t){return(e%t+t)%t};var s=Object.prototype.toString;i.isArray=function(e){return s.call(e)=="[object Array]"},i.makeArray=function(e){var t=[];if(i.isArray(e))t=e;else if(e&&typeof e.length=="number")for(var n=0,r=e.length;n<r;n++)t.push(e[n]);else t.push(e);return t},i.indexOf=Array.prototype.indexOf?function(e,t){return e.indexOf(t)}:function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},i.removeFrom=function(e,t){var n=i.indexOf(e,t);n!=-1&&e.splice(n,1)},i.isElement=typeof HTMLElement=="function"||typeof HTMLElement=="object"?function(t){return t instanceof HTMLElement}:function(t){return t&&typeof t=="object"&&t.nodeType==1&&typeof t.nodeName=="string"},i.setText=function(){function t(t,n){e=e||(document.documentElement.textContent!==undefined?"textContent":"innerText"),t[e]=n}var e;return t}(),i.getParent=function(e,t){while(e!=document.body){e=e.parentNode;if(r(e,t))return e}},i.getQueryElement=function(e){return typeof e=="string"?document.querySelector(e):e},i.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},i.filterFindElements=function(e,t){e=i.makeArray(e);var n=[];for(var s=0,o=e.length;s<o;s++){var u=e[s];if(!i.isElement(u))continue;if(t){r(u,t)&&n.push(u);var a=u.querySelectorAll(t);for(var f=0,l=a.length;f<l;f++)n.push(a[f])}else n.push(u)}return n},i.debounceMethod=function(e,t,n){var r=e.prototype[t],i=t+"Timeout";e.prototype[t]=function(){var e=this[i];e&&clearTimeout(e);var t=arguments,s=this;this[i]=setTimeout(function(){r.apply(s,t),delete s[i]},n||100)}},i.toDashed=function(e){return e.replace(/(.)([A-Z])/g,function(e,t,n){return t+"-"+n}).toLowerCase()};var o=t.console;return i.htmlInit=function(e,r){n(function(){var n=i.toDashed(r),s=document.querySelectorAll(".js-"+n),u="data-"+n+"-options";for(var a=0,f=s.length;a<f;a++){var l=s[a],c=l.getAttribute(u),h;try{h=c&&JSON.parse(c)}catch(p){o&&o.error("Error parsing "+u+" on "+l.nodeName.toLowerCase()+(l.id?"#"+l.id:"")+": "+p);continue}var d=new e(l,h),v=t.jQuery;v&&v.data(l,r,d)}})},i});