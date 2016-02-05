/**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *       the user visible viewport of a web browser.
     *       only accounts for vertical position, not horizontal.
     */

(function(e){var t=e(window);e.fn.visible=function(e,n,r){if(this.length<1)return;var i=this.length>1?this.eq(0):this,s=i.get(0),o=t.width(),u=t.height(),r=r?r:"both",a=n===!0?s.offsetWidth*s.offsetHeight:!0;if(typeof s.getBoundingClientRect=="function"){var f=s.getBoundingClientRect(),l=f.top>=0&&f.top<u,c=f.bottom>0&&f.bottom<=u,h=f.left>=0&&f.left<o,p=f.right>0&&f.right<=o,d=e?l||c:l&&c,v=e?h||p:h&&p;if(r==="both")return a&&d&&v;if(r==="vertical")return a&&d;if(r==="horizontal")return a&&v}else{var m=t.scrollTop(),g=m+u,y=t.scrollLeft(),b=y+o,w=i.offset(),E=w.top,S=E+i.height(),x=w.left,T=x+i.width(),N=e===!0?S:E,C=e===!0?E:S,k=e===!0?T:x,L=e===!0?x:T;if(r==="both")return!!a&&C<=g&&N>=m&&L<=b&&k>=y;if(r==="vertical")return!!a&&C<=g&&N>=m;if(r==="horizontal")return!!a&&L<=b&&k>=y}}})(jQuery);