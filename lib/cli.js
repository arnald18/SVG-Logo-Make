const inquirer = require("inquirer");

const questions = [
  {
    type: "list",
    message: "What shape do you want",

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
  });
}
