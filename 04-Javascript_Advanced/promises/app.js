// What is a promise? - A way of handling a data request
// 3 states - pending / resolved / rejected

// let newPromise = new Promise((resolve, reject) => {
//   let a = 1 + 1;
//   if (a == 2) {
//     resolve("Success");
//   } else {
//     reject("Failed");
//   }
// });

// // Will not need to do the above - just an example.

// // Will need to resolve by doing the below.

// newPromise
//   // if successful
//   .then((message) => {
//     console.log(message + ". I am in the THEN");
//   })
//   // if unsussesful
//   .catch((message) => {
//     console.log(message + ". I am in the CATCH");
//   });

// https://randomuser.me/api/

// const header = document.querySelector(".header");
// const getRandomUser = () => {
//   fetch("https://randomuser.me/api/")
//     .then((res) => res.json())
//     .then((json) => (header.innerHTML = json.results[0].name.first))
//     .catch((err) => console.log(err));
// };

// getRandomUser();

// Brewdog Challenge

// https://api.punkapi.com/v2/beers/random

// My solution:
/*
const randomBeer = document.querySelector(".random-beer");

const getRandomBeer = () => {
  fetch("https://api.punkapi.com/v2/beers/random")
    .then((res) => res.json())
    .then((json) => {
      randomBeer.innerHTML += `<h1>${json[0].name}</h1>`;
      randomBeer.innerHTML += `<h4>${json[0].tagline}</h4>`;
      randomBeer.innerHTML += `<p>${json[0].description}</p>`;
      randomBeer.innerHTML += `<h2>ABV ${json[0].abv}%</h2>`;
      randomBeer.innerHTML += `<p>Goes great with: ${json[0].food_pairing[0]}</p>`;
    })
    .catch((err) => console.log(err));
};

getRandomBeer();
*/

// Coach's Solution:

const makeBeerCard = (beer) => {
  return `
    <div class="random-beer">
        <h1>${beer.name}</h1>
        <h4>${beer.tagline}</h4>
        <p>${beer.description}</p>
        <h3>${beer.abv}%</h3>
        <p>Goes great with: ${beer.food_pairing[0]}</p>
    </div>
    `;
};

const getRandomBeer = () => {
  fetch("https://api.punkapi.com/v2/beers/random")
    .then((res) => res.json())
    .then((json) => (document.body.innerHTML += makeBeerCard(json[0])));
};

getRandomBeer();
