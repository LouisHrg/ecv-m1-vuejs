import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'

import IndexCours1 from '@/views/cours1/IndexCours1.vue'
import Exo1 from '@/views/cours1/Exo1.vue'
import Exo2 from '@/views/cours1/Exo2.vue'
import Exo3 from '@/views/cours1/Exo3.vue'
import Exo4 from '@/views/cours1/Exo4.vue'
import Exo5 from '@/views/cours1/Exo5.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cours-1',
    name: 'IndexCours1',
    component: IndexCours1
  },
  {
    path: '/cours-1/exo-1',
    name: 'Exo1',
    component: Exo1
  },
  {
    path: '/cours-1/exo-2',
    name: 'Exo2',
    component: Exo2
  },
  {
    path: '/cours-1/exo-3',
    name: 'Exo3',
    component: Exo3
  },
  {
    path: '/cours-1/exo-4',
    name: 'Exo4',
    component: Exo4
  },
  {
    path: '/cours-1/exo-5',
    name: 'Exo5',
    component: Exo5
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
