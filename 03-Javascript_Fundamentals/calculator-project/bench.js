let displayOperator = "?";

for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", () => {
    displayOperator = operator[i].textContent;
    currentOperator.textContent = displayOperator;
  });
}

calculateAnswer.addEventListener("click", () => {
  const number1 = Number(inputNumber1.value);
  const number2 = Number(inputNumber2.value);
  const operator = currentOperator.value;

  calculatorOutput.textContent = "Answer:";

  if (!number1 || !number2 || operator === "?") {
    calculatorOutput.textContent = "Please enter a valid calculation";
  } else if (currentOperator.textContent === "+") {
    result = number1 + number2;
    calculatorOutput.textContent += ` ${result}`;
  } else if (currentOperator.textContent === "-") {
    result = number1 - number2;
    calculatorOutput.textContent += ` ${result}`;
  } else if (currentOperator.textContent === "*") {
    result = number1 * number2;
    calculatorOutput.textContent += ` ${result}`;
  } else if (currentOperator.textContent === "/") {
    result = number1 / number2;
    calculatorOutput.textContent += ` ${result}`;
  } else {
    calculatorOutput.textContent = "Please enter a valid calculation";
  }
});

calculatorReset.addEventListener("click", () => {
  inputNumber1.value = "";
  inputNumber2.value = "";
  currentOperator.textContent = "?";
  calculatorOutput.textContent = "Answer:";
});
