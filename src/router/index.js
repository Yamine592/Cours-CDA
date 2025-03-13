import { createRouter, createWebHashHistory } from 'vue-router'
import login from '@/views/login.vue'
import HomeView from '@/views/HomeView.vue'
import Inscription from '@/views/inscription.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/inscription',
    name: 'inscription',
    component: Inscription
  },
  {
    path: '/RGPD',
    name: 'RGPD',
    views: 'RGPD'
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
