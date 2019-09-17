import { Crawler } from "./crawler";
import { LANGUAGES } from "./languages";

export function translate(json: string): void {
  const params: {
    source: string;
    target: string;
    text: string;
  } = convertTextToJaText(json);
  const c = new Crawler("https://miraitranslate.com/trial/");
  c.crawl(params);
}

function convertTextToJaText(
  json: string
): { source: string; target: string; text: string } {
  const source = LANGUAGES.find(lang => {
    return (
      lang.text === JSON.parse(json).source ||
      lang.id === JSON.parse(json).source
    );
  })!.jaText;
  const target = LANGUAGES.find(lang => {
    return (
      lang.text === JSON.parse(json).target ||
      lang.id === JSON.parse(json).target
    );
  })!.jaText;
  return { source, target, text: JSON.parse(json).text };
}
