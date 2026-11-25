const extractData = require("../challenges/e2");

test("returns data property", () => {
  expect(extractData({ data: [1, 2, 3] })).toEqual([1, 2, 3]);
});

test("returns null when no data property", () => {
  expect(extractData({ status: "ok" })).toBeNull();
});
