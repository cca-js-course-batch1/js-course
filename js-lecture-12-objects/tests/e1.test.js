const createProduct = require("../challenges/e1");

test("returns correct object", () => {
  expect(createProduct("Pen", 10, true)).toEqual({ name: "Pen", price: 10, inStock: true });
});
