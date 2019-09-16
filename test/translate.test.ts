import * as translater from "../src/translate";

describe("basic again", () => {
  beforeEach(() => {
    translater.mockFunc.translate = jest.fn((json: string) => {
      console.log(json);
      return {
        status: "success",
        outputs: [
          {
            output: "This is a mock."
          }
        ]
      };
    });
  });

  test("fetch data", () => {
    const actual = translater.mockFunc.translate(`{
      "source": "Japanese",
      "target": "English",
      "text": "This is a mock."
    }`);
    const expected = {
      status: "success",
      outputs: [
        {
          output: "This is a mock."
        }
      ]
    };
    expect(expected).toEqual(actual);
  });
});
