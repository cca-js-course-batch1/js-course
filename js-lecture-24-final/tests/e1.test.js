const summarize = require("../challenges/e1");

test("returns correct min, max, sum, avg", () => {
  expect(summarize([2, 4, 6])).toEqual({ min: 2, max: 6, sum: 12, avg: 4 });
});
