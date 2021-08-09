const userOne = {
  id: "stuart123",
  loggedIn: true,
  information: {
    firstName: "Stuart",
    lastname: "Pares",
    age: 28,
    likes: ["rugby", "gaming", "disco"],
  },
  contact: {
    email: "email@email.com",
    contactNumber: "07111222333",
    address: {
      houseNumber: 1,
      nameOfRoad: "Main Street",
      postcode: "A1 1AA",
      country: "UK",
    },
  },
};

const userTwo = {
  id: "stuart456",
  loggedIn: true,
  information: {
    firstName: "Stuart",
    lastname: "Pares",
    age: 28,
    likes: ["rugby", "gaming", "disco"],
  },
  contact: {
    email: "email@email.com",
    contactNumber: "07111222333",
    address: {
      houseNumber: 1,
      nameOfRoad: "Main Street",
      postcode: "A1 1AA",
      country: "UK",
    },
  },
};

// console.log(userOne.contact.contactNumber);
// console.log(userOne.information.age);
// console.log(userOne.contact.address.country);
// console.log(userOne.contact);
// console.log(userOne.information.likes[2]);

const userArray = [userOne, userTwo];

userArray.forEach((user) => {
  console.log(user.id);
});
