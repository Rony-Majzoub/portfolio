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
      return { behavior: 'auto', left: 0, top: 0 }
    }
  }
})

export default router
