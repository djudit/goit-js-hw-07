import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

// gallery.addEventListener("click", handlerClick);

function createGallery(pictures) {
  return pictures
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
      `;
    })
    .join("");
}

const itemPicture = createGallery(galleryItems);
gallery.insertAdjacentHTML("beforeend", itemPicture);

// function handlerClick(event) {
//   event.preventDefault();
//   if (event.target.nodeName !== "IMG") {
//     return;
//   }

let gallerySimple = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
gallerySimple.on("show.simplelightbox");
// }

// import * as basicLightbox from "basiclightbox";

// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `);

// instance.show();

// console.log(galleryItems);
