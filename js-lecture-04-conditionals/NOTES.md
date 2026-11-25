# Session 4 - Conditionals

## Topics Covered

- if, else if, else
- Truthy and falsy values
- Comparison and logical operators
- switch statement

## if / else

Run code only when a condition is true.

```js
const age = 20;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

## else if

Check multiple conditions in order.

```js
const score = 72;

if (score >= 90) {
  console.log("A");
} else if (score >= 75) {
  console.log("B");
} else if (score >= 60) {
  console.log("C");
} else {
  console.log("Fail");
}
```

## Comparison Operators

```js
===   // strictly equal
!==   // not equal
>     // greater than
<     // less than
>=    // greater than or equal
<=    // less than or equal
```

Always use === not ==.

## Logical Operators

```js
&&   // AND - both must be true
||   // OR - at least one must be true
!    // NOT - flips true to false
```

```js
age >= 18 && isLoggedIn   // true only if both are true
age < 13 || age > 60      // true if either is true
!isLoggedIn               // true if isLoggedIn is false
```

## Truthy and Falsy

Falsy values in JS:

```js
false, 0, "", null, undefined, NaN
```

Everything else is truthy. This means you can write:

```js
if (username) {
  // runs only if username is not empty
}
```

## switch

Good when checking one variable against many fixed values.

```js
const day = "Monday";

switch (day) {
  case "Saturday":
  case "Sunday":
    console.log("Weekend");
    break;
  default:
    console.log("Weekday");
}
```

Do not forget the break or it will fall through to the next case.