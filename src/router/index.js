import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login'
import Todo from '@/components/Todo'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/todo',
    name: 'todo',
    component: Todo
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

Vue.$router = router

export default router
