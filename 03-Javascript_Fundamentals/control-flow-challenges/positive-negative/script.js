function handlePositiveOrNegative(event) {
  const number = event.target.value;

  if (number > 0) {
    alert(`${number} is a positive value.`);
  } else if (number < 0) {
    alert(`${number} is a negative value.`);
  } else if (number == 0) {
    alert(`The number is 0.`);
  } else {
    alert(`Not a number.`);
  }
}
