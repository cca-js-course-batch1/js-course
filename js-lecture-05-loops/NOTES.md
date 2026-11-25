# Session 5 - Loops

## Topics Covered

- for loops
- while and do while
- break and continue
- Nested loops

## for Loop

Use when you know how many times to repeat.

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// 0, 1, 2, 3, 4
```

Three parts: start, condition, step.

## while Loop

Use when you do not know how many times upfront.

```js
let count = 0;

while (count < 3) {
  console.log(count);
  count++;
}
```

## do while

Runs at least once, then checks the condition.

```js
let n = 5;

do {
  console.log(n);
  n++;
} while (n < 3);
// prints 5 once even though condition is false
```

## break and continue

break stops the loop completely.
continue skips the current iteration and moves to the next.

```js
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  if (i % 2 === 0) continue;
  console.log(i);
}
```

## Nested Loops

A loop inside a loop. Be careful, they get slow with large numbers.

```js
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(i, j);
  }
}
```

## Looping Over Arrays

```js
const names = ["Ali", "Sara", "Raj"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
```