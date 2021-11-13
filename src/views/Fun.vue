<template>
  <div class="fun">
    <h1>Here is a showcase of some of my smaller and fun projects.</h1>
    <main class="fun-grid">
      <fun-card-right title="RecyPie" description="A solution to an ongoing problem towards our environment." image="recypie.png"/>
      <fun-card-left title="Buratino" description="An efficient conversion from a physical tool to a digital & modern one." image="buratino.png"/>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.fun {
  grid-column: 2/-2;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
}
.fun-grid {
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-column: 2/-2;
  gap: 1rem;
}
h1 {
  color: var(--melon);
  text-align: left;
  grid-column: 1 / -2;
}
</style>

<script>
import FunCardRight from '../components/FunCardRight.vue'
import FunCardLeft from '../components/FunCardLeft.vue'

export default {
  name: 'Fun',
  components: {
    FunCardRight,
    FunCardLeft
  }
}
</script>