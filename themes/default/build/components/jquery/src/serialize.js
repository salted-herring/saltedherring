define(["./core","./manipulation/var/rcheckableType","./core/init","./traversing","./attributes/prop"],function(e,t){function n(t,r,s,o){var u;if(e.isArray(r))e.each(r,function(e,r){s||i.test(t)?o(t,r):n(t+"["+(typeof r=="object"&&r!=null?e:"")+"]",r,s,o)});else if(!s&&e.type(r)==="object")for(u in r)n(t+"["+u+"]",r[u],s,o);else o(t,r)}var r=/%20/g,i=/\[\]$/,s=/\r?\n/g,o=/^(?:submit|button|image|reset|file)$/i,u=/^(?:input|select|textarea|keygen)/i;return e.param=function(t,i){var s,o=[],u=function(t,n){n=e.isFunction(n)?n():n==null?"":n,o[o.length]=encodeURIComponent(t)+"="+encodeURIComponent(n)};i===undefined&&(i=e.ajaxSettings&&e.ajaxSettings.traditional);if(e.isArray(t)||t.jquery&&!e.isPlainObject(t))e.each(t,function(){u(this.name,this.value)});else for(s in t)n(s,t[s],i,u);return o.join("&").replace(r,"+")},e.fn.extend({serialize:function(){return e.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var t=e.prop(this,"elements");return t?e.makeArray(t):this}).filter(function(){var n=this.type;return this.name&&!e(this).is(":disabled")&&u.test(this.nodeName)&&!o.test(n)&&(this.checked||!t.test(n))}).map(function(t,n){var r=e(this).val();return r==null?null:e.isArray(r)?e.map(r,function(e){return{name:n.name,value:e.replace(s,"\r\n")}}):{name:n.name,value:r.replace(s,"\r\n")}}).get()}}),e});