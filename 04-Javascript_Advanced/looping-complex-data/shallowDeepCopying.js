// ----- Shallow Copying -----

const simpleArray = [1, 2, 3];
const simpleObject = { key: "value" };

const shallowArrayCopy = simpleArray;
const shallowObjectCopy = simpleObject;

// Interacting with original data type...
// simpleArray.push(4);
// simpleObject.newKey = "newValue";
// ...will also modify the shallow copy
// console.log(shallowArrayCopy);
// console.log(shallowObjectCopy);

// ----- Deep Copying -----

// spread operator -> ...
const deepArrayCopy = [...simpleArray];
const deepObjectCopy = { ...simpleObject };

// Interacting with original data will not change a deep copy:
simpleArray.push(4);
simpleObject.newKey = "newValue";

// console.log(deepArrayCopy);
// console.log(deepObjectCopy);

// --- Nested data ---

const complexArray = [[1], [2], [3]];
const complexObject = {
  data: { key: "value" },
};

const complexArrayCopy = complexArray.map((array) => [...array]);
const complexObjectCopy = { ...complexObject, data: { ...complexObject.data } };

// complexArray[0].push(2);
// complexObject.data.newKey = "new value";

// console.log(complexArrayCopy);
// console.log(complexObjectCopy);

// --- JSON ---

const JSONObject = JSON.stringify(complexObject);
console.log(JSONObject, JSONObject.data);

const parsedJson = JSON.parse(JSONObject);
console.log(parsedJson, parsedJson.data);
