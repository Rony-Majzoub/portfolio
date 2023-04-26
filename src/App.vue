<template>
  <header
    class="navigation grid grid-cols-12 col-span-full fixed top-0 left-0 right-0 pb-2 pt-3 z-40 duration-500 ease-out-expo">
    <div
      class="navigation-overlay absolute w-full h-full bg-black-coffee -z-50 duration-500 ease-out-expo"></div>
    <div
      class="navigation-row flex flex-row justify-between col-start-2 col-end-[-2] max-w-full items-center">
      <router-link to="/">
        <svg
          alt="Rony Majzoub"
          class="fill-melon w-20 transition-all ease-[cubic-bezier(0,0.8,0.2,1)] duration-300"
          viewBox="0 0 96 59"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M89.4643 0.5H89.1781L89.0332 0.746836L65.8663 40.2029L43.0366 0.749578L42.8922 0.5H42.6039H28.6335H28.621L28.6086 0.500619C25.4695 0.65694 22.3523 1.1111 19.299 1.857L19.299 1.85698L19.2947 1.85808C16.9015 2.46547 14.6584 3.55714 12.7038 5.06562L12.7038 5.06559L12.6988 5.06954C10.9942 6.42002 9.65618 8.1771 8.80764 10.1795L8.8076 10.1794L8.80523 10.1852C7.94412 12.2903 7.5163 14.5474 7.54734 16.8215C7.53597 18.7668 7.86611 20.6989 8.5227 22.5301L8.52335 22.5319C9.16126 24.2899 10.1147 25.9169 11.3369 27.3326L11.3369 27.3326L11.3401 27.3362C12.617 28.787 14.1333 30.0077 15.8231 30.9456C17.4577 31.8649 19.203 32.569 21.0156 33.0414L2.60451 56.8437L1.98113 57.6496H3H12.1548H12.409L12.5588 57.4442L29.3211 34.4574H36.5011V57.1496V57.6496H37.0011H43.7146H44.2163L44.2146 57.1479L44.0687 14.3712L62.2999 47.6249L62.4422 47.8845H62.7383H69.2993H69.5922L69.7355 47.6289L88.3968 14.3222V57.1496V57.6496H88.8968H95H95.5V57.1496V1V0.5H95H89.4643ZM28.6335 7.60322H36.5193V27.9645H28.9997V27.9645L28.9918 27.9646C27.0457 27.9955 25.1062 27.7288 23.2408 27.1736C21.7426 26.7268 20.3505 25.9814 19.1483 24.982C18.0867 24.0707 17.2506 22.9261 16.7053 21.6376C16.1379 20.261 15.8541 18.7841 15.8713 17.2952H15.8713V17.2895C15.8713 14.041 16.9371 11.6618 19.0147 10.0628C21.1157 8.44577 24.2949 7.5992 28.633 7.60322H28.6335Z"
            fill="inherit"
            stroke="inherit" />
        </svg>
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
        class="grid-cols-12 min-h-[89vh] grid pb-52 lg:pb-28 pt-28">
        <component :is="Component" v-cloak />
      </div>
    </transition>
  </router-view>
  <navbarOld></navbarOld>
  <footer
    class="page-footer relative flex justify-center items-center lg:h-auto bg-black-coffee bottom-32 lg:bottom-0 left-0 right-0 mb-0 lg:grid lg:grid-cols-12 lg:col-start-2 lg:col-end-[-2] lg:py-4 lg:px-0 footer-animation">
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
        <div class="flex flex-col lg:flex-row gap-2">
          <a
            href="mailto:majzoubrony@gmail.com"
            class="nav-contact w-fit relative text-cameo-pink hover:text-unbleached-silk transition-colors ease-[cubic-bezier(0,0.8,0.2,1)] duration-300 font-semibold text-sm lg:text-base antialiased">
            majzoubrony@gmail.com
          </a>
          <p
            class="text-cameo-pink font-semibold text-sm lg:text-base max-lg:hidden antialiased">
            –
          </p>
          <a
            href="tel:+46722960295"
            class="nav-contact w-fit relative text-cameo-pink hover:text-unbleached-silk transition-colors ease-[cubic-bezier(0,0.8,0.2,1)] duration-300 font-semibold text-sm lg:text-base antialiased">
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
export default {
  watch: {
    $route(to, from) {
      // Listen to all touch and mousewheel inputs to cancel animeJS smooth-scrolling.
      document.addEventListener("touchstart", this.cancelScroll);
      document.addEventListener("touchmove", this.cancelScroll);
      document.addEventListener("touchend", this.cancelScroll);
      document.addEventListener("wheel", this.cancelScroll);

      // If route-target is a hash, scroll to hash.
      if (to.hash) {
        const height = window.innerHeight;
        this.$anime({
          targets: window.document.documentElement,
          scrollTop: height - 50,
          duration: 750,
          easing: "cubicBezier(.75,0,.2,1)",
        });
      }
      // If route-target is not a hash, scroll to top of page.
      else {
        // if (window.document.documentElement.scrollTop !== 0) {
        this.$anime({
          targets: window.document.documentElement,
          scrollTop: 0,
          duration: 750,
          easing: "cubicBezier(.75,0,.2,1)",
        });
        // }
      }
      // If route-target is "about", animate the footer (only on screens of 1024px and above).
      if (this.$route.path === "/about") {
        const query = window.matchMedia("(min-width: 1024px)");
        query.onchange = (evt) => {
          if (query.matches) {
            document.querySelector(".footer-animation").style.position =
              "fixed";
            this.$anime({
              targets: ".footer-animation",
              translateY: [120, 0],
              opacity: [0, 1],
              duration: 1000,
              delay: 250,
              easing: "easeOutQuint",
            });
          } else {
            document.querySelector(".footer-animation").style.position = "";
          }
        };
        // perform the initial check
        query.onchange();
      } else {
        document.querySelector(".footer-animation").style.position = "";
      }
    },
  },
  methods: {
    // Method to remove animeJS animation, called at the top through eventListeners.
    cancelScroll() {
      this.$anime.remove(window.document.documentElement);
    },
  },
};
</script>

