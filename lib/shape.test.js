const { Shape, Circle, Square, Triangle } = require("./shape.js");

describe("Shape", () => {
  it("should throw an error when the create SVG method is called", () => {
    expect(() => new Shape("red").createSVG()).toThrowError();
  });

  describe("Circle", () => {
    it("should create a red svg circle", () => {
      let testCircle = `<circle cx="150" cy="100" r="80" fill="red" />`;
      let createdCircle = new Circle("red");
      expect(createdCircle.createSVG()).toMatch(testCircle);
    });
  });
  describe("Square", () => {
    it("should create a green svg square", () => {
      let testSquare = `<rect width='100' height='100' x="100" y="50" fill="green" />`;
      let createdSquare = new Square("green");
      expect(createdSquare.createSVG()).toMatch(testSquare);
    });
  });
  describe("Triangle", () => {
    it("should create a blue svg triangle", () => {
      let testTriangle = `<polygon points="150,50 92.25,150 207.75,150" fill="blue" />`;
      let createdTriangle = new Triangle("blue");
      expect(createdTriangle.createSVG()).toMatch(testTriangle);
    });
  });
});
