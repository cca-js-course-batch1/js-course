# Session 10 - Arrays

## Topics Covered

- What is an array
- Accessing and updating elements
- push, pop, shift, unshift
- Iterating arrays

## What is an Array

An array stores multiple values in one variable, in order.

```js
const fruits = ["apple", "banana", "mango"];
```

## Accessing Elements

Arrays use zero-based index. First item is at index 0.

```js
fruits[0]  // "apple"
fruits[1]  // "banana"
fruits[2]  // "mango"
```

## Updating Elements

```js
fruits[1] = "orange";
// fruits is now ["apple", "orange", "mango"]
```

## Array Length

```js
fruits.length  // 3
```

## Adding and Removing

push - add to end
pop - remove from end
unshift - add to beginning
shift - remove from beginning

```js
const nums = [2, 3, 4];

nums.push(5);     // [2, 3, 4, 5]
nums.pop();       // [2, 3, 4]
nums.unshift(1);  // [1, 2, 3, 4]
nums.shift();     // [2, 3, 4]
```

## Iterating

```js
const scores = [80, 90, 75];

for (let i = 0; i < scores.length; i++) {
  console.log(scores[i]);
}

// or with for...of
for (const score of scores) {
  console.log(score);
}
```

## Useful Methods

```js
fruits.includes("mango")  // true
fruits.indexOf("banana")  // 1
fruits.join(", ")         // "apple, banana, mango"
```