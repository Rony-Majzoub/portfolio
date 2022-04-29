<template>
  <div class="grid col-start-2 col-end-[-2] grid-cols-10">
    <h1
      class="text-5xl lg:text-6xl font-medium text-unbleached-silk col-start-1 col-end-[-2]">
      Here is a showcase of some of my smaller and more fun projects.
    </h1>
    <main
      class="grid col-span-full gap-8 sm:gap-6 lg:gap-5 justify-items-center grid-cols-fun 3xl:grid-cols-funxl 5xl:grid-cols-funxxl pt-20">
      <fun-card
        title="Buratino"
        tag="Website"
        image="buratino.png"
        link="buratino" />
      <fun-card
        title="Buratino"
        tag="Website"
        image="buratino.png"
        link="buratino" />
      <fun-card
        title="Buratino"
        tag="Website"
        image="buratino.png"
        link="buratino" />
      <fun-card
        title="Buratino"
        tag="Website"
        image="buratino.png"
        link="buratino" />
      <fun-card
        title="Buratino"
        tag="Website"
        image="buratino.png"
        link="buratino" />
      <fun-card
        title="Buratino"
        tag="Website"
        image="buratino.png"
        link="buratino" />
      <fun-card
        title="Buratino"
        tag="Website"
        image="buratino.png"
        link="buratino" />
      <fun-card
        title="Buratino"
        tag="Website"
        image="buratino.png"
        link="buratino" />
      <fun-card
        title="Buratino"
        tag="Website"
        image="buratino.png"
        link="buratino" />
      <fun-card
        title="RecyPie"
        tag="Digital Prototype"
        image="recypie.png"
        link="recypie" />
      <fun-card
        title="Buratino"
        tag="Website"
        image="buratino.png"
        link="buratino" />
      <fun-card
        title="RecyPie"
        tag="Digital Prototype"
        image="recypie.png"
        link="recypie" />
      <fun-card
        title="Buratino"
        tag="Website"
        image="buratino.png"
        link="buratino" />
      <fun-card
        title="RecyPie"
        tag="Digital Prototype"
        image="recypie.png"
        link="recypie" />
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
};
</script>
