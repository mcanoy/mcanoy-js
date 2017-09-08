// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import * as VueGoogleMaps from 'vue2-google-maps';

import App from './App';

import Home from './components/Home';
import About from './components/About';
import TodoList from './components/TodoList';
import Carousel from './components/Carousel';
import Photos from './components/Photos';
import Places from './components/Places';


Vue.use(VueRouter);
Vue.use(VueGoogleMaps, {
  load: {
    key: `${process.env.MAP_KEY}`,
//    libraries: 'places', //// If you need to use place input
  },
});
Vue.config.productionTip = false;

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/todo-list', component: TodoList },
    { path: '/carousel', component: Carousel },
    { path: '/places', component: Places },
    { path: '/places/:id', component: Places },
    { path: '/photos/:name', component: Photos },
  ],
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
}).$mount('#app');
