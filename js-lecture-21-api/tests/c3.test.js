const createFetcher = require("../challenges/c3");

test("isLoading starts as false", () => {
  const fetcher = createFetcher();
  expect(fetcher.isLoading()).toBe(false);
});

test("getData returns null initially", () => {
  const fetcher = createFetcher();
  expect(fetcher.getData()).toBeNull();
});

test("getData returns result after successful fetch", async () => {
  const fetcher = createFetcher();
  await fetcher.fetch(() => Promise.resolve("result"));
  expect(fetcher.getData()).toBe("result");
});

test("getError returns message after failed fetch", async () => {
  const fetcher = createFetcher();
  await fetcher.fetch(() => Promise.reject(new Error("oops")));
  expect(fetcher.getError()).toBe("oops");
});
