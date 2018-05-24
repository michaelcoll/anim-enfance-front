import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import VueMaterial from '../node_modules/vue-material';
import '../node_modules/vue-material/dist/vue-material.min.css';
import '../node_modules/vue-material/dist/theme/default.css';

Vue.config.productionTip = false;
Vue.use(VueMaterial);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
