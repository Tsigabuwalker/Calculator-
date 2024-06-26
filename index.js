let displayInput = document.querySelector('.display input');
let currentOperator = null;
let firstOperand = null;
let secondOperand = null;
let result = null;

function handleNumberClick(number) {
  if (displayInput.value === '0' || displayInput.value === '') {
    displayInput.value = number;
  } else {
    displayInput.value += number;
  }
}

function handleOperatorClick(operator) {
  if (currentOperator === null) {
    firstOperand = parseFloat(displayInput.value);
    currentOperator = operator;
    displayInput.value = '0';
  } else {
    secondOperand = parseFloat(displayInput.value);
    calculate();
    firstOperand = result;
    currentOperator = operator;
    displayInput.value = '0';
  }
}

function handleOnclickClick(decimal) {
  if (!displayInput.value.includes(decimal)) {
    displayInput.value += decimal;
  }
}

function calculate() {
  secondOperand = parseFloat(displayInput.value);
  switch (currentOperator) {
    case '+':
      result = firstOperand + secondOperand;
      break;
    case '-':
      result = firstOperand - secondOperand;
      break;
    case '*':
      result = firstOperand * secondOperand;
      break;
    case '/':
      result = firstOperand / secondOperand;
      break;
    case '%':
      result = firstOperand % secondOperand;
      break;
    default:
      result = secondOperand;
  }
  displayInput.value = result.toString();
}

document.querySelectorAll('.number').forEach(button => {
  button.addEventListener('click', () => handleNumberClick(button.textContent));
});

document.querySelectorAll('.operator').forEach(button => {
  button.addEventListener('click', () => {
    if (button.textContent === 'AC') {
      clearCalculator();
    } else if (button.textContent === 'C') {
      clearDisplay();
    } else if (button.textContent === '=') {
      calculate();
    } else {
      handleOperatorClick(button.textContent);
    }
  });
});

function clearCalculator() {
  displayInput.value = '0';
  currentOperator = null;
  firstOperand = null;
  secondOperand = null;
  result = null;
}

function clearDisplay() {
  displayInput.value = '0';
}