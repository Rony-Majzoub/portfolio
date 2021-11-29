<template>
  <div class="projects">
    <main class="project-grid">
      <article class="project">
        <div class="overlay">
        </div>
        <section>
          <header class="project-header">
            <p class="tag">{{ tag }}</p>
            <h1>RecyPie</h1>
            <p>
              Worldwide, over a third of all produced food is wasted and thrown away. 
              By 2030, the UN plans to reduce the global amount of food waste per person by 50%. 
              How can we contribute towards that goal?
            </p>
          </header>
          <footer class="project-footer">
            <p>{{ category }}</p>
          </footer>
        </section>
      </article>
    </main>
  </div>
</template>

<style lang="scss">
.projects {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-column: 1 / -1;
}
.project-grid {
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10rem;
}
.project {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 35rem;
  transition: var(--animation-curve) 250ms;
  background-image: url("../assets/img/recypie.png");
  background-position: left;
  background-size: contain;
  background-repeat: no-repeat;
}
section {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  flex-grow: 1;
  flex-basis: 60%;
  box-sizing: content-box;
  background-color: var(--eggplant);
  transition: var(--animation-curve) 250ms;
  clip-path: polygon(20% 0, 100% 0%, 100% 100%, 0% 100%);

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
  p {
    @include subtitle-2;
    color: var(--pastel-pink);
  }
}
h2 {
  text-align: right;
  color: var(--unbleached-silk);
}
p {
  @include subtitle-2;
  text-align: right;
  color: var(--melon)
}
.tag {
  text-align: right;
  @include overline;
  color: var(--melon)
}
.overlay {
  transform: scaleX(1);
  height: 100%;
  object-fit: cover;
  flex-grow: 1;
  flex-basis: 0%;
  cursor: pointer;
}

@include breakpoint(md) {
  .project {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    height: 40rem;
  }
  .project-header {
    align-items: flex-start;
    text-align: left;
    p {
      text-align: left;
    }
  }
  section {
  height: calc(100% - 4rem);
  padding: 2rem;
  }
  .overlay {
    transform: scaleX(1);
    height: 100%;
    object-fit: cover;
    flex-grow: 2;
    flex-basis: 60%;
  }
}
</style>

<script>
export default {
  name: 'RecyPie'
}
</script>
