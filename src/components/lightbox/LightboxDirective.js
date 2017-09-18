import Vue from 'vue';
import store from './LightboxStore';

Vue.directive('lightbox', {
  bind(el) {
    const index = store.addImage(el.getAttribute('href'));

    el.addEventListener('click', (e) => {
      e.preventDefault();
      store.open(index);
    });
  },
  unbind(el) {
    store.removeImage(el.getAttribute('href'));
  },
});
