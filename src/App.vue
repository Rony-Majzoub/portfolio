<template>
  <header
    class="navigation grid grid-cols-12 col-span-full fixed top-0 left-0 right-0 pb-2 pt-3 z-50 bg-transparent bg-gradient-dot bg-[length:8px_8px] duration-500 ease-out-expo">
    <div
      class="navigation-row flex flex-row justify-between col-start-2 col-end-[-2] max-w-full items-center">
      <router-link to="/">
        <img
          class="w-20 col-span-1 text-melon font-semibold"
          src="/assets/logo.svg"
          alt="Rony Majzoub"
          width="96"
          height="59" />
      </router-link>
      <div class="navigation-items flex col-span-full flex-row gap-4">
        <router-link
          class="nav-desktop relative hidden lg:inline transition-all duration-300 text-cameo-pink text-lg font-bold text-right antialiased"
          :to="{ path: '/', hash: '#projects' }">
          Projects
        </router-link>
        <router-link
          class="nav-desktop relative hidden lg:inline transition-all duration-300 text-cameo-pink text-lg font-bold text-right antialiased"
          to="/fun">
          Fun
        </router-link>
        <router-link
          class="nav-desktop relative hidden lg:inline transition-all duration-300 text-cameo-pink text-lg font-bold text-right antialiased"
          to="/about">
          About Me
        </router-link>
      </div>
    </div>
  </header>
  <router-view v-slot="{ Component, route }">
    <transition name="fade-in-up" appear>
      <div
        :key="route.name"
        class="grid-cols-12 min-h-[95vh] grid pb-96 lg:pb-28 pt-28">
        <component :is="Component" v-cloak />
      </div>
    </transition>
  </router-view>
  <navbar></navbar>
  <footer
    class="page-footer relative flex justify-center items-center lg:h-auto bg-black-coffee bottom-32 lg:bottom-0 left-0 right-0 mb-0 lg:grid lg:grid-cols-12 lg:col-start-2 lg:col-end-[-2] lg:py-4 lg:px-0 duration-500 ease-out-expo">
    <div
      class="relative flex flex-col gap-4 max-lg:w-4/5 lg:col-start-1 lg:col-end-[-1] lg:flex-row lg:justify-between lg:gap-12 lg:mx-32">
      <!-- Footer Overline -->
      <div class="bg-eggplant absolute w-full -top-4 h-[2px]"></div>
      <!-- Footer Content -->
      <div class="flex flex-col gap-1">
        <p class="text-unbleached-silk font-extrabold text-base lg:text-lg">
          Copyright
        </p>
        <div class="flex flex-row gap-2">
          <p
            class="font-semibold text-xs tracking-widest uppercase text-cameo-pink antialiased">
            © {{ new Date().getFullYear() }} Rony Majzoub
          </p>
        </div>
      </div>
      <div class="flex flex-col gap-1">
        <p class="text-unbleached-silk font-extrabold text-base lg:text-lg">
          Contact
        </p>
        <div class="flex flex-row gap-2">
          <a
            href="mailto:majzoubrony@gmail.com"
            class="nav-contact relative text-cameo-pink hover:text-unbleached-silk transition-colors ease-[cubic-bezier(0,0.8,0.2,1)] duration-300 font-semibold text-sm lg:text-base antialiased">
            majzoubrony@gmail.com
          </a>
          <p
            class="text-cameo-pink font-semibold text-sm lg:text-base antialiased">
            –
          </p>
          <a
            href="tel:+46722960295"
            class="nav-contact relative text-cameo-pink hover:text-unbleached-silk transition-colors ease-[cubic-bezier(0,0.8,0.2,1)] duration-300 font-semibold text-sm lg:text-base antialiased">
            072 296 02 95
          </a>
        </div>
      </div>
      <div class="flex flex-col gap-1">
        <p class="text-unbleached-silk font-extrabold text-base lg:text-lg">
          Social media
        </p>
        <div class="flex flex-row gap-2">
          <a
            href="https://www.linkedin.com/in/rony-majzoub"
            class="nav-contact relative social-media text-cameo-pink hover:text-unbleached-silk transition-colors ease-[cubic-bezier(0,0.8,0.2,1)] duration-300 font-semibold text-sm lg:text-base antialiased">
            LinkedIn
          </a>
          <p
            class="text-cameo-pink font-semibold text-sm lg:text-base antialiased">
            –
          </p>
          <a
            href="https://www.instagram.com/rony.majzoub/"
            class="nav-contact relative social-media text-cameo-pink hover:text-unbleached-silk transition-colors ease-[cubic-bezier(0,0.8,0.2,1)] duration-300 font-semibold text-sm lg:text-base antialiased">
            Instagram
          </a>
        </div>
      </div>

      <!-- <p
        class="font-semibold text-xs tracking-widest uppercase text-cameo-pink pb-4 antialiased">
        Copyright {{ new Date().getFullYear() }} Rony Majzoub
      </p> -->
    </div>
  </footer>
</template>

<script>
// import Sidebar from "@/components/Sidebar.vue";
export default {
  // components: {
  //   Sidebar,
  // },
  // methods: {
  //   enterElement(el, done) {
  //     this.$anime({
  //       targets: el,
  //       translateY: [40, 0],
  //       opacity: [0, 1],
  //       duration: 500,
  //       delay: 300,
  //       easing: "easeOutCubic",
  //       complete: done,
  //     });
  //   },
  //   leaveElement(el, done) {
  //     this.$anime({
  //       targets: el,
  //       translateY: [0, 20],
  //       opacity: [1, 0],
  //       duration: 200,
  //       easing: "easeInQuint",
  //       complete: done,
  //     });
  //   },
  // },
};
</script>

<style lang="scss">
@import url("https://use.typekit.net/sdt4vtw.css");
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap");
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

@keyframes fadeInUp {
  from {
    transform: translate3d(0, 50px, 0);
    opacity: 0;
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
    transform: translate3d(0, 25px, 0);
    opacity: 0;
  }
}
.fade-in-up-leave-active {
  opacity: 0;
  animation-duration: 0.2s;
  animation-timing-function: cubic-bezier(0.64, 0, 0.78, 0); //EaseInQuint
  animation-fill-mode: both;
  animation-name: fadeOutDown;
}
.fade-in-up-enter-active {
  opacity: 0;
  animation-duration: 0.5s;
  animation-delay: 0.3s;
  animation-timing-function: cubic-bezier(0.33, 1, 0.68, 1); //EaseOutCubic
  animation-fill-mode: both;
  animation-name: fadeInUp;
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

.nav-desktop::before,
.nav-contact::before {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 2px;
  bottom: 4px;
  left: 0;
  background-color: currentColor;
  transform: scaleX(0);
  transition: all 300ms;
  transition-timing-function: cubic-bezier(0, 0.8, 0.2, 1);
}
.nav-contact::before {
  bottom: 2px;
}

.nav-desktop:hover::before,
.nav-contact:hover::before {
  transform: scaleX(1);
}

.nav-desktop.router-link-active {
  text-decoration-color: var(--unbleached-silk) !important;
  color: var(--unbleached-silk) !important;
  transition: var(--animation-curve) 250ms !important;
}
.nav-desktop.router-link-active::before {
  background-color: var(--unbleached-silk);
  transform: scaleX(1);
}
.footer-overline::before {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 2px;
  top: -16px;
  left: 0;
  background-color: currentColor;
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
