const studentContainer = document.querySelector(".students-container");

class Profile {
  constructor(firstName, lastName, quote, skills, imgURL) {
    (this.firstName = firstName),
      (this.lastName = lastName),
      (this.quote = quote),
      (this.skills = skills),
      (this.imgURL = imgURL);
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  getSkillsHTML() {
    const skillsHTML = this.skills.map((skill) => `<li>${skill}</li>`);
    return skillsHTML.join("\n");
  }
  getProfileHTML() {
    const profileHTML = `
      <article class="student-card">
          <img src="${this.imgURL}" />
          <h2>${this.getFullName()}</h2>
          <blockquote>${this.quote}</blockquote>
          <h3>Skills</h3>
          <ul>${this.getSkillsHTML()}</ul>
      </article>
  `;
    return profileHTML;
  }
}

class PremiumProfile extends Profile {
  constructor(firstName, lastName, quote, skills, imgURL, contactLink) {
    super(firstName, lastName, quote, skills, imgURL),
      (this.contactLink = contactLink);
  }
  getProfileHTML() {
    const profileHTML = `
      <article class="student-card">
          <img src="${this.imgURL}" />
          <h2>${this.getFullName()}</h2>
          <blockquote>${this.quote}</blockquote>
          <h3>Skills</h3>
          <ul>${this.getSkillsHTML()}</ul>
          <a href=${this.contactLink}>Let's get in touch!</a>
      </article>
  `;
    return profileHTML;
  }
}

const stuart = new PremiumProfile(
  "Stuart",
  "Pares",
  "Some people never go mad... what boring lives they must lead.",
  ["html", "css", "javascript"],
  "https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png",
  "https://developer.mozilla.org/en-US/"
);

const bruce = new Profile(
  "Brucie",
  "Dog",
  "Who's a good boy?",
  ["Snoozing", "Napping", "Barking"],
  "https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png"
);

// console.log(stuart);

// for (let i = 0; i < 10; i++) {
//   studentContainer.innerHTML += stuart.getProfileHTML();
// }

studentContainer.innerHTML += stuart.getProfileHTML();
studentContainer.innerHTML += bruce.getProfileHTML();

// person.age = 30;
// console.log(person.getSkillsHTML());
// console.log(person);
// console.log(person.getFullName());

// // CLASS SYNTAX

// class ExampleClass {
//   constructor(firstName, lastName, age) {
//     (this.firstName = firstName), (this.lastName = lastName), (this.age = age);
//   }
//   greet() {
//     return `Hello! My name is ${this.firstName} ${this.lastName}, I'm ${this.age}`;
//   }
// }

// // CLASS INHERITANCE SYNTAX

// class ExtendedClass extends ExampleClass {
//   constructor(firstName, lastName, age, subject) {
//     super(firstName, lastName, age), (this.subject = subject);
//   }
//   greet() {
//     return `Hello! My name is ${this.firstName} ${this.lastName}, and I teach ${this.subject}`;
//   }
// }

// console.log(new ExtendedClass("Stuart", "Pares", 28, "Javascript").greet());

// const stuart = new ExampleClass("Stuart", "Pares", 28);

// console.log(stuart);
// console.log(stuart.greet());

// // OBJECT SYNTAX

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
