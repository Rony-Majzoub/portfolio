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
    </section>
  </article>
</template>


<script>
export default {
  name: 'FunCard',
  props: {
    title: String,
    description: String,
    image: String
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.project {
  width: 25vmax;
  height: 25vmax;
  position: relative;
  cursor: pointer;
}
section {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  bottom: 1rem;
  left: 0rem;
  width: 100%;
  gap: 0.5rem;
}
h3 {
  color: var(--melon);
  text-align: left;
}
p {
  text-align: left;
  @include overline;
  color: var(--pastel-pink)
}
img {
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--border-radius);
}
.overlay {
  transform: scaleX(1);
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--border-radius);
  position: relative;
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
  background: linear-gradient(0deg, #363040 -1%, rgba(78, 64, 79, 0) 100%);
  transition: cubic-bezier(0.25, 0.46, 0.45, 0.94) 200ms;
  border-radius: var(--border-radius);
}
.project:hover {
  .overlay:after {
    border-radius: var(--border-radius);
    background: linear-gradient(0deg, #363040 -13.67%, rgba(78, 64, 79, 0) 100%), var(--black-coffee);
    box-shadow: 0px 0px 0px 4px var(--pastel-pink);
  }
}
@include breakpoint(md) {
  .overlay:hover:after {
    border-radius: var(--border-radius);
    background: linear-gradient(0deg, #363040 -13.67%, rgba(78, 64, 79, 0) 100%), var(--black-coffee);
    box-shadow: 0px 0px 0px 4px var(--pastel-pink);
  }
  section {
    align-items: flex-start;
    left: 1rem;
    width: 90%;
  }
}
</style>