# Session 3 - Type Coercion & Clean Code

## Topics Covered

- Implicit vs explicit type conversion
- Common coercion traps
- Writing clean and readable JS
- Naming conventions and comments

## Type Conversion

Sometimes JS converts types automatically. Sometimes you do it yourself.

Explicit (you do it on purpose):

```js
Number("42")       // 42
Number("hello")    // NaN
String(100)        // "100"
Boolean(0)         // false
Boolean("hello")   // true
```

Implicit (JS does it for you, sometimes unexpectedly):

```js
"5" + 3    // "53"  (number becomes string)
"5" - 3    // 2     (string becomes number)
true + 1   // 2
```

## Common Traps

```js
console.log("5" + 3);        // "53" not 8
console.log("5" - 3);        // 2
console.log(null + 1);       // 1
console.log(undefined + 1);  // NaN
```

The + operator is tricky because it also does string joining.

## NaN

NaN means Not a Number. It shows up when a conversion fails.

```js
Number("hello")  // NaN
typeof NaN       // "number" (yes really)
NaN === NaN      // false (NaN is never equal to itself)
```

Use isNaN() to check for it.

## Clean Code Rules

- Use meaningful variable names
- One variable, one purpose
- Avoid abbreviations that are not obvious

Bad:
```js
let x = 22;
let d = true;
```

Good:
```js
let userAge = 22;
let isLoggedIn = true;
```

## Comments

Only comment when the code is not obvious on its own.

```js
// Good: explains why
const TAX_RATE = 0.18; // 18% GST as per current Indian tax rules

// Bad: just repeats what the code says
let age = 25; // set age to 25
```