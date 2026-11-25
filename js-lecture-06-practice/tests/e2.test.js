const clamp = require("../challenges/e2");

test("clamps above max", () => {
  expect(clamp(15, 1, 10)).toBe(10);
});

test("clamps below min", () => {
  expect(clamp(-5, 0, 10)).toBe(0);
});

test("returns value when in range", () => {
  expect(clamp(5, 1, 10)).toBe(5);
});
