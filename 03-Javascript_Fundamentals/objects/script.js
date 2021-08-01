const person = {
  firstName: "Stuart",
  lastName: "Pares",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

person.age = 30;
console.log(person);
console.log(person.getFullName());

// // OBJET SYNTAX

// const exampleObject = {
//   key: "value",
//   types: "any",
//   method() {
//     // this keyword refers to the object
//     return this.key + " " + this.types;
//   },
// };

// // ACCESSING OBJECTS

// // Dot Notation:
// console.log(exampleObject.key);
// // Bracket Notation:
// console.log(exampleObject["types"]);
// // Calling Method:
// console.log(exampleObject.method());

// // ADDING KEYS
// exampleObject.newKey = "new value";
// console.log(exampleObject);
