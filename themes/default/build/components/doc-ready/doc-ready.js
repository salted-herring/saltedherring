/*!
 * docReady v1.0.4
 * Cross browser DOMContentLoaded event emitter
 * MIT license
 */

(function(e){function r(e){if(typeof e!="function")return;r.isReady?e():n.push(e)}function i(e){var n=e.type==="readystatechange"&&t.readyState!=="complete";if(r.isReady||n)return;s()}function s(){r.isReady=!0;for(var e=0,t=n.length;e<t;e++){var i=n[e];i()}}function o(n){return t.readyState==="complete"?s():(n.bind(t,"DOMContentLoaded",i),n.bind(t,"readystatechange",i),n.bind(e,"load",i)),r}var t=e.document,n=[];r.isReady=!1,typeof define=="function"&&define.amd?define(["eventie/eventie"],o):typeof exports=="object"?module.exports=o(require("eventie")):e.docReady=o(e.eventie)})(window);