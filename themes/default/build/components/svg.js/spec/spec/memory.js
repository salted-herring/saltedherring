describe("Memory",function(){var e,t;beforeEach(function(){e=draw.rect(100,120),t=draw.circle(100)}),afterEach(function(){draw.clear()}),describe("remember()",function(){it("accepts an object with values",function(){e.remember({bbox:e.bbox()}),e.size(200,300),expect(e.remember("bbox").width).toBe(100)}),it("accepts key / value arguments",function(){e.remember("fill",e.attr("fill")),e.fill("#f09"),expect(e.remember("fill")).toBe("#000000")}),it("acts as a getter with one string argument",function(){e.remember("opacity",.85),expect(e.remember("opacity")).toBe(.85)}),it("saves values to individual objects",function(){e.remember("opacity",.85),t.remember("opacity",.5),expect(e.remember("opacity")).toBe(.85),expect(t.remember("opacity")).toBe(.5)})}),describe("forget()",function(){it("deletes a given memory",function(){e.remember({grass:"is green",one:1}),e.forget("grass"),expect(e.remember("grass")).toBe(undefined),expect(e.remember("one")).toBe(1)}),it("accepts multiple arguments as different memories",function(){e.remember({grass:"might be purple",two:2,sea:!0}),e.forget("grass","sea"),expect(e.remember("grass")).toBe(undefined),expect(e.remember("sea")).toBe(undefined),expect(e.remember("two")).toBe(2)}),it("clears the whole memory without arguments",function(){e.remember({grass:"is never pink",three:3,tree:!0}),e.forget(),expect(e.remember("grass")).toBe(undefined),expect(e.remember("tree")).toBe(undefined),expect(e.remember("three")).toBe(undefined)})})});