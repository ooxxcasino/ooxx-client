import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/Login'
import Register from '../views/register/Register'
import Info from '../views/info/Info'
import Home from '../views/home/Home'
import Main from '../views/main/Main'

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/info',
      name: 'info',
      component: Info
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: '',
          redirect: 'main'
        },
        {
          // path: '/main', //  path 最左侧的 / 永远代表根路径，不对
          path: '/home/main',
          name: 'main',
          component: Main
        }
      ]
    }
  ]
})
