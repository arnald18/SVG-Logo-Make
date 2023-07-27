const SVG = require("./svg.js");

describe("SVG", () => {
  it("should throw an error when shape type is invalid", () => {
    expect(() => new SVG("Octagon", "SVG", "red", "green")).toThrowError();
  });
});
