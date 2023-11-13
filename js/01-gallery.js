import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

function createGallery(pictures) {
  return pictures
    .map(
      ({ original, preview, description }) => `
      <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
    `
    )
    .join("");
}

const itemPicture = createGallery(galleryItems);
gallery.insertAdjacentHTML("beforeend", itemPicture);

//   Copied from basicLightbox

const instance = basicLightbox.create(`
    <img src="assets/images/image.png" width="800" height="600">
`);

instance.show();
