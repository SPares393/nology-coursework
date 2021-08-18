/*
class Book {
  constructor(title, author, genre, year) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.year = year;
  }

  getSummary() {
    return `${this.title} is written by ${this.author}. The genre is ${this.genre} and it was published in ${this.year}.`;
  }
}

const book1 = new Book(
  "Harry Potter and the Half Blood Prince",
  "JK Rowling",
  "Fiction",
  2009
);
console.log(book1);

class Magazine extends Book {
  constructor(title, author, genre, year, length) {
    super(title, author, genre, year);
    this.length = length;
  }
}

const mag1 = new Magazine("Mag One", "Stu Pares", "Tech", 2021, 100);
console.log(mag1);
*/

// Making classes challenge

/*
class Employee {
  constructor(name, rating, grade, nextGrade) {
    this.name = name;
    this.rating = rating;
    this.grade = grade;
    this.nextGrade = nextGrade;
  }
  chanceOfPromotion() {
    return this.rating >= 7
      ? `${this.name} is likely to be promoted`
      : `${this.name} is unlikely to be promoted`;
  }
}

const employee1 = new Employee("Stu", 6, "Rookie", "Team Leader");

const employee2 = new Employee("Bruce", 9, "Rookie", "Team Leader");

console.log(employee1.chanceOfPromotion());
console.log(employee2.chanceOfPromotion());
*/

// Extending Classes Challenge

class Vehicle {
  constructor(name, size) {
    this.name = name;
    this.size = size;
    this.currentVelocity = 0;
    this.currentDirection = 0;
  }

  getCurrentDirection() {
    return this.currentDirection;
  }

  getCurrentVelocity() {
    return this.currentVelocity;
  }

  steer(direction) {
    this.currentDirection += direction;
    console.log(
      `Vehicle.steer(): Steering at ${this.currentDirection} degrees.`
    );
  }

  move(velocity, direction) {
    this.currentVelocity = velocity;
    this.currentDirection = direction;
    console.log(
      `Vehicle.move(): Moving at ${this.currentVelocity}mph in direction ${this.currentDirection}.`
    );
  }

  stop() {
    this.currentVelocity = 0;
  }
}
const stusVehicle = new Vehicle("Bike", "Small");

class Car extends Vehicle {
  constructor(name, size, wheels, doors, gears, isManual) {
    super(name, size);
    this.wheels = wheels;
    this.doors = doors;
    this.gears = gears;
    this.isManual = isManual;
    this.currentGear = 1;
  }

  changeGear(currentGear) {
    this.currentGear = currentGear;
    console.log(`Car.changeGear(): changed to gear ${this.currentGear}`);
  }

  changeVelocity(speed, direction) {
    console.log(
      `Car.changeVelocity(): velocity ${speed} direction ${direction}`
    );
    super.move(speed, direction);
  }
}
const stusCar = new Car("Fiesta", "Small", 4, 3, 5, true, 0);

class fordFiesta extends Car {
  constructor(roadServiceMonths) {
    super("Ford Fiesta", "Small", 4, 3, 5, true);
    this.roadServiceMonths = roadServiceMonths;
  }

  // rate is difference in speed from current speed
  accelerate(rate) {
    let newVelocity = super.getCurrentVelocity() + rate;
    if (newVelocity == 0) {
      super.stop();
      super.changeGear(1);
    } else if (newVelocity > 0 && newVelocity <= 10) {
      super.changeGear(1);
    } else if (newVelocity > 10 && newVelocity <= 20) {
      super.changeGear(2);
    } else if (newVelocity > 20 && newVelocity <= 30) {
      super.changeGear(3);
    } else if (newVelocity > 30 && newVelocity <= 40) {
      super.changeGear(4);
    } else {
      super.changeGear(5);
    }

    if (newVelocity > 0) {
      super.changeVelocity(newVelocity, super.getCurrentDirection);
    }
  }
}
