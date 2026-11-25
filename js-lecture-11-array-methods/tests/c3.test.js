const frequencyMap = require("../challenges/c3");

test("counts frequency of each value", () => {
  expect(frequencyMap(["a", "b", "a", "c", "b", "a"])).toEqual({ a: 3, b: 2, c: 1 });
});

test("works with numbers", () => {
  expect(frequencyMap([1, 1, 2])).toEqual({ 1: 2, 2: 1 });
});
