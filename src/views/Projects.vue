/* eslint-disable vue/attribute-hyphenation */
<template>
  <div class="projects">
    <IntroText class="intro" />
    <router-link class="arrow" :to="{ path: '/', hash: '#projects' }">
      <Vue3Lottie
        ref="projects"
        :animation-link="('src/assets/arrow.json')"
        :loop="false"
        :auto-play="true"
        :speed="1"
        :width="144"/>
    </router-link>
    <main class="project-grid">
      <ProjectCardRight
        link="smoove"
        title="Smoove"
        description="Worldwide, over a third of all produced food is wasted and thrown away. By 2030, the UN plans to reduce the global amount of food waste per person by 50%. How can we contribute towards that goal?"
        category="UI/UX & Product Design"
        tag="Product Development"
        image="smoove-park.jpg" />
      <ProjectCardLeft
        link="recypie"
        title="RecyPie"
        description="Worldwide, over a third of all produced food is wasted and thrown away. By 2030, the UN plans to reduce the global amount of food waste per person by 50%. How can we contribute towards that goal?"
        category="UI & UX Design"
        tag="Visual Concept"
        image="recypie.png" />
      <ProjectCardRight
        link="buratino"
        title="Buratino Instruktino"
        description="After many years of renting their premises to customers, Buratino searched for a replacement for their aging physical instruction manual. After half a year of development, we delivered a solution that is now in use."
        category="Web Development"
        tag="Website"
        image="buratino.png" />
      <ProjectCardRight></ProjectCardRight>
      <ProjectCardLeft></ProjectCardLeft>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import IntroText from "@/components/IntroText.vue";
import ProjectCardRight from "@/components/Overview/ProjectCardRight.vue";
import ProjectCardLeft from "@/components/Overview/ProjectCardLeft.vue";
import { Vue3Lottie } from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'

export default {
  name: "Projects",
  components: {
    IntroText,
    ProjectCardRight,
    ProjectCardLeft,
    Vue3Lottie,
  },
};
</script>

<style lang="scss" scoped>
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
  transform: translateY(-100%);
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
