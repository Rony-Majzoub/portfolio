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
      class="text-right inline text-unbleached-silk underline underline-offset-2 transition-all duration-200 hover:underline-offset-4 hover:decoration-inherit decoration-transparent decoration-2 text-lg font-extrabold antialiased">
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
      class="text-right inline text-unbleached-silk underline underline-offset-2 transition-all duration-200 hover:underline-offset-4 hover:decoration-inherit decoration-transparent decoration-2 text-lg font-extrabold antialiased">
      Go Back
    </p>
  </div>
</template>
<script>
export default {
  name: "BackButton",
};
</script>
