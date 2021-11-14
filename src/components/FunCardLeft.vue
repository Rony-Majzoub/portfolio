<template>
  <article class="project">
    <div class="overlay">
      <img :src="require(`../assets/img/${image}`)" />
    </div>
    <section>
      <h3>{{ title }}</h3>
      <p>
        {{ description }}
      </p>
      <project-button class="fun-button"/>
    </section>
  </article>
</template>


<script>
import ProjectButton from './ProjectButton.vue'
export default {
  name: 'FunCardLeft',
  props: {
    title: String,
    description: String,
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
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
}
section {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5rem;
}
h3 {
  color: var(--melon);
  text-align: left;
}
p {
  @include subtitle-2;
  text-align: left;
  color: var(--pastel-pink);
}
img {
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--border-radius);
}
.fun-button {
  background-color: transparent;
  margin-top: 1rem;
}
.overlay {
  transform: scaleX(1);
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--border-radius);
}
.overlay:after {
  position: absolute;
  content: "";
  z-index: 10;
  left: 0;
  bottom: -1px;
  width: 100%;
  height: 100%;
  display: inline-block;
  background: linear-gradient(0deg, #363040 -13.67%, rgba(78, 64, 79, 0) 100%);
  transition: cubic-bezier(0.25, 0.46, 0.45, 0.94) 250ms;
  border-radius: var(--border-radius);
}
.overlay:hover:after {
  border-radius: var(--border-radius);
  background: linear-gradient(0deg, #363040 -13.67%, rgba(78, 64, 79, 0) 100%), var(--black-coffee);
  box-shadow: 0px 0px 0px 4px var(--pastel-pink);
}
@include breakpoint(sm) {
  .project {
    flex-direction: row-reverse;
    height: 30rem;
  }
  .fun-button {
    margin-top: 2rem;
  }
  .overlay {
    width: 40%;
  }
  .overlay:hover:after {
    border-radius: var(--border-radius);
    background: linear-gradient(0deg, #363040 -13.67%, rgba(78, 64, 79, 0) 100%), var(--black-coffee);
    box-shadow: 0px 0px 0px 4px var(--pastel-pink);
  }
}
</style>