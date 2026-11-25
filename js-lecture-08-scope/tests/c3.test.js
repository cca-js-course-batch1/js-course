const makeDiscountCalc = require("../challenges/c3");

test("applies 10% discount", () => {
  const tenOff = makeDiscountCalc(10);
  expect(tenOff(200)).toBe(180);
});

test("applies extra reduction", () => {
  const tenOff = makeDiscountCalc(10);
  expect(tenOff(200, 20)).toBe(160);
});
