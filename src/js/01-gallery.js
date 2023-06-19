import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

const galleryPhotos = [...galleryItems].reduce((acc, currentValue) => {
  return (
    acc +
    `<li class="gallery__item"><a class="gallery__link" href="${currentValue.original}">
      <img class="gallery__image" src="${currentValue.preview}" alt="${currentValue.description}" data-source="${currentValue.original}"/>
    </a></li>`
  );
}, "");

let bigImageLink = "";
gallery.insertAdjacentHTML("beforeend", galleryPhotos);
gallery.addEventListener("click", imageClickHandler);

function imageClickHandler(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();
  //   event.target.src = event.target.dataset["source"];
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}">`
  );

  instance.show();

  gallery.addEventListener("keydown", (event) => {
    if (event.code === "Escape" && instance.visible()) {
      instance.close();
    }
  });
}

console.log(galleryPhotos);
