# Session 20 - async/await & APIs

## Topics Covered

- async/await syntax
- try/catch for error handling
- What is an API
- HTTP methods
- Fetch API basics

## async/await

async/await is a cleaner way to write async code. It still uses promises under the hood.

```js
async function getData() {
  const result = await somePromise();
  console.log(result);
}
```

await pauses the function until the promise resolves. The function must be marked async.

## Error Handling with try/catch

```js
async function fetchUser() {
  try {
    const response = await fetch("https://api.example.com/user");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Something went wrong:", error.message);
  }
}
```

## What is an API

API stands for Application Programming Interface. It is a way for two programs to talk to each other.

A web API is a server you can send requests to and get data back, usually as JSON.

## HTTP Methods

GET - fetch data
POST - send new data
PUT - replace existing data
PATCH - update part of existing data
DELETE - remove data

## Fetch API

```js
async function getPost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();
  console.log(data);
}
```

Always check response.ok before trusting the data.

```js
if (!response.ok) {
  throw new Error("Request failed: " + response.status);
}
```