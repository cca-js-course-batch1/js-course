const handlePromise = require("../challenges/e4");

test("returns resolved value", async () => {
  const result = await handlePromise(Promise.resolve(99));
  expect(result).toBe(99);
});

test("returns null on rejection", async () => {
  const result = await handlePromise(Promise.reject(new Error("fail")));
  expect(result).toBeNull();
});
