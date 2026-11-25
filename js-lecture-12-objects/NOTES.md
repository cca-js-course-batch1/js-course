# Session 12 - Objects

## Topics Covered

- What is an object
- Dot vs bracket notation
- Adding, updating, deleting properties
- Nested objects and object methods

## What is an Object

An object stores related data together as key-value pairs.

```js
const user = {
  name: "Ali",
  age: 22,
  isStudent: true
};
```

## Accessing Properties

Dot notation is the normal way.
Bracket notation is for dynamic keys or keys with special characters.

```js
user.name        // "Ali"
user["age"]      // 22

const key = "name";
user[key]        // "Ali"
```

## Adding and Updating

```js
user.city = "Mumbai";    // adds new property
user.age = 23;           // updates existing
```

## Deleting

```js
delete user.isStudent;
```

## Nested Objects

```js
const student = {
  name: "Sara",
  address: {
    city: "Delhi",
    pin: "110001"
  }
};

student.address.city   // "Delhi"
```

## Object Methods

A method is a function stored inside an object.

```js
const person = {
  name: "Raj",
  greet() {
    return "Hi, I am " + this.name;
  }
};

person.greet();  // "Hi, I am Raj"
```

## Useful Object Tools

```js
Object.keys(user)    // ["name", "age", "isStudent"]
Object.values(user)  // ["Ali", 22, true]
```