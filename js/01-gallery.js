import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");
galleryRef.insertAdjacentHTML("beforeend", createGalleryMarkup(galleryItems));
galleryRef.addEventListener("click", openModalWindow);

// === FUNCTION
function createGalleryMarkup(items) {
  return items
    .map(
      (item) => `<a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" data-source="${item.original}"/>
      </a>`
    )
    .join("");
}

function openModalWindow(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }

  showOriginalImage(evt.target.dataset.source);
}

function showOriginalImage(item) {
  const instance = basicLightbox.create(`<img src="${item}">`);
  instance.show();

  closeModalWindowByEsc(instance);
}

function closeModalWindowByEsc(instance) {
  document.addEventListener("keydown", (evt) => {
    if (evt.code !== "Escape") {
      return;
    }
    // console.log(evt.code);
    instance.close();
  });
}
