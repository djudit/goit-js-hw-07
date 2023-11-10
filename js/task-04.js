const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const spanSum = document.querySelector("#value");
// console.dir(spanSum);

let counterValue = 0;

const handleClickDec = (event) => {
  counterValue -= 1;
  spanSum.textContent = counterValue;
};

btnDecrement.addEventListener("click", handleClickDec);

const handleClickInc = (event) => {
  counterValue += 1;
  spanSum.textContent = counterValue;
};

btnIncrement.addEventListener("click", handleClickInc);
