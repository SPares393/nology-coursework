const calculatorInput = document.querySelector(".calculator-input");
const number = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
const calculatorTotal = document.querySelector(".calculator-total");
const calculatorReset = document.querySelector(".calculator-reset");
const calculationList = document.querySelector(".calculation-list");

for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", () => {
    calculatorInput.value += number[i].textContent;
  });
}

for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", () => {
    calculatorInput.value += ` ${operator[i].textContent} `;
  });
}

const addToList = function (arr, sumResult) {
  calculationList.innerHTML += `<li>${arr[0]} ${arr[1]} ${arr[2]} = ${sumResult}</li>`;
};

calculatorTotal.addEventListener("click", () => {
  const sumArr = calculatorInput.value.split(" ");
  console.log(sumArr);
  if (sumArr.length === 1) {
    console.log("Invalid calculation");
  } else if (sumArr.length === 3) {
    const firstNumber = Number(sumArr[0]);
    const secondNumber = Number(sumArr[2]);
    let result;
    if (sumArr[1] === "+") {
      result = firstNumber + secondNumber;
      calculatorInput.value = result;
      addToList(sumArr, result);
    } else if (sumArr[1] === "-") {
      result = firstNumber - secondNumber;
      calculatorInput.value = result;
      addToList(sumArr, result);
    } else if (sumArr[1] === "*") {
      result = firstNumber * secondNumber;
      calculatorInput.value = result;
      addToList(sumArr, result);
    } else if (sumArr[1] === "/") {
      result = firstNumber / secondNumber;
      calculatorInput.value = result;
      addToList(sumArr, result);
    }
  } else if (sumArr.length > 3) {
    let total = 0;
    const firstNumber = Number(sumArr[0]);
    const secondNumber = Number(sumArr[2]);
    let result;
    if (sumArr[1] === "+") {
      result = firstNumber + secondNumber;
      total += result;
      calculatorInput.value = total;
      console.log(total);
    } else if (sumArr[1] === "-") {
      result = firstNumber - secondNumber;
      total += result;
      calculatorInput.value = total;
    } else if (sumArr[1] === "*") {
      result = firstNumber * secondNumber;
      total += result;
      calculatorInput.value = total;
    } else if (sumArr[1] === "/") {
      result = firstNumber / secondNumber;
      total += result;
      calculatorInput.value = total;
    }

    for (let i = 3; i < sumArr.length; i++) {
      if (i === "+") {
        total += sumArr[i + 1];
        console.log(total);
        calculatorInput.value = total;
      } else if (i === "-") {
        total -= sumArr[i + 1];
        console.log(total);
        calculatorInput.value = total;
      } else if (i === "*") {
        total *= sumArr[i + 1];
        console.log(total);
        calculatorInput.value = total;
      } else if (i === "/") {
        total /= sumArr[i + 1];
        console.log(total);
        calculatorInput.value = total;
      } else {
        continue;
      }
    }
  }
});

calculatorReset.addEventListener("click", () => {
  total = 0;
  calculatorInput.value = "";
});
