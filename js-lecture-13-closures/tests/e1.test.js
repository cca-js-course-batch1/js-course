const makeCounter = require("../challenges/e1");

test("counts up from 1", () => {
  const counter = makeCounter();
  expect(counter()).toBe(1);
  expect(counter()).toBe(2);
  expect(counter()).toBe(3);
});

test("each counter is independent", () => {
  const c1 = makeCounter();
  const c2 = makeCounter();
  c1();
  c1();
  expect(c2()).toBe(1);
});
