import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");

const createGalleryMarkup = createGallery(galleryItems);
galleryRef.insertAdjacentHTML("beforeend", createGalleryMarkup);

galleryRef.addEventListener("click", openModalWindow);
// document.addEventListener("keydown", closeModalWindowByEsc);

function createGallery(items) {
  return items
    .map((item) => {
      return `<a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" data-source="${item.original}"/>
      </a>`;
    })
    .join("");
}

function openModalWindow(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }

  createOriginalImage(evt.target.dataset.source);
}

function createOriginalImage(item) {
  const instance = basicLightbox.create(`<img src="${item}">`, {});
  instance.show();
}

// function closeModalWindowByEsc(evt) {
//   if (evt.code !== "Escape") {
//     return;
//   }
//   console.log(evt.code);

//   const visible = basicLightbox.visible();
//   console.log(visible);
// }
