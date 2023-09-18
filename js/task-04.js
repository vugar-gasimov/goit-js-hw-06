const decrementBtn = document.querySelector('button[data-action="decrement"]');
const valueSpan = document.querySelector('#value');
const incrementBtn = document.querySelector('button[data-action="increment"]');

let currentValue = 0;

decrementBtn.addEventListener('click', () => {
    currentValue -= 1;
    valueSpan.textContent = currentValue;
});

incrementBtn.addEventListener('click', () => {
    currentValue += 1;
    valueSpan.textContent = currentValue;
});