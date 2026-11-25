# Session 21 - API Deep Dive

## Topics Covered

- Handling JSON responses
- Sending data with POST
- Loading states and UX
- Common API bugs
- Weather app walkthrough

## Handling JSON

The API response is raw text. You call .json() to parse it into a JS object.

```js
const response = await fetch(url);
const data = await response.json();
```

If the response is not valid JSON, .json() will throw an error. Always wrap in try/catch.

## Sending a POST Request

```js
const response = await fetch("https://api.example.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "My Post",
    content: "Hello world"
  })
});

const result = await response.json();
```

## Loading States

Async operations take time. Always show the user something while waiting.

```js
async function loadData() {
  showLoader();

  try {
    const data = await fetchData();
    renderData(data);
  } catch (err) {
    showError(err.message);
  } finally {
    hideLoader();
  }
}
```

## Common API Bugs

- Forgetting to await the response
- Forgetting to call .json() after fetching
- Not handling errors when the request fails
- Not checking response.ok before parsing
- CORS errors when the server does not allow browser requests

## Query Parameters

```js
const city = "Mumbai";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_KEY`;
```