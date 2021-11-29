import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Projects',
    component: () => import( /* webpackChunkName: "projects" */ "../views/Projects")
  },
  {
    path: '/fun',
    name: 'Fun',
    component: () => import( /* webpackChunkName: "fun" */ "../views/Fun")
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( /* webpackChunkName: "about" */ "../views/About")
  },
  {
    path: '/recypie',
    name: 'RecyPie',
    component: () => import( /* webpackChunkName: "recypie" */ "../views/RecyPie")
  },
  {
    path: '/buratino',
    name: 'Buratino',
    component: () => import( /* webpackChunkName: "buratino" */ "../views/Buratino")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior (to) {
    if (to.hash) {
      const height = window.innerHeight;
      return window.scrollTo({ 
        top: height - 50, left: 0, 
        behavior: 'smooth' 
      })
    } else {
      return { behavior: 'smooth', left: 0, top: 0 }
    }
  }
})

export default router
