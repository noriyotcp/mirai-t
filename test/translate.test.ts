import { Crawler } from "../src/crawler";
import * as translater from "../src/translate";

jest.mock("../src/crawler");

describe("translate", () => {
  it("calls Crawler.crawl", () => {
    const spyConsoleLog = jest.spyOn(console, "log");
    const mockCrawl = jest.spyOn(Crawler.prototype, "crawl");
    translater.translate(`{
      "source": "Japanese",
      "target": "English",
      "text": "これはモックです。"
    }`);
    const expected = "This is a mock.";
    expect(spyConsoleLog.mock.calls[0][0]).toEqual(expected);

    expect(mockCrawl.mock.instances[0]).toBeInstanceOf(Crawler);
    expect(mockCrawl).toHaveBeenCalledWith({
      source: "日本語",
      target: "英語",
      text: "これはモックです。"
    });
  });
});
