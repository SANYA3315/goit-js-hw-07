function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const clik = document.querySelector('.change-color');
const body = document.querySelector('body');
const span = document.querySelector('.color');

clik.addEventListener('click', colorChange);

function colorChange() {
  const hex = getRandomHexColor();
  body.style.backgroundColor = hex;
  span.style.backgroundColor = hex;
  span.textContent = hex;
}