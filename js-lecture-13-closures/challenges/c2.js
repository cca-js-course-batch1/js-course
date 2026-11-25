/*
C2 - Compose Two Functions

Instructions:
- Create a function called compose
- It takes two functions f and g as parameters
- Return a new function that takes a value x
- The returned function should apply g first, then f
- compose(f, g)(x) is the same as f(g(x))
- Example:
    const add1 = n => n + 1
    const double = n => n * 2
    const doubleThenAdd1 = compose(add1, double)
    doubleThenAdd1(5)  // 11
*/

function compose(f, g) {
  // write your code here
}

module.exports = compose;
