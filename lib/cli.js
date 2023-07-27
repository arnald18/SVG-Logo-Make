//  ADD INQUIRER

const inquirer = require("inquirer");
const SVG = require("./svg.js");
const fs = require("fs");
const questions = [
  {
    type: "list",
    message: "What shape do you want",
    name: "shape",
    choices: ["Square", "Circle", "Triangle"],
  },

  {
    type: "input",
    message: "What text do you want",
    name: "text",
  },
  {
    type: "input",
    message: "what text color do you want",
    name: "textColor",
  },
  {
    type: "input",
    message: "what color shape do you want?",
    name: "shapeColor",
  },
];

function getAnswers() {
  inquirer.prompt(questions).then((answers) => {
    //  TODO - create shapes from input

    let svg = new SVG(
      answers.shape,
      answers.text,
      answers.textColor,
      answers.shapeColor
    );
    // write to a file
    fs.writeFile("./examples/logo.svg", svg.createSVG(), (error) =>
      console.log("test")
    );
  });
}
module.exports = getAnswers;
