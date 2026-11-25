# Session 13 - this & Closures

## Topics Covered

- The this keyword in different contexts
- What is a closure
- Practical closure use cases
- Memory and references

## this

this refers to the object that is calling the function.

In a method, this is the object the method belongs to.

```js
const user = {
  name: "Ali",
  greet() {
    return "Hello, " + this.name;
  }
};

user.greet();  // "Hello, Ali"
```

In a regular function called on its own, this is the global object or undefined in strict mode.

Arrow functions do not have their own this. They use the this from where they were defined.

## Closures

A closure is when a function remembers variables from the scope it was created in, even after that scope has finished running.

```js
function makeCounter() {
  let count = 0;

  return function() {
    count++;
    return count;
  };
}

const counter = makeCounter();
counter();  // 1
counter();  // 2
counter();  // 3
```

count is private. Nothing outside can access or change it directly.

## Why Closures Are Useful

- Data privacy
- Keeping state between function calls
- Factory functions that produce customized functions

```js
function makeMultiplier(x) {
  return (n) => n * x;
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

double(5);  // 10
triple(5);  // 15
```

## References vs Values

Primitives are copied when assigned.
Objects and arrays are passed by reference.

```js
let a = 5;
let b = a;
b = 10;
console.log(a);  // still 5

const arr1 = [1, 2, 3];
const arr2 = arr1;
arr2.push(4);
console.log(arr1);  // [1, 2, 3, 4]
```