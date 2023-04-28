const body = document.querySelector('body');
const calculator = document.querySelector('.calculator');
const buttons = document.querySelectorAll('button');

function toggleDarkMode() {
  body.classList.toggle('dark-mode');
  calculator.classList.toggle('dark-mode');
  buttons.forEach(button => button.classList.toggle('dark-mode'));
  const toggleButton = document.querySelector('#toggle-dark-mode');
  if (body.classList.contains('dark-mode')) {
    toggleButton.textContent = 'Light Mode';
  } else {
    toggleButton.textContent = 'Dark Mode';
  }
}

document.querySelector('#toggle-dark-mode').addEventListener('click', toggleDarkMode);
