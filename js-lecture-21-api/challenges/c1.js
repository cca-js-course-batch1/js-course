/*
C1 - Build API Client

Instructions:
- Create a function called createApiClient
- It takes a baseUrl (string) as a parameter
- Return an object with:
  - get(endpoint): returns a fetch options object for a GET request to baseUrl + endpoint
  - post(endpoint, data): returns a fetch options object for a POST request with JSON body
  - Each options object should have: url, method, and headers at minimum
  - post should also have a body (JSON stringified data)
*/

function createApiClient(baseUrl) {
  // write your code here
}

module.exports = createApiClient;
