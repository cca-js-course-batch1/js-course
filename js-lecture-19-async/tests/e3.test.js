const delayResolve = require("../challenges/e3");

test("resolves with value after delay", async () => {
  const result = await delayResolve("hello", 10);
  expect(result).toBe("hello");
});
