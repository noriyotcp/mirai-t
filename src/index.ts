import program, { CommanderStatic } from "commander";
import { Crawler } from "./crawler";
import * as interactive from "./interactive";
import { LANGUAGES } from "./languages";
import * as translater from "./translate";
// tslint:disable-next-line: no-var-requires
const pj = require("../package.json");
const crawler = new Crawler("https://miraitranslate.com/trial/");

program.name("mirai-t").usage("<string> [global options]");

program.version(`${pj.version}`, "-v, --version");
program
  .option("-d, --debug", "run the program with launching Chromium in head mode")
  .option("-i, --interactive", "interactive mode")
  .option("-s, --source <language>", "source language")
  .option("-t, --target <language>", "target language");

program.on("option:debug", () => {
  crawler.isHeadless = false;
});

program.on("option:interactive", (): void => {
  interactive.doTranslate(crawler);
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
  const crawler = new Crawler("https://miraitranslate.com/trial/");
  translater.translate(crawler, params);
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
