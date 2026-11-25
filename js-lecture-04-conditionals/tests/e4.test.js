const maxOfTwo = require("../challenges/e4");

test("returns the larger number", () => {
  expect(maxOfTwo(3, 7)).toBe(7);
});

test("works when first is larger", () => {
  expect(maxOfTwo(10, 2)).toBe(10);
});
