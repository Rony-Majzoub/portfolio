<template>
  <div
    class="projects grid grid-cols-10 col-start-2 col-end-[-2] place-items-center">
    <IntroText
      class="flex justify-center items-center flex-wrap content-center col-span-full" />
    <router-link
      class="arrow -translate-y-full col-span-full mt-20 bg-transparent justify-self-center text-[0] text-melon"
      :to="{ path: '/', hash: '#projects' }">
      View All Projects
      <Vue3Lottie
        ref="projects"
        :animation-link="'/assets/arrow.json'"
        :loop="false"
        :auto-play="true"
        :speed="1"
        :width="144" />
    </router-link>
    <main class="project-grid col-span-full flex flex-col justify-center">
      <h1
        class="project-text text-4xl sm:text-5xl lg:text-6xl font-bold text-unbleached-silk text-left tracking-tight antialiased mb-8 sm:mb-16">
        Here are some of my larger projects.
      </h1>
      <ProjectCardLeft
        link="futureexperiencelab"
        title="Future Experience Lab"
        short-title="F.E.L."
        description="Worldwide, over a third of all produced food is wasted and thrown away. By 2030, the UN plans to reduce the global amount of food waste per person by 50%. How can we contribute towards that goal?"
        category="UI/UX & Product Design"
        tag="Product Development"
        image="fel_hero2.png"
        image-link="v1652949383/portfolio/fel/fel_hero2.png" />
      <ProjectCardRight
        link="smoove"
        title="Smoove"
        short-title="Smoove"
        description="Worldwide, over a third of all produced food is wasted and thrown away. By 2030, the UN plans to reduce the global amount of food waste per person by 50%. How can we contribute towards that goal?"
        category="UI/UX & Product Design"
        tag="Product Development"
        image="smoove-park.jpg"
        image-link="v1652044733/portfolio/smoove/smoove.jpg" />
      <ProjectCardLeft
        link="recypie"
        title="RecyPie"
        short-title="RecyPie"
        description="Worldwide, over a third of all produced food is wasted and thrown away. By 2030, the UN plans to reduce the global amount of food waste per person by 50%. How can we contribute towards that goal?"
        category="UI & UX Design"
        tag="Visual Concept"
        image="recypie.png"
        image-link="v1652044733/portfolio/recypie/recypie.png" />
      <ProjectCardRight
        link="buratino"
        title="Buratino Instruktino"
        short-title="Buratino"
        description="After many years of renting their premises to customers, Buratino searched for a replacement for their aging physical instruction manual. After half a year of development, we delivered a solution that is now in use."
        category="Web Development"
        tag="Website"
        image="buratino.png"
        image-link="v1652044733/portfolio/buratino/buratino.png" />
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
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";
// import { defineAsyncComponent } from "vue";

// const AsyncComp = defineAsyncComponent(() =>
//   import("./components/MyComponent.vue")
// );

export default {
  name: "Projects",
  components: {
    IntroText,
    ProjectCardRight,
    ProjectCardLeft,
    Vue3Lottie,
  },
  mounted() {
    // Wrap every word in a span
    var textWrapper = document.querySelector(".project-text");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S+/g,
      "<span class='word'>$&</span>"
    );
    this.$anime.timeline({}).add({
      targets: ".project-text .word",
      translateY: [50, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutQuint",
      duration: 1000,
      delay: (el, i) => 300 + 25 * i,
    });
  },
};
</script>
<style lang="scss">
// Display inline-block so word-animation works.
.project-text .word {
  display: inline-block;
  line-height: 1em;
}
</style>
