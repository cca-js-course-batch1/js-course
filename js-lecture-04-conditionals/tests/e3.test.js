const isWeekend = require("../challenges/e3");

test("returns true for Saturday", () => {
  expect(isWeekend("Saturday")).toBe(true);
});

test("returns true for Sunday", () => {
  expect(isWeekend("Sunday")).toBe(true);
});

test("returns false for Monday", () => {
  expect(isWeekend("Monday")).toBe(false);
});
