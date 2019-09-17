import program, { CommanderStatic } from "commander";
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
    console.log("This language is not available.");
    process.exit(1);
  }
});

program.on("option:target", (lang: string): void => {
  if (!validateLang(lang)) {
    console.log("This language is not available.");
    process.exit(1);
  }
});

// Show help with no arguments
if (process.argv.length < 3) {
  program.help();
}

program.parse(process.argv);

// Single Line mode
if (!program.interactive) {
  isSourceOrTargetMissed(program);
  const params = createParams(program.args);
  translater.translate(params);
}

function isSourceOrTargetMissed(prog: CommanderStatic) {
  if (!prog.source || !prog.target) {
    console.log("Source and Target are both required.");
    process.exit(1);
  }
}

function createParams(words: string[]): string {
  const { source, target } = program.opts();
  const str = words.join(" ").trim();
  if (str.length === 0) {
    console.log("Please input the text to translate.");
    process.exit(1);
  }
  return JSON.stringify({ source, target, text: `${str}` }, null, " ");
}

function validateLang(optValue: string): object | undefined {
  return LANGUAGES.find(lang => {
    return lang.text === optValue || lang.id === optValue;
  });
}
