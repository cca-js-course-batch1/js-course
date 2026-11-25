# Session 19 - Async Foundations

## Topics Covered

- Synchronous vs asynchronous JS
- The call stack
- setTimeout and setInterval
- Promises: .then, .catch, .finally

## Synchronous vs Asynchronous

Synchronous code runs line by line. Each line waits for the one before it.

Asynchronous code lets the program move on while waiting for something slow (like a network request) to finish.

## The Call Stack

JS is single-threaded. It runs one thing at a time using a call stack.

When a function is called it gets pushed onto the stack. When it returns it gets popped off. Async tasks wait in a queue and only run when the stack is empty.

## setTimeout and setInterval

```js
setTimeout(() => {
  console.log("runs after 2 seconds");
}, 2000);

console.log("runs immediately");
// output: "runs immediately", then after 2s "runs after 2 seconds"
```

setInterval repeats on an interval.

```js
const id = setInterval(() => {
  console.log("every 1 second");
}, 1000);

clearInterval(id);  // stops it
```

## Promises

A promise represents a value that will be available later. It is either pending, fulfilled, or rejected.

```js
const p = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("it worked");
  } else {
    reject("it failed");
  }
});

p
  .then(result => console.log(result))
  .catch(error => console.log(error))
  .finally(() => console.log("always runs"));
```

.then runs on success.
.catch runs on failure.
.finally runs no matter what.