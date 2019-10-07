// tslint:disable: no-string-literal
import { Crawler } from "../src/crawler";

describe("constructor", () => {
  const baseUrl: string = "https://miraitranslate.com/trial/";

  it("initializes this.baseUrl", () => {
    const crawler: Crawler = new Crawler(baseUrl);
    expect(crawler["baseUrl"]).toBe(baseUrl);
  });

  it("initializes this.headless without passing 2nd arg", () => {
    const crawler: Crawler = new Crawler(baseUrl);
    expect(crawler["headless"]).toBe(true);
  });

  it("initializes this.headless with 2nd arg is true", () => {
    const crawler: Crawler = new Crawler(baseUrl, true);
    expect(crawler["headless"]).toBe(true);
  });

  it("initializes this.headless with 2nd arg is false", () => {
    const crawler: Crawler = new Crawler(baseUrl, false);
    expect(crawler["headless"]).toBe(false);
  });
});

describe("setter", () => {
  const baseUrl: string = "https://miraitranslate.com/trial/";

  it("sets false to this.headless via isHeadless", () => {
    const crawler: Crawler = new Crawler(baseUrl, true);
    crawler.isHeadless = false;
    expect(crawler["headless"]).toBe(false);
  });

  it("sets true to this.headless via isHeadless", () => {
    const crawler: Crawler = new Crawler(baseUrl, false);
    crawler.isHeadless = true;
    expect(crawler["headless"]).toBe(true);
  });
});
