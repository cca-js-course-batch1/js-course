const fizzBuzzOne = require("../challenges/e1");

test("returns Fizz for 3", () => {
  expect(fizzBuzzOne(3)).toBe("Fizz");
});

test("returns Buzz for 5", () => {
  expect(fizzBuzzOne(5)).toBe("Buzz");
});

test("returns FizzBuzz for 15", () => {
  expect(fizzBuzzOne(15)).toBe("FizzBuzz");
});

test("returns number as string for 7", () => {
  expect(fizzBuzzOne(7)).toBe("7");
});
