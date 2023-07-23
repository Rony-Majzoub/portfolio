<template>
  <div class="md:hidden fixed inset-x-0 bottom-6 z-50 grid grid-cols-12">
    <div
      class="navbar border-[3px] border-pastel-pink flex col-start-2 col-end-[-2] w-full flex-row justify-evenly gap-4 p-4 py-3 bg-eggplant rounded-full mx-auto shadow-md shadow-[#2b212c]/50 duration-300 ease-in-out">
      <router-link
        class="nav-mobile inline relative transition-all duration-300 py-1 px-2 text-cameo-pink text-lg font-bold text-center antialiased rounded-full whitespace-nowrap"
        :to="{ path: '/', hash: '#projects' }">
        Projects
      </router-link>
      <router-link
        class="nav-mobile inline relative transition-all duration-300 py-1 px-2 text-cameo-pink text-lg font-bold text-center antialiased rounded-full whitespace-nowrap"
        to="/fun">
        Fun
      </router-link>
      <router-link
        class="nav-mobile inline relative transition-all duration-300 py-1 px-2 text-cameo-pink text-lg font-bold text-center antialiased rounded-full whitespace-nowrap"
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
};
</script>

<style lang="scss" scoped>
.nav-mobile.router-link-active {
  background-color: var(--unbleached-silk) !important;
  color: var(--black-coffee) !important;
  transition: var(--animation-curve) 250ms !important;
}
</style>
