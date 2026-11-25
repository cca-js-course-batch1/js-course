const withTimeout = require("../challenges/c1");

test("resolves when promise finishes in time", async () => {
  const p = new Promise(res => setTimeout(() => res("done"), 10));
  const result = await withTimeout(p, 100);
  expect(result).toBe("done");
});

test("rejects with Timed out when too slow", async () => {
  const p = new Promise(res => setTimeout(() => res("done"), 200));
  await expect(withTimeout(p, 50)).rejects.toBe("Timed out");
});
