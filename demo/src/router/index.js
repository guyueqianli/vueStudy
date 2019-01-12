import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Home from '@/views/Home'
import List from '@/views/List'
import User from '@/views/User'
import Add from '@/views/Add'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'list',
          name: 'list',
          component: List
        },
        {
          path: 'user',
          name: 'user',
          component: User
        }
      ]
    },
    {
      path: '/add',
      name: 'add',
      component: Add
    }
  ]
})
