const calcDiscount = require("../challenges/e5");

test("applies 25% discount", () => {
  expect(calcDiscount(200, 25)).toBe(150);
});

test("uses default 10% discount", () => {
  expect(calcDiscount(200)).toBe(180);
});
