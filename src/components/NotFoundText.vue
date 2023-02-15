<template>
  <div class="flex items-center justify-center">
    <h1
      class="intro-text max-w-4xl 2xl:max-w-6xl 3xl:max-w-6xl 5xl:max-w-[100rem] text-4xl md:text-6xl lg:text-7xl 5xl:text-9xl font-bold !text-unbleached-silk text-center tracking-tight antialiased">
      <!-- My name is Rony Majzoub. -->
      <span
        class="word !text-melon text-7xl md:text-9xl lg:text-9xl 5xl:text-9xl">
        404.&nbsp;
      </span>
      <br />
      <span class="word !text-unbleached-silk">This&nbsp;</span>
      <span class="word !text-unbleached-silk">is&nbsp;</span>
      <span class="word !text-unbleached-silk">not&nbsp;</span>
      <span class="word !text-unbleached-silk">the&nbsp;</span>
      <span class="word !text-unbleached-silk">page&nbsp;</span>
      <span class="word !text-unbleached-silk">you&nbsp;</span>
      <span class="word !text-unbleached-silk">are&nbsp;</span>
      <span class="word !text-unbleached-silk">looking&nbsp;</span>
      <span class="word !text-unbleached-silk">for.&nbsp;</span>
    </h1>
  </div>
</template>

<script>
// The script responsible for showing different roles.
export default {
  name: "NotFoundText",
  mounted() {
    this.$anime.timeline({}).add({
      targets: ".intro-text .word",
      translateY: [100, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutQuint",
      duration: 1000,
      delay: (el, i) => 300 + 50 * i,
    });
  },
};
</script>

<style lang="scss" scoped>
u::selection {
  color: var(--eggplant);
}
// Display inline-block so word-animation works.
.intro-text .word {
  display: inline-block;
  line-height: 1.2em;
}
</style>
