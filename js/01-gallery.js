import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", onClick);

function onClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
  
  console.log(e.target.dataset.source)
}

const galleryCard = createGalleryCard();

function createGalleryCard() {
  return galleryItems
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
}

gallery.insertAdjacentHTML("beforeend", galleryCard);

// const instance = basicLightbox.create();
// instance.show()
