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
  routes
})

export default router

