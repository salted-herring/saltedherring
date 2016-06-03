define(["./core","./var/document","./var/rnotwhite","./var/slice","./data/var/dataPriv","./core/init","./selector"],function(e,t,n,r,i){function s(){return!0}function o(){return!1}function u(){try{return t.activeElement}catch(e){}}function a(t,n,r,i,s,u){var f,l;if(typeof n=="object"){typeof r!="string"&&(i=i||r,r=undefined);for(l in n)a(t,l,r,i,n[l],u);return t}i==null&&s==null?(s=r,i=r=undefined):s==null&&(typeof r=="string"?(s=i,i=undefined):(s=i,i=r,r=undefined));if(s===!1)s=o;else if(!s)return this;return u===1&&(f=s,s=function(t){return e().off(t),f.apply(this,arguments)},s.guid=f.guid||(f.guid=e.guid++)),t.each(function(){e.event.add(this,n,s,i,r)})}var f=/^key/,l=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,c=/^([^.]*)(?:\.(.+)|)/;return e.event={global:{},add:function(t,r,s,o,u){var a,f,l,h,p,d,v,m,g,y,b,w=i.get(t);if(!w)return;s.handler&&(a=s,s=a.handler,u=a.selector),s.guid||(s.guid=e.guid++),(h=w.events)||(h=w.events={}),(f=w.handle)||(f=w.handle=function(n){return typeof e!="undefined"&&e.event.triggered!==n.type?e.event.dispatch.apply(t,arguments):undefined}),r=(r||"").match(n)||[""],p=r.length;while(p--){l=c.exec(r[p])||[],g=b=l[1],y=(l[2]||"").split(".").sort();if(!g)continue;v=e.event.special[g]||{},g=(u?v.delegateType:v.bindType)||g,v=e.event.special[g]||{},d=e.extend({type:g,origType:b,data:o,handler:s,guid:s.guid,selector:u,needsContext:u&&e.expr.match.needsContext.test(u),namespace:y.join(".")},a),(m=h[g])||(m=h[g]=[],m.delegateCount=0,(!v.setup||v.setup.call(t,o,y,f)===!1)&&t.addEventListener&&t.addEventListener(g,f)),v.add&&(v.add.call(t,d),d.handler.guid||(d.handler.guid=s.guid)),u?m.splice(m.delegateCount++,0,d):m.push(d),e.event.global[g]=!0}},remove:function(t,r,s,o,u){var a,f,l,h,p,d,v,m,g,y,b,w=i.hasData(t)&&i.get(t);if(!w||!(h=w.events))return;r=(r||"").match(n)||[""],p=r.length;while(p--){l=c.exec(r[p])||[],g=b=l[1],y=(l[2]||"").split(".").sort();if(!g){for(g in h)e.event.remove(t,g+r[p],s,o,!0);continue}v=e.event.special[g]||{},g=(o?v.delegateType:v.bindType)||g,m=h[g]||[],l=l[2]&&new RegExp("(^|\\.)"+y.join("\\.(?:.*\\.|)")+"(\\.|$)"),f=a=m.length;while(a--)d=m[a],(u||b===d.origType)&&(!s||s.guid===d.guid)&&(!l||l.test(d.namespace))&&(!o||o===d.selector||o==="**"&&d.selector)&&(m.splice(a,1),d.selector&&m.delegateCount--,v.remove&&v.remove.call(t,d));f&&!m.length&&((!v.teardown||v.teardown.call(t,y,w.handle)===!1)&&e.removeEvent(t,g,w.handle),delete h[g])}e.isEmptyObject(h)&&i.remove(t,"handle events")},dispatch:function(t){t=e.event.fix(t);var n,s,o,u,a,f=[],l=r.call(arguments),c=(i.get(this,"events")||{})[t.type]||[],h=e.event.special[t.type]||{};l[0]=t,t.delegateTarget=this;if(h.preDispatch&&h.preDispatch.call(this,t)===!1)return;f=e.event.handlers.call(this,t,c),n=0;while((u=f[n++])&&!t.isPropagationStopped()){t.currentTarget=u.elem,s=0;while((a=u.handlers[s++])&&!t.isImmediatePropagationStopped())if(!t.rnamespace||t.rnamespace.test(a.namespace))t.handleObj=a,t.data=a.data,o=((e.event.special[a.origType]||{}).handle||a.handler).apply(u.elem,l),o!==undefined&&(t.result=o)===!1&&(t.preventDefault(),t.stopPropagation())}return h.postDispatch&&h.postDispatch.call(this,t),t.result},handlers:function(t,n){var r,i,s,o,u=[],a=n.delegateCount,f=t.target;if(a&&f.nodeType&&(t.type!=="click"||isNaN(t.button)||t.button<1))for(;f!==this;f=f.parentNode||this)if(f.nodeType===1&&(f.disabled!==!0||t.type!=="click")){i=[];for(r=0;r<a;r++)o=n[r],s=o.selector+" ",i[s]===undefined&&(i[s]=o.needsContext?e(s,this).index(f)>-1:e.find(s,this,null,[f]).length),i[s]&&i.push(o);i.length&&u.push({elem:f,handlers:i})}return a<n.length&&u.push({elem:this,handlers:n.slice(a)}),u},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return e.which==null&&(e.which=t.charCode!=null?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,s,o=n.button;return e.pageX==null&&n.clientX!=null&&(r=e.target.ownerDocument||t,i=r.documentElement,s=r.body,e.pageX=n.clientX+(i&&i.scrollLeft||s&&s.scrollLeft||0)-(i&&i.clientLeft||s&&s.clientLeft||0),e.pageY=n.clientY+(i&&i.scrollTop||s&&s.scrollTop||0)-(i&&i.clientTop||s&&s.clientTop||0)),!e.which&&o!==undefined&&(e.which=o&1?1:o&2?3:o&4?2:0),e}},fix:function(n){if(n[e.expando])return n;var r,i,s,o=n.type,u=n,a=this.fixHooks[o];a||(this.fixHooks[o]=a=l.test(o)?this.mouseHooks:f.test(o)?this.keyHooks:{}),s=a.props?this.props.concat(a.props):this.props,n=new e.Event(u),r=s.length;while(r--)i=s[r],n[i]=u[i];return n.target||(n.target=t),n.target.nodeType===3&&(n.target=n.target.parentNode),a.filter?a.filter(n,u):n},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==u()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===u()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if(this.type==="checkbox"&&this.click&&e.nodeName(this,"input"))return this.click(),!1},_default:function(t){return e.nodeName(t.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==undefined&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},e.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},e.Event=function(t,n){if(!(this instanceof e.Event))return new e.Event(t,n);t&&t.type?(this.originalEvent=t,this.type=t.type,this.isDefaultPrevented=t.defaultPrevented||t.defaultPrevented===undefined&&t.returnValue===!1?s:o):this.type=t,n&&e.extend(this,n),this.timeStamp=t&&t.timeStamp||e.now(),this[e.expando]=!0},e.Event.prototype={constructor:e.Event,isDefaultPrevented:o,isPropagationStopped:o,isImmediatePropagationStopped:o,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=s,e&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=s,e&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=s,e&&e.stopImmediatePropagation(),this.stopPropagation()}},e.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(t,n){e.event.special[t]={delegateType:n,bindType:n,handle:function(t){var r,i=this,s=t.relatedTarget,o=t.handleObj;if(!s||s!==i&&!e.contains(i,s))t.type=o.origType,r=o.handler.apply(this,arguments),t.type=n;return r}}}),e.fn.extend({on:function(e,t,n,r){return a(this,e,t,n,r)},one:function(e,t,n,r){return a(this,e,t,n,r,1)},off:function(t,n,r){var i,s;if(t&&t.preventDefault&&t.handleObj)return i=t.handleObj,e(t.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if(typeof t=="object"){for(s in t)this.off(s,n,t[s]);return this}if(n===!1||typeof n=="function")r=n,n=undefined;return r===!1&&(r=o),this.each(function(){e.event.remove(this,t,r,n)})}}),e});