<template>
  <section class="column-left">
      <h2 class="problem-title">{{title}}</h2>
      <p class="problem-text">{{description}}</p>
  </section>
</template>

<script>
export default {
  name: 'ColumnLeft',
  props: {
    title: {
      default: "",
      type: String
    },
    description: {
      default: "",
      type: String
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.column-left {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  grid-column: 1 / -1;
}
.problem-title {
  color: var(--unbleached-silk)
}
.problem-text {
  @include body-1;
  color: var(--melon);
}
@include breakpoint(md) {
  .column-left {
    grid-column: 2 / span 5;
  }
}
</style>