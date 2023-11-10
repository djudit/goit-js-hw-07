const divInput = document.querySelector("#controls");
const inputNum = divInput.firstElementChild;
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

btnCreate.addEventListener("click", handleCreate);
btnDestroy.addEventListener("click", handleDestroy);

function handleCreate(event) {
  for (let i = 0; i < inputNum.value; i += 1) {
    const colorBoxes = getRandomHexColor();
    const itemEl = document.createElement("div");
    itemEl.textContent = i + 1;
    let sizehBoxe = 30 + 10 * i;
    itemEl.style.width = `${sizehBoxe}px`;
    itemEl.style.height = `${sizehBoxe}px`;
    itemEl.style.backgroundColor = colorBoxes;
    itemEl.style.textAlign = "center";
    boxes.style.display = "flex";
    boxes.style.flexWrap = "wrap";
    boxes.style.gap = "10px";
    boxes.style.marginTop = "20px";
    boxes.append(itemEl);
    itemEl.classList.add("item-box");
  }
  return itemEl * i;
}

function handleDestroy(event) {
  boxes.innerHTML = "";
  inputNum.value = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
