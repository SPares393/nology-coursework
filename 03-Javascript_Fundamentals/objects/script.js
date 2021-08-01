const person = {
  firstName: "Stuart",
  lastName: "Pares",
  quote: "Some people never go mad. What boring lives they must lead",
  skills: ["html", "css", "javascript"],
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  getSkillsHTML() {
    // My attempt:
    // for (let i = 0; i < this.skills.length; i++) {
    //   return `<li>${this.skills[i]}</li>`;
    // }

    // Charlie's solution:
    const skillsHTML = this.skills.map((skill) => `<li>${skill}</li>`);
    console.log(skillsHTML);
    return skillsHTML.join("\n");
  },
};

person.age = 30;
console.log(person.getSkillsHTML());
// console.log(person);
// console.log(person.getFullName());

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
