/*!
 * docReady v1.0.4
 * Cross browser DOMContentLoaded event emitter
 * MIT license
 */

(function(e){function t(e){if(typeof e!="function")return;t.isReady?e():o.push(e)}function n(e){var n=e.type==="readystatechange"&&s.readyState!=="complete";if(t.isReady||n)return;r()}function r(){t.isReady=!0;for(var e=0,n=o.length;e<n;e++){var r=o[e];r()}}function i(i){return s.readyState==="complete"?r():(i.bind(s,"DOMContentLoaded",n),i.bind(s,"readystatechange",n),i.bind(e,"load",n)),t}var s=e.document,o=[];t.isReady=!1,typeof define=="function"&&define.amd?define(["eventie/eventie"],i):typeof exports=="object"?module.exports=i(require("eventie")):e.docReady=i(e.eventie)})(window);