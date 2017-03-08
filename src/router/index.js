import Vue from 'vue';
import Router from 'vue-router';
import Auth from '@/components/Auth';
import Hello from '@/components/Hello';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Auth',
      component: Auth,
    },
    {
      path: '/welcome',
      name: 'Welcome',
      component: Hello,
    },
  ],
});
