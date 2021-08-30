class Ship {
  constructor(hitPoints, hitDamage) {
    this.hitPoints = hitPoints;
    this.hitDamage = hitDamage;
  }
  takeDamage() {
    this.hitPoints = this.hitPoints - this.hitDamage;
  }
  destroy() {}
}

class MotherShip extends Ship {
  constructor(hitPoints, hitDamage) {
    super(hitPoints, hitDamage);
  }
  destroyAll() {}
}
