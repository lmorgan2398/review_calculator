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