const retryWithBackoff = require("../challenges/c1");

test("succeeds on first try", async () => {
  const result = await retryWithBackoff(() => Promise.resolve("ok"), 3);
  expect(result).toBe("ok");
});

test("throws after all retries fail", async () => {
  await expect(retryWithBackoff(() => Promise.reject(new Error("fail")), 2)).rejects.toThrow();
});
