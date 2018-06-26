/*!
 * VERSION: 2.0.1
 * DATE: 2018-05-30
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */

var _gsScope=typeof module!="undefined"&&module.exports&&typeof global!="undefined"?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(e,t,n){var r=function(e){t.call(this,e),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var n=this.vars,r,i;for(i in n)r=n[i],a(r)&&r.join("").indexOf("{self}")!==-1&&(n[i]=this._swapSelfInParams(r));a(n.tweens)&&this.add(n.tweens,0,n.align,n.stagger)},i=1e-10,s=n._internals,o=r._internals={},u=s.isSelector,a=s.isArray,f=s.lazyTweens,l=s.lazyRender,c=_gsScope._gsDefine.globals,h=function(e){var t={},n;for(n in e)t[n]=e[n];return t},p=function(e,t,n){var r=e.cycle,i,s;for(i in r)s=r[i],e[i]=typeof s=="function"?s(n,t[n]):s[n%s.length];delete e.cycle},d=o.pauseCallback=function(){},v=function(e){var t=[],n=e.length,r;for(r=0;r!==n;t.push(e[r++]));return t},m=r.prototype=new t;return r.version="2.0.1",m.constructor=r,m.kill()._gc=m._forcingPlayhead=m._hasPause=!1,m.to=function(e,t,r,i){var s=r.repeat&&c.TweenMax||n;return t?this.add(new s(e,t,r),i):this.set(e,r,i)},m.from=function(e,t,r,i){return this.add((r.repeat&&c.TweenMax||n).from(e,t,r),i)},m.fromTo=function(e,t,r,i,s){var o=i.repeat&&c.TweenMax||n;return t?this.add(o.fromTo(e,t,r,i),s):this.set(e,i,s)},m.staggerTo=function(e,t,i,s,o,a,f,l){var c=new r({onComplete:a,onCompleteParams:f,callbackScope:l,smoothChildTiming:this.smoothChildTiming}),d=i.cycle,m,g;typeof e=="string"&&(e=n.selector(e)||e),e=e||[],u(e)&&(e=v(e)),s=s||0,s<0&&(e=v(e),e.reverse(),s*=-1);for(g=0;g<e.length;g++)m=h(i),m.startAt&&(m.startAt=h(m.startAt),m.startAt.cycle&&p(m.startAt,e,g)),d&&(p(m,e,g),m.duration!=null&&(t=m.duration,delete m.duration)),c.to(e[g],t,m,g*s);return this.add(c,o)},m.staggerFrom=function(e,t,n,r,i,s,o,u){return n.immediateRender=n.immediateRender!=0,n.runBackwards=!0,this.staggerTo(e,t,n,r,i,s,o,u)},m.staggerFromTo=function(e,t,n,r,i,s,o,u,a){return r.startAt=n,r.immediateRender=r.immediateRender!=0&&n.immediateRender!=0,this.staggerTo(e,t,r,i,s,o,u,a)},m.call=function(e,t,r,i){return this.add(n.delayedCall(0,e,t,r),i)},m.set=function(e,t,r){return r=this._parseTimeOrLabel(r,0,!0),t.immediateRender==null&&(t.immediateRender=r===this._time&&!this._paused),this.add(new n(e,0,t),r)},r.exportRoot=function(e,t){e=e||{},e.smoothChildTiming==null&&(e.smoothChildTiming=!0);var i=new r(e),s=i._timeline,o,u,a,f;t==null&&(t=!0),s._remove(i,!0),i._startTime=0,i._rawPrevTime=i._time=i._totalTime=s._time,a=s._first;while(a){f=a._next;if(!t||!(a instanceof n&&a.target===a.vars.onComplete))u=a._startTime-a._delay,u<0&&(o=1),i.add(a,u);a=f}return s.add(i,0),o&&i.totalDuration(),i},m.add=function(i,s,o,u){var f,l,c,h,p,d;typeof s!="number"&&(s=this._parseTimeOrLabel(s,0,!0,i));if(!(i instanceof e)){if(i instanceof Array||i&&i.push&&a(i)){o=o||"normal",u=u||0,f=s,l=i.length;for(c=0;c<l;c++)a(h=i[c])&&(h=new r({tweens:h})),this.add(h,f),typeof h!="string"&&typeof h!="function"&&(o==="sequence"?f=h._startTime+h.totalDuration()/h._timeScale:o==="start"&&(h._startTime-=h.delay())),f+=u;return this._uncache(!0)}if(typeof i=="string")return this.addLabel(i,s);if(typeof i!="function")throw"Cannot add "+i+" into the timeline; it is not a tween, timeline, function, or string.";i=n.delayedCall(0,i)}t.prototype.add.call(this,i,s),i._time&&i.render((this.rawTime()-i._startTime)*i._timeScale,!1,!1);if(this._gc||this._time===this._duration)if(!this._paused&&this._duration<this.duration()){p=this,d=p.rawTime()>i._startTime;while(p._timeline)d&&p._timeline.smoothChildTiming?p.totalTime(p._totalTime,!0):p._gc&&p._enabled(!0,!1),p=p._timeline}return this},m.remove=function(t){if(t instanceof e){this._remove(t,!1);var n=t._timeline=t.vars.useFrames?e._rootFramesTimeline:e._rootTimeline;return t._startTime=(t._paused?t._pauseTime:n._time)-(t._reversed?t.totalDuration()-t._totalTime:t._totalTime)/t._timeScale,this}if(t instanceof Array||t&&t.push&&a(t)){var r=t.length;while(--r>-1)this.remove(t[r]);return this}return typeof t=="string"?this.removeLabel(t):this.kill(null,t)},m._remove=function(e,n){t.prototype._remove.call(this,e,n);var r=this._last;return r?this._time>this.duration()&&(this._time=this._duration,this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},m.append=function(e,t){return this.add(e,this._parseTimeOrLabel(null,t,!0,e))},m.insert=m.insertMultiple=function(e,t,n,r){return this.add(e,t||0,n,r)},m.appendMultiple=function(e,t,n,r){return this.add(e,this._parseTimeOrLabel(null,t,!0,e),n,r)},m.addLabel=function(e,t){return this._labels[e]=this._parseTimeOrLabel(t),this},m.addPause=function(e,t,r,i){var s=n.delayedCall(0,d,r,i||this);return s.vars.onComplete=s.vars.onReverseComplete=t,s.data="isPause",this._hasPause=!0,this.add(s,e)},m.removeLabel=function(e){return delete this._labels[e],this},m.getLabelTime=function(e){return this._labels[e]!=null?this._labels[e]:-1},m._parseTimeOrLabel=function(t,n,r,i){var s,o;if(i instanceof e&&i.timeline===this)this.remove(i);else if(i&&(i instanceof Array||i.push&&a(i))){o=i.length;while(--o>-1)i[o]instanceof e&&i[o].timeline===this&&this.remove(i[o])}s=typeof t=="number"&&!n?0:this.duration()>99999999999?this.recent().endTime(!1):this._duration;if(typeof n=="string")return this._parseTimeOrLabel(n,r&&typeof t=="number"&&this._labels[n]==null?t-s:0,r);n=n||0;if(typeof t!="string"||!isNaN(t)&&this._labels[t]==null)t==null&&(t=s);else{o=t.indexOf("=");if(o===-1)return this._labels[t]==null?r?this._labels[t]=s+n:n:this._labels[t]+n;n=parseInt(t.charAt(o-1)+"1",10)*Number(t.substr(o+1)),t=o>1?this._parseTimeOrLabel(t.substr(0,o-1),0,r):s}return Number(t)+n},m.seek=function(e,t){return this.totalTime(typeof e=="number"?e:this._parseTimeOrLabel(e),t!==!1)},m.stop=function(){return this.paused(!0)},m.gotoAndPlay=function(e,t){return this.play(e,t)},m.gotoAndStop=function(e,t){return this.pause(e,t)},m.render=function(e,t,n){this._gc&&this._enabled(!0,!1);var r=this._time,s=this._dirty?this.totalDuration():this._totalDuration,o=this._startTime,u=this._timeScale,a=this._paused,c,h,p,d,v,m,g;r!==this._time&&(e+=this._time-r);if(e>=s-1e-7&&e>=0)this._totalTime=this._time=s,this._reversed||this._hasPausedChild()||(h=!0,d="onComplete",v=!!this._timeline.autoRemoveChildren,this._duration===0&&(e<=0&&e>=-1e-7||this._rawPrevTime<0||this._rawPrevTime===i)&&this._rawPrevTime!==e&&this._first&&(v=!0,this._rawPrevTime>i&&(d="onReverseComplete"))),this._rawPrevTime=this._duration||!t||e||this._rawPrevTime===e?e:i,e=s+1e-4;else if(e<1e-7){this._totalTime=this._time=0;if(r!==0||this._duration===0&&this._rawPrevTime!==i&&(this._rawPrevTime>0||e<0&&this._rawPrevTime>=0))d="onReverseComplete",h=this._reversed;if(e<0)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(v=h=!0,d="onReverseComplete"):this._rawPrevTime>=0&&this._first&&(v=!0),this._rawPrevTime=e;else{this._rawPrevTime=this._duration||!t||e||this._rawPrevTime===e?e:i;if(e===0&&h){c=this._first;while(c&&c._startTime===0)c._duration||(h=!1),c=c._next}e=0,this._initted||(v=!0)}}else{if(this._hasPause&&!this._forcingPlayhead&&!t){if(e>=r){c=this._first;while(c&&c._startTime<=e&&!m)c._duration||c.data==="isPause"&&!c.ratio&&(c._startTime!==0||this._rawPrevTime!==0)&&(m=c),c=c._next}else{c=this._last;while(c&&c._startTime>=e&&!m)c._duration||c.data==="isPause"&&c._rawPrevTime>0&&(m=c),c=c._prev}m&&(this._time=e=m._startTime,this._totalTime=e+this._cycle*(this._totalDuration+this._repeatDelay))}this._totalTime=this._time=this._rawPrevTime=e}if((this._time===r||!this._first)&&!n&&!v&&!m)return;this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==r&&e>0&&(this._active=!0),r===0&&this.vars.onStart&&(this._time!==0||!this._duration)&&(t||this._callback("onStart")),g=this._time;if(g>=r){c=this._first;while(c){p=c._next;if(g!==this._time||this._paused&&!a)break;if(c._active||c._startTime<=g&&!c._paused&&!c._gc)m===c&&this.pause(),c._reversed?c.render((c._dirty?c.totalDuration():c._totalDuration)-(e-c._startTime)*c._timeScale,t,n):c.render((e-c._startTime)*c._timeScale,t,n);c=p}}else{c=this._last;while(c){p=c._prev;if(g!==this._time||this._paused&&!a)break;if(c._active||c._startTime<=r&&!c._paused&&!c._gc){if(m===c){m=c._prev;while(m&&m.endTime()>this._time)m.render(m._reversed?m.totalDuration()-(e-m._startTime)*m._timeScale:(e-m._startTime)*m._timeScale,t,n),m=m._prev;m=null,this.pause()}c._reversed?c.render((c._dirty?c.totalDuration():c._totalDuration)-(e-c._startTime)*c._timeScale,t,n):c.render((e-c._startTime)*c._timeScale,t,n)}c=p}}this._onUpdate&&(t||(f.length&&l(),this._callback("onUpdate"))),d&&!this._gc&&(o===this._startTime||u!==this._timeScale)&&(this._time===0||s>=this.totalDuration())&&(h&&(f.length&&l(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!t&&this.vars[d]&&this._callback(d))},m._hasPausedChild=function(){var e=this._first;while(e){if(e._paused||e instanceof r&&e._hasPausedChild())return!0;e=e._next}return!1},m.getChildren=function(e,t,r,i){i=i||-9999999999;var s=[],o=this._first,u=0;while(o)o._startTime<i||(o instanceof n?t!==!1&&(s[u++]=o):(r!==!1&&(s[u++]=o),e!==!1&&(s=s.concat(o.getChildren(!0,t,r)),u=s.length))),o=o._next;return s},m.getTweensOf=function(e,t){var r=this._gc,i=[],s=0,o,u;r&&this._enabled(!0,!0),o=n.getTweensOf(e),u=o.length;while(--u>-1)if(o[u].timeline===this||t&&this._contains(o[u]))i[s++]=o[u];return r&&this._enabled(!1,!0),i},m.recent=function(){return this._recent},m._contains=function(e){var t=e.timeline;while(t){if(t===this)return!0;t=t.timeline}return!1},m.shiftChildren=function(e,t,n){n=n||0;var r=this._first,i=this._labels,s;while(r)r._startTime>=n&&(r._startTime+=e),r=r._next;if(t)for(s in i)i[s]>=n&&(i[s]+=e);return this._uncache(!0)},m._kill=function(e,t){if(!e&&!t)return this._enabled(!1,!1);var n=t?this.getTweensOf(t):this.getChildren(!0,!0,!1),r=n.length,i=!1;while(--r>-1)n[r]._kill(e,t)&&(i=!0);return i},m.clear=function(e){var t=this.getChildren(!1,!0,!0),n=t.length;this._time=this._totalTime=0;while(--n>-1)t[n]._enabled(!1,!1);return e!==!1&&(this._labels={}),this._uncache(!0)},m.invalidate=function(){var t=this._first;while(t)t.invalidate(),t=t._next;return e.prototype.invalidate.call(this)},m._enabled=function(e,n){if(e===this._gc){var r=this._first;while(r)r._enabled(e,!0),r=r._next}return t.prototype._enabled.call(this,e,n)},m.totalTime=function(t,n,r){this._forcingPlayhead=!0;var i=e.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,i},m.duration=function(e){return arguments.length?(this.duration()!==0&&e!==0&&this.timeScale(this._duration/e),this):(this._dirty&&this.totalDuration(),this._duration)},m.totalDuration=function(e){if(!arguments.length){if(this._dirty){var t=0,n=this._last,r=999999999999,i,s;while(n)i=n._prev,n._dirty&&n.totalDuration(),n._startTime>r&&this._sortChildren&&!n._paused&&!this._calculatingDuration?(this._calculatingDuration=1,this.add(n,n._startTime-n._delay),this._calculatingDuration=0):r=n._startTime,n._startTime<0&&!n._paused&&(t-=n._startTime,this._timeline.smoothChildTiming&&(this._startTime+=n._startTime/this._timeScale,this._time-=n._startTime,this._totalTime-=n._startTime,this._rawPrevTime-=n._startTime),this.shiftChildren(-n._startTime,!1,-9999999999),r=0),s=n._startTime+n._totalDuration/n._timeScale,s>t&&(t=s),n=i;this._duration=this._totalDuration=t,this._dirty=!1}return this._totalDuration}return e&&this.totalDuration()?this.timeScale(this._totalDuration/e):this},m.paused=function(t){if(!t){var n=this._first,r=this._time;while(n)n._startTime===r&&n.data==="isPause"&&(n._rawPrevTime=0),n=n._next}return e.prototype.paused.apply(this,arguments)},m.usesFrames=function(){var t=this._timeline;while(t._timeline)t=t._timeline;return t===e._rootFramesTimeline},m.rawTime=function(e){return e&&(this._paused||this._repeat&&this.time()>0&&this.totalProgress()<1)?this._totalTime%(this._duration+this._repeatDelay):this._paused?this._totalTime:(this._timeline.rawTime(e)-this._startTime)*this._timeScale},r},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(e){var t=function(){return(_gsScope.GreenSockGlobals||_gsScope)[e]};typeof module!="undefined"&&module.exports?(require("./TweenLite.js"),module.exports=t()):typeof define=="function"&&define.amd&&define(["TweenLite"],t)}("TimelineLite");