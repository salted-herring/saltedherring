SVG.Rect=function(){this.constructor.call(this,SVG.create("rect"))},SVG.Rect.prototype=new SVG.Shape,SVG.extend(SVG.Container,{rect:function(e,t){return this.put((new SVG.Rect).size(e,t))}});