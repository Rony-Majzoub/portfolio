<template>
  <div
    class="about-pill transition-colors ease-in-out font-bold text-xs tracking-widest uppercase border-2 border-pastel-pink text-pastel-pink py-1.5 px-3 whitespace-nowrap text-center rounded-full hover:bg-unbleached-silk hover:border-unbleached-silk hover:text-eggplant hover:selection:bg-eggplant hover:selection:text-unbleached-silk">
    {{ skill }}
  </div>
</template>

<script>
export default {
  name: "AboutPill",
  props: {
    skill: {
      default: "",
      type: String,
    },
  },
  mounted() {
    this.$anime.timeline({}).add({
      targets: ".about-pill",
      translateY: [50, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutQuint",
      duration: 750,
      delay: (el, i) => 400 + 50 * i,
    });
  },
};
</script>
