# Session 17 - Events & Forms

## Topics Covered

- Event listeners
- The event object
- Forms and input handling
- Event bubbling and delegation

## Adding Event Listeners

```js
const btn = document.querySelector("button");

btn.addEventListener("click", function() {
  console.log("clicked");
});
```

Common events: click, input, submit, keydown, mouseover, change.

## The Event Object

The event object is passed automatically to your listener. It holds info about what happened.

```js
btn.addEventListener("click", function(event) {
  console.log(event.target);   // element that was clicked
  console.log(event.type);     // "click"
});
```

## Forms and Input

```js
const input = document.querySelector("input");

input.addEventListener("input", function(e) {
  console.log(e.target.value);
});
```

Preventing the form from refreshing the page:

```js
form.addEventListener("submit", function(e) {
  e.preventDefault();
  // handle form data here
});
```

## Event Bubbling

When an event fires on a child element, it bubbles up through all parent elements.

```js
child.addEventListener("click", () => console.log("child"));
parent.addEventListener("click", () => console.log("parent"));
// clicking child logs "child" then "parent"
```

Use event.stopPropagation() to stop bubbling if needed.

## Event Delegation

Instead of adding listeners to every child, add one listener to the parent.

```js
list.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    console.log(e.target.textContent);
  }
});
```

This works even for elements added to the page after the listener was set up.