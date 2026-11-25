const tryCatch = require("../challenges/e3");

test("returns result on success", () => {
  const result = tryCatch(() => 42);
  expect(result.result).toBe(42);
  expect(result.error).toBeNull();
});

test("returns error message on failure", () => {
  const result = tryCatch(() => { throw new Error("oops"); });
  expect(result.result).toBeNull();
  expect(result.error).toBe("oops");
});
