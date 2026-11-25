const isPrime = require("../challenges/c3");

test("7 is prime", () => {
  expect(isPrime(7)).toBe(true);
});

test("9 is not prime", () => {
  expect(isPrime(9)).toBe(false);
});

test("2 is prime", () => {
  expect(isPrime(2)).toBe(true);
});

test("1 is not prime", () => {
  expect(isPrime(1)).toBe(false);
});
