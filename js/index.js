let firstNumber = '0';
let secondNumber = '';
let operator;
let isNumberWithComa = false;

const displayFirstLine = document.querySelector('.display-first-line');
displayFirstLine.textContent = '';

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
    if(b === 0) return undefined;
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
    if(operator === undefined && firstNumber.length >= 18) return;
    if(operator === undefined && firstNumber === '0') {
        firstNumber = digit;
        displaySecondLine.textContent = firstNumber;
    } else if(operator === undefined) {
        firstNumber += digit;
        displaySecondLine.textContent = firstNumber;
    } else if (secondNumber === '0' && digit !== '0') {
        secondNumber = digit;
    } else if (secondNumber === '0' && digit === '0') {
        return;
    }
    else {
        secondNumber += digit;
        displaySecondLine.textContent = secondNumber;
    }
}

let dotButton = document.querySelector('.btn-dot');
dotButton.addEventListener('click', clickDotButton);

function clickDotButton() {
    if(isNumberWithComa === true) {
        console.log('huj');
        return;
    }
    if(operator === undefined && firstNumber === '') {
        firstNumber += '0.';
        displaySecondLine.textContent = firstNumber;
        isNumberWithComa = true;
    } else if (operator === undefined) {
        firstNumber += '.';
        displaySecondLine.textContent = firstNumber;
        isNumberWithComa = true;
    } else if (secondNumber === '') {
        secondNumber += '0.'
        displaySecondLine.textContent = secondNumber;
        isNumberWithComa = true;
    } else {
        secondNumber += '.'
        displaySecondLine.textContent = secondNumber;
        isNumberWithComa = true;
    }
}

let operatorButtons = document.querySelectorAll('.btn-operator');
operatorButtons.forEach(button => button.addEventListener('click', clickOperatorButton))

function clickOperatorButton() {
    if(operator === '/' && secondNumber === '0') return;
    if(operator === undefined) {
        operator = this.textContent;
        displayFirstLine.textContent = firstNumber + ' ' + operator;
        isNumberWithComa = false;
    } else if (secondNumber !== '') {
        equal()
        operator = this.textContent;
        displayFirstLine.textContent = firstNumber + ' ' + operator;
    }
}

const equalButton = document.querySelector('.btn-equal');
equalButton.addEventListener('click', clickEqualButton);

function equal() {
    firstNumber = operate(parseFloat(firstNumber), operator, parseFloat(secondNumber));
    secondNumber = ''
    displaySecondLine.textContent = firstNumber;
    isNumberWithComa = false;
}

function clickEqualButton() {
    if(operator === '/' && secondNumber === '0') return;
    equal();
    operator = undefined;
    displayFirstLine.textContent = firstNumber;
}

let clearButton = document.querySelector('.clear')
clearButton.addEventListener('click', clear)

function clear() {
    firstNumber = '0';
    secondNumber = '';
    operator = undefined;
    isNumberWithComa = false;
    displayFirstLine.textContent = '';
    displaySecondLine.textContent = '0';
}
