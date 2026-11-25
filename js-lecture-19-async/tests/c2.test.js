const retryPromise = require("../challenges/c2");

test("resolves on first success", async () => {
  const result = await retryPromise(() => Promise.resolve(42), 3);
  expect(result).toBe(42);
});

test("retries and succeeds on second attempt", async () => {
  let attempts = 0;
  const fn = () => {
    attempts++;
    if (attempts < 2) return Promise.reject(new Error("fail"));
    return Promise.resolve("ok");
  };
  const result = await retryPromise(fn, 3);
  expect(result).toBe("ok");
});
