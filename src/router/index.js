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
  scrollBehavior (savedPosition) {
    return savedPosition || new Promise((resolve)=>{
      setTimeout(()=> resolve({ top: 0}), 200)
    })

  }
})

export default router
