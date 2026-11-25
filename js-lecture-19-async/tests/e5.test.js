const runAll = require("../challenges/e5");

test("resolves all promises", async () => {
  const results = await runAll([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]);
  expect(results).toEqual([1, 2, 3]);
});
