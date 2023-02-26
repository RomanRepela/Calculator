// Get all the keys from the calculator
const keys = document.querySelectorAll('.keys button');
const clear = document.getElementById('clear');
const calculate = document.getElementById('calculate');
const display = document.getElementById('result');

// Add onclick event to all the keys and perform operations
keys.forEach(key => {
  key.addEventListener('click', () => {
    const keyValue = key.value;
    if (keyValue === '=') {
      display.value = eval(display.value);
    } else {
      display.value += keyValue;
    }
  });
});

// Clear the display
clear.addEventListener('click', () => {
  display.value = '';
});

// Calculate the expression
calculate.addEventListener('click', () => {
  display.value = eval(display.value);
});
