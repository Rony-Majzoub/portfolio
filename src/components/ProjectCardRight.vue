<template>
  <article class="project">
    <div class="overlay">
      <img :src="require(`../assets/img/${image}`)" />
    </div>
    <section>
      <h2>{{ title }}</h2>
      <h6>
        {{ description }}
      </h6>
    </section>
  </article>
</template>

<script>
export default {
  name: 'ProjectCardRight',
  props: {
    title: String,
    description: String,
    image: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.project {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 5rem;
  height: 50rem;
  gap: 1rem;
}
section {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 1rem;
}
h2 {
  font-weight: 500;
  font-size: var(--text-xxxl);
  line-height: var(--heading-line-height);
  text-align: right;
  letter-spacing: -0.5px;
}

h6 {
  text-align: right;
  max-width: 90%;
  color: var(--pastel-pink);
}
img {
  max-width: 100%;
  height: 100%;
  object-fit: cover;
}
.overlay {
  transform: scaleX(1);
  width: 60%;
  height: 100%;
  object-fit: cover;
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
  transition: cubic-bezier(0.25, 0.46, 0.45, 0.94) 250ms;
}
.overlay:hover:after {
  background: linear-gradient(0deg, #363040 -13.67%, rgba(78, 64, 79, 0) 100%), var(--black-coffee);
  box-shadow:inset 0px 0px 0px 4px var(--pastel-pink);
}
</style>
