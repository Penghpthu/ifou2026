import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Themes from '../views/Themes.vue'
import KeynoteSpeakers from '../views/KeynoteSpeakers.vue'
import Contribute from '../views/Contribute.vue'
import Programme from '../views/Programme.vue'
import Attend from '../views/Attend.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/themes',
    name: 'Themes',
    component: Themes
  },
  {
    path: '/keynote-speakers',
    name: 'KeynoteSpeakers',
    component: KeynoteSpeakers
  },
  {
    path: '/contribute',
    name: 'Contribute',
    component: Contribute
  },
  {
    path: '/programme',
    name: 'Programme',
    component: Programme
  },
  {
    path: '/attend',
    name: 'Attend',
    component: Attend
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    // 如果有保存的位置（浏览器前进/后退），使用保存的位置
    if (savedPosition) {
      return savedPosition
    }
    // 如果目标路由有hash（锚点链接），滚动到锚点
    else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 100 // 偏移量，避免被固定导航栏遮挡
      }
    }
    // 否则滚动到页面顶部
    else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

export default router

