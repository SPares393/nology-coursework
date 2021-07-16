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
