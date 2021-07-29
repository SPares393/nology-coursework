const calculateAnswer = document.querySelector(".calculator-answer");
const inputNumber1 = document.querySelector(".inputNumber1");
const inputNumber2 = document.querySelector(".inputNumber2");
const inputOperator = document.querySelector(".inputOperator");
const calculatorReset = document.querySelector(".calculator-reset");
const calculatorOutput = document.querySelector(".calculator-output");

calculateAnswer.addEventListener("click", () => {
  const number1 = Number(inputNumber1.value);
  const number2 = Number(inputNumber2.value);
  const operator = inputOperator.value;

  if (!number1 || !number2 || !operator) {
    calculatorOutput.textContent = "Please enter a calculation";
  } else if (operator == "+") {
    result = number1 + number2;
    calculatorOutput.textContent += ` ${result}`;
  } else if (operator == "-") {
    result = number1 - number2;
    calculatorOutput.textContent += ` ${result}`;
  } else if (operator == "*") {
    result = number1 * number2;
    calculatorOutput.textContent += ` ${result}`;
  } else if (operator == "/") {
    result = number1 / number2;
    calculatorOutput.textContent += ` ${result}`;
  }
});

calculatorReset.addEventListener("click", () => {
  inputNumber1.value = "";
  inputNumber2.value = "";
  inputOperator.value = "";
  calculatorOutput.textContent = "Answer:";
});
