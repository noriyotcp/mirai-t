/* tslint:disable:object-literal-sort-keys */
import inquirer, { QuestionCollection } from "inquirer";
import { LANGUAGES } from "./languages";
import * as translater from "./translate";

export function prompt(): void {
  const questions: QuestionCollection = [
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