<style lang="scss">
@import url("https://use.typekit.net/sdt4vtw.css");
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@700;800;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&display=swap");
@import url("https://rsms.me/inter/inter.css");
@import "styles/variables";

@font-face {
  font-family: "Satoshi-Variable";
  font-display: swap;
  src: local("Satoshi Variable"),
    url(./fonts/satoshi_variable/Satoshi-Variable.woff2) format("woff2"),
    url(./fonts/satoshi_variable/Satoshi-Variable.ttf) format("truetype");
}

html {
  scrollbar-gutter: stable;
  height: 100%;
  overflow-x: hidden;
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
    transform: translate3d(0, -40px, 0);
    opacity: 0;
  }
  to {
    transform: translate3d(0, 0px, 0);
    opacity: 1;
  }
}
@keyframes fadeOutDown {
  from {
    transform: translate3d(0, 0px, 0);
    opacity: 1;
  }
  to {
    transform: translate3d(0, 20px, 0);
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
  animation-delay: 0.25s;
  animation-timing-function: cubic-bezier(0.33, 1, 0.68, 1); //EaseOutCubic
  animation-fill-mode: both;
  animation-name: fadeInUp;
}
@media (prefers-reduced-motion) {
  .fade-in-up-leave-active {
    animation-name: fadeOutDownReducedMotion !important;
  }
  .fade-in-up-enter-active {
    animation-duration: 0.35s !important;
    animation-name: fadeInUpReducedMotion !important;
  }
}
// @media (max-width: 640px) {
//   .fade-in-up-leave-active {
//     opacity: 0;
//     animation-duration: 0.2s;
//     animation-timing-function: cubic-bezier(0.32, 0, 0.67, 0); //EaseInCubic
//     animation-fill-mode: both;
//     animation-name: fadeOutDownMobile;
//   }
//   .fade-in-up-enter-active {
//     opacity: 0;
//     animation-duration: 0.4s;
//     animation-delay: 0.25s;
//     animation-timing-function: cubic-bezier(0.33, 1, 0.68, 1); //EaseOutCubic
//     animation-fill-mode: both;
//     animation-name: fadeInUpMobile;
//   }
// }
@keyframes fadeInUpReducedMotion {
  from {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
  to {
    transform: translate3d(0, 0px, 0);
    opacity: 1;
  }
}
@keyframes fadeOutDownReducedMotion {
  from {
    transform: translate3d(0, 0px, 0);
    opacity: 1;
  }
  to {
    transform: translate3d(0, 10px, 0);
    opacity: 0;
  }
}
@keyframes fadeInUpMobile {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeOutDownMobile {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
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
.navigation-overlay {
  mask-image: radial-gradient(rgba(0, 0, 0, 0) 1px, rgba(0, 0, 0, 1) 1px);
  mask-size: 8px 8px;
}
</style>
