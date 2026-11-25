const runTwice = require("../challenges/e5");

test("returns array with two results", () => {
  expect(runTwice(n => n + 1, 5)).toEqual([6, 6]);
});
