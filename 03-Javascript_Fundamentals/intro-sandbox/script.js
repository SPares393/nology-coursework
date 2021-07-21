// ARRAYS & LOOPS
// 1. Create an array of names
const names = ["Stu", "Bruce", "Lofty"];

// 6. Filter
const dogs = names.filter((name) => {
  if (name == "Bruce" || name == "Lofty") {
    return true;
  }
});
console.log(dogs);

const scores = [8, 9, 12];

const highScores = scores.filter((score) => score > 10);
console.log(highScores);

/*
// 2. Create an array of pets
const pets = ["dog", "cat", "rabbit"];
// console.log(pets[2]);

// 3. Create a sample for loop
// for (let i = 0; i < pets.length; i++) {
//   console.log(`I have a ${pets[i]}`);
// }

// 4. Create a sample forEach loop
names.forEach((name) => {
  console.log(`Hello ${name}`);
});

// 5. Use a map to create a new array
const greetings = names.map((name) => {
  return `Hello ${name}`;
});
console.log(greetings);

const bigPets = pets.map((pet) => {
  return pet.toUpperCase();
});
console.log(bigPets);
*/

/*
// Problem Solving
// Client brief - create an application which can be used to keep track of the score in a football game

// 1. Need 2 teams, 2 scores
let teamScoreOne = 0;
let teamScoreTwo = 0;
let isGameStopped = false;

// 2. When team 1 button is clicked, increment team 1 score
function handleTeamOneClick() {
  teamScoreOne++;
  console.log(teamScoreOne);
}

// 3. When team 2 button is clicked, increment team 2 score
function handleTeamTwoClick() {
  teamScoreTwo++;
  console.log(teamScoreTwo);
}

// 4. When do we finish?
function handleStopGame() {
  isGameStopped = true;
}

/*
// NAMING CONVENTIONS

let currentHeadline = "News in the world today";
const currentArticle =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut repellat placeat cum porro quia tempore delectus amet laudantium quis sint.";

const isEditor = true;
const hasPassedTest = true;

const amountOfWords = 957;

if (currentHeadline.length > 15) {
  currentHeadline = currentHeadline.substring(0, 15) + "...";
}

console.log("Nology Post 2021");
console.log(`Headline: ${currentHeadline}`);
console.log(currentArticle);
*/

/*
// Challenge 1

const name = "Stu";
if (name === "Stu") {
  console.log("Hi Stu");
} else {
  console.log("Who's that?");
}

// Challenge 2

const greeting = "hello";
if (greeting === "bonjour") {
  console.log("comment ca va?");
} else {
  console.log("Je ne comprends pas - parle vous francais?");
}

// Challenge 3
let score = 5;
score = score + 10;
if (score >= 10) {
  console.log("You won the game!");
}

// Challenge 4
const age = 16;
const isBritish = true;
if (age >= 18 && isBritish) {
  console.log("You can vote in the next UK election");
} else if (age < 18 && isBritish) {
  console.log(
    `You're too young to vote - you can vote in another ${18 - age} years.`
  );
} else {
  console.log("You can't vote in the next election");
}
*/
