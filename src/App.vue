<template>
  <header
    class="navigation grid grid-cols-12 col-span-full fixed top-0 left-0 right-0 pb-2 pt-3 z-50 bg-transparent bg-gradient-dot bg-[length:8px_8px] duration-500 ease-out-expo">
    <div
      class="navigation-row flex flex-row justify-between col-start-2 col-end-[-2] max-w-full items-center">
      <router-link to="/">
        <img
          class="h-11 col-span-1 text-melon font-semibold"
          src="/assets/logo.svg"
          alt="Rony Majzoub"
          width="72"
          height="44" />
      </router-link>
      <div class="navigation-items flex col-span-full flex-row gap-4">
        <router-link
          class="nav-desktop hidden lg:inline transition-all duration-200 text-cameo-pink underline underline-offset-2 hover:underline-offset-4 hover:decoration-inherit decoration-transparent decoration-2 text-lg font-bold text-right tracking-wide antialiased"
          :to="{ path: '/', hash: '#projects' }">
          Projects
        </router-link>
        <router-link
          class="nav-desktop hidden lg:inline transition-all duration-200 text-cameo-pink underline underline-offset-2 hover:underline-offset-4 hover:decoration-inherit decoration-transparent decoration-2 text-lg font-bold text-right tracking-wide antialiased"
          to="/fun">
          Fun
        </router-link>
        <router-link
          class="nav-desktop hidden lg:inline transition-all duration-200 text-cameo-pink underline underline-offset-2 hover:underline-offset-4 hover:decoration-inherit decoration-transparent decoration-2 text-lg font-bold text-right tracking-wide antialiased"
          to="/about">
          About Me
        </router-link>
        <sidebar></sidebar>
      </div>
    </div>
  </header>
  <router-view v-slot="{ Component }">
    <transition :css="false" appear @enter="enterElement" @leave="leaveElement">
      <component :is="Component" v-cloak />
    </transition>
  </router-view>
  <footer
    class="page-footer w-full gap-8 flex flex-col items-center text-center justify-between py-4 px-20 absolute h-12 bg-black-coffee bottom-0 left-0 right-0 mb-0 lg:grid lg:grid-cols-12 lg:col-start-2 lg:col-end-[-2] lg:py-4 lg:px-0 duration-500 ease-out-expo">
    <div
      class="flex flex-col gap-4 lg:col-span-full lg:flex-row lg:justify-between lg:gap-8">
      <div
        class="flex flex-col gap-4 lg:col-span-full lg:flex-row lg:justify-between lg:gap-8">
        <a
          href="mailto:majzoubrony@gmail.com"
          class="text-melon transition-all duration-200 font-bold underline underline-offset-2 hover:underline-offset-4 hover:decoration-inherit decoration-transparent decoration-2 text-sm lg:text-base tracking-wide antialiased">
          majzoubrony@gmail.com
        </a>
        <a
          href="tel:+46722960295"
          class="text-melon transition-all duration-200 font-bold underline underline-offset-2 hover:underline-offset-4 hover:decoration-inherit decoration-transparent decoration-2 text-sm lg:text-base tracking-wide antialiased">
          072 296 02 95
        </a>
        <a
          href="https://www.linkedin.com/in/rony-majzoub"
          class="social-media text-melon transition-all duration-200 font-extrabold underline underline-offset-2 hover:underline-offset-4 hover:decoration-inherit decoration-transparent decoration-2 text-sm lg:text-base tracking-wide antialiased">
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/rony.majzoub/"
          class="social-media text-melon transition-all duration-200 font-extrabold underline underline-offset-2 hover:underline-offset-4 hover:decoration-inherit decoration-transparent decoration-2 text-sm lg:text-base tracking-wide antialiased">
          Instagram
        </a>
        <a
          href="https://www.instagram.com/rony.majzoub/"
          class="social-media text-melon transition-all duration-200 font-extrabold underline underline-offset-2 hover:underline-offset-4 hover:decoration-inherit decoration-transparent decoration-2 text-sm lg:text-base tracking-wide antialiased">
          &#9432; About this Website
        </a>
      </div>
      <p
        class="font-semibold text-xs tracking-widest uppercase text-cameo-pink pb-4 antialiased">
        Copyright {{ new Date().getFullYear() }} Rony Majzoub
      </p>
    </div>
  </footer>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
export default {
  components: {
    Sidebar,
  },
  methods: {
    enterElement(el, done) {
      this.$anime({
        targets: el,
        translateY: [40, 0],
        opacity: [0, 1],
        duration: 500,
        delay: 300,
        easing: "easeOutCubic",
        complete: done,
      });
    },
    leaveElement(el, done) {
      this.$anime({
        targets: el,
        translateY: [0, 20],
        opacity: [1, 0],
        duration: 200,
        easing: "easeInQuint",
        complete: done,
      });
    },
  },
};
</script>

<style lang="scss">
@import url("https://use.typekit.net/sdt4vtw.css");
// @import url("https://rsms.me/inter/inter.css");
html {
  scroll-behavior: smooth;
  scrollbar-gutter: stable;
  height: 100%;
}
* {
  font-family: var(--font-primary);
}
*::selection {
  color: var(--eggplant);
  background-color: var(--unbleached-silk);
}
[v-cloak] {
  display: none;
}
// #app:after {
//   content: "";
//   z-index: 999;
//   position: fixed;
//   top: -50%;
//   left: -50%;
//   right: -50%;
//   bottom: -50%;
//   opacity: 0.5;
//   width: 200%;
//   height: 200vh;
//   background: transparent url("/assets/img/background-noise.png") repeat 0 0;
//   background-repeat: repeat;
//   animation: 0.2s infinite noise;
//   pointer-events: none;
// }
.nav-desktop.router-link-active {
  text-decoration-color: var(--unbleached-silk) !important;
  color: var(--unbleached-silk) !important;
  transition: var(--animation-curve) 250ms !important;
}

// @keyframes noise {
//   0% {
//     transform: translate3d(0, 0, 0);
//   }
//   10% {
//     transform: translate3d(-5%, -5%, 0);
//   }
//   20% {
//     transform: translate3d(-10%, 5%, 0);
//   }
//   30% {
//     transform: translate3d(5%, -10%, 0);
//   }
//   40% {
//     transform: translate3d(-5%, 15%, 0);
//   }
//   50% {
//     transform: translate3d(-10%, 5%, 0);
//   }
//   60% {
//     transform: translate3d(15%, 0, 0);
//   }
//   70% {
//     transform: translate3d(0, 10%, 0);
//   }
//   80% {
//     transform: translate3d(-15%, 0, 0);
//   }
//   90% {
//     transform: translate3d(10%, 5%, 0);
//   }
//   100% {
//     transform: translate3d(5%, 0, 0);
//   }
// }
</style>
