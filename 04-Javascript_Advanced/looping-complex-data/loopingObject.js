const validMessage = {
  userName: "Stuart",
  content: "Have a great day",
};

const invalidMessage = {
  userName: "Stuart",
  number: 28,
};

for (let key in validMessage) {
  //   console.log(key);
  //   console.log(message[key]);
}

// Create a function to loop through a message
// Check all values are strings
// Return true or false

const checkAllStrings = (object) => {
  for (let key in object) {
    const typeCheck = typeof object[key] !== "string";

    if (typeCheck) {
      return false;
    }
  }
  return true;
};

// console.log(checkAllStrings(validMessage));
// console.log(checkAllStrings(invalidMessage));

const validMessageValues = Object.values(validMessage);

const invalidMessageValues = Object.values(invalidMessage);

// console.log(validMessageValues, invalidMessageValues);

// console.log(
//   validMessageValues.every((validMessage) => {
//     const typeCheck = typeof validMessage === "string";
//     return typeCheck;
//   })
// );

const validMessageKeys = Object.keys(validMessage);

const invalidMessageKeys = Object.keys(invalidMessage);

// console.log(validMessageKeys, invalidMessageKeys);

// Write function to check the keys of a message object:
// Valid keys = ['username', 'content']

const checkValidKeys = (messageObject) => {
  // Get the keys
  const objectKeys = Object.keys(messageObject);

  // Check if they are valid
  const keyCheck = objectKeys.every((key) => {
    const validKeys = ["userName", "content"];
    return validKeys.includes(key);
  });

  // Return this check
  return keyCheck;
};

// console.log(checkValidKeys(validMessage));
// console.log(checkValidKeys(invalidMessage));

const validMessageEntries = Object.entries(validMessage);

const invalidMessageEntries = Object.entries(invalidMessage);

// console.log(validMessageEntries, invalidMessageEntries);

const validateMessageObject = (messageObject) => {
  const objectEntries = Object.entries(messageObject);

  const validation = objectEntries.every((entry) => {
    const key = entry[0];
    const value = entry[1];

    // Check the type of value
    const typeCheck = typeof value === "string";

    // Check valid key
    const validKeys = ["userName", "content"];
    const keyCheck = validKeys.includes(key);

    return typeCheck && keyCheck;
  });

  return validation;
};

// console.log(validateMessageObject(validMessage));
// console.log(validateMessageObject(invalidMessage));
