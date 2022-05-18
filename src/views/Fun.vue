<template>
  <div class="grid col-start-2 col-end-[-2] grid-cols-10">
    <h1
      class="fun-text text-4xl sm:text-5xl lg:text-6xl font-bold text-unbleached-silk col-span-full sm:col-start-1 sm:col-end-[-2]">
      Here lies some of my smaller and more fun projects.
    </h1>
    <main
      class="grid col-span-full gap-6 lg:gap-5 justify-items-center grid-cols-fun 3xl:grid-cols-funxl 5xl:grid-cols-funxxl pt-8 sm:pt-16">
      <div class="col-span-full place-self-start">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-melon">
          UI/UX Design
        </h2>
        <p class="text-melon text-base sm:text-lg font-medium">
          The usual stuff, you know?
        </p>
      </div>
      <fun-card
        title="Buratino"
        tag="Website"
        image="buratino.png"
        image-link="v1652044733/portfolio/buratino/buratino.png"
        link="buratino" />
      <fun-card
        title="RecyPie"
        tag="Digital Prototype"
        image="recypie.png"
        image-link="v1652044733/portfolio/recypie/recypie.png"
        link="recypie" />
      <fun-card
        title="Buratino"
        tag="Website"
        image="buratino.png"
        image-link="v1652044733/portfolio/buratino/buratino.png"
        link="buratino" />
      <fun-card
        title="RecyPie"
        tag="Digital Prototype"
        image="recypie.png"
        image-link="v1652044733/portfolio/recypie/recypie.png"
        link="recypie" />
      <fun-card
        title="Buratino"
        tag="Website"
        image="buratino.png"
        image-link="v1652044733/portfolio/buratino/buratino.png"
        link="buratino" />
      <fun-card
        title="RecyPie"
        tag="Digital Prototype"
        image="recypie.png"
        image-link="v1652044733/portfolio/recypie/recypie.png"
        link="recypie" />
      <div class="col-span-full place-self-start pt-8">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-melon">
          Motion Graphics
        </h2>
        <p class="text-melon text-base sm:text-lg font-medium">
          Because who doesn't like to make things move?
        </p>
      </div>

      <fun-card
        title="Buratino"
        tag="Website"
        image="buratino.png"
        image-link="v1652044733/portfolio/buratino/buratino.png"
        link="buratino" />
      <fun-card
        title="RecyPie"
        tag="Digital Prototype"
        image="recypie.png"
        image-link="v1652044733/portfolio/recypie/recypie.png"
        link="recypie" />
      <fun-card
        title="Buratino"
        tag="Website"
        image="buratino.png"
        image-link="v1652044733/portfolio/buratino/buratino.png"
        link="buratino" />
      <div class="col-span-full place-self-start pt-8">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-melon">
          3D-Rendering
        </h2>
        <p class="text-melon text-base sm:text-lg font-medium">
          Expect lots of Blender & game engine experiments.
        </p>
      </div>
      <fun-card
        title="RecyPie"
        tag="Digital Prototype"
        image="recypie.png"
        image-link="v1652044733/portfolio/recypie/recypie.png"
        link="recypie" />
      <fun-card
        title="Buratino"
        tag="Website"
        image="buratino.png"
        image-link="v1652044733/portfolio/buratino/buratino.png"
        link="buratino" />
      <fun-card
        title="RecyPie"
        tag="Digital Prototype"
        image="recypie.png"
        image-link="v1652044733/portfolio/recypie/recypie.png"
        link="recypie" />
      <fun-card
        title="Buratino"
        tag="Website"
        image="buratino.png"
        image-link="v1652044733/portfolio/buratino/buratino.png"
        link="buratino" />
      <fun-card
        title="RecyPie"
        tag="Digital Prototype"
        image="recypie.png"
        image-link="v1652044733/portfolio/recypie/recypie.png"
        link="recypie" />
      <fun-card
        title="Buratino"
        tag="Website"
        image="buratino.png"
        image-link="v1652044733/portfolio/buratino/buratino.png"
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
// Display inline-block so word-animation works.
.fun-text .word {
  display: inline-block;
  line-height: 1em;
}
</style>
