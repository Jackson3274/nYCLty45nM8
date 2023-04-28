const display = document.querySelector(".display");
const numBtns = document.querySelectorAll(".num-btn");
const opBtns = document.querySelectorAll(".op-btn");
const clearBtn = document.querySelector(".clear-btn");
const equalsBtn = document.querySelector(".equals-btn");

let firstNum = "";
let secondNum = "";
let currentOp = null;

function clear() {
  display.value = "";
  firstNum = "";
  secondNum = "";
  currentOp = null;
}

function updateDisplay() {
  display.value = firstNum + (currentOp ? " " + currentOp + " " + secondNum : "");
}

function handleNumClick(e) {
  const num = e.target.textContent;
  if (currentOp) {
    secondNum += num;
  } else {
    firstNum += num;
  }
 
  updateDisplay();
}

function handleOpClick(e) {
  const op = e.target.textContent;
  if (currentOp) {
    calculate();
  }
  currentOp = op;
  updateDisplay();
}

function calculate() {
  if (!currentOp || !secondNum) {
    return;
  }
  const first = parseFloat(firstNum);
  const second = parseFloat(secondNum);
  switch (currentOp) {
    case "+":
      firstNum = String(first + second);
      break;
    case "-":
      firstNum = String(first - second);
      break;
    case "*":
      firstNum = String(first * second);
      break;
    case "/":
      firstNum = String(first / second);
      break;
  }
  secondNum = "";
  currentOp = null;
  updateDisplay();
}

numBtns.forEach(btn => {
  btn.addEventListener("click", handleNumClick);
});

opBtns.forEach(btn => {
  btn.addEventListener("click", handleOpClick);
});

clearBtn.addEventListener("click", clear);

equalsBtn.addEventListener("click", calculate);
