/* tslint:disable:object-literal-sort-keys */
import inquirer from "inquirer";
import * as translater from "./translate";
import { LANGUAGES } from "./languages";

export function prompt(): void {
  const questions: object[] = [
    {
      type: "list",
      name: "source",
      message: "Please select a source language",
      default: "Japanese",
      choices: LANGUAGES.map(lang => lang.text)
    },
    {
      type: "list",
      name: "target",
      message: "Please select a target language",
      default: "English",
      choices: LANGUAGES.map(lang => lang.text)
    },
    {
      type: "editor",
      name: "text",
      message: "Please enter text",
      filter: (text: string): string => {
        return text.trim();
      }
    }
  ];

  inquirer.prompt(questions).then(answers => {
    const result: string = JSON.stringify(answers, null, " ");
    console.log(translater.translate(result));
  });
}
