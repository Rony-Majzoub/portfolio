<template>
  <div
    class="navbar lg:hidden border-4 border-pastel-pink col-span-full p-4 bg-eggplant rounded-full fixed inset-x-0 bottom-6 z-50 mx-auto w-4/5 shadow-md shadow-[#2b212c]/50 duration-300 ease-in-out">
    <div
      class="pill-bg bg-melon absolute rounded-full top-1/2 -translate-y-1/2 py-5 origin-center -z-10"
      :class="{
        'pill-about': $route.path === '/about',
        'pill-fun': $route.path === '/fun',
        'pill-projects': $route.path === '/',
      }"></div>
    <div class="flex gap-4 flex-row justify-evenly items-baseline h-full">
      <router-link
        class="nav-mobile nav-projects inline-block transition-all duration-300 text-cameo-pink text-lg font-bold text-center tracking-wide antialiased"
        :to="{ path: '/', hash: '#projects' }">
        Projects
      </router-link>
      <router-link
        class="nav-mobile nav-fun inline-block transition-all duration-300 text-cameo-pink text-lg font-bold text-center tracking-wide antialiased"
        to="/fun">
        Fun
      </router-link>
      <router-link
        class="nav-mobile nav-about inline-block transition-all duration-300 text-cameo-pink text-lg font-bold text-center tracking-wide antialiased"
        to="/about">
        About Me
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {
      show: true,
      pill: "",
      navProjects: "",
      projectsWidth: "",
      projectsHeight: "",
      projectsPositionX: "",
      projectsPositionY: "",
      navFun: "",
      funWidth: "",
      funHeight: "",
      funPositionX: "",
      funPositionY: "",
      navAbout: "",
      aboutWidth: "",
      aboutHeight: "",
      aboutPositionX: "",
      aboutPositionY: "",
    };
  },
  watch: {
    $route: function () {
      // Check if given route is true, if it is then hide Nav.
      if (this.$route.path === "/") {
        this.pillProjects();
      } else if (this.$route.path === "/fun") {
        this.pillFun();
      } else if (this.$route.path === "/about") {
        this.pillAbout();
      } else {
        this.pillHide();
      }
    },
  },
  mounted() {
    this.pillStart();
  },

  methods: {
    pillStart() {
      this.pill = document.querySelector(".pill-bg");
      this.navProjects = document.querySelector(".nav-projects");
      this.projectsWidth = this.navProjects.scrollWidth;
      this.projectsHeight = this.navProjects.scrollHeight;
      this.projectsPositionX = this.navProjects.offsetLeft;
      this.projectsPositionY = this.navProjects.offsetTop;
      this.navFun = document.querySelector(".nav-fun");
      this.funWidth = this.navFun.scrollWidth;
      this.funHeight = this.navFun.scrollHeight;
      this.funPositionX = this.navFun.offsetLeft;
      this.funPositionY = this.navFun.offsetTop;
      this.navAbout = document.querySelector(".nav-about");
      this.aboutWidth = this.navAbout.scrollWidth;
      this.aboutHeight = this.navAbout.scrollHeight;
      this.aboutPositionX = this.navAbout.offsetLeft;
      this.aboutPositionY = this.navAbout.offsetTop;
    },
    pillProjects() {
      this.pill.style.opacity = 1;
      this.pill.style.width = this.projectsWidth + 40 + "px";
      this.pill.style.height = this.projectsHeight + "px";
      this.pill.style.left = this.projectsPositionX - 20 + "px";
      // this.pill.style.top = this.projectsPositionY + "px";
      console.log(
        this.projectsWidth,
        this.projectsHeight,
        this.projectsPositionX,
        this.projectsPositionY
      );
    },
    pillFun() {
      this.pill.style.opacity = 1;
      this.pill.style.width = this.funWidth + 40 + "px";
      this.pill.style.height = this.funHeight + "px";
      this.pill.style.left = this.funPositionX - 20 + "px";
      // this.pill.style.top = this.funPositionY + "px";
      console.log(
        this.funWidth,
        this.funHeight,
        this.funPositionX,
        this.funPositionY
      );
    },
    pillAbout() {
      this.pill.style.opacity = 1;
      this.pill.style.width = this.aboutWidth + 40 + "px";
      this.pill.style.height = this.aboutHeight + "px";
      this.pill.style.left = this.aboutPositionX - 20 + "px";
      // this.pill.style.top = this.aboutPositionY + "px";
      console.log(
        this.aboutWidth,
        this.aboutHeight,
        this.aboutPositionX,
        this.aboutPositionY
      );
    },
    pillHide() {
      this.pill.style.opacity = 0;
    },
  },
};
</script>

<style lang="scss">
.nav-mobile.router-link-active {
  color: var(--black-coffee) !important;
  transition: cubic-bezier(0, 0.8, 0.2, 1) 250ms !important;
  position: relative;
}
.pill-bg {
  position: absolute;
  transition-property: all;
  transition-timing-function: cubic-bezier(0, 0.8, 0.2, 1);
  transition-duration: 250ms;
}
// .pill-projects {
//   top: 50%;
//   left: 5%;
//   transform: translate(-5%, -50%);
//   width: 35% !important ;
// }
// .pill-fun {
//   top: 50%;
//   left: 47.5%;
//   transform: translate(-47.5%, -50%);
//   width: 20% !important ;
// }
// .pill-about {
//   top: 50%;
//   left: 92%;
//   transform: translate(-92%, -50%);
//   width: 36% !important ;
// }
</style>
