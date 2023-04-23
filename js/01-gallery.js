import { galleryItems } from './gallery-items.js';


// Instance for basicLightbox
let instance = null;

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
          data-source='${item.original}'
          alt='${item.description}'
        />
      </a>
    </li>`;
}).join('');

galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

galleryList.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(event) {
  event.preventDefault();

  const imageSrc = event.target.dataset.source;

  instance = basicLightbox.create(`
    <img src='${imageSrc}' width='800' height='600'>
  `);
  instance.show();
}

document.addEventListener('keydown', event => {

  if (event.key === 'Escape' && instance !== null) {
    instance.close();
  }
});
