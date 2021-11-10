import { createRouter, createWebHashHistory } from 'vue-router'
import Projects from '../views/Projects.vue'
import Fun from '../views/Fun.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/fun',
    name: 'Fun',
    component: Fun
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
