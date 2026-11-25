const addItem = require("../challenges/e2");

test("adds item to end of array", () => {
  expect(addItem([1, 2], 3)).toEqual([1, 2, 3]);
});

test("adds to empty array", () => {
  expect(addItem([], "hello")).toEqual(["hello"]);
});
