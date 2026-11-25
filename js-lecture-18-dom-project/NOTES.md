# Session 18 - DOM Project Session

## Topics Covered

- Common DOM mistakes
- Live coding an interactive UI
- Pair programming DOM challenge
- Adding the DOM layer to the capstone

## Common DOM Mistakes

querySelectorAll returns a NodeList, not a regular array.

```js
const items = document.querySelectorAll("li");
items.forEach(item => console.log(item));  // this works
items.map(...)  // this does NOT work on a NodeList

// convert to array if you need array methods
const arr = Array.from(items);
```

Trying to query elements before the page loads.

```js
// wrong - runs before DOM is ready
const btn = document.querySelector("button");

// correct
document.addEventListener("DOMContentLoaded", function() {
  const btn = document.querySelector("button");
});
```

## Rendering a List from Data

```js
const tasks = ["Buy milk", "Write code", "Go for a walk"];
const list = document.querySelector("ul");

function renderTasks(tasks) {
  list.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task;
    list.appendChild(li);
  });
}

renderTasks(tasks);
```

## Connecting Data to the DOM

The pattern to follow:
1. Keep your data in a JS array or object
2. Write a render function that builds HTML from the data
3. Call render whenever the data changes
4. Never update the DOM outside of the render function

This keeps things clean and predictable.

## Capstone Checkpoint

Your capstone should now have a working DOM layer. Users should be able to interact with at least one feature through the UI.