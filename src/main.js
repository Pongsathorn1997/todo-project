import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/plugins/vuelidate';
import vuetify from './plugins/vuetify';
import store from './store/store';
import '@/plugins/firebase';

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')