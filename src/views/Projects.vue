<template>
  <div class="projects grid grid-cols-10 col-start-2 col-end-[-2]">
    <IntroText class="intro flex justify-center items-center col-span-full" />
    <router-link class="arrow -translate-y-full col-span-full mt-20 bg-transparent justify-self-center" :to="{ path: '/', hash: '#projects' }">
      <Vue3Lottie
        ref="projects"
        :animation-link="('/assets/arrow.json')"
        :loop="false"
        :auto-play="true"
        :speed="1"
        :width="144"/>
    </router-link>
    <main class="project-grid col-span-full flex flex-col justify-center gap-40">
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
import { Vue3Lottie } from 'vue3-lottie';
import 'vue3-lottie/dist/style.css';

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