// --- Refactor Function Challenge ---

// Function name good. Variable names are descriptive.
const makeFullNameUpperCase = (firstName, lastName) =>
  // One line return
  `${firstName.toUpperCase()} ${lastName.toUpperCase()}`;

// Improved variable names - code easier to read
const findDaysSinceBirth = (birthday) => {
  const todaysDate = new Date();
  const birthDate = new Date(birthday);
  const differenceInMS = todaysDate.getTime() - birthDate.getTime();

  const MSInDay = 1000 * 60 * 60 * 24;
  const daysSinceBirth = Math.floor(differenceInMS / MSInDay);

  return `${daysSinceBirth} days since birth`;
};

const findHeadlinesIncludingTech = (headlineArr) => {
  const techHeadlineArr = headlineArr.filter((headline) =>
    headline.toLowerCase().includes("tech")
  );
  return techHeadlineArr;
};

//////////////////////////

// // Attach event listener to button
// document.querySelector(".translate-btn").addEventListener("click", () => {
//   // Get the input value
//   const englishWord = document.querySelector(".input-box").value;

//   // If word matches, put translation into DOM
//   if (englishWord.toLowerCase() === "hello") {
//     document.querySelector(".translate-result").innerHTML = "bonjour";
//   } else if (englishWord.toLowerCase() === "goodbye") {
//     document.querySelector(".translate-result").innerHTML = "au revoir";
//   } else {
//     document.querySelector(".translate-result").innerHTML = "unavailable";
//   }
// });

// // Make the code more testable
// // Decouple logic from DOM interaction:
// // 1. Function that translates english to french
// // 2. Some dom interaction in an event listener

// // Accept inputs => return outputs
// const translateEnglishToFrench = (englishWord) => {
//   if (englishWord === "hello") {
//     return "bonjour";
//   } else if (englishWord === "goodbye") {
//     return "au revoir";
//   } else {
//     return "unavailable";
//   }
// };

// document.querySelector(".translate-btn").addEventListener("click", () => {
//   const englishWord = document.querySelector(".input-box").value;
//   const frenchWord = translateEnglishToFrench(englishWord);

//   document.querySelector(".translate-result").innerHTML = frenchWord;
// });
