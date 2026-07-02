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
        if ( operator == '' ) {
            firstNumber.value += button.textContent;
        } else {
            secondNumber.value += button.textContent;
        }
    } else if (button.classList.contains('operator')) {
        if ( operator == '' ) {
            operator = button.textContent;
        }
    }
    displayContainer.textContent = `${firstNumber.value} ${operator} ${secondNumber.value}`;
})

const operation = (() => {

    const add = (first, second) => { return first + second };
    const subtract = (first, second) => { return first - second };
    const multiply = (first, second) => { return first * second };
    const divide = (first, second) => { return first / second };

    return { add, subtract, multiply, divide };

})();

const transformations = {

        exponent: (first, second) => { return first ** second },
        squareRoot: (num) => { return Math.sqrt(num) },
        degToRad: (num) => { return num * ( Math.PI() / 180 )},
        sin: (num) => { return Math.sin(num) },
        cos: (num) => { return Math.cos(num) },
        tan: (num) => { return Math.tan(num) },
        asin: (num) => { return Math.asin(num) },
        acos: (num) => { return Math.acos(num) },
        atan: (num) => { return Math.atan(num) },
        ln: (num) => { return Math.log(num) },
        log: (num) => { return Math.log10(num) }

};

const transform = (numberObj) => {

    numberObj.value = transformations[numberObj.transform](numberObj.value, numberObj.transformValue);
    numberObj.transform = '';
    numberObj.transformValue = '';
    return;

};