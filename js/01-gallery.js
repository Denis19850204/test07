import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector(".gallery");

gallery.addEventListener("click", onClick);

const galleryCard = galleryItems
  .map(({ description, original, preview }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
  })
  .join("");

gallery.insertAdjacentHTML("beforeend", galleryCard);

function onClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }

  const imgSrc = e.target.dataset.source;

  const instance = basicLightbox.create(
    `<img src=${imgSrc} width="800" height="600">`
  );
  instance.show();

  window.addEventListener("keydown", onEscape);

  function onEscape(e) {
    if (e.key === "Escape") {
      instance.close();
    }
  }
}
