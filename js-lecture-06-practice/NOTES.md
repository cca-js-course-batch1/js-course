# Session 6 - Practice Session

## Topics Covered

- Common control flow mistakes
- FizzBuzz walkthrough
- Number guessing logic
- Pair programming challenge

## What We Are Practicing

This session is about applying what you learned in weeks 1 and 2.

Topics in play:
- Variables and data types
- Conditionals
- Loops
- Combining all three

## FizzBuzz

A classic programming exercise.

Rules:
- Go through numbers from 1 to 100
- If divisible by 3, return "Fizz"
- If divisible by 5, return "Buzz"
- If divisible by both, return "FizzBuzz"

```js
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
```

Check FizzBuzz first, otherwise 15 would print "Fizz" instead.

## Common Mistakes This Week

Off by one error:

```js
// wrong - misses the last item
for (let i = 0; i < arr.length - 1; i++)

// correct
for (let i = 0; i < arr.length; i++)
```

Using = instead of === in conditions:

```js
if (x = 5)    // this assigns, does not compare
if (x === 5)  // this is correct
```

Infinite loops happen when the condition never becomes false. Always make sure your loop will end.

## Tip

When stuck, break the problem into smaller steps. Write each step in plain English first, then translate to code.