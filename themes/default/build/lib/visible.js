!function(e){var t=e(window);e.fn.visible=function(e,n,r){if(!(this.length<1)){var i=this.length>1?this.eq(0):this,s=i.get(0),o=t.width(),u=t.height(),r=r?r:"both",a=n===!0?s.offsetWidth*s.offsetHeight:!0;if("function"==typeof s.getBoundingClientRect){var f=s.getBoundingClientRect(),l=f.top>=0&&f.top<u,c=f.bottom>0&&f.bottom<=u,h=f.left>=0&&f.left<o,p=f.right>0&&f.right<=o,d=e?l||c:l&&c,v=e?h||p:h&&p;if("both"===r)return a&&d&&v;if("vertical"===r)return a&&d;if("horizontal"===r)return a&&v}else{var m=t.scrollTop(),g=m+u,y=t.scrollLeft(),b=y+o,w=i.offset(),E=w.top,S=E+i.height(),x=w.left,T=x+i.width(),N=e===!0?S:E,C=e===!0?E:S,k=e===!0?T:x,L=e===!0?x:T;if("both"===r)return!!a&&g>=C&&N>=m&&b>=L&&k>=y;if("vertical"===r)return!!a&&g>=C&&N>=m;if("horizontal"===r)return!!a&&b>=L&&k>=y}}}}(jQuery);