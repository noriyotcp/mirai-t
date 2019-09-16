import program from "commander";
import * as interactive from "./interactive";
import { LANGUAGES } from "./languages";
import * as translater from "./translate";

program.name("mirai-t").usage("<string> [global options]");

program.version("0.0.1", "-v, --version");
program
  .option("-d, --debug", "output extra debugging")
  .option("-i, --interactive", "interactive mode")
  .option("-s, --source <language>", "source language")
  .option("-t, --target <language>", "target language");

program.on("option:debug", () => {
  console.log("Debug!");
  console.log(program.opts());
});

program.on("option:interactive", (): void => {
  interactive.prompt();
});

program.on("option:source", (lang: string): void => {
  if (!validateLang(lang)) {
    console.log("Choose a valid language!");
    process.exit(1);
  }
});

program.on("option:target", (lang: string): void => {
  if (!validateLang(lang)) {
    console.log("Choose a valid language!");
    process.exit(1);
  }
});

// Show help with no arguments
if (process.argv.length < 3) {
  program.help();
}

program.parse(process.argv);

if (!program.interactive) {
  const params = createParams(program.args);
  console.log(translater.translate(params));
}

function createParams(words: string[]): string {
  const { source, target } = program.opts();
  const str = words.join(" ").trim();
  return JSON.stringify({ source, target, text: `${str}` }, null, " ");
}

function validateLang(optValue: string): object | undefined {
  return LANGUAGES.find(lang => {
    return lang.text === optValue || lang.id === optValue;
  });
}
