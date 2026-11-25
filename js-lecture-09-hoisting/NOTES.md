# Session 9 - Hoisting & Practice

## Topics Covered

- How hoisting works
- var vs let hoisting difference
- Common function mistakes
- Practice exercises

## What is Hoisting

JavaScript moves function declarations and var declarations to the top of their scope before running the code. This is called hoisting.

You do not write this yourself. It happens automatically.

## Function Hoisting

Function declarations are fully hoisted. You can call them before they appear in the code.

```js
sayHi();  // works fine

function sayHi() {
  console.log("Hi");
}
```

Function expressions and arrow functions are NOT hoisted this way.

```js
greet();  // TypeError: greet is not a function

const greet = () => "Hello";
```

## var Hoisting

var declarations are hoisted but not their values.

```js
console.log(x);  // undefined, not an error
var x = 5;
console.log(x);  // 5
```

## let and const

let and const are hoisted but stay in a temporal dead zone until the line where they are declared. Accessing them before that throws a ReferenceError.

```js
console.log(y);  // ReferenceError
let y = 10;
```

This is why let and const are safer than var.

## Common Mistakes

- Calling a function expression before it is defined
- Expecting var to throw an error when used before declaration
- Forgetting that arrow functions are not hoisted like declarations

## Tip

Just declare your functions and variables before you use them. Hoisting is good to understand but you should not write code that depends on it.