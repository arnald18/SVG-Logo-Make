const { Circle, Square, Triangle } = require("./shape.js");

class SVG {
  constructor(shape, text, textColor, shapeColor) {
    if (shape === "Circle") {
      this.shape = new Circle(shapeColor);
    } else if (shape === "Square") {
      this.shape = new Square(shapeColor);
    } else if (shape === "Triangle") {
      this.shape = new Triangle(shapeColor);
    }

    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }

  createSVG() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

   ${this.shape.createSVG()}
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${
      this.textColor
    }">${this.textColor}</text>
  
  </svg>`;
  }
}

module.exports = SVG;
