<template>
  <div class="grid col-start-2 col-end-[-2] grid-cols-10">
    <div class="col-span-full flex justify-center items-center flex-col">
      <h1
        class="word-text text-center w-full text-9xl sm:text-9xl lg:text-9xl font-bold text-unbleached-silk col-span-full sm:col-start-1 sm:col-end-[-2]">
        404
      </h1>
      <h2
        class="letter-text text-center w-full text-4xl sm:text-5xl lg:text-6xl font-bold text-melon col-span-full sm:col-start-1 sm:col-end-[-2]">
        This is not the page you are looking for.
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "404",
  mounted() {
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
