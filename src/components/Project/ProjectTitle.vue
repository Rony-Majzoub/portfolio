<template>
  <div
    class="col-span-full lg:col-start-2 lg:col-end-[-2] flex flex-col gap-4 pb-10 text-left">
    <p
      class="info-text text-pastel-pink tracking-widest font-semibold text-sm uppercase antialiased">
      {{ info }}
    </p>
    <h1
      class="title-text text-4xl sm:text-5xl md:text-6xl font-extrabold text-unbleached-silk">
      {{ title }}
    </h1>
    <p class="brief-text text-melon text-base font-normal">{{ brief }}</p>
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
      "<span class='word text-pastel-pink'>$&</span>"
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
      "<span class='word text-unbleached-silk'>$&</span>"
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
      "<span class='word text-melon'>$&</span>"
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
