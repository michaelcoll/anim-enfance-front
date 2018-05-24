import Vue from 'vue';
import Router from 'vue-router';
import Creche from './views/Creche.vue';
import About from './views/About.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/creche',
      name: 'creche',
      component: Creche,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
});
