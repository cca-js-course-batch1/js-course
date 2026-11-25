const retry = require("../challenges/c2");

test("returns result if fn succeeds first time", () => {
  expect(retry(() => 42, 3)).toBe(42);
});

test("retries and returns result on second attempt", () => {
  let attempts = 0;
  const fn = () => {
    attempts++;
    if (attempts < 2) throw new Error("fail");
    return "success";
  };
  expect(retry(fn, 3)).toBe("success");
});

test("throws if all attempts fail", () => {
  expect(() => retry(() => { throw new Error("always fails"); }, 3)).toThrow();
});
