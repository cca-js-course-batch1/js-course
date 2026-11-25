const buildPyramid = require("../challenges/c3");

test("returns correct pyramid for 4", () => {
  expect(buildPyramid(4)).toEqual(["1", "1 2", "1 2 3", "1 2 3 4"]);
});

test("returns single row for 1", () => {
  expect(buildPyramid(1)).toEqual(["1"]);
});
