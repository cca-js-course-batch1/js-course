/*
C1 - Deep Merge

Instructions:
- Create a function called deepMerge
- It takes two objects as parameters
- Merge them deeply: if both have a key with an object value, merge those too
- Non-object values from the second object overwrite the first
- Example:
    deepMerge({ a: 1, b: { x: 1, y: 2 } }, { b: { y: 10, z: 3 }, c: 4 })
    should return { a: 1, b: { x: 1, y: 10, z: 3 }, c: 4 }
*/

function deepMerge(obj1, obj2) {
  // write your code here
}

module.exports = deepMerge;
