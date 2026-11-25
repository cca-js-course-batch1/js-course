const fizzBuzz = require("../challenges/c1");

test("first 5 items are correct", () => {
  expect(fizzBuzz(5)).toEqual(["1", "2", "Fizz", "4", "Buzz"]);
});

test("15 is FizzBuzz", () => {
  expect(fizzBuzz(15)[14]).toBe("FizzBuzz");
});
