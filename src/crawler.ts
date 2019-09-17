import puppeteer from "puppeteer";

export class Crawler {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public crawl(params: { source: string; target: string; text: string }): void {
    (async () => {
      // Wait for browser launching.
      const browser = await puppeteer.launch({
        headless: true,
        slowMo: 50
      });
      const page = await browser.newPage();

      await page.goto(this.baseUrl);

      await page.setViewport({ width: 1200, height: 800 });

      const sourceInput = "textarea#translateSourceInput";
      await page.waitForSelector(sourceInput);
      await page.type(sourceInput, `${params.text}`);

      // Select a source language
      const sourceSelect =
        ".sourceLanguageDiv #select2-sourceButtonUrlTranslation-container";
      await page.waitForSelector(sourceSelect);
      await page.click(sourceSelect);

      const [sourceButton] = await page.$x(
        `//*[@id="select2-sourceButtonUrlTranslation-results"]/li[contains(., "${params.source}")]`
      );
      if (sourceButton) {
        await sourceButton.click();
      }

      // Select a target language
      const targetSelect =
        ".targetLanguageDiv #select2-targetButtonTextTranslation-container";
      await page.waitForSelector(targetSelect);
      await page.click(targetSelect);

      const [targetButton] = await page.$x(
        `//*[@id="select2-targetButtonTextTranslation-results"]/li[contains(., "${params.target}")]`
      );
      if (targetButton) {
        await targetButton.click();
      }

      // Submit
      const translateButton = "button#translateButtonTextTranslation";
      await page.waitForSelector(translateButton);

      const [response] = await Promise.all([
        page.waitForResponse("https://miraitranslate.com/trial/translate.php"),
        page.click(translateButton)
      ]);
      const responseJson: {
        status: string;
        outputs: [{ output: string }];
      } = await response.json();
      console.log(responseJson.outputs[0].output);
      browser.close();
    })();
  }
}

// Such a response returns when the text is over 2000 characters
// {"status":"failed","error_msg":"input string is too long."}
