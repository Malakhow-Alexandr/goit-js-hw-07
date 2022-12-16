import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const imgMarkup = createMarkup(galleryItems);

gallery.insertAdjacentHTML("beforeend", imgMarkup);

function createMarkup(items) {
  return items
    .map((item) => {
      return `
        <a class="gallery__item" href="${item.original}">
          <img class="gallery__image" data-source="${item.original}"  src="${item.preview}" alt="${item.description}" />
        </a>
      `;
    })
    .join("");
}
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
