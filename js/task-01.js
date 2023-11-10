const listElem = document.querySelectorAll(".item");
console.log("Number of categories:", listElem.length);

listElem.forEach(function (item) {
  const bigElem = item.firstElementChild.textContent;
  console.log("Category:", bigElem);

  const smallList = item.lastElementChild;
  const smallElem = smallList.children;
  console.log("Elements:", smallElem.length);
});
