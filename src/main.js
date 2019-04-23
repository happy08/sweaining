// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
//import qs from 'qs'
import querystring from 'querystring'
import '@/assets/css/css.css'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import '@/assets/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)

axios.defaults.baseURL = 'http://www.sweaining.com/';
Vue.prototype.axios = axios;
Vue.prototype.qs = querystring;
Vue.prototype.bus = new Vue();

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
