console.log('hello');

let firstNumber = '';
let secondNumber;
let operator;

const displayContainer = document.querySelector('.display-container');

const buttonsContainer = document.querySelector('.buttons-container');
buttonsContainer.addEventListener('click', (event) => {
    let button = event.target.closest('.button');
    if (button.classList.contains('digit')) {
        firstNumber += button.textContent;
        displayContainer.textContent = firstNumber;
    }
})

const math = (() => {
    const add = (first, second) => { return first + second };
    const subtract = (first, second) => { return first - second };
    const multiply = (first, second) => { return first * second };
    const divide = (first, second) => { return first / second };
    const exponent = (first, second) => { return first ** second };

    return { add, subtract, multiply, divide, exponent };
})();