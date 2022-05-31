<template>
  <div
    class="navbar lg:hidden border-4 border-pastel-pink flex col-span-full flex-row justify-evenly gap-4 p-4 bg-eggplant rounded-full fixed inset-x-0 bottom-8 z-50 mx-auto w-4/5 shadow-md shadow-[#2b212c]/50 duration-300 ease-in-out">
    <router-link
      class="nav-mobile inline transition-all duration-200 text-cameo-pink underline underline-offset-4 decoration-transparent decoration-2 text-lg font-bold text-center tracking-wide antialiased"
      :to="{ path: '/', hash: '#projects' }">
      Projects
    </router-link>
    <router-link
      class="nav-mobile inline transition-all duration-200 text-cameo-pink underline underline-offset-4 decoration-transparent decoration-2 text-lg font-bold text-center tracking-wide antialiased"
      to="/fun">
      Fun
    </router-link>
    <router-link
      class="nav-mobile inline transition-all duration-200 text-cameo-pink underline underline-offset-4 decoration-transparent decoration-2 text-lg font-bold text-center tracking-wide antialiased"
      to="/about">
      About Me
    </router-link>
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

<style lang="scss">
.nav-mobile.router-link-active {
  text-decoration-color: var(--unbleached-silk) !important;
  color: var(--unbleached-silk) !important;
  transition: var(--animation-curve) 250ms !important;
}
</style>
