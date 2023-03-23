<template>
  <!-- Desktop Version -->
  <div
    v-anime="{
      translateX: [150, 120],
      opacity: '+1',
      duration: 250,
      delay: 1000,
      easing: 'easeInOutExpo',
    }"
    class="z-50 hidden h-fit w-max fixed top-28 left-[0vw] lg:flex cursor-pointer transition-all duration-200 flex-column items-end"
    role="button"
    aria-label="Back"
    @click="$router.back()">
    <i-ic:round-keyboard-arrow-down
      class="rotate-90 inline w-8 h-8 text-unbleached-silk" />
    <p
      class="nav-back relative text-right inline text-unbleached-silk transition-all duration-300 text-lg font-extrabold antialiased">
      Go Back
    </p>
  </div>
  <!-- Mobile Version -->
  <div
    v-anime="{
      translateX: '-20',
      opacity: '+1',
      duration: 250,
      delay: 1000,
      easing: 'easeInOutExpo',
    }"
    class="z-50 h-fit w-max fixed top-6 right-[5vw] lg:static lg:hidden cursor-pointer transition-all duration-200 flex flex-column items-end"
    role="button"
    aria-label="Back"
    @click="$router.back()">
    <i-ic:round-keyboard-arrow-down
      class="rotate-90 inline w-8 h-8 text-unbleached-silk" />
    <p
      class="nav-back relative text-right inline text-unbleached-silk transition-all duration-300 text-lg font-extrabold antialiased">
      Go Back
    </p>
  </div>
</template>
<script>
export default {
  name: "BackButton",
};
</script>
<style lang="scss">
.nav-back::before {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 2px;
  bottom: 4px;
  left: 0;
  background-color: currentColor;
  transform: scaleX(0);
  transform-origin: top right;
  transition: transform 300ms;
  transition-timing-function: cubic-bezier(0, 0.8, 0.2, 1);
}

.nav-back:hover::before {
  transform: scaleX(1);
}
</style>
