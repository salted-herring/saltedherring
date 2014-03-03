describe("Image",function(){var e;beforeEach(function(){e=draw.image(imageUrl,100,100)}),afterEach(function(){draw.clear()}),describe("x()",function(){it("should return the value of x without an argument",function(){expect(e.x()).toBe(0)}),it("should set the value of x with the first argument",function(){e.x(123);var t=e.bbox();expect(t.x).toBe(123)})}),describe("y()",function(){it("should return the value of y without an argument",function(){expect(e.y()).toBe(0)}),it("should set the value of y with the first argument",function(){e.y(345);var t=e.bbox();expect(t.y).toBe(345)})}),describe("cx()",function(){it("should return the value of cx without an argument",function(){expect(e.cx()).toBe(50)}),it("should set the value of cx with the first argument",function(){e.cx(123);var t=e.bbox();expect(t.cx).toBe(123)})}),describe("cy()",function(){it("should return the value of cy without an argument",function(){expect(e.cy()).toBe(50)}),it("should set the value of cy with the first argument",function(){e.cy(345);var t=e.bbox();expect(t.cy).toBe(345)})}),describe("move()",function(){it("should set the x and y position",function(){e.move(123,456),expect(e.node.getAttribute("x")).toBe("123"),expect(e.node.getAttribute("y")).toBe("456")})}),describe("center()",function(){it("should set the cx and cy position",function(){e.center(321,567);var t=e.bbox();expect(t.cx).toBe(321),expect(t.cy).toBe(567)})}),describe("size()",function(){it("should define the width and height of the element",function(){e.size(987,654),expect(e.node.getAttribute("width")).toBe("987"),expect(e.node.getAttribute("height")).toBe("654")})}),describe("scale()",function(){it("should scale the element universally with one argument",function(){var t=e.scale(2).bbox();expect(t.width).toBe(e.attr("width")*2),expect(t.height).toBe(e.attr("height")*2)}),it("should scale the element over individual x and y axes with two arguments",function(){var t=e.scale(2,3.5).bbox();expect(t.width).toBe(e.attr("width")*2),expect(t.height).toBe(e.attr("height")*3.5)})}),describe("translate()",function(){it("should set the translation of an element",function(){e.transform({x:12,y:12}),expect(e.node.getAttribute("transform")).toBe("translate(12 12)")})})});