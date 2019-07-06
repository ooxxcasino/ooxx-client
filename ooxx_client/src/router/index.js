import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/Login'
import Register from '../views/register/Register'
import Info from '../views/info/Info'
import Home from '../views/home/Home'
import Main from '../views/main/Main'
import Lesson from '../views/lesson/Lesson'
import Article from '../views/article/Article'
import Mine from '../views/mine/Mine'
import Video from '../views/video/Video'
import Question from '../views/question/Question'

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/info',
      component: Info
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '',
          redirect: 'main'
        },
        {
          // path: '/main', //  path 最左侧的 / 永远代表根路径，不对
          path: '/home/main',
          component: Main
        },
        {
          path: '/home/lesson',
          component: Lesson
        },
        {
          path: '/home/article',
          component: Article
        },
        {
          path: '/home/mine',
          component: Mine
        }
      ]
    },
    {
      path: '/video/:id',
      component: Video
    },
    {
      path: '/question',
      component: Question
    }
  ]
})
