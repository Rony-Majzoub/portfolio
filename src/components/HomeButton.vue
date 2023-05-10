<template>
  <!-- Desktop Version -->
  <div
    v-anime="{
      translateX: '-40',
      opacity: '+1',
      duration: 500,
      delay: 1200,
      easing: 'easeOutQuint',
    }"
    class="nav-home-container z-50 hidden h-fit w-max fixed top-28 left-[9vw] lg:flex cursor-pointer flex-column items-center"
    role="button"
    aria-label="Home"
    @click="$router.push('/')">
    <i-ic:round-keyboard-arrow-down
      class="rotate-90 inline w-8 h-8 text-white" />
    <p
      class="nav-home relative text-right inline text-white transition-all duration-300 text-lg font-extrabold font-['IBM_Plex_Mono'] antialiased">
      Return Home
    </p>
  </div>
  <!-- Mobile Version -->
  <div
    v-anime="{
      translateX: '-20',
      opacity: '+1',
      duration: 500,
      delay: 1200,
      easing: 'easeOutQuint',
    }"
    class="nav-home-container z-50 h-fit w-max fixed top-6 right-[5vw] lg:static lg:hidden cursor-pointer flex flex-column items-center"
    role="button"
    aria-label="Home"
    @click="$router.push('/')">
    <i-ic:round-keyboard-arrow-down
      class="rotate-90 inline w-8 h-8 text-white" />
    <p
      class="nav-home relative text-right inline text-white transition-all duration-300 text-lg font-extrabold font-['IBM_Plex_Mono'] antialiased">
      Return Home
    </p>
  </div>
</template>
<script>
export default {
  name: "HomeButton",
};
</script>
<style lang="scss" scoped>
.nav-home::before {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 2px;
  bottom: 0px;
  left: 0;
  background-color: currentColor;
  transform: scaleX(0);
  transform-origin: top right;
  transition: transform 300ms;
  transition-timing-function: cubic-bezier(0, 0.8, 0.2, 1);
  will-change: transform;
}

.nav-home-container:hover .nav-home::before {
  transform: scaleX(1);
}
</style>
