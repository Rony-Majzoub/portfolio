<template>
  <section class="hero-tags">
    <div class="hero-text">
      <div class="hero-subtitle">
        <p class="subtitle-header">Client</p>
        <p class="subtitle-text">{{ client }}</p>
      </div>
      <div class="hero-subtitle">
        <p class="subtitle-header">Team</p>
        <p class="subtitle-text">{{ team }}</p>
      </div>
      <div class="hero-subtitle">
        <p class="subtitle-header">Role</p>
        <p class="subtitle-text">{{ role }}</p>
      </div>
      <div class="hero-subtitle">
        <p class="subtitle-header">Duration</p>
        <p class="subtitle-text">{{ duration }}</p>
      </div>
      <div class="hero-subtitle">
        <p class="subtitle-header">Tools used</p>
        <p class="subtitle-text">{{ tools }}</p>
      </div>
    </div>
    <div class="hero-text">
      <div class="hero-subtitle">
        <p class="subtitle-header">Project includes</p>
        <p class="subtitle-text">{{ category1 }}</p>
        <p class="subtitle-text">{{ category2 }}</p>
        <p class="subtitle-text">{{ category3 }}</p>
        <p class="subtitle-text">{{ category4 }}</p>
        <p class="subtitle-text">{{ category5 }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProjectTags",
  props: {
    client: {
      default: "",
      type: String,
    },
    team: {
      default: "",
      type: String,
    },
    role: {
      default: "",
      type: String,
    },
    duration: {
      default: "",
      type: String,
    },
    tools: {
      default: "",
      type: String,
    },
    category1: {
      default: "",
      type: String,
    },
    category2: {
      default: "",
      type: String,
    },
    category3: {
      default: "",
      type: String,
    },
    category4: {
      default: "",
      type: String,
    },
    category5: {
      default: "",
      type: String,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hero-tags {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  grid-column: 1 /-1;
  padding-bottom: 5rem;
  column-gap: 1rem;
}
.hero-text {
  display: flex;
  flex-direction: column;
  grid-column: span 1;
  gap: 2rem;
  padding-bottom: 2.5rem;
}
.hero-text:first-child {
  justify-self: start;
}
.hero-text:last-child {
  justify-self: end;
}
.hero-subtitle {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.subtitle-header {
  @include h6;
  font-weight: 500;
  color: var(--unbleached-silk);
}
.subtitle-text {
  @include body-2;
  font-weight: 700;
  font-size: 1.15rem;
  color: var(--melon);
  max-width: 40ch;
}
@include breakpoint(md) {
  .hero-tags {
    grid-column: 3 / -3;
  }
}
</style>
