const calcBill = require("../challenges/c1");

test("calculates tip correctly", () => {
  const result = calcBill(100, 10, 1);
  expect(result.tip).toBe(10);
});

test("calculates total correctly", () => {
  const result = calcBill(100, 10, 1);
  expect(result.total).toBe(110);
});

test("splits bill correctly", () => {
  const result = calcBill(100, 10, 2);
  expect(result.perPerson).toBe(55);
});
