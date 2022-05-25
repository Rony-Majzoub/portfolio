<template>
  <transition name="slide-fade">
    <div
      class="nav-menu fixed left-full top-0 bg-eggplant will-change-[transform,_display] w-full text-right duration-300 ease-in-out m-0 flex flex-col items-end gap-8 h-screen col-span-full pt-28 pr-[10vw] lg:hidden">
      <router-link
        :to="{ path: '/', hash: '#projects' }"
        class="nav-item origin-right bg-black-coffee text-cameo-pink no-underline underline-offset-auto decoration-4 decoration-transparent col-start-1 col-end-[-2] w-fit p-4 font-semibold text-4xl tracking-tighter">
        Projects
      </router-link>
      <router-link
        to="/fun"
        class="nav-item origin-right bg-black-coffee text-cameo-pink no-underline underline-offset-auto decoration-4 decoration-transparent col-start-1 col-end-[-2] w-fit p-4 font-semibold text-4xl tracking-tighter">
        Fun
      </router-link>
      <router-link
        to="/about"
        class="nav-item origin-right bg-black-coffee text-cameo-pink no-nderline underline-offset-auto decoration-4 decoration-transparent col-start-1 col-end-[-2] w-fit p-4 font-semibold text-4xl tracking-tighter">
        About Me
      </router-link>
    </div>
  </transition>
  <button class="hamburger lg:hidden block cursor-pointer p-1 z-10">
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect
        x="6"
        y="11"
        width="28"
        height="3"
        fill="white"
        class="burger-top burger origin-center fill-unbleached-silk" />
      <rect
        x="6"
        y="20"
        width="28"
        height="3"
        fill="white"
        class="burger-middle burger origin-center fill-unbleached-silk" />
      <rect
        x="6"
        y="28"
        width="28"
        height="3"
        fill="white"
        class="burger-bottom burger origin-center fill-unbleached-silk" />
    </svg>
  </button>
</template>
<script>
import anime from "animejs/lib/anime.es.js";
export default {
  name: "Sidebar",
  data() {
    return { show: true };
  },
  mounted() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLink = document.querySelectorAll(".nav-item");
    var burgerAnimation = anime
      .timeline({ autoplay: false })
      .add({
        targets: ".burger-top",
        autoplay: false,
        y: "+=7",
        easing: "easeInOutBack",
        duration: 350,
      })
      .add(
        {
          targets: ".burger-middle",
          autoplay: false,
          y: "-=2",
          easing: "easeInOutBack",
          duration: 350,
        },
        "-=350"
      )
      .add(
        {
          targets: ".burger-bottom",
          autoplay: false,
          y: "-=10",
          easing: "easeInOutBack",
          duration: 350,
        },
        "-=350"
      )
      .add(
        {
          targets: ".burger-top",
          autoplay: false,
          rotate: "+=45deg",
          easing: "easeInOutBack",
          duration: 350,
        },
        "-=175"
      )
      .add(
        {
          targets: ".burger-middle",
          autoplay: false,
          rotate: "+=45deg",
          opacity: 0,
          easing: "easeInOutBack",
          duration: 350,
        },
        "-=350"
      )
      .add(
        {
          targets: ".burger-bottom",
          autoplay: false,
          rotate: "-=45deg",
          easing: "easeInOutBack",
          duration: 350,
        },
        "-=350"
      );
    var navAnimation = anime.timeline({ autoplay: false }).add({
      targets: ".nav-item",
      translateX: ["250", "0"],
      delay: anime.stagger(100, { start: 50, from: "first" }),
      // backgroundColor: ["#4e404f", "#363040"],
      opacity: [0, 1],
      direction: "alternate",
      easing: "easeOutQuint",
      duration: 300,
    });

    hamburger.addEventListener("click", mobileMenu);
    navLink.forEach((n) => n.addEventListener("click", closeMenu));

    function mobileMenu() {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
      if (burgerAnimation.began) {
        burgerAnimation.reverse();

        if (
          burgerAnimation.progress === 100 &&
          burgerAnimation.direction === "reverse"
        ) {
          burgerAnimation.completed = false;
        }
      }

      if (burgerAnimation.paused) {
        burgerAnimation.play();
      }
      if (navAnimation.began) {
        navAnimation.reverse();

        if (
          navAnimation.progress === 100 &&
          navAnimation.direction === "reverse"
        ) {
          navAnimation.completed = false;
        }
      }

      if (navAnimation.paused) {
        navAnimation.play();
      }
    }

    function closeMenu() {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      if (burgerAnimation.began) {
        burgerAnimation.reverse();

        if (
          burgerAnimation.progress === 100 &&
          burgerAnimation.direction === "reverse"
        ) {
          burgerAnimation.completed = false;
        }
      }

      if (burgerAnimation.paused) {
        burgerAnimation.play();
      }
      if (navAnimation.began) {
        navAnimation.reverse();

        if (
          navAnimation.progress === 100 &&
          navAnimation.direction === "reverse"
        ) {
          navAnimation.completed = false;
        }
      }

      if (navAnimation.paused) {
        navAnimation.play();
      }
    }
  },
};
</script>

<style lang="scss">
.nav-item.router-link-active {
  text-decoration-color: var(--unbleached-silk) !important;
  color: var(--eggplant) !important;
  background-color: var(--unbleached-silk) !important;
  // transition: var(--animation-curve) 250ms !important;
}
.nav-item {
  transition-timing-function: var(--animation-curve);
  transition-duration: 100ms;
  transition-property: background-color;
}
.slide-fade-enter-from {
  transform: translateX(100vw);
}
.slide-fade-leave-to {
  transform: translateX(100vw);
}
.nav-menu.active {
  left: 0;
}
</style>
