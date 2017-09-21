// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import * as VueGoogleMaps from 'vue2-google-maps';

import App from './App';

import Home from './components/Home';
import About from './components/About';
import TodoList from './components/TodoList';
import PhotoSet from './components/PhotoSet';
import Photos from './components/Photos';
import Places from './components/Places';
import Test from './components/Test';
import LightboxImage from './components/lightbox/LightboxImage';

Vue.component('lightbox-image', LightboxImage);

Vue.use(VueRouter);
Vue.use(VueGoogleMaps, {
  load: {
    key: `${process.env.MAP_KEY}`,
  },
});
Vue.config.productionTip = false;

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/todo-list', component: TodoList },
    { path: '/places', component: Places },
    { path: '/places/:id', component: Places },
    { path: '/photos/:name', component: PhotoSet },
    { path: '/photos', component: Photos },
    { path: '/test', component: Test },
  ],
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
}).$mount('#app');
