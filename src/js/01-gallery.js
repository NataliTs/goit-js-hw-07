import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const itemDiv = galleryItems
  .map(
    (item) => `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", itemDiv);

const galleryLink = document.querySelector(".gallery__link");

gallery.addEventListener("click", onGalleryItem);

function onGalleryItem(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `
      <img src=${event.target.dataset.source} width="800" height="600">
  `,
    {
      onShow: () => {
        document.addEventListener("keydown", onCloseItemEsc);
      },
      onClose: () => {
        document.removeEventListener("keydown", onCloseItemEsc);
      },
    }
  );
  instance.show();
  function onCloseItemEsc(event) {
    if (event.key === "Escape") {
      instance.close();
    }
  }
}

console.log(gallery);
console.log(galleryLink);
