const buttonBg = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");
const bodyBG = document.querySelector("body");

buttonBg.addEventListener("click", handleClick);

function handleClick(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }

  bodyBG.style.backgroundColor = getRandomHexColor();

  spanColor.textContent = bodyBG.style.backgroundColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
