const isPalindrome = require("../challenges/e4");

test("racecar is a palindrome", () => {
  expect(isPalindrome("racecar")).toBe(true);
});

test("hello is not a palindrome", () => {
  expect(isPalindrome("hello")).toBe(false);
});

test("a is a palindrome", () => {
  expect(isPalindrome("a")).toBe(true);
});
