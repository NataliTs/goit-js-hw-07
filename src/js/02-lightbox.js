import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const itemDiv = galleryItems
  .map(
    (item) => `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}"alt="${item.description}" />
</a>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", itemDiv);

let galleryLightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
  scrollZoom: false,
  enableKeyboard: true,
});

console.log(gallery);
