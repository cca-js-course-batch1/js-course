# Session 1 - JavaScript Basics & Variables

## Topics Covered

- What JavaScript is
- Where JavaScript runs
- Variables: let, const, var
- Data types
- console.log

## JavaScript

JavaScript is used to add logic and behaviour to websites.

HTML -> structure
CSS -> styling
JavaScript -> behaviour

## Where JavaScript Runs

- In the browser (console tab in DevTools)
- On a server using Node.js

## Variables

Variables store data so you can use it later.

- `let` -> value can change
- `const` -> value cannot change
- `var` -> old way, avoid using it

```js
let age = 25;
const name = "Sam";
```

Use const by default. Only use let when the value needs to change.

## Data Types

String -> text in quotes
Number -> any number
Boolean -> true or false

```js
const name = "Ali";
const score = 95;
const passed = true;
```

## console.log

Prints values to the terminal so you can see what is happening.

```js
console.log(name);
console.log(score);
```

When in doubt, console.log it.