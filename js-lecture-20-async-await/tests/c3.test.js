const cacheAsync = require("../challenges/c3");

test("returns correct result", async () => {
  const fn = cacheAsync(async n => n * 2);
  expect(await fn(5)).toBe(10);
});

test("caches result for same argument", async () => {
  let callCount = 0;
  const fn = cacheAsync(async n => { callCount++; return n * 2; });
  await fn(5);
  await fn(5);
  expect(callCount).toBe(1);
});
