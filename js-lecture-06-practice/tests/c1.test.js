const longestWord = require("../challenges/c1");

test("returns the longest word", () => {
  expect(longestWord("the quick brown fox")).toBe("quick");
});

test("returns first word if tie", () => {
  expect(longestWord("hi by")).toBe("hi");
});
