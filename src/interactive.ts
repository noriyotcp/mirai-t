/* tslint:disable:object-literal-sort-keys */
import inquirer from "inquirer";

export function prompt(): void {
  const questions: object[] = [
    {
      type: "list",
      name: "source",
      message: "Please select a source language",
      default: "Japanese",
      choices: ["Japanese", "English"]
    },
    {
      type: "list",
      name: "target",
      message: "Please select a target language",
      default: "English",
      choices: ["Japanese", "English"]
    },
    {
      type: "editor",
      name: "text",
      message: "Please enter text"
      // validate: text => {
      //   // if (text.split("\n").length < 3) {
      //   //   console.log(text);
      //   //   return "Must be at least 3 lines.";
      //   // }
      //   return true;
      // }
    }
  ];

  inquirer.prompt(questions).then(answers => {
    console.log(JSON.stringify(answers, null, " "));
  });
}
