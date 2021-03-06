import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import Todo from '@/views/Todo.vue';
import firebase from '@/plugins/firebase';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    alias: '/',
    component: Home,
    meta: {
      requiresLogin: false,
    }
  },
  {
    path: '/login',
    name: 'Login',
    alias: '/',
    component: Login,
    meta: {
      requiresLogin: false,
    },
  },
  {
    path: '/register',
    component: Register,
    meta: {
      requiresLogin: false,
    },
  },
  {
    path: '/todos',
    name: 'Todos',
    component: Todo,
    meta: {
      requiresLogin: true,
    },
  },
];

const router = new VueRouter({
  mode: 'hash',
  routes,
});

router.beforeEach(async (to, from, next) => {
  const requiresLogin = to.matched.some((record) => record.meta.requiresLogin);
  if (requiresLogin && !await firebase.getCurrentUser()) {
    next('Login');
  } else if (!requiresLogin && await firebase.getCurrentUser()) {
    next('Todos');
  } else {
    next();
  }
});
Vue.$router = router;

export default router;
