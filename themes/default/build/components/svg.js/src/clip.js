SVG.Clip=function(){this.constructor.call(this,SVG.create("clipPath")),this.targets=[]},SVG.Clip.prototype=new SVG.Container,SVG.extend(SVG.Clip,{remove:function(){for(var e=this.targets.length-1;e>=0;e--)this.targets[e]&&this.targets[e].unclip();return delete this.targets,this.parent.removeElement(this),this}}),SVG.extend(SVG.Element,{clipWith:function(e){return this.clipper=e instanceof SVG.Clip?e:this.parent.clip().add(e),this.clipper.targets.push(this),this.attr("clip-path",'url("#'+this.clipper.attr("id")+'")')},unclip:function(){return delete this.clipper,this.attr("clip-path",null)}}),SVG.extend(SVG.Container,{clip:function(){return this.defs().put(new SVG.Clip)}});