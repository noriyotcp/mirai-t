import puppeteer from "puppeteer";

export class Crawler {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public crawl(): void {
    (async () => {
      // Wait for browser launching.
      const browser = await puppeteer.launch({
        headless: false,
        slowMo: 50
      });
      const page = await browser.newPage();

      await page.goto(this.baseUrl);

      await page.setViewport({ width: 1200, height: 800 });

      await page.waitForSelector("textarea#translateSourceInput");
      // await page.click("#translateSourceInput");
      await page.type(
        "textarea#translateSourceInput",
        "これはペンです。\n複数行だとどうなるの？"
      );

      // Select Japanese
      await page.waitForSelector(
        ".sourceLanguageDiv #select2-sourceButtonUrlTranslation-container"
      );
      await page.click(
        ".sourceLanguageDiv #select2-sourceButtonUrlTranslation-container"
      );

      const [sourceButton] = await page.$x(
        `//*[@id="select2-sourceButtonUrlTranslation-results"]/li[contains(., "日本語")]`
      );
      if (sourceButton) {
        await sourceButton.click();
      }

      // Select English
      await page.waitForSelector(
        ".targetLanguageDiv #select2-targetButtonTextTranslation-container"
      );
      await page.click(
        ".targetLanguageDiv #select2-targetButtonTextTranslation-container"
      );

      const [targetButton] = await page.$x(
        `//*[@id="select2-targetButtonTextTranslation-results"]/li[contains(., "英語")]`
      );
      if (targetButton) {
        await targetButton.click();
      }

      // Submit
      await page.waitForSelector("button#translateButtonTextTranslation");
      // await page.click("button#translateButtonTextTranslation");

      const [response] = await Promise.all([
        page.waitForResponse("https://miraitranslate.com/trial/translate.php"),
        page.click("button#translateButtonTextTranslation")
      ]);
      const responseJson: string = await response.json();
      console.log(responseJson);
    })();
  }
}
