import { createRouter, createWebHashHistory } from "vue-router";
// import Projects from "@/views/Projects.vue";
// import Fun from "@/views/Fun.vue";
// import About from "@/views/About.vue";

const routes = [
  {
    path: "/",
    name: "Projects",
    component: () => import("@/views/Projects.vue"),
  },
  {
    path: "/fun",
    name: "Fun",
    component: () => import("@/views/Fun.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About.vue"),
  },
  {
    path: "/recypie",
    name: "RecyPie",
    component: () => import("@/views/RecyPie.vue"),
  },
  {
    path: "/buratino",
    name: "Buratino",
    component: () => import("@/views/Fun/Buratino.vue"),
  },
  {
    path: "/smoove",
    name: "Smoove",
    component: () => import("@/views/Smoove.vue"),
  },
  {
    path: "/futureexperiencelab",
    name: "FutureExperienceLab",
    component: () => import("@/views/FutureExperienceLab.vue"),
  },
  {
    path: "/mojo",
    name: "Mojo",
    component: () => import("@/views/Mojo.vue"),
  },
  {
    path: "/vacina",
    name: "Vacina",
    component: () => import("@/views/Fun/Vacina.vue"),
  },
  {
    path: "/shuu",
    name: "Shuu",
    component: () => import("@/views/Fun/Shuu.vue"),
  },
  {
    path: "/polestar_website",
    name: "PolestarWebsite",
    component: () => import("@/views/Fun/PolestarWebsite.vue"),
  },
  {
    path: "/info_screen",
    name: "InfoScreen",
    component: () => import("@/views/Fun/InfoScreen.vue"),
  },
  {
    path: "/so_good",
    name: "SoGood",
    component: () => import("@/views/Fun/SoGood.vue"),
  },
  {
    path: "/donut_render",
    name: "DonutRender",
    component: () => import("@/views/Fun/DonutRender.vue"),
  },
  {
    path: "/donut_night",
    name: "DonutNightRender",
    component: () => import("@/views/Fun/DonutNightRender.vue"),
  },
  {
    path: "/project_punk",
    name: "ProjectPunk",
    component: () => import("@/views/Fun/ProjectPunk.vue"),
  },
  {
    path: "/brick_wall",
    name: "BrickWall",
    component: () => import("@/views/Fun/BrickWall.vue"),
  },
  {
    path: "/anvil_render",
    name: "AnvilRender",
    component: () => import("@/views/Fun/AnvilRender.vue"),
  },
  {
    path: "/nti_awards",
    name: "NTIAwards",
    component: () => import("@/views/Fun/NTIAwards.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      const height = window.innerHeight;
      return window.scrollTo({
        top: height - 50,
        left: 0,
        behavior: "smooth",
      });
    } else {
      return { behavior: "smooth", left: 0, top: 0 };
    }
  },
});

export default router;
