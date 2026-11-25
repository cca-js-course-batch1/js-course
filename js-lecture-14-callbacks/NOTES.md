# Session 14 - Callbacks & Higher-Order Functions

## Topics Covered

- What is a callback
- Callback hell
- Higher-order functions
- Factory functions

## Callbacks

A callback is a function passed to another function as an argument, to be called later.

```js
function greet(name, callback) {
  const message = "Hello, " + name;
  callback(message);
}

greet("Ali", (msg) => console.log(msg));
// "Hello, Ali"
```

You already use callbacks with map, filter, and forEach.

## Higher-Order Functions

A function that takes another function as an argument, or returns a function, is a higher-order function.

```js
function runTwice(fn, value) {
  return [fn(value), fn(value)];
}

runTwice(x => x * 2, 5);  // [10, 10]
```

map, filter, and reduce are all higher-order functions built into JS.

## Callback Hell

When callbacks are nested inside callbacks it becomes hard to read and maintain.

```js
getData(function(a) {
  getMore(a, function(b) {
    getEvenMore(b, function(c) {
      console.log(c);
    });
  });
});
```

Promises and async/await solve this problem, which we cover in week 7.

## Factory Functions

A factory function creates and returns objects.

```js
function createUser(name, role) {
  return {
    name,
    role,
    describe() {
      return name + " is a " + role;
    }
  };
}

const admin = createUser("Sara", "admin");
admin.describe();  // "Sara is a admin"
```