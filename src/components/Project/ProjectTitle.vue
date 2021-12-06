<template>
  <div class="hero-title">
    <p class="hero-info">{{info}}</p>
    <h1>{{title}}</h1>
    <h6>{{brief}}</h6>
  </div>
</template>

<script>
export default {
  name: 'ProjectTitle',
  props: {
    info: {
      default: "",
      type: String
    },
    title: {
      default: "",
      type: String
    },
    brief: {
      default: "",
      type: String
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hero-title {
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 2.5rem;
  text-align: center;
  .hero-info {
    color: var(--pastel-pink);
  }
  h1 {
    font-size: var(--text-6xl)
  }
  p {
    @include overline;
    font-size: var(--text-md);
  }
  h6 {
    color: var(--melon);
  }
}
@include breakpoint(md) {
  .hero-title {
    grid-column: 2 / -2;
  }
}
</style>