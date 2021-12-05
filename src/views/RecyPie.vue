<template>
  <div class="projects">
    <div class="hero-text">
      <div class="hero-title">
        <p class="hero-info">2021 - UI & UX Design</p>
        <h1>RecyPie</h1>
        <h6>Create and design a modern, digital solution to a global problem.</h6>
      </div>
    </div>
    <div class="hero">
      <img src="../assets/img/recypie.png" alt="">
    </div>
    <section class="hero-tags">
      <div class="hero-text">
        <div class="hero-subtitle">
          <p class="subtitle-header">Client</p>
          <p class="subtitle-text">Yrgo, DD21</p>
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
          <p class="subtitle-header">Duration</p>
          <p class="subtitle-text">2 months</p>
        </div>
        <div class="hero-subtitle">
          <p class="subtitle-header">Tools used</p>
          <p class="subtitle-text">Figma</p>
        </div>
      </div>
      <div class="hero-text">
        <div class="hero-subtitle">
          <p class="subtitle-header">Project includes</p>
          <p class="subtitle-text">UI Design</p>
          <p class="subtitle-text">UX Design</p>
          <p class="subtitle-text">Market Research</p>
          <p class="subtitle-text">User Testing</p>
          <p class="subtitle-text">Prototyping</p>
        </div>
      </div>
    </section>
    <main class="project-grid">
      <section class="column-right">
          <h2 class="problem-title">Background</h2>
          <p class="problem-text">Worldwide, over a third of all produced food is wasted and thrown away. By 2030, the UN plans to reduce the global amount of food waste per person by 50%. How can we contribute towards that goal?</p>
      </section>
      <section class="column-left">
          <h2 class="problem-title">The problem</h2>
          <p class="problem-text">Worldwide, over a third of all produced food is wasted and thrown away. By 2030, the UN plans to reduce the global amount of food waste per person by 50%. How can we contribute towards that goal?</p>
      </section>
      <section class="column-right">
          <h2 class="problem-title">The solution</h2>
          <p class="problem-text">Worldwide, over a third of all produced food is wasted and thrown away. By 2030, the UN plans to reduce the global amount of food waste per person by 50%. How can we contribute towards that goal?</p>
      </section>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.projects {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-column: 2 / -2;
}
.hero-info {
  color: var(--pastel-pink);
}
.hero-text {
  display: flex;
  flex-direction: column;
  grid-column: 2 / -2;
  gap: 2rem;
  padding-bottom: 2.5rem;
}
.hero-title {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;
  p {
    @include overline;
    font-size: var(--text-xl);
  }
  h6 {
    color: var(--melon);
  }
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
  font-weight: 500;
  color: var(--unbleached-silk)
}
.subtitle-text {
  @include body-2;
  font-weight: 700;
  font-size: 1.15rem;
  color: var(--melon);
}
.project-grid {
  display: grid;
  grid-column: 1 / -1;
  grid-template-columns: repeat(10, 1fr);
  row-gap: 10rem;
}
.hero {
  grid-column: 1 / -1;
  padding: 3rem 0 5rem 0;
  img {
    width: 100%;
  }
}
.hero-tags {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  grid-column: 3 /-3;
  padding-bottom: 5rem
}
.column-right {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  grid-column: 5 / span 5;
}
.column-left {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  grid-column: 2 / span 5;
}
.problem-title {
  color: var(--unbleached-silk)
}
.problem-text {
  @include body-1;
  color: var(--melon);
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
