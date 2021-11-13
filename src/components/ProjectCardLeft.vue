<template>
  <article class="project">
    <div class="overlay">
      <img :src="require(`../assets/img/${image}`)" />
    </div>
    <section>
      <header class="project-header">
        <p class="tag">{{ tag }}</p>
        <h2>{{ title }}</h2>
        <p>
          {{ description }}
        </p>
      </header>
      <footer class="project-footer">
        <project-button/>
        <p>{{ category }}</p>
      </footer>
    </section>
  </article>
</template>

<script>
import ProjectButton from './ProjectButton.vue'
export default {
  name: 'ProjectCardLeft',
  props: {
    title: String,
    description: String,
    category: String,
    tag: String,
    image: String
  },
  components: {
    ProjectButton
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.project {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 5rem;
  height: 40rem;
}
section {
  height: calc(100% - 4rem);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: var(--eggplant);
  padding: 2rem;
  flex-grow: 1;
  flex-basis: 40%;
  box-sizing: content-box;
  border-radius: var(--border-radius) 0 0 var(--border-radius);
  background: linear-gradient(0deg, #363040 1%, rgba(78, 64, 79, 0) 100%) var(--eggplant);
}
.project-header {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.project-footer {
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: baseline;
  p {
    @include subtitle-2;
    color: var(--pastel-pink);
  }
}
h2 {
  text-align: left;
  color: var(--melon)
}
p {
  @include subtitle-2;
  text-align: left;
  color: var(--pastel-pink);
}
.tag {
  text-align: left;
  @include overline;
}
img {
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0 var(--border-radius) var(--border-radius) 0;
}
.overlay {
  transform: scaleX(1);
  height: 100%;
  object-fit: cover;
  flex-grow: 2;
  flex-basis: 60%;
}
.overlay:after {
  position: absolute;
  content: "";
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: inline-block;
  background: linear-gradient(0deg, #363040 1%, rgba(78, 64, 79, 0) 100%);
  transition: var(--animation-curve) 300ms;
}
</style>