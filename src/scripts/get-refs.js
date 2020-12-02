export default function getRefs (){
  return {
    searchForm: document.querySelector('.search-form'),
    galleryListContainer: document.querySelector('.gallery'),
    loadMoreBtn: document.querySelector('[data-action="load-more"]'),
  }
}