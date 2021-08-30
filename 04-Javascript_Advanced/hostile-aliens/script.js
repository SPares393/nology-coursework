class Ship {
  constructor(name, hitPoints, hitDamage) {
    this.hitPoints = hitPoints;
    this.hitDamage = hitDamage;
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

const attackShip = new Ship("Attack Ship", 45, 12);
const defenceShip = new Ship("Defence Ship", 80, 10);
const theMotherShip = new MotherShip("The Mother Ship", 100, 9);

const gameArea = document.querySelector(".game-area");
const buttonFire = document.querySelector(".button-fire");

const createShipHTML = (shipClass) => {
  return `<div class="ship"><h3>${shipClass.name}</h3><p class="hit-points">Hit Points: ${shipClass.hitPoints}</p></div>`;
};

const gameInit = () => {};
