<template>
  <div class="grid col-start-2 col-end-[-2] grid-cols-10">
    <div class="col-span-full flex justify-center items-center flex-col">
      <h1
        class="text-center w-full text-8xl sm:text-8xl lg:text-9xl font-bold text-unbleached-silk col-span-full sm:col-start-1 sm:col-end-[-2]">
        404
      </h1>
      <h2
        class="lg:hidden inline-block word-text text-center w-full text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 3xl:text-7xl font-bold text-melon col-span-full sm:col-start-1 sm:col-end-[-2]">
        This is not the page you are looking for.
      </h2>
      <h2
        class="invisible lg:visible inline-block letter-text text-center w-full text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 3xl:text-7xl font-bold text-melon col-span-full sm:col-start-1 sm:col-end-[-2]">
        This is not the page you are looking for.
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "404",
  mounted() {
    this.word();
    this.letter();
  },
  methods: {
    word() {
      // Wrap every word in a span
      var textWrapperWord = document.querySelector(".word-text");
      textWrapperWord.innerHTML = textWrapperWord.textContent.replace(
        /\S+/g,
        "<span class='word'>$&</span>"
      );
      this.$anime.timeline({}).add({
        targets: ".word-text .word",
        translateY: [50, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutQuint",
        duration: 1000,
        delay: (el, i) => 300 + 25 * i,
      });
    },
    letter() {
      // Wrap every letter in a span
      var textWrapperLetter = document.querySelector(".letter-text");
      textWrapperLetter.innerHTML = textWrapperLetter.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );
      this.$anime.timeline({}).add({
        targets: ".letter-text .letter",
        translateY: [50, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutQuint",
        duration: 1000,
        delay: (el, i) => 300 + 12 * i,
      });
    },
  },
};
</script>
<style lang="scss">
// Display inline-block so word-animation works.
.word-text .word {
  display: inline-block;
  line-height: 1em;
}
.letter-text .letter {
  display: inline-block;
  line-height: 1em;
}
</style>
