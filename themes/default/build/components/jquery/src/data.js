define(["./core","./core/access","./data/var/dataPriv","./data/var/dataUser"],function(e,t,n,r){function i(t,n,i){var u;if(i===undefined&&t.nodeType===1){u="data-"+n.replace(o,"-$&").toLowerCase(),i=t.getAttribute(u);if(typeof i=="string"){try{i=i==="true"?!0:i==="false"?!1:i==="null"?null:+i+""===i?+i:s.test(i)?e.parseJSON(i):i}catch(a){}r.set(t,n,i)}else i=undefined}return i}var s=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,o=/[A-Z]/g;return e.extend({hasData:function(e){return r.hasData(e)||n.hasData(e)},data:function(e,t,n){return r.access(e,t,n)},removeData:function(e,t){r.remove(e,t)},_data:function(e,t,r){return n.access(e,t,r)},_removeData:function(e,t){n.remove(e,t)}}),e.fn.extend({data:function(s,u){var a,f,l,c=this[0],h=c&&c.attributes;if(s===undefined){if(this.length){l=r.get(c);if(c.nodeType===1&&!n.get(c,"hasDataAttrs")){a=h.length;while(a--)h[a]&&(f=h[a].name,f.indexOf("data-")===0&&(f=e.camelCase(f.slice(5)),i(c,f,l[f])));n.set(c,"hasDataAttrs",!0)}}return l}return typeof s=="object"?this.each(function(){r.set(this,s)}):t(this,function(t){var n,u;if(c&&t===undefined){n=r.get(c,s)||r.get(c,s.replace(o,"-$&").toLowerCase());if(n!==undefined)return n;u=e.camelCase(s),n=r.get(c,u);if(n!==undefined)return n;n=i(c,u,undefined);if(n!==undefined)return n;return}u=e.camelCase(s),this.each(function(){var e=r.get(this,u);r.set(this,u,t),s.indexOf("-")>-1&&e!==undefined&&r.set(this,s,t)})},null,u,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){r.remove(this,e)})}}),e});