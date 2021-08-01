const studentContainer = document.querySelector(".students-container");

const person = {
  firstName: "Stuart",
  lastName: "Pares",
  quote: "Some people never go mad... what boring lives they must lead.",
  skills: ["html", "css", "javascript"],
  imgURL:
    "https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  getSkillsHTML() {
    const skillsHTML = this.skills.map((skill) => `<li>${skill}</li>`);
    return skillsHTML.join("\n");
  },
  getPersonHTML() {
    return `
      <article class="student-card">
          <img src="${this.imgURL}" />
          <h2>${this.getFullName()}</h2>
          <blockquote>${this.quote}</blockquote>
          <h3>Skills</h3>
          <ul>${this.getSkillsHTML()}</ul>
      </article>
  `;
  },
};

for (let i = 0; i < 10; i++) {
  studentContainer.innerHTML += person.getPersonHTML();
}

person.age = 30;
// console.log(person.getSkillsHTML());
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
