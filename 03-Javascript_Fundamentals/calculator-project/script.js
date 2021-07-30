const calculatorInput = document.querySelector(".calculator-input");
const number = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
const calculatorTotal = document.querySelector(".calculator-total");
const calculatorReset = document.querySelector(".calculator-reset");
const calculationList = document.querySelector(".calculation-list");

let total = 0;
let hasResult = false;

for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", () => {
    if (hasResult === true) {
      calculatorInput.value = number[i].textContent;
      hasResult = false;
    } else {
      calculatorInput.value += number[i].textContent;
    }
  });
}

for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", () => {
    if (calculatorInput.value && !hasResult) {
      calculatorInput.value += ` ${operator[i].textContent} `;
    } else {
      calculatorInput.value = "";
    }
  });
}

const addToList = function (arr, sumResult) {
  calculationList.innerHTML += `<li> ${arr.join(" ")} = ${sumResult}</li>`;
};

calculatorTotal.addEventListener("click", () => {
  const sumArr = calculatorInput.value.split(" ");
  console.log(sumArr);
  if (sumArr.length === 1) {
    calculatorInput.value = sumArr[0];
  } else if (sumArr.length >= 3) {
    total = Number(sumArr[0]);
    for (let i = 0; i < sumArr.length; i++) {
      if (i % 2 === 0) {
        continue;
      } else if (
        !parseInt(sumArr[i]) &&
        sumArr[i + 1] === "" &&
        !parseInt(sumArr[i + 2])
      ) {
        calculatorInput.value = "error";
        break;
      } else {
        if (sumArr[i] === "+") {
          total += Number(sumArr[i + 1]);
          calculatorInput.value = total;
        } else if (sumArr[i] === "-") {
          total -= Number(sumArr[i + 1]);
          calculatorInput.value = total;
        } else if (sumArr[i] === "*") {
          total *= Number(sumArr[i + 1]);
          calculatorInput.value = total;
        } else if (sumArr[i] === "/") {
          total /= Number(sumArr[i + 1]);
          calculatorInput.value = total;
        }
      }
      addToList(sumArr, total);
    }
    hasResult = true;
  }
});

calculatorReset.addEventListener("click", () => {
  total = 0;
  calculatorInput.value = "";
});
