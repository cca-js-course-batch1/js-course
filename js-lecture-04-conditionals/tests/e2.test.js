const getGrade = require("../challenges/e2");

test("returns A for 95", () => {
  expect(getGrade(95)).toBe("A");
});

test("returns B for 80", () => {
  expect(getGrade(80)).toBe("B");
});

test("returns C for 65", () => {
  expect(getGrade(65)).toBe("C");
});

test("returns F for 50", () => {
  expect(getGrade(50)).toBe("F");
});
