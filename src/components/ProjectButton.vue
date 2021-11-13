<template>
  <button>Read More</button>
</template>

<script>
export default {
  name: 'ProjectButton',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
button {
  @include button;
  width: fit-content;
  background-color: transparent;
  border: none;
  box-shadow:inset 0px 0px 0px 2px var(--pastel-pink);
  padding: 1.5rem 5rem;
  color: var(--pastel-pink);
  transition: var(--animation-curve) 250ms;
  cursor: pointer;
  border-radius: 4rem;
}
button:hover {
  background-color: var(--eggplant);
}
</style>