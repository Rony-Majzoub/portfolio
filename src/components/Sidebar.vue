<template>
  <div class="nav-menu lg:hidden">
    <router-link :to="{ path: '/', hash: '#projects' }" class="nav-item">
      Projects
    </router-link>
    <router-link to="/fun" class="nav-item">Fun</router-link>
    <router-link to="/about" class="nav-item">About Me</router-link>
  </div>
  <div class="hamburger lg:hidden">
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
  </div>
</template>
<script>
export default {
  name: "Sidebar",
  mounted() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLink = document.querySelectorAll(".nav-item");

    hamburger.addEventListener("click", mobileMenu);
    navLink.forEach((n) => n.addEventListener("click", closeMenu));

    function mobileMenu() {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    }

    function closeMenu() {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    }
  },
};
</script>
<style lang="scss">
.nav-menu {
  position: fixed;
  right: -100%;
  top: 0rem;
  background-color: var(--eggplant);
  width: 100%;
  text-align: right;
  transition-duration: 0.3s;
  transition-timing-function: var(--animation-curve);
  margin: 0;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(3, 5rem);
  grid-column: 1 / -1;
  padding-top: 7.5rem;
}

.nav-menu.active {
  right: 0;
}
.nav-item {
  @include h1;
  grid-column: 1 / -2;
  height: 50%;
  color: var(--cameo-pink);
  text-decoration: underline !important;
  text-underline-offset: auto !important;
  text-decoration-thickness: 4px !important;
  text-decoration-color: transparent !important;
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

// @include breakpoint(md) {
//   .hamburger {
//     display: none;
//   }
//   .nav-menu {
//     display: none;
//   }
// }
</style>
