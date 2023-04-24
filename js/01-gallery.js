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
  document.addEventListener('keydown', onEscKeyDown);

  const target = event.target;

  if (target.nodeName !== 'IMG') {
    return;
  }

  const imageSrc = event.target.dataset.source;

  if (!imageSrc) {
    return;
  }

  instance = basicLightbox.create(`
    <img src='${imageSrc}' width='800' height='600' alt=''>
  `);

  instance.show();

}

function onEscKeyDown(event) {
  if (event.key === 'Escape' && instance !== null) {
    instance.close();
    document.removeEventListener('keydown', onEscKeyDown);
  }
}


