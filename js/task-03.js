const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const listPictures = document.querySelector(".gallery");

function createGallery(arr) {
  const markup = arr
    .map(
      ({ url, alt }) => `
  <li>
     <img src="${url}" alt="${alt}" width="400">
  </li>
  `
    )
    .join("");

  listPictures.insertAdjacentHTML("beforeend", markup);
}
createGallery(images);

listPictures.style.listStyle = "none";
listPictures.style.display = "flex";
listPictures.style.justifyContent = "space-around";
listPictures.style.flexWrap = "wrap";
listPictures.style.rowGap = "30px";
