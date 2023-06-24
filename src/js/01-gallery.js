import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");
let instance;
const galleryPhotos = [...galleryItems].reduce((acc, currentValue) => {
  return (
    acc +
    `<li class="gallery__item"><a class="gallery__link" href="${currentValue.original}">
      <img class="gallery__image" src="${currentValue.preview}" alt="${currentValue.description}" data-source="${currentValue.original}"/>
    </a></li>`
  );
}, "");

gallery.insertAdjacentHTML("beforeend", galleryPhotos);
gallery.addEventListener("click", imageClickHandler);

function imageClickHandler(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();
  instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}">`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", closeModal);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", closeModal);
      },
    }
  );
  instance.show();
}

const closeModal = function (event) {
  if (event.code === "Escape") {
    instance.close();
  }
};
