/*!
 * getStyleProperty v1.0.4
 * original by kangax
 * http://perfectionkills.com/feature-testing-css-properties/
 * MIT license
 */

(function(e){function r(e){if(!e)return;if(typeof n[e]=="string")return e;e=e.charAt(0).toUpperCase()+e.slice(1);var r;for(var i=0,s=t.length;i<s;i++){r=t[i]+e;if(typeof n[r]=="string")return r}}var t="Webkit Moz ms Ms O".split(" "),n=document.documentElement.style;typeof define=="function"&&define.amd?define([],function(){return r}):typeof exports=="object"?module.exports=r:e.getStyleProperty=r})(window);