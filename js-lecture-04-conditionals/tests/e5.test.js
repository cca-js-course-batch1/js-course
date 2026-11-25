const dayType = require("../challenges/e5");

test("returns Weekend for Saturday", () => {
  expect(dayType("Saturday")).toBe("Weekend");
});

test("returns Weekend for Sunday", () => {
  expect(dayType("Sunday")).toBe("Weekend");
});

test("returns Weekday for Monday", () => {
  expect(dayType("Monday")).toBe("Weekday");
});
