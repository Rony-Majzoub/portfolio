<template>
  <div class="grid col-start-2 col-end-[-2] grid-cols-10">
    <h1
      class="fun-text text-4xl sm:text-5xl lg:text-6xl font-bold text-unbleached-silk col-span-full sm:col-start-1 sm:col-end-[-2]">
      Here lies some of my smaller and more fun projects.
    </h1>
    <main
      class="grid col-span-full gap-8 sm:gap-6 lg:gap-5 justify-items-center grid-cols-fun 3xl:grid-cols-funxl 5xl:grid-cols-funxxl pt-10 sm:pt-20">
      <fun-card
        title="Buratino"
        tag="Website"
        image="buratino.png"
        image-link="v1652044733/portfolio/buratino_lzsy5p.png"
        link="buratino" />
      <fun-card
        title="RecyPie"
        tag="Digital Prototype"
        image="recypie.png"
        image-link="v1652044733/portfolio/recypie_vrzeuf.png"
        link="recypie" />
      <fun-card
        title="Buratino"
        tag="Website"
        image="buratino.png"
        image-link="v1652044733/portfolio/buratino_lzsy5p.png"
        link="buratino" />
      <fun-card
        title="RecyPie"
        tag="Digital Prototype"
        image="recypie.png"
        image-link="v1652044733/portfolio/recypie_vrzeuf.png"
        link="recypie" />
      <fun-card
        title="Buratino"
        tag="Website"
        image="buratino.png"
        image-link="v1652044733/portfolio/buratino_lzsy5p.png"
        link="buratino" />
      <fun-card
        title="RecyPie"
        tag="Digital Prototype"
        image="recypie.png"
        image-link="v1652044733/portfolio/recypie_vrzeuf.png"
        link="recypie" />
      <fun-card
        title="Buratino"
        tag="Website"
        image="buratino.png"
        image-link="v1652044733/portfolio/buratino_lzsy5p.png"
        link="buratino" />
      <fun-card
        title="RecyPie"
        tag="Digital Prototype"
        image="recypie.png"
        image-link="v1652044733/portfolio/recypie_vrzeuf.png"
        link="recypie" />
      <fun-card
        title="Buratino"
        tag="Website"
        image="buratino.png"
        image-link="v1652044733/portfolio/buratino_lzsy5p.png"
        link="buratino" />
      <fun-card
        title="RecyPie"
        tag="Digital Prototype"
        image="recypie.png"
        image-link="v1652044733/portfolio/recypie_vrzeuf.png"
        link="recypie" />
      <fun-card
        title="Buratino"
        tag="Website"
        image="buratino.png"
        image-link="v1652044733/portfolio/buratino_lzsy5p.png"
        link="buratino" />
      <fun-card
        title="RecyPie"
        tag="Digital Prototype"
        image="recypie.png"
        image-link="v1652044733/portfolio/recypie_vrzeuf.png"
        link="recypie" />
      <fun-card
        title="Buratino"
        tag="Website"
        image="buratino.png"
        image-link="v1652044733/portfolio/buratino_lzsy5p.png"
        link="buratino" />
      <fun-card
        title="RecyPie"
        tag="Digital Prototype"
        image="recypie.png"
        image-link="v1652044733/portfolio/recypie_vrzeuf.png"
        link="recypie" />
      <fun-card
        title="Buratino"
        tag="Website"
        image="buratino.png"
        image-link="v1652044733/portfolio/buratino_lzsy5p.png"
        link="buratino" />
    </main>
  </div>
</template>

<script>
import FunCard from "@/components/Fun/FunCard.vue";

export default {
  name: "Fun",
  components: {
    FunCard,
  },
  mounted() {
    // Wrap every word in a span
    var textWrapper = document.querySelector(".fun-text");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S+/g,
      "<span class='word'>$&</span>"
    );
    this.$anime.timeline({}).add({
      targets: ".fun-text .word",
      translateY: [50, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutQuint",
      duration: 1000,
      delay: (el, i) => 300 + 25 * i,
    });
  },
};
</script>
<style lang="scss">
.fun-text .word {
  display: inline-block;
  line-height: 1em;
}
</style>
