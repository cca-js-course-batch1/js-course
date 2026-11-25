# Session 23 - Debugging & Testing

## Topics Covered

- Using console effectively
- Debugging with DevTools
- Common runtime errors
- Writing predictable code
- Intro to testing concepts

## Console Methods

```js
console.log("basic output");
console.error("something went wrong");
console.warn("be careful here");
console.table([{ name: "Ali", age: 22 }]);
console.time("label");
// ... your code ...
console.timeEnd("label");  // shows how long it took
```

## Debugging with DevTools

Open DevTools with F12 or right click and Inspect.

- Console tab: see logs and run JS directly
- Sources tab: set breakpoints and step through code line by line
- Network tab: see API requests and their responses

A breakpoint pauses your code so you can inspect variable values at that exact moment.

## Common Runtime Errors

TypeError: usually means you called a method on undefined or null.

```js
const user = null;
user.name;  // TypeError: Cannot read properties of null
```

ReferenceError: using a variable that does not exist.

```js
console.log(x);  // ReferenceError if x was never declared
```

SyntaxError: code cannot be parsed, usually a missing bracket or typo.

## Writing Predictable Code

- Small functions that do one thing
- Meaningful variable names
- Return early when input is invalid

```js
function divide(a, b) {
  if (b === 0) return null;
  return a / b;
}
```

## Testing Basics

A test checks that your function returns the expected output.

```js
test("adds two numbers", () => {
  expect(add(2, 3)).toBe(5);
});
```

Tests give you confidence that your code works and that future changes do not break things.