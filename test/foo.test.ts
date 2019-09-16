import { sum, printSum } from "../src/foo";

// test("basic", () => {
//   expect(sub()).toBe(0);
// });

test("basic again", () => {
  expect(sum(1, 2)).toBe(3);
});

const spyLog = jest.spyOn(console, "log");
spyLog.mockImplementation(x => x);

test("printSum", () => {
  printSum(1, 2);
  printSum(3, 4);
  expect(console.log).toBeCalled();
  expect(spyLog.mock.calls[0][0]).toEqual(3);
  expect(spyLog.mock.calls[1][0]).toEqual(7);
});
