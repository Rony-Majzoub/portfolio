<template>
  <a
    v-anime="{
      translateX: '-=20',
      opacity: '+=1',
      duration: 250,
      delay: 1000,
      easing: 'easeInOutExpo',
    }"
    class="text-right hidden whitespace-nowrap lg:inline cursor-pointer transition-all duration-200 text-unbleached-silk underline underline-offset-2 hover:underline-offset-4 hover:decoration-inherit decoration-transparent decoration-2 text-lg font-bold tracking-wide antialiased"
    @click="$router.back()">
    &larr; Go Back
  </a>
</template>
<script>
export default {
  name: "BackButton",
};
</script>
