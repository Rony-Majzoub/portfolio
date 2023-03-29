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
    return { show: true };
  },
  // watch: {
  //   $route(to, from) {
  //     requestAnimationFrame(() => {
  //       this.matchWidth();
  //     });
  //   },
  // },
  watch: {
    $route: function () {
      // Check if given route is true, if it is then hide Nav.
      if (this.$route.path === "/") {
        this.matchWidthProjects();
      } else if (this.$route.path === "/fun") {
        this.matchWidthFun();
      } else if (this.$route.path === "/about") {
        this.matchWidthAbout();
      } else {
        this.matchWidthHide();
      }
    },
  },

  methods: {
    matchWidth() {
      let routerItem = document.querySelector(".router-link-exact-active");
      let pill = document.querySelector(".pill-bg");
      var width = routerItem.scrollWidth;
      var positionX = routerItem.clientLeft;
      var positionY = routerItem.clientTop;
      console.log(width, positionX, positionY);
    },
    matchWidthProjects() {
      let routerItem = document.querySelector(".nav-projects");
      let pill = document.querySelector(".pill-bg");
      var width = routerItem.scrollWidth;
      var height = routerItem.scrollHeight;
      var positionX = routerItem.offsetLeft;
      var positionY = routerItem.offsetTop;
      pill.style.opacity = 1;
      pill.style.width = width + 40 + "px";
      pill.style.height = height + "px";
      pill.style.left = positionX - 20 + "px";
      // pill.style.top = positionY + "px";
      console.log(width, height, positionX, positionY);
    },
    matchWidthFun() {
      let routerItem = document.querySelector(".nav-fun");
      let pill = document.querySelector(".pill-bg");
      var width = routerItem.scrollWidth;
      var height = routerItem.scrollHeight;
      var positionX = routerItem.offsetLeft;
      var positionY = routerItem.offsetTop;
      pill.style.opacity = 1;
      pill.style.width = width + 40 + "px";
      pill.style.height = height + "px";
      pill.style.left = positionX - 20 + "px";
      // pill.style.top = positionY + "px";
      console.log(width, height, positionX, positionY);
    },
    matchWidthAbout() {
      let routerItem = document.querySelector(".nav-about");
      let pill = document.querySelector(".pill-bg");
      var width = routerItem.scrollWidth;
      var height = routerItem.scrollHeight;
      var positionX = routerItem.offsetLeft;
      var positionY = routerItem.offsetTop;
      pill.style.opacity = 1;
      pill.style.width = width + 40 + "px";
      pill.style.height = height + "px";
      pill.style.left = positionX - 20 + "px";
      // pill.style.top = positionY + "px";
      console.log(width, height, positionX, positionY);
    },
    matchWidthHide() {
      let pill = document.querySelector(".pill-bg");
      pill.style.opacity = 0;
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
  transition-duration: 300ms;
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
