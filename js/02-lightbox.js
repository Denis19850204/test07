import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");



const galleryCard = galleryItems
  .map(({ description, original, preview }) => {
    return `<a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>`;
  })
  .join("");

gallery.insertAdjacentHTML("beforeend", galleryCard);

let lightbox = new SimpleLightbox('.gallery a', {});
lightbox.options.captionsData = 'alt';
lightbox.options.captionDelay = '250';



