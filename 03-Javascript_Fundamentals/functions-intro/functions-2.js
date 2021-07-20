// Write a function called getDescription that:
// Takes 4 arguments: name, partner's name, geographic location, job title.
// Outputs argument to the console as a string

const getDescription = (firstName, partnerName, location, job) => {
  const message = `My name is ${firstName}, I'm a ${job} living in ${location}, and in a relationship with ${partnerName}`;

  console.log(message);
};

getDescription("Stu", "Becky", "Bristol", "student");

// The lifetime supply of Snickers
// Write a function named calculate supply that:
// Takes 2 arguments: age, amount per day
// Calculates the amount consumed for the rest of your life (based on a constant max age)
// Outputs the result to the console as a string
// Bonus - accept floating point values and round to a whole number.

const calculateSupply = (age, amountPerDay) => {
  const maxAge = 95;
  const amountPerLifetime = Math.ceil((maxAge - age) * 365 * amountPerDay);
  console.log(
    `You will need ${amountPerLifetime} bars of Snickers to last you to the ripe old age of ${maxAge}`
  );
};

calculateSupply(28, 0.1);

// The Temperature Converter

const convertToFarenheit = (tempInCelsius) => {
  const tempInFarenheit = tempInCelsius * 1.8 + 32;
  console.log(`${tempInFarenheit}ºF`);
};

convertToFarenheit(30);

// The Dog Age Calculator

const calculateDogAge = (ageInHumanYears) => {
  let dogAge;
  if (ageInHumanYears <= 2) {
    dogAge = ageInHumanYears * 2;
  } else {
    dogAge = (ageInHumanYears - 2) * 4 + 24;
  }

  console.log(dogAge);
};

calculateDogAge(4);
