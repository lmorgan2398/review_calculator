console.log('hello');

let firstNumber = {
    value: '',
    transform: '',
    transformValue: ''
};

let secondNumber = {
    value: '',
    transform: '',
    transformValue: ''
};

let operator = '';

let trigMode = 'deg';

const displayContainer = document.querySelector('.display-container');

const buttonsContainer = document.querySelector('.buttons-container');
buttonsContainer.addEventListener('click', (event) => {
    let button = event.target.closest('.button');
    if (button.classList.contains('digit')) {
        firstNumber += button.textContent;
        displayContainer.textContent = firstNumber;
    }
})

const operation = (() => {

    const add = (first, second) => { return first + second };
    const subtract = (first, second) => { return first - second };
    const multiply = (first, second) => { return first * second };
    const divide = (first, second) => { return first / second };

    return { add, subtract, multiply, divide };

})();

const transform = (() => {

    const exponent = (first, second) => { return first ** second };
    const squareRoot = (num) => { return Math.sqrt(num) };

    const degToRad = (num) => { return num * ( Math.PI / 180 ) };

    const sin = (num) => { return Math.sin(num) };
    const cos = (num) => { return Math.cos(num) };
    const tan = (num) => { return Math.tan(num) };

    const asin = (num) => { return Math.asin(num) };
    const acos = (num) => { return Math.acos(num) };
    const atan = (num) => { return Math.atan(num) };

    const ln = (num) => { return Math.log(num) };
    const log = (num) => { return Math.log10(num) };

    return { exponent, squareRoot, degToRad, sin, cos, tan, asin, acos, atan, ln, log };

})();