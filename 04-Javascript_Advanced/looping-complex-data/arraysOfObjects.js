// ----- SIMPLE OBJECTS -----

// const fruitObjectsArray = [
//   { fruit: "apple" },
//   { fruit: "banana" },
//   { fruit: "orange" },
// ];

// // Log banana to the console
// // console.log(fruitObjectsArray[1].fruit);

// // Make fruit array
// let fruits = fruitObjectsArray.map((fruitObject) => {
//   const fruitValue = fruitObject.fruit;
//   return fruitValue;
// });
// // console.log(fruits);

// const searchTerm = "apple";

// let matchingFruitArrray = fruitObjectsArray.filter((fruitObject) => {
//   const fruitMatch = fruitObject.fruit.includes(searchTerm);
//   return fruitMatch;
// });
// // console.log(matchingFruitArrray);

// // Create a function that takes an array of fruit
// // Map over array and genrate some <li> tags for the fruit
// // Return a string of the <li> tags
// const generateFruitTags = (fruitArray) => {
//   const html = fruitArray.map((fruitObject) => {
//     return `<li>${fruitObject.fruit}</li>`;
//   });

//   return html.join("");
// };
// // console.log(generateFruitTags(fruitObjectsArray));

// ----- COMPLEX OBJECTS -----

const fruitObjectsArray = [
  { fruit: "apple", rating: 8, price: 150 },
  { fruit: "banana", rating: 5, price: 100 },
  { fruit: "orange", rating: 6, price: 120 },
];

// console.log(fruitObjectsArray[2].rating);

const generateFruitHtml = (fruitArray) => {
  const html = fruitArray.map((fruitObject) => {
    const capitalised =
      fruitObject.fruit[0].toUpperCase() + fruitObject.fruit.substring(1);

    const price = (fruitObject.price / 100).toFixed(2);

    const cardHtml = `
    <div>
        <h3>${capitalised}</h3>
        <p>This fruit is ${fruitObject.rating}/10</p>
        <p>Buy now for £${price}</p>
    </div>
    `;
    return cardHtml;
  });

  return html.join("");
};

// Sort the objects by rating (highest first)

const sortByhighestRating = fruitObjectsArray.sort((a, b) => {
  return b.rating - a.rating;
});

console.log(sortByhighestRating);
console.log(generateFruitHtml(sortByhighestRating));
