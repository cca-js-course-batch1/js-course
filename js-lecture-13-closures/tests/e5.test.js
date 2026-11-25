const makeAdder = require("../challenges/e5");

test("add10 adds 10 to any number", () => {
  const add10 = makeAdder(10);
  expect(add10(5)).toBe(15);
  expect(add10(20)).toBe(30);
});
