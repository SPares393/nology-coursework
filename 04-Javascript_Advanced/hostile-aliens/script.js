// Define Classes
class Ship {
  constructor(name, hitPoints, hitDamage, quantity) {
    this.name = name;
    this.hitPoints = hitPoints;
    this.hitDamage = hitDamage;
    this.quantity = quantity;
  }
  takeDamage() {
    this.hitPoints = this.hitPoints - this.hitDamage;
  }
  destroy() {}
}

class MotherShip extends Ship {
  constructor(name, hitPoints, hitDamage) {
    super(name, hitPoints, hitDamage);
  }
  destroy() {}
}

// Create ship objects
const attackShip = new Ship("Attack Ship", 45, 12, 8);
const defenceShip = new Ship("Defence Ship", 80, 10, 5);
const theMotherShip = new MotherShip("The Mother Ship", 100, 9, 1);

// Query Selectors
const buttonReset = document.querySelector(".button-reset");
const gameArea = document.querySelector(".game-area");
const buttonFire = document.querySelector(".button-fire");

const createShipHTML = (shipClass) => {
  //   let shipHMTL = "";
  //   for (let i = 1; i < shipClass.quantity; i++) {
  //   shipHMTL +=
  return `<div class="ship"><h3>${shipClass.name}</h3><p class="hit-points">${shipClass.hitPoints}</p></div>`;
  //   }
};

// Start game
const gameInit = () => {
  gameArea.innerHTML = `<div class="row-1"></div><div class="row-2"></div><div class="row-3"></div>`;
  document.querySelector(".row-1").innerHTML = createShipHTML(theMotherShip);
  for (let i = 0; i < 5; i++) {
    document.querySelector(".row-2").innerHTML += createShipHTML(defenceShip);
  }
  for (let i = 0; i < 8; i++) {
    document.querySelector(".row-3").innerHTML += createShipHTML(attackShip);
  }
};
gameInit();

buttonReset.addEventListener("click", gameInit);

let ships = document.querySelectorAll(".ship");

// Get random ship
const getRandomShip = () => {
  return Math.trunc(Math.random() * ships.length);
};

// Do damage
const fire = () => {
  ships = document.querySelectorAll(".ship");

  const shipToDamage = ships[getRandomShip()];
  shipToDamage.style.backgroundColor = "yellow";
  let currentShipHealth = shipToDamage.lastElementChild.innerText;

  if (shipToDamage.firstElementChild.innerText === "The Mother Ship") {
    currentShipHealth = currentShipHealth - theMotherShip.hitDamage;
  } else if (shipToDamage.firstElementChild.innerText === "Defence Ship") {
    currentShipHealth = currentShipHealth - defenceShip.hitDamage;
  } else {
    currentShipHealth = currentShipHealth - attackShip.hitDamage;
  }
  shipToDamage.lastElementChild.innerHTML = currentShipHealth;

  if (currentShipHealth < 1) {
    shipToDamage.classList.add("destroyed");
    shipToDamage.style.backgroundColor = "crimson";
    shipToDamage.innerHTML = `<h3>Destroyed!</h3>`;
    shipToDamage.classList.remove("ship");
  }
};

buttonFire.addEventListener("click", fire);

// TO DO:

// Link methods from classes
// For loop in createShipHTML function
