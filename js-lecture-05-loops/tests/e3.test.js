const repeatStr = require("../challenges/e3");

test("repeats ha three times", () => {
  expect(repeatStr("ha", 3)).toBe("hahaha");
});

test("repeats once", () => {
  expect(repeatStr("hi", 1)).toBe("hi");
});
