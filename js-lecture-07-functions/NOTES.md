# Session 7 - Functions Fundamentals

## Topics Covered

- What is a function
- Function declarations vs expressions
- Arrow functions
- Calling and invoking functions

## What is a Function

A function is a block of code you can run whenever you need it.

Without functions you repeat the same code everywhere.
With functions you write it once and call it as many times as you want.

## Function Declaration

```js
function greet(name) {
  return "Hello, " + name;
}

greet("Ali");   // "Hello, Ali"
greet("Sara");  // "Hello, Sara"
```

## Function Expression

Storing a function in a variable.

```js
const greet = function(name) {
  return "Hello, " + name;
};
```

## Arrow Function

Shorter syntax, same idea.

```js
const greet = (name) => {
  return "Hello, " + name;
};

// even shorter for single line returns
const greet = (name) => "Hello, " + name;
```

## Calling a Function

You have to call a function to make it run.

```js
function sayHi() {
  console.log("Hi");
}

sayHi;    // nothing happens, just a reference
sayHi();  // runs the function
```

## return

A function sends back a value using return.
If there is no return, the function gives back undefined.

```js
function add(a, b) {
  return a + b;
}

const result = add(3, 4);  // result is 7
```

Once return runs, the function stops. Nothing after it executes.