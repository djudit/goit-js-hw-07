import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

gallery.addEventListener("click", handlerClick);

function createGallery(pictures) {
  return pictures
    .map(({ original, preview, description }) => {
      return `
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
    `;
    })
    .join("");
}

const itemPicture = createGallery(galleryItems);
gallery.insertAdjacentHTML("beforeend", itemPicture);

function handlerClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `
<img src="${event.target.dataset.source}" width="800" height="600">
`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", handlerClose);
      },
      onClose: (instance) => {
        document.removeEventListener("keydown", handlerClose);
      },
    }
  );
  instance.show();

  function handlerClose(evt) {
    if (evt.key === "Escape") {
      instance.close();
    }
  }
}
