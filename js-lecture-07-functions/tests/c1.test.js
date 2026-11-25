const applyTwice = require("../challenges/c1");

test("applies function twice", () => {
  expect(applyTwice(n => n + 3, 7)).toBe(13);
});

test("doubles twice gives 4x", () => {
  expect(applyTwice(n => n * 2, 3)).toBe(12);
});
