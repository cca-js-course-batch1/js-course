# Session 11 - Array Methods

## Topics Covered

- map, filter, reduce
- forEach vs map
- find, findIndex, includes
- Sorting arrays

## map

Creates a new array by transforming every element.

```js
const prices = [100, 200, 300];
const discounted = prices.map(price => price * 0.9);
// [90, 180, 270]
```

## filter

Creates a new array with only elements that pass a condition.

```js
const ages = [15, 22, 17, 30];
const adults = ages.filter(age => age >= 18);
// [22, 30]
```

## reduce

Boils the array down to a single value.

```js
const nums = [1, 2, 3, 4];
const total = nums.reduce((sum, n) => sum + n, 0);
// 10
```

The second argument (0) is the starting value.

## forEach vs map

forEach runs a function on each item but returns nothing.
map runs a function on each item and returns a new array.

Use map when you need the result. Use forEach for side effects.

## find and findIndex

find returns the first matching element.
findIndex returns the index of the first match, or -1 if not found.

```js
const users = [{ id: 1, name: "Ali" }, { id: 2, name: "Sara" }];

users.find(u => u.id === 2);       // { id: 2, name: "Sara" }
users.findIndex(u => u.id === 2);  // 1
```

## Sorting

```js
const nums = [3, 1, 4, 1, 5];

nums.sort((a, b) => a - b);  // ascending
nums.sort((a, b) => b - a);  // descending
```

Always pass a compare function when sorting numbers. Without it JS sorts them as strings which gives wrong results.