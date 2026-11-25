/*
C2 - Response Handler

Instructions:
- Create an async function called handleResponse
- It takes a fetchFn (function that returns a promise with a response-like object)
- The response object has: ok (boolean), status (number), and json() method
- If ok is true, return the parsed JSON data
- If ok is false, throw an Error with message "HTTP Error: " + status
- If json() throws, throw an Error with message "Invalid JSON response"
*/

async function handleResponse(fetchFn) {
  // write your code here
}

module.exports = handleResponse;
