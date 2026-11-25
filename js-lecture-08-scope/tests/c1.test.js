const makeCounter = require("../challenges/c1");

test("increments by step", () => {
  const c = makeCounter(0, 5);
  expect(c.increment()).toBe(5);
  expect(c.increment()).toBe(10);
});

test("resets to start", () => {
  const c = makeCounter(0, 5);
  c.increment();
  c.increment();
  expect(c.reset()).toBe(0);
});
