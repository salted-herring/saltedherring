/*!
 * docReady
 * Cross browser DOMContentLoaded event emitter
 */

(function(e){function r(e){if(typeof e!="function")return;r.isReady?e():n.push(e)}function i(e){var i=e.type==="readystatechange"&&t.readyState!=="complete";if(r.isReady||i)return;r.isReady=!0;for(var s=0,o=n.length;s<o;s++){var u=n[s];u()}}function s(n){return n.bind(t,"DOMContentLoaded",i),n.bind(t,"readystatechange",i),n.bind(e,"load",i),r}var t=e.document,n=[];r.isReady=!1,typeof define=="function"&&define.amd?(r.isReady=typeof requirejs=="function",define(["components/eventie/eventie"],s)):e.docReady=s(e.eventie)})(this);