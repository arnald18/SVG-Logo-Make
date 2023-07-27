class Shape {
  constructor(color) {
    this.color = color;
  }

  createSVG() {
    throw new Error("Must be overridden");
  }
}

class Circle extends Shape {
  createSVG() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  createSVG() {
    return `<rect width='100' height='100' x="100" y="50" fill="${this.color}" />`;
  }
}
class Triangle extends Shape {
  createSVG() {
    return `<polygon points="150,50 92.25,150 207.75,150" fill="${this.color}" />`;
  }
}

module.exports = { Circle, Square, Triangle };
