import Vue from "vue";
import App from "./App.vue";

import axios from "axios";

axios.defaults.baseURL = "https://api.tvmaze.com/";

Vue.config.productionTip = false;

import store from './store'

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");