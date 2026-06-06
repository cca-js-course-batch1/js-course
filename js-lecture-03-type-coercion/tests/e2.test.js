const toStr = require("../challenges/e2");

test("converts number to string", () => {
  expect(toStr(100)).toBe("100");
});

test("converts boolean to string", () => {
  expect(toStr(true)).toBe("true");
});
