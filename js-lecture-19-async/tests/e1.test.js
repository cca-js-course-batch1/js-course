const resolveWith = require("../challenges/e1");

test("resolves with given value", async () => {
  const result = await resolveWith(42);
  expect(result).toBe(42);
});
