const once = require("../challenges/e4");

test("calls fn only once", () => {
  let count = 0;
  const inc = once(() => { count++; return count; });
  inc();
  inc();
  expect(count).toBe(1);
});

test("always returns first result", () => {
  const fn = once(() => "initialized");
  fn();
  expect(fn()).toBe("initialized");
});
