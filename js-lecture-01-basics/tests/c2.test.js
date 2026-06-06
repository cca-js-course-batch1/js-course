const swapValues = require("../challenges/c2");

test("swaps numbers", () => {
  expect(swapValues({ a: 1, b: 2 })).toEqual({ a: 2, b: 1 });
});

test("swaps strings", () => {
  expect(swapValues({ a: "hello", b: "world" })).toEqual({ a: "world", b: "hello" });
});
