import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const imgMarkup = createMarkup(galleryItems);

gallery.insertAdjacentHTML("beforeend", imgMarkup);
gallery.addEventListener("click", onImgClick);

function createMarkup(items) {
  return items
    .map((item) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img class="gallery__image" data-pictureRef="${item.original}" data-pictureDesc="${item.description}" src="${item.preview}" alt="${item.description}" />
        </a>
      </div>`;
    })
    .join("");
}

function onImgClick(evt) {
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.pictureref}" alt="${evt.target.dataset.pictureDesc}" />`
  );
  instance.show();
}
