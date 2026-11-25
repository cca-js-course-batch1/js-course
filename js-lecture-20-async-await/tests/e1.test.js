const asyncDouble = require("../challenges/e1");

test("doubles a number asynchronously", async () => {
  expect(await asyncDouble(5)).toBe(10);
});
