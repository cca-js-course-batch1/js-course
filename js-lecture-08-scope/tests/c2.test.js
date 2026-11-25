const scopeResult = require("../challenges/c2");

test("returns outer x which is 10", () => {
  expect(scopeResult()).toBe(10);
});
