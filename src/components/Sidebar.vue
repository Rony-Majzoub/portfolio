<template>
  <transition name="slide-fade">
    <div
      class="nav-menu fixed left-full top-0 bg-eggplant will-change-[transform,_display] w-full text-right duration-300 ease-in-out m-0 h-screen grid grid-cols-12 grid-rows-[repeat(3,_5rem)] col-span-full pt-28 lg:hidden">
      <router-link
        :to="{ path: '/', hash: '#projects' }"
        class="nav-item text-cameo-pink underline underline-offset-auto decoration-4 decoration-transparent col-start-1 col-end-[-2] font-semibold text-4xl tracking-tighter">
        Projects
      </router-link>
      <router-link
        to="/fun"
        class="nav-item text-cameo-pink underline underline-offset-auto decoration-4 decoration-transparent col-start-1 col-end-[-2] font-semibold text-4xl tracking-tighter">
        Fun
      </router-link>
      <router-link
        to="/about"
        class="nav-item text-cameo-pink underline underline-offset-auto decoration-4 decoration-transparent col-start-1 col-end-[-2] font-semibold text-4xl tracking-tighter">
        About Me
      </router-link>
    </div>
  </transition>
  <!-- <button class="hamburger lg:hidden z-10" @click="show = !show">
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
  </button> -->
  <button class="hamburger lg:hidden z-10">
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
        class="burger-top origin-center fill-unbleached-silk" />
      <rect
        x="6"
        y="20"
        width="28"
        height="3"
        fill="white"
        class="burger-middle origin-center fill-unbleached-silk" />
      <rect
        x="6"
        y="28"
        width="28"
        height="3"
        fill="white"
        class="burger-bottom origin-center fill-unbleached-silk" />
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
        duration: 400,
      })
      .add(
        {
          targets: ".burger-middle",
          autoplay: false,
          y: "-=2",
          easing: "easeInOutBack",
          duration: 400,
        },
        "-=400"
      )
      .add(
        {
          targets: ".burger-bottom",
          autoplay: false,
          y: "-=10",
          easing: "easeInOutBack",
          duration: 400,
        },
        "-=400"
      )
      .add(
        {
          targets: ".burger-top",
          autoplay: false,
          rotate: "45deg",
          easing: "easeInOutBack",
          duration: 400,
        },
        "-=200"
      )
      .add(
        {
          targets: ".burger-middle",
          autoplay: false,
          rotate: "45deg",
          opacity: 0,
          easing: "easeInOutBack",
          duration: 400,
        },
        "-=400"
      )
      .add(
        {
          targets: ".burger-bottom",
          autoplay: false,
          rotate: "-45deg",
          easing: "easeInOutBack",
          duration: 400,
        },
        "-=400"
      );

    hamburger.addEventListener("click", mobileMenu);
    navLink.forEach((n) => n.addEventListener("click", closeMenu));

    function mobileMenu() {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
      burgerAnimation.play();
      burgerAnimation.finished.then(() => {
        burgerAnimation.reverse();
      });
    }

    function closeMenu() {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      burgerAnimation.play();
      burgerAnimation.finished.then(() => {
        burgerAnimation.reverse();
      });
    }
  },
};
</script>

<style lang="scss">
.slide-fade-enter-from {
  transform: translateX(100vw);
}
.slide-fade-leave-to {
  transform: translateX(100vw);
}
.nav-menu.active {
  left: 0;
}

.hamburger {
  display: block;
  cursor: pointer;
}

.hamburger.active .bar:nth-child(2) {
  opacity: 0;
}

.hamburger.active .bar:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.hamburger.active .bar:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}
.bar {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  transition: all 0.3s var(--animation-curve);
  background-color: var(--melon);
}
</style>
