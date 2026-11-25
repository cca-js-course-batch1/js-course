# Session 8 - Parameters, Return & Scope

## Topics Covered

- Parameters vs arguments
- Return values
- Global vs local vs block scope
- Scope chain

## Parameters and Arguments

Parameter is the placeholder in the function definition.
Argument is the actual value you pass when calling it.

```js
function add(a, b) {   // a and b are parameters
  return a + b;
}

add(3, 5);   // 3 and 5 are arguments
```

## Default Parameters

Set a fallback value when nothing is passed.

```js
function greet(name = "there") {
  return "Hey " + name;
}

greet("Ali");   // "Hey Ali"
greet();        // "Hey there"
```

## Scope

Scope is about where a variable can be accessed.

Global scope - declared outside any function, accessible everywhere.
Local scope - declared inside a function, only accessible inside that function.
Block scope - declared inside {} with let or const, only accessible in that block.

```js
const globalVar = "I am global";

function example() {
  const localVar = "I am local";
  console.log(globalVar);  // works
  console.log(localVar);   // works
}

console.log(globalVar);  // works
console.log(localVar);   // ReferenceError
```

## Scope Chain

When JS looks for a variable, it starts in the current scope and works outward.

```js
const name = "Ali";

function outer() {
  const city = "Mumbai";

  function inner() {
    console.log(name);  // finds it in global scope
    console.log(city);  // finds it in outer scope
  }

  inner();
}
```

Inner functions can see outer variables. Outer functions cannot see inner variables.