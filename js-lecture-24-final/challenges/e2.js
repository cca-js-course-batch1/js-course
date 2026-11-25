/*
E2 - Group By

Instructions:
- Create a function called groupBy
- It takes an array of objects and a key (string) as parameters
- Group the objects by the value of that key
- Return an object where each key is a unique value and the value is an array of matching objects
- Example:
    groupBy([{ role: "admin", name: "Ali" }, { role: "user", name: "Sara" }, { role: "admin", name: "Raj" }], "role")
    should return:
    { admin: [{ role: "admin", name: "Ali" }, { role: "admin", name: "Raj" }], user: [{ role: "user", name: "Sara" }] }
*/

function groupBy(arr, key) {
  // write your code here
}

module.exports = groupBy;
