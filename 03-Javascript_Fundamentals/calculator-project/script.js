// TO DO:

// Change if/else statement to a switch statement
// Put input into an array? Or running total?

const calculatorInput = document.querySelector(".calculator-input");
const number = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
const calculateTotal = document.querySelector(".calculator-total");
const calculatorReset = document.querySelector(".calculator-reset");

let total = 0;

for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", () => {
    calculatorInput.value += number[i].textContent;
  });
}

for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", () => {
    calculatorInput.value += operator[i].textContent;
  });
}

calculatorReset.addEventListener("click", () => {
  total = 0;
  calculatorInput.value = "";
});
