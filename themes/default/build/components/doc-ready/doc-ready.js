/*!
 * docReady
 * Cross browser DOMContentLoaded event emitter
 */

(function(e){function t(e){if(typeof e!="function")return;t.isReady?e():s.push(e)}function n(e){var n=e.type==="readystatechange"&&i.readyState!=="complete";if(t.isReady||n)return;t.isReady=!0;for(var r=0,o=s.length;r<o;r++){var u=s[r];u()}}function r(r){return r.bind(i,"DOMContentLoaded",n),r.bind(i,"readystatechange",n),r.bind(e,"load",n),t}var i=e.document,s=[];t.isReady=!1,typeof define=="function"&&define.amd?(t.isReady=typeof requirejs=="function",define(["components/eventie/eventie"],r)):e.docReady=r(e.eventie)})(this);