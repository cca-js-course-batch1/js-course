const curry = require("../challenges/c2");

test("curried function works", () => {
  const add = (a, b) => a + b;
  const curriedAdd = curry(add);
  expect(curriedAdd(3)(4)).toBe(7);
});
