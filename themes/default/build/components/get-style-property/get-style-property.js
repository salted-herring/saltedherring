/*!
 * getStyleProperty v1.0.3
 * original by kangax
 * http://perfectionkills.com/feature-testing-css-properties/
 */

(function(e){function t(e){if(!e)return;if(typeof r[e]=="string")return e;e=e.charAt(0).toUpperCase()+e.slice(1);var t;for(var i=0,s=n.length;i<s;i++){t=n[i]+e;if(typeof r[t]=="string")return t}}var n="Webkit Moz ms Ms O".split(" "),r=document.documentElement.style;typeof define=="function"&&define.amd?define([],function(){return t}):typeof exports=="object"?module.exports=t:e.getStyleProperty=t})(window);