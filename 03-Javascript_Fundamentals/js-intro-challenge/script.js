function calculateRetirement(event) {
  const currentAge = event.target.value;

  if (currentAge >= "65") {
    alert(`You can retire!`);
  } else {
    alert(`You've got ${65 - currentAge} years until retirement`);
  }
}

function getGreetingInFrench(event) {
  const greeting = event.target.value;

  if (greeting.toLowerCase() == "hello") {
    alert("bonjour!");
  } else if (greeting.toLowerCase() == "goodbye") {
    alert("au revoir!");
  } else {
    alert("Parlez vous francais?");
  }
}

function milesToKilometers(event) {
  const miles = event.target.value;
  const kilometers = miles * 1.6;
  alert(`${miles} miles is ${kilometers} kilometers`);
}
