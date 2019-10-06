/* tslint:disable:object-literal-sort-keys */
import inquirer, { QuestionCollection } from "inquirer";
import { Crawler } from "./crawler";
import { LANGUAGES } from "./languages";
import * as translater from "./translate";

export function prompt(): void {
  const questions: QuestionCollection = [
    {
      type: "list",
      name: "source",
      message: "Please select a source language.",
      default: "Japanese",
      choices: LANGUAGES.map(lang => lang.text)
    },
    {
      type: "list",
      name: "target",
      message: "Please select a target language.",
      default: "English",
      choices: LANGUAGES.map(lang => lang.text)
    },
    {
      type: "editor",
      name: "text",
      message: "Please enter text",
      filter: (text: string): string => {
        return text.trim();
      },
      validate: (text: string): boolean => {
        if (text.length === 0) {
          console.log("Please input the text to translate.");
          return false;
        }
        return true;
      }
    }
  ];

  inquirer.prompt(questions).then(answers => {
    const result: string = JSON.stringify(answers, null, " ");
    console.log(answers.text);
    const crawler = new Crawler("https://miraitranslate.com/trial/");
    translater.translate(crawler, result);
  });
}
