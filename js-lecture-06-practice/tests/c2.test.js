const numToWords = require("../challenges/c2");

test("returns three for 3", () => {
  expect(numToWords(3)).toBe("three");
});

test("returns one for 1", () => {
  expect(numToWords(1)).toBe("one");
});

test("returns out of range for 10", () => {
  expect(numToWords(10)).toBe("out of range");
});
