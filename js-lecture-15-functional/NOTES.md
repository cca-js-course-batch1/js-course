# Session 15 - Functional Concepts

## Topics Covered

- Pure vs impure functions
- Recursion basics
- Pass by value vs reference
- Currying introduction

## Pure Functions

A pure function always returns the same output for the same input and does not change anything outside itself.

```js
// pure
function add(a, b) {
  return a + b;
}

// impure - modifies external state
let total = 0;
function addToTotal(n) {
  total += n;
}
```

Pure functions are easier to test and reason about.

## Recursion

A recursive function calls itself until it reaches a base case.

```js
function factorial(n) {
  if (n === 0) return 1;  // base case
  return n * factorial(n - 1);
}

factorial(4);  // 24
```

Always define the base case first. Without it the function calls itself forever and crashes.

## Pass by Value vs Reference

Primitives are passed by value. A copy is made.

```js
function double(n) {
  n = n * 2;
}

let x = 5;
double(x);
console.log(x);  // still 5
```

Objects are passed by reference. The original can be changed.

```js
function addProp(obj) {
  obj.added = true;
}

const data = {};
addProp(data);
console.log(data.added);  // true
```

## Currying

Currying turns a multi-argument function into a chain of single-argument functions.

```js
function add(a) {
  return function(b) {
    return a + b;
  };
}

const add5 = add(5);
add5(3);   // 8
add5(10);  // 15
```

Useful when you want to reuse a function with one argument already locked in.