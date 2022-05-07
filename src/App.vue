<template>
  <header
    class="navigation grid grid-cols-12 col-span-full fixed top-0 left-0 right-0 py-3 z-50 bg-transparent bg-gradient-dot bg-[length:8px_8px]">
    <div
      class="navigation-row flex flex-row justify-between col-start-2 col-end-[-2] max-w-full items-center">
      <router-link to="/">
        <img class="h-11 col-span-1" src="/assets/logo.svg" alt="" />
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
    <transition name="fade-in-up">
      <component :is="Component" v-cloak />
    </transition>
  </router-view>
  <footer
    class="page-footer w-full gap-8 flex flex-col items-center text-center justify-between py-4 px-20 absolute h-12 bg-black-coffee bottom-0 left-0 right-0 mb-0 lg:grid lg:grid-cols-12 lg:col-start-2 lg:col-end-[-2] lg:py-4 lg:px-0">
    <div
      class="flex flex-col gap-4 lg:col-span-full lg:flex-row lg:justify-between lg:gap-8">
      <div
        class="flex flex-col gap-4 lg:col-span-full lg:flex-row lg:justify-between lg:gap-8">
        <a
          href="mailto:majzoubrony@gmail.com"
          class="text-melon font-bold no-underline text-sm lg:text-base tracking-wide antialiased">
          majzoubrony@gmail.com
        </a>
        <a
          href="tel:+46722960295"
          class="text-melon font-bold no-underline text-sm lg:text-base tracking-wide antialiased">
          072 296 02 95
        </a>
        <a
          href="https://www.linkedin.com/in/rony-majzoub"
          class="social-media text-melon font-extrabold no-underline text-sm lg:text-base tracking-wide antialiased">
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/rony.majzoub/"
          class="social-media text-melon font-extrabold no-underline text-sm lg:text-base tracking-wide antialiased">
          Instagram
        </a>
      </div>
      <p
        class="font-semibold text-xs tracking-widest uppercase text-cameo-pink pb-4 antialiased">
        Copyright 2021 Rony Majzoub
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
};
</script>

<style lang="scss">
@import url("https://use.typekit.net/sdt4vtw.css");
@import url("https://rsms.me/inter/inter.css");
html {
  scroll-behavior: smooth;
  scrollbar-gutter: stable;
}
* {
  font-family: var(--font-primary);
}
*::selection {
  color: var(--eggplant);
  background-color: var(--unbleached-silk);
}
#app:after {
  content: "";
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.5;
  width: 100vw;
  height: 100vh;
  background: url("/assets/img/background-noise.png");
  animation: 0.2s infinite noise;
  pointer-events: none;
}

@keyframes noise {
  0%,
  100% {
    background-position: 0 0;
  }
  10% {
    background-position: -5% -10%;
  }
  20% {
    background-position: -15% 5%;
  }
  30% {
    background-position: 7% -25%;
  }
  40% {
    background-position: 20% 25%;
  }
  50% {
    background-position: -25% 10%;
  }
  60% {
    background-position: 15% 5%;
  }
  70% {
    background-position: 0% 15%;
  }
  80% {
    background-position: 25% 35%;
  }
  90% {
    background-position: -10% 10%;
  }
}
.router-link-active {
  text-decoration-color: var(--unbleached-silk) !important;
  color: var(--unbleached-silk) !important;
  transition: var(--animation-curve) 250ms !important;
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 40px, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@keyframes fadeOutDown {
  from {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }

  to {
    transform: translate3d(0, 0px, 0);
    opacity: 0;
  }
}

.fade-in-up-leave-to {
  opacity: 0;
  animation-duration: 0.2s;
  animation-timing-function: var(--animation-curve);
  animation-fill-mode: both;
  animation-name: fadeOutDown;
}
.fade-in-up-enter-to {
  opacity: 0;
  animation-duration: 0.5s;
  animation-delay: 0.2s;
  animation-timing-function: var(--animation-curve);
  animation-fill-mode: both;
  animation-name: fadeInUp;
}
// @include breakpoint(sm) {
//   #app {
//     padding-top: 10rem;
//     padding-bottom: 10rem;
//   }
// }
// @include breakpoint(md) {
//   .router-link-active {
//     text-decoration: underline !important;
//     text-decoration-color: var(--unbleached-silk) !important;
//     color: var(--unbleached-silk) !important;
//     transition: var(--animation-curve) 250ms !important;
//   }
//   .navigation-items {
//     grid-column: 12;
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     gap: 1em;
//   }
//   .nav-desktop {
//     display: inline !important;
//     @include subtitle-1;
//     color: var(--cameo-pink);
//     text-underline-offset: 0.25em !important;
//     text-decoration-thickness: 2px !important;
//     text-decoration-color: transparent;
//     font-size: var(--text-md);
//     font-weight: 500;
//     line-height: var(--heading-line-height);
//     text-align: right;
//     transition: var(--animation-curve) 250ms !important;
//   }
//   .page-footer {
//     display: grid;
//     grid-template-columns: repeat(12, 1fr);
//     grid-column: 2 / -2;
//     padding: 1rem 0;
//     height: initial;
//     div {
//       grid-column: 1 / -1;
//       flex-direction: row;
//       justify-content: space-between;
//       gap: 2rem;
//     }
//   }
//   html {
//     font-size: 14px;
//   }
// }
// [v-cloak] {
//   display: none !important;
// }
//
</style>
