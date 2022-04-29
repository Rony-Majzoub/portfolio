<template>
  <div
    class="nav-menu fixed left-full top-0 bg-eggplant w-full text-right duration-300 ease-in-out m-0 h-screen grid grid-cols-12 grid-rows-[repeat(3,_5rem)] col-span-full pt-28 lg:hidden">
    <router-link
      :to="{ path: '/', hash: '#projects' }"
      class="nav-item text-cameo-pink underline underline-offset-auto decoration-4 decoration-transparent col-start-1 col-end-[-2] font-medium text-4xl tracking-tighter">
      Projects
    </router-link>
    <router-link
      to="/fun"
      class="nav-item text-cameo-pink underline underline-offset-auto decoration-4 decoration-transparent col-start-1 col-end-[-2] font-medium text-4xl tracking-tighter">
      Fun
    </router-link>
    <router-link
      to="/about"
      class="nav-item text-cameo-pink underline underline-offset-auto decoration-4 decoration-transparent col-start-1 col-end-[-2] font-medium text-4xl tracking-tighter">
      About Me
    </router-link>
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
