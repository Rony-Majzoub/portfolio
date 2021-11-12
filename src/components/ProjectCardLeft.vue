<template>
  <article class="project">
    <div class="overlay">
      <img :src="require(`../assets/img/${image}`)" />
    </div>
    <section>
      <header class="project-header">
        <h2>{{ title }}</h2>
        <h6>
          {{ description }}
        </h6>
      </header>
      <footer class="project-footer">
        <p>{{ category }}</p>
        <button>Läs Mer</button>
      </footer>
    </section>
  </article>
</template>

<script>
export default {
  name: 'ProjectCardLeft',
  props: {
    title: String,
    description: String,
    category: String,
    image: String
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
  gap: 1rem;
  background-color: var(--eggplant);
  padding: 2rem;
  flex-grow: 1;
  flex-basis: 40%;
  box-sizing: content-box;
}
.project-header {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.project-footer {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  button {
    @include button;
    font-size: 1.25rem;
    max-width: fit-content;
    background-color: var(--eggplant);
    border: none;
    box-shadow:inset 0px 0px 0px 2px var(--pastel-pink);
    padding: 1rem 2rem;
    color: var(--pastel-pink);
    transition: var(--animation-curve) 250ms;
    cursor: pointer;
  }
  button:hover {
    background-color: var(--black-coffee)
  }
  p {
    @include subtitle-1;
    @include reset-mp;
  }
}
h2 {
  font-weight: 500;
  font-size: var(--text-xxxl);
  line-height: var(--heading-line-height);
  text-align: left;
  letter-spacing: -0.5px;
}
h6 {
  text-align: left;
  color: var(--pastel-pink);
}
img {
  max-width: 100%;
  height: 100%;
  object-fit: cover;
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
  background: linear-gradient(0deg, #363040 -13.67%, rgba(78, 64, 79, 0) 100%);
  transition: var(--animation-curve) 300ms;
}
</style>