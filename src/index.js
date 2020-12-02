import { error } from'@pnotify/core';
import"@pnotify/core/dist/PNotify.css";
import '@pnotify/core/dist/BrightTheme.css';
import './styles.scss';
import getRefs from './scripts/get-refs';
import imgMarkupTpl from './templates/img-card.hbs';
import ImgApiService from './scripts/apiService';
import LoadMoreBtn from './scripts/load-more-btn';
import { onModalOpen } from './scripts/modal-open';
import {scrollTo} from './scripts/scroll-to'



const refs = getRefs();
const imgApiService = new ImgApiService();
const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});


refs.searchForm.addEventListener('submit', onSearch)
loadMoreBtn.refs.button.addEventListener('click', onLoadMore)
refs.galleryListContainer.addEventListener('click', onModalOpen)

function onSearch(e) {
  e.preventDefault();
  
  imgApiService.query = e.currentTarget.elements.query.value;

  if (imgApiService.query === ''|| imgApiService.query === ' ') {
  return error({
  text: "Sorry. You entered invalid text ("
});
}
  loadMoreBtn.show();
  imgApiService.resetPage();
  clearImagesContainer();
  fetchImages();
}

function onLoadMore() {
  fetchImages();
  scrollTo();
}


function fetchImages() {
  loadMoreBtn.disable();
  imgApiService.fetchImages().then(images => {
  appendImagesMarkup(images);
    loadMoreBtn.enable();
  })
}

function appendImagesMarkup(images) {
  refs.galleryListContainer.insertAdjacentHTML('beforeend', imgMarkupTpl(images))
}

function clearImagesContainer() {
  refs.galleryListContainer.innerHTML = '';
}





