/*
C3 - Memoize Simple

Instructions:
- Create a function called memoize
- It takes a function fn as a parameter
- Return a new function that:
  - Checks if the argument was already used before
  - If yes, return the cached result
  - If no, call fn, store the result, and return it
- Only needs to support single-argument functions
- Example:
    const memoSquare = memoize(n => n * n)
    memoSquare(4)  // 16 (computed)
    memoSquare(4)  // 16 (from cache)
*/

function memoize(fn) {
  // write your code here
}

module.exports = memoize;
