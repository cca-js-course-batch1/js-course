const myReduce = require("../challenges/c1");

test("sums array with reduce", () => {
  expect(myReduce([1, 2, 3, 4], (acc, n) => acc + n, 0)).toBe(10);
});

test("builds string with reduce", () => {
  expect(myReduce(["a", "b", "c"], (acc, s) => acc + s, "")).toBe("abc");
});
