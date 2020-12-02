import { error} from'@pnotify/core';
import"@pnotify/core/dist/PNotify.css";
import '@pnotify/core/dist/BrightTheme.css';



const BASE_URL = 'https://pixabay.com/api/';
const KEY = '19252909-b3fce789e9067414046d74c47';

export default class ImgApiService {
constructor() {
  this.searchQuery = '';
  this.page = 1;
  }
  
  fetchImages() {
    // console.log(this);
    return fetch(`${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${KEY}`)
      .then(response => response.json())
      .then(({ hits }) => {
        this.incrementPage();
        this.errorRequest(hits);
        return hits;
      }).catch(err =>  
   console.log(err.message))
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  errorRequest(hits) {
  if (hits.length === 0) {
    error({
  text: "Sorry. You entered invalid text ("
});
  }
}

} 