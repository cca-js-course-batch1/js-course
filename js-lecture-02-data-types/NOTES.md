# Session 2 - Data Types & Operators

## Topics Covered

- Strings, numbers, booleans, null, undefined
- typeof operator
- Arithmetic and assignment operators
- Template literals

## The Five Basic Types

```js
const name = "Sara";       // String
const age = 22;            // Number
const active = true;       // Boolean
const score = null;        // null (intentional empty)
let address;               // undefined (not assigned yet)
```

null means you intentionally set it to nothing.
undefined means it was never given a value.

## typeof

Tells you what type a value is.

```js
typeof "hello"   // "string"
typeof 42        // "number"
typeof true      // "boolean"
typeof null      // "object" (known JS quirk)
typeof undefined // "undefined"
```

## Arithmetic Operators

```js
5 + 3   // 8
10 - 4  // 6
3 * 4   // 12
10 / 2  // 5
10 % 3  // 1  (remainder)
2 ** 3  // 8  (power)
```

## Assignment Operators

```js
let x = 10;
x += 5;   // x is now 15
x -= 3;   // x is now 12
x *= 2;   // x is now 24
```

## Template Literals

A cleaner way to build strings with variables.

```js
const name = "Ali";
const age = 20;

// old way
"Hello " + name + ", you are " + age;

// template literal
`Hello ${name}, you are ${age}`;
```

Use backticks, not quotes. Put variables inside ${}.