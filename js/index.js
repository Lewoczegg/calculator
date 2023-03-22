let firstNumber = '';
let secondNumber = '';
let operator;
let isNumberWithComa = false;

const displayFirstLine = document.querySelector('.display-first-line');
displayFirstLine.textContent = '543534';

const displaySecondLine = document.querySelector('.display-second-line');
displaySecondLine.textContent = '0';

function add(a , b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if(b === 0) return `Can't divide by 0`;
    return a / b;
}

function operate(firstNumber, operator, secondNumber) {
    if(operator === '+') {
        return add(firstNumber, secondNumber);
    } else if (operator === '-') {
        return substract(firstNumber, secondNumber);
    } else if (operator === '*') {
        return multiply(firstNumber, secondNumber);
    } else if (operator === '/') {
        return divide(firstNumber, secondNumber);
    }
}

let numberButtons = document.querySelectorAll('.btn-number');
numberButtons.forEach(button => button.addEventListener('click', clickNumberButton));

function clickNumberButton() {
    let digit = this.textContent;
    if(operator === undefined && digit === '0' && firstNumber === '') return;
    if(operator === undefined) {
        firstNumber += digit;
        displaySecondLine.textContent = firstNumber;
    }
}

let dotButton = document.querySelector('.btn-dot');
dotButton.addEventListener('click', clickDotButton);

function clickDotButton() {
    if(isNumberWithComa === false && operator === undefined && firstNumber === '') {
        firstNumber += '0.';
        displaySecondLine.textContent = firstNumber;
        isNumberWithComa = true;
    } else if (isNumberWithComa === false && operator === undefined) {
        firstNumber += '.';
        displaySecondLine.textContent = firstNumber;
        isNumberWithComa = true;
    }
}