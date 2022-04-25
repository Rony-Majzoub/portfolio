<template>
  <div class="fun">
    <h1>Here is a showcase of some of my smaller and more fun projects.</h1>
    <main class="fun-grid">
      <fun-card title="Buratino" tag="Website" image="buratino.png" />
      <fun-card title="RecyPie" tag="Digital Prototype" image="recypie.png" />
      <fun-card title="Buratino" tag="Website" image="buratino.png" />
      <fun-card title="RecyPie" tag="Digital Prototype" image="recypie.png" />
      <fun-card title="Buratino" tag="Website" image="buratino.png" />
      <fun-card title="RecyPie" tag="Digital Prototype" image="recypie.png" />
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

<style lang="scss" scoped>
.fun {
  grid-column: 2/-2;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
}
.fun-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20vmax, 1fr));
  gap: 4rem;
  grid-column: 1/-1;
  padding-top: 5rem;
  justify-items: center;
}
h1 {
  text-align: left;
  grid-column: 1 / -2;
}
</style>
