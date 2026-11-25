const safeFetch = require("../challenges/e2");

test("returns resolved value", async () => {
  expect(await safeFetch(Promise.resolve("data"))).toBe("data");
});

test("returns null on rejection", async () => {
  expect(await safeFetch(Promise.reject(new Error("fail")))).toBeNull();
});
