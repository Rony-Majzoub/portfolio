import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Projects',
    component: () => import("@/views/Projects.vue")
  },
  {
    path: '/fun',
    name: 'Fun',
    component: () => import("@/views/Fun.vue")
  },
  {
    path: '/about',
    name: 'About',
    component: () => import("@/views/About.vue")
  },
  {
    path: '/recypie',
    name: 'RecyPie',
    component: () => import("@/views/RecyPie.vue")
  },
  {
    path: '/buratino',
    name: 'Buratino',
    component: () => import("@/views/Buratino.vue")
  },
  {
    path: '/smoove',
    name: 'Smoove',
    component: () => import("@/views/Smoove.vue")
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
