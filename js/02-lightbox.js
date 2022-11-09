import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");

const createGalleryMarkup = createGallery(galleryItems);
galleryRef.insertAdjacentHTML("beforeend", createGalleryMarkup);

galleryRef.addEventListener("click", openOriginalImage);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

function createGallery(items) {
  return items
    .map((item) => {
      return `<a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}"/>
      </a>`;
    })
    .join("");
}

function openOriginalImage(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  // console.log(evt.target);
}
