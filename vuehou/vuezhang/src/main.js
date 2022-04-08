
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false;

Vue.prototype.$info = "挂载到原型的数据";
import axios from "axios";

Vue.prototype.$axios = axios;
Vue.prototype.$basUrl = "http://localhost:3000";

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
