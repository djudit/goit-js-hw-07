const inputRange = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

inputRange.addEventListener("input", handleRange);

function handleRange(event) {
  spanText.style.fontSize = inputRange.value + "px";
}
