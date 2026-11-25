# Session 16 - DOM Manipulation

## Topics Covered

- What is the DOM
- Selecting elements
- Changing text, styles and attributes
- Creating and removing elements

## What is the DOM

DOM stands for Document Object Model. It is how the browser represents your HTML as a JavaScript object tree. You can read and change the page through the DOM.

## Selecting Elements

```js
document.getElementById("title")
document.querySelector(".card")       // first match
document.querySelectorAll(".card")    // all matches (NodeList)
```

querySelector uses CSS selector syntax. It is the most flexible option.

## Changing Content

```js
const heading = document.querySelector("h1");

heading.textContent = "New Title";
heading.innerHTML = "<span>New Title</span>";
```

Use textContent for plain text.
Use innerHTML only when you need HTML, and never with user input directly.

## Changing Styles

```js
heading.style.color = "red";
heading.style.fontSize = "32px";
```

## Changing Classes

```js
element.classList.add("active");
element.classList.remove("active");
element.classList.toggle("active");
element.classList.contains("active");  // true or false
```

## Changing Attributes

```js
img.setAttribute("src", "photo.jpg");
img.getAttribute("src");
img.removeAttribute("alt");
```

## Creating and Removing Elements

```js
const newDiv = document.createElement("div");
newDiv.textContent = "Hello";
document.body.appendChild(newDiv);

newDiv.remove();
```