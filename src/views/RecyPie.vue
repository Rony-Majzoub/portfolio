<template>
  <div class="projects">
      <div class="hero-text">
        <div class="hero-title">
          <h1>RecyPie</h1>
          <p>Worldwide, over a third of all produced food is wasted and thrown away. By 2030, the UN plans to reduce the global amount of food waste per person by 50%. How can we contribute towards that goal?</p>
        </div>
        <div class="hero-subtitle-row">
          <div class="hero-subtitle">
            <p class="subtitle-header">Year</p>
            <p class="subtitle-text">2021</p>
          </div>
          <div class="hero-subtitle">
            <p class="subtitle-header">Team</p>
            <p class="subtitle-text">Myself</p>
          </div>
          <div class="hero-subtitle">
            <p class="subtitle-header">Role</p>
            <p class="subtitle-text">UI Designer</p>
          </div>
          <div class="hero-subtitle">
            <p class="subtitle-header">Category</p>
            <p class="subtitle-text">UI & UX Design</p>
          </div>
        </div>
      </div>
    <div class="hero">
      <img src="../assets/img/recypie.png" alt="">
    </div>
    <main class="project-grid">
      <section class="col-2"></section>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.projects {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-column: 1 / -1;
}
.hero-text {
  display: flex;
  flex-direction: column;
  grid-column: 3 / -3;
  gap: 2rem;
  padding-bottom: 2.5rem;
}
.hero-title {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.hero-subtitle-row {
  display: flex;
  flex-direction: row;
  gap: 5rem;
}
.hero-subtitle {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.subtitle-header {
  @include h6;
  color: var(--unbleached-silk)
}
.subtitle-text {
  @include body-2;
  font-size: 1.15rem;
  color: var(--melon);
}
.project-grid {
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10rem;
}
.hero {
  grid-column: 1 / -1;
  img {
    width: 100%;
  }
}
.col-2 {
  display: flex;
  flex-direction: row;

}
h1 {
  font-size: var(--text-6xl)
}
p {
  @include subtitle-2;
  color: var(--melon);
}
</style>

<script>
export default {
  name: 'RecyPie'
}
</script>
