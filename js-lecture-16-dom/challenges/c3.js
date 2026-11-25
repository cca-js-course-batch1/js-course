/*
C3 - Build Nested List

Instructions:
- Create a function called buildNestedData
- It takes a nested categories array as a parameter
- Each category is an object with name (string) and subcategories (array, possibly empty)
- Return a new array where each item becomes: { label: name, children: [...subcategories processed the same way] }
- This is a recursive transformation
- Example:
    buildNestedData([{ name: "Tech", subcategories: [{ name: "JS", subcategories: [] }] }])
    should return [{ label: "Tech", children: [{ label: "JS", children: [] }] }]
*/

function buildNestedData(categories) {
  // write your code here
}

module.exports = buildNestedData;
