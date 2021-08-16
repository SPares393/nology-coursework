// What is a promise? - A way of handling a data request
// 3 states - pending / resolved / rejected

let newPromise = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

// Will not need to do the above - just an example.

// Will need to resolve by doing the below.

newPromise
  // if successful
  .then((message) => {
    console.log(message + ". I am in the THEN");
  })
  // if unsussesful
  .catch((message) => {
    console.log(message + ". I am in the CATCH");
  });
