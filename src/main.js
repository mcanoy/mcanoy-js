// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';

import Home from './components/Home';
import About from './components/About';
import TodoList from './components/TodoList';
import Carousel from './components/Carousel';

Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/todo-list', component: TodoList },
    { path: '/carousel', component: Carousel },
  ],
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
}).$mount('#app');
