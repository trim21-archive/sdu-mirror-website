// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import ElementUI from 'element-ui';
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(ElementUI);

/* eslint-disable no-new */

const store = new Vuex.Store();
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App },
});
