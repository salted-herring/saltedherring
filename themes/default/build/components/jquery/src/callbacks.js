define(["./core","./var/rnotwhite"],function(e,t){function n(n){var r={};return e.each(n.match(t)||[],function(e,t){r[t]=!0}),r}return e.Callbacks=function(t){t=typeof t=="string"?n(t):e.extend({},t);var r,i,s,o,u=[],a=[],f=-1,l=function(){o=t.once,s=r=!0;for(;a.length;f=-1){i=a.shift();while(++f<u.length)u[f].apply(i[0],i[1])===!1&&t.stopOnFalse&&(f=u.length,i=!1)}t.memory||(i=!1),r=!1,o&&(i?u=[]:u="")},c={add:function(){return u&&(i&&!r&&(f=u.length-1,a.push(i)),function n(r){e.each(r,function(r,i){e.isFunction(i)?(!t.unique||!c.has(i))&&u.push(i):i&&i.length&&e.type(i)!=="string"&&n(i)})}(arguments),i&&!r&&l()),this},remove:function(){return e.each(arguments,function(t,n){var r;while((r=e.inArray(n,u,r))>-1)u.splice(r,1),r<=f&&f--}),this},has:function(t){return t?e.inArray(t,u)>-1:u.length>0},empty:function(){return u&&(u=[]),this},disable:function(){return o=a=[],u=i="",this},disabled:function(){return!u},lock:function(){return o=a=[],i||(u=i=""),this},locked:function(){return!!o},fireWith:function(e,t){return o||(t=t||[],t=[e,t.slice?t.slice():t],a.push(t),r||l()),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!s}};return c},e});