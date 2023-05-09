<template>
  <div
    class="navbar lg:hidden border-4 border-pastel-pink flex col-span-full flex-row justify-evenly gap-4 p-4 bg-eggplant rounded-full fixed inset-x-0 bottom-6 z-50 mx-auto w-4/5 shadow-md shadow-[#2b212c]/50 duration-300 ease-in-out">
    <router-link
      class="nav-mobile inline relative transition-all duration-300 text-cameo-pink text-lg font-bold text-center tracking-wide antialiased"
      :to="{ path: '/', hash: '#projects' }">
      Projects
    </router-link>
    <router-link
      class="nav-mobile inline relative transition-all duration-300 text-cameo-pink text-lg font-bold text-center tracking-wide antialiased"
      to="/fun">
      Fun
    </router-link>
    <router-link
      class="nav-mobile inline relative transition-all duration-300 text-cameo-pink text-lg font-bold text-center tracking-wide antialiased"
      to="/about">
      About Me
    </router-link>
  </div>
</template>
<script>
export default {
  name: "NavbarOld",
  data() {
    return { show: true };
  },
};
</script>

<style lang="scss" scoped>
.nav-mobile.router-link-active {
  text-decoration-color: var(--unbleached-silk) !important;
  color: var(--unbleached-silk) !important;
  transition: var(--animation-curve) 250ms !important;
}
.nav-mobile::before {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 2px;
  bottom: 4px;
  left: 0;
  background-color: currentColor;
  transform: scaleX(0);
  transition: transform 300ms;
  transition-timing-function: cubic-bezier(0, 0.8, 0.2, 1);
}

.nav-mobile:hover::before {
  transform: scaleX(1);
}
.nav-mobile.router-link-active::before {
  background-color: var(--unbleached-silk);
  transform: scaleX(1);
}
</style>
