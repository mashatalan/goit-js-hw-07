import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');
const galleryMarkup = galleryItems.map(item => {
  return `<li class='gallery__item'>
      <a
        class='gallery__link'
        href='${item.original}'
      >
        <img
          class='gallery__image'
          src='${item.preview}'
          alt='${item.description}'
        />
      </a>
    </li>`;
}).join('');

galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
