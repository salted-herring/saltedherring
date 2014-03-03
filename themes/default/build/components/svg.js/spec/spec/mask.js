describe("Mask",function(){var e,t;beforeEach(function(){e=draw.rect(100,100),t=draw.circle(100).move(50,50).fill("#fff"),e.maskWith(t)}),afterEach(function(){draw.clear()}),it("moves the masking element to a new mask node",function(){expect(t.parent instanceof SVG.Mask).toBe(!0)}),it("creates the mask node in the defs node",function(){expect(t.parent.parent).toBe(draw.defs())}),it('sets the "mask" attribute on the masked element with the mask id',function(){expect(e.attr("mask")).toBe('url("#'+t.parent.attr("id")+'")')}),it("references the mask element in the masked element",function(){expect(e.masker).toBe(t.parent)}),it("references the masked element in the mask target list",function(){expect(e.masker.targets.indexOf(e)>-1).toBe(!0)}),it("unmasks all masked elements when being removed",function(){e.masker.remove(),expect(e.attr("mask")).toBe(undefined)}),describe("unmask()",function(){it('clears the "mask" attribute on the masked element',function(){e.unmask(),expect(e.attr("mask")).toBe(undefined)}),it("removes the reference to the masking element",function(){e.unmask(),expect(e.masker).toBe(undefined)}),it("returns the element itslef",function(){expect(e.unmask()).toBe(e)})})});