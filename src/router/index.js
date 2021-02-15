import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from "@/views/Login";
import Register from "@/views/Register";
import Todo from "@/views/Todo";
import firebase from '@/plugins/firebase';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      requiredLogin: false,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta:{
      requiredLogin: false,
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta:{
      requiredLogin: false,
    },
  },
  {
    path: '/todo',
    name: 'Todo',
    component: Todo,
    meta:{
      requiredLogin: true,
    },
  },
]

const router = new VueRouter({
  mode: 'hash',
  routes,
});

router.beforeEach(async (to, from, next) => {
  const identifyUser = to.matched.some((record) => record.meta.requiredLogin);
  if (identifyUser && !await firebase.getCurrentUser()) {
    next({ name: 'Login' });
  }
  else if (!identifyUser && await firebase.getCurrentUser()){
    next({ name: 'Todo'});
  }
  else {
    next();
  }
});

Vue.$router = router;

export default router