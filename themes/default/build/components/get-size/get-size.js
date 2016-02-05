/*!
 * getSize v1.2.2
 * measure size of elements
 * MIT license
 */

(function(e,t){function n(e){var t=parseFloat(e),n=e.indexOf("%")===-1&&!isNaN(t);return n&&t}function r(){}function i(){var e={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0};for(var t=0,n=u.length;t<n;t++){var r=u[t];e[r]=0}return e}function s(t){function r(){if(f)return;f=!0;var r=e.getComputedStyle;l=function(){var e=r?function(e){return r(e,null)}:function(e){return e.currentStyle};return function(t){var n=e(t);return n||o("Style returned "+n+". Are you running this code in a hidden iframe on Firefox? "+"See http://bit.ly/getsizebug1"),n}}(),c=t("boxSizing");if(c){var i=document.createElement("div");i.style.width="200px",i.style.padding="1px 2px 3px 4px",i.style.borderStyle="solid",i.style.borderWidth="1px 2px 3px 4px",i.style[c]="border-box";var s=document.body||document.documentElement;s.appendChild(i);var u=l(i);h=n(u.width)===200,s.removeChild(i)}}function s(e){r(),typeof e=="string"&&(e=document.querySelector(e));if(!e||typeof e!="object"||!e.nodeType)return;var t=l(e);if(t.display==="none")return i();var s={};s.width=e.offsetWidth,s.height=e.offsetHeight;var o=s.isBorderBox=!!c&&!!t[c]&&t[c]==="border-box";for(var f=0,p=u.length;f<p;f++){var d=u[f],v=t[d];v=a(e,v);var m=parseFloat(v);s[d]=isNaN(m)?0:m}var g=s.paddingLeft+s.paddingRight,y=s.paddingTop+s.paddingBottom,b=s.marginLeft+s.marginRight,w=s.marginTop+s.marginBottom,E=s.borderLeftWidth+s.borderRightWidth,S=s.borderTopWidth+s.borderBottomWidth,x=o&&h,T=n(t.width);T!==!1&&(s.width=T+(x?0:g+E));var N=n(t.height);return N!==!1&&(s.height=N+(x?0:y+S)),s.innerWidth=s.width-(g+E),s.innerHeight=s.height-(y+S),s.outerWidth=s.width+b,s.outerHeight=s.height+w,s}function a(t,n){if(e.getComputedStyle||n.indexOf("%")===-1)return n;var r=t.style,i=r.left,s=t.runtimeStyle,o=s&&s.left;return o&&(s.left=t.currentStyle.left),r.left=n,n=r.pixelLeft,r.left=i,o&&(s.left=o),n}var f=!1,l,c,h;return s}var o=typeof console=="undefined"?r:function(e){console.error(e)},u=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];typeof define=="function"&&define.amd?define(["get-style-property/get-style-property"],s):typeof exports=="object"?module.exports=s(require("desandro-get-style-property")):e.getSize=s(e.getStyleProperty)})(window);