<template>
  <div class="projects">
    <intro-text class="intro"/>
    <router-link class="arrow" :to="{ path: '/', hash: '#projects' }" >
      <lottie-animation
        path="arrow.json"
        :loop="false"
        :autoPlay="true"
        :speed="1"
        :width="144"
        :height="144"
        id="projects"
      />
    </router-link>
    <main class="project-grid">
      <project-card-right title="RecyPie" description="Worldwide, over a third of all produced food is wasted and thrown away. By 2030, the UN plans to reduce the global amount of food waste per person by 50%. How can we contribute towards that goal?" category="UI & UX Design" tag="Visual Concept" image="recypie.png"/>
      <project-card-left title="Buratino" description="After many years of renting their premises to customers, Buratino searched for a replacement for their aging physical instruction manual. After half a year of development, we delivered a solution that is now in use." category="Web Development" tag="Website" image="buratino.png"/>
      <project-card-right></project-card-right>
    </main>
  </div>
</template>

<style lang="scss">
.projects {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-column: 2 / -2;
}
.intro {
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 1 / -1;
}
.arrow {
  transform:translateY(-100%);
  grid-column: 1 / -1;
  margin-top: 5rem !important;
  background-color: transparent;
  justify-self: center;
}
.project-grid {
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10rem;
}
</style>

<script>
// @ is an alias to /src
import IntroText from '../components/IntroText.vue'
import ProjectCardRight from '../components/ProjectCardRight.vue'
import ProjectCardLeft from '../components/ProjectCardLeft.vue'
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue"; // import lottie-vuejs

export default {
  name: 'Projects',
  components: {
    IntroText,
    ProjectCardRight,
    ProjectCardLeft,
    LottieAnimation
  }
}
</script>
