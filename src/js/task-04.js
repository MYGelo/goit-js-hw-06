const counterEl = {
  dec: document.querySelector('[data-action="decrement"]'),
  inc: document.querySelector('[data-action="increment"]'),
};

const valueEl = document.querySelector('#value');

let counterValue = 0;

const decrement = () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

const increment = () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};

counterEl.dec.addEventListener('click', decrement);
counterEl.inc.addEventListener('click', increment);
