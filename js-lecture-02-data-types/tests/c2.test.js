const describeProduct = require("../challenges/c2");

test("shows In Stock when inStock is true", () => {
  const result = describeProduct("Pen", 10, 5, true);
  expect(result).toContain("In Stock");
});

test("shows Out of Stock when inStock is false", () => {
  const result = describeProduct("Pen", 10, 0, false);
  expect(result).toContain("Out of Stock");
});

test("includes product name", () => {
  const result = describeProduct("Pen", 10, 5, true);
  expect(result).toContain("Pen");
});
