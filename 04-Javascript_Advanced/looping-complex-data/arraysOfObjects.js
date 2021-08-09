const fruitObjectsArray = [
  { fruit: "apple" },
  { fruit: "banana" },
  { fruit: "orange" },
];

// Log banana to the console
// console.log(fruitObjectsArray[1].fruit);

// Make fruit array
let fruits = fruitObjectsArray.map((fruitObject) => {
  const fruitValue = fruitObject.fruit;
  return fruitValue;
});
// console.log(fruits);

const searchTerm = "apple";

let matchingFruitArrray = fruitObjectsArray.filter((fruitObject) => {
  const fruitMatch = fruitObject.fruit.includes(searchTerm);
  return fruitMatch;
});
// console.log(matchingFruitArrray);

// Create a function that takes an array of fruit
// Map over array and genrate some <li> tags for the fruit
// Return a string of the <li> tags
const generateFruitTags = (fruitArray) => {
  const html = fruitArray.map((fruitObject) => {
    return `<li>${fruitObject.fruit}</li>`;
  });

  return html.join("");
};
console.log(generateFruitTags(fruitObjectsArray));
