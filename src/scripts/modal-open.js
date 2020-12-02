import * as basicLightbox from 'basiclightbox';
import '../../node_modules/basiclightbox/dist/basicLightbox.min.css';

export function onModalOpen(e) {
  console.log(e.target);
   if (e.target.nodeName !== "IMG") {
    return;
   }
  const instance = basicLightbox.create(`<img src=${e.target.dataset.source} width="800" height="600" />`)

  instance.show();
}