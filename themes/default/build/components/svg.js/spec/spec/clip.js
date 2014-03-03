describe("ClipPath",function(){var e,t;beforeEach(function(){e=draw.rect(100,100),t=draw.circle(100).move(50,50),e.clipWith(t)}),afterEach(function(){draw.clear()}),it("moves the masking element to a new clip node",function(){expect(t.parent instanceof SVG.Clip).toBe(!0)}),it("creates the clip node in the defs node",function(){expect(t.parent.parent).toBe(draw.defs())}),it('sets the "clip-path" attribute on the cliped element with the clip id',function(){expect(e.attr("clip-path")).toBe('url("#'+t.parent.attr("id")+'")')}),it("references the clip element in the masked element",function(){expect(e.clipper).toBe(t.parent)}),it("references the clipped element in the clipPath target list",function(){expect(e.clipper.targets.indexOf(e)>-1).toBe(!0)}),it("unclips all clipped elements when being removed",function(){e.clipper.remove(),expect(e.attr("clip-path")).toBe(undefined)}),describe("unclip()",function(){it('clears the "clip-path" attribute on the clipped element',function(){e.unclip(),expect(e.attr("clip-path")).toBe(undefined)}),it("removes the reference to the clipping element",function(){e.unclip(),expect(e.clipper).toBe(undefined)}),it("returns the clipPath element",function(){expect(e.unclip()).toBe(e)})})});