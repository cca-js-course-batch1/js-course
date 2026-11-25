const curryAdd = require("../challenges/e3");

test("curried add works", () => {
  const add5 = curryAdd(5);
  expect(add5(3)).toBe(8);
  expect(add5(10)).toBe(15);
});
