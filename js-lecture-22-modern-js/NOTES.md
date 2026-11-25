# Session 22 - Modern JS Syntax

## Topics Covered

- Destructuring arrays and objects
- Spread and rest operators
- Default parameters
- Optional chaining and nullish coalescing
- JS modules: import and export

## Destructuring Objects

```js
const user = { name: "Ali", age: 22, city: "Mumbai" };

const { name, age } = user;
console.log(name);  // "Ali"

// rename while destructuring
const { name: userName } = user;
```

## Destructuring Arrays

```js
const [first, second, ...rest] = [1, 2, 3, 4, 5];
// first = 1, second = 2, rest = [3, 4, 5]
```

## Spread Operator

Expands an array or object into individual items.

```js
const a = [1, 2, 3];
const b = [4, 5, 6];
const combined = [...a, ...b];  // [1, 2, 3, 4, 5, 6]

const user = { name: "Ali" };
const updated = { ...user, age: 22 };  // { name: "Ali", age: 22 }
```

## Rest Parameters

Collects remaining arguments into an array.

```js
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}

sum(1, 2, 3, 4);  // 10
```

## Optional Chaining

Safely access nested properties without crashing if something is undefined.

```js
const user = { address: { city: "Delhi" } };

user?.address?.city    // "Delhi"
user?.phone?.number    // undefined, no error
```

## Nullish Coalescing

Returns the right side only if the left side is null or undefined.

```js
const name = null ?? "Guest";   // "Guest"
const count = 0 ?? 10;          // 0  (0 is not null or undefined)
```

## Modules

```js
// math.js
export function add(a, b) { return a + b; }
export const PI = 3.14;

// main.js
import { add, PI } from "./math.js";
```