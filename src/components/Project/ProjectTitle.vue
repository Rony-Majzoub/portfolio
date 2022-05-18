<template>
  <div class="col-span-full flex flex-col gap-6 pb-10 text-center">
    <p
      class="info-text text-pastel-pink tracking-widest font-semibold text-base uppercase antialiased">
      {{ info }}
    </p>
    <h1 class="title-text text-6xl sm:text-7xl font-bold text-unbleached-silk">
      {{ title }}
    </h1>
    <h2 class="brief-text text-melon text-xl font-semibold">{{ brief }}</h2>
  </div>
</template>

<script>
export default {
  name: "ProjectTitle",
  props: {
    info: {
      default: "",
      type: String,
    },
    title: {
      default: "",
      type: String,
    },
    brief: {
      default: "",
      type: String,
    },
  },
  mounted() {
    // Wrap every word in a span
    var infoWrapper = document.querySelector(".info-text");
    infoWrapper.innerHTML = infoWrapper.textContent.replace(
      /\S+/g,
      "<span class='word'>$&</span>"
    );
    this.$anime.timeline({}).add({
      targets: ".info-text .word",
      translateY: [50, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutQuint",
      duration: 1000,
      delay: (el, i) => 400 + 25 * i,
    });
    var titleWrapper = document.querySelector(".title-text");
    titleWrapper.innerHTML = titleWrapper.textContent.replace(
      /\S+/g,
      "<span class='word'>$&</span>"
    );
    this.$anime.timeline({}).add({
      targets: ".title-text .word",
      translateY: [50, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutQuint",
      duration: 1000,
      delay: (el, i) => 500 + 50 * i,
    });
    var briefWrapper = document.querySelector(".brief-text");
    briefWrapper.innerHTML = briefWrapper.textContent.replace(
      /\S+/g,
      "<span class='word'>$&</span>"
    );
    this.$anime.timeline({}).add({
      targets: ".brief-text .word",
      translateY: [50, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutQuint",
      duration: 1000,
      delay: (el, i) => 300 + 20 * i,
    });
  },
};
</script>
<style lang="scss">
// Display inline-block so word-animation works.
.word {
  display: inline-block;
  line-height: 1em;
}
</style>
