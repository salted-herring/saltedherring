define(["../core","../core/access","./support","../selector"],function(e,t,n){var r=/^(?:input|select|textarea|button)$/i,i=/^(?:a|area)$/i;e.fn.extend({prop:function(n,r){return t(this,e.prop,n,r,arguments.length>1)},removeProp:function(t){return this.each(function(){delete this[e.propFix[t]||t]})}}),e.extend({prop:function(t,n,r){var i,s,o=t.nodeType;if(o===3||o===8||o===2)return;if(o!==1||!e.isXMLDoc(t))n=e.propFix[n]||n,s=e.propHooks[n];return r!==undefined?s&&"set"in s&&(i=s.set(t,r,n))!==undefined?i:t[n]=r:s&&"get"in s&&(i=s.get(t,n))!==null?i:t[n]},propHooks:{tabIndex:{get:function(t){var n=e.find.attr(t,"tabindex");return n?parseInt(n,10):r.test(t.nodeName)||i.test(t.nodeName)&&t.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),n.optSelected||(e.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),e.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){e.propFix[this.toLowerCase()]=this})});