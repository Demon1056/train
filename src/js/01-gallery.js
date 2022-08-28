// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
 require ('SimpleLightbox');
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const galleryHtml= galleryItems.map(creatOneImage).join('')
function creatOneImage ({preview, original, description}){
    return `<a class="gallery__item" href = "${original}">
     <img
       class="gallery__image"
       src="${preview}"
       alt="${description}"
     />
 </a>
 `; 
}
const galleryArea= document.querySelector ('.gallery')
function createGallery() {
  return galleryArea.insertAdjacentHTML('beforeend', galleryHtml)
}
createGallery()


let gallery = new SimpleLightbox('.gallery a', {captionsData:'alt', captionDelay:250} );