import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './config/vuetify';
import VueSilentbox from "vue-silentbox";
import AxiosConfig from "@/config/AxiosConfig";

Vue.use(VueSilentbox)
Vue.config.productionTip = false

const vue = new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

AxiosConfig.init(vue);
