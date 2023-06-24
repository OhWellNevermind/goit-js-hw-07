import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

const galleryPhotos = [...galleryItems].reduce((acc, currentValue) => {
  return (
    acc +
    `<li class="gallery__item"><a class="gallery__link" href="${currentValue.original}">
      <img class="gallery__image" src="${currentValue.preview}" alt="${currentValue.description}"/>
    </a></li>`
  );
}, "");

gallery.insertAdjacentHTML("beforeend", galleryPhotos);

const gallerySimple = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});
console.log(gallerySimple);
