/* tslint:disable:object-literal-sort-keys */
import { QuestionCollection } from "inquirer";
import { LANGUAGES } from "./languages";

export function setupQuestions(): QuestionCollection {
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
  return questions;
}
