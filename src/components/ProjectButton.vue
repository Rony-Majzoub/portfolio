<template>
  <router-link :to="`/${ link }`" class="button">Read More</router-link>
</template>

<script>
export default {
  name: 'ProjectButton',
  props: {
    link: {
      default: "",
      type: String
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.button {
  @include button;
  width: fit-content;
  background-color: transparent;
  border: none;
  box-shadow:inset 0px 0px 0px 2px var(--pastel-pink);
  padding: 1rem 2rem;
  color: var(--pastel-pink) !important;
  transition: var(--animation-curve) 250ms;
  cursor: pointer;
  border-radius: 4rem;
  font-size: var(--text-sm);
  text-decoration: none !important;
}
.button:hover {
  background-color: var(--unbleached-silk);
  box-shadow:inset 0px 0px 0px 2px var(--unbleached-silk);
  color: var(--eggplant) !important;
}
@include breakpoint(md) {
  .button {
    padding: 1.5rem 3rem;
    font-size: var(--text-md);
  }
}
</style>