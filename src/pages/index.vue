<template>
  <div
    class="projects grid grid-cols-10 col-span-full place-items-center -mb-28 min-h-screen">
    <div
      class="h-screen col-start-2 col-end-[-2] flex flex-col items-center justify-end">
      <IntroText class="grow" />
      <router-link
        class="arrow min-h-[144px] -translate-y-full w-fit p-4 pb-32 lg:pb-16 flex justify-center mt-12 bg-transparent text-[0] text-melon"
        :to="{ path: '/', hash: '#projects' }">
        View All Projects
        <!-- <Vue3Lottie
          ref="projects"
          :animation-link="'/assets/arrow.json'"
          :loop="false"
          :auto-play="true"
          :speed="1"
          :width="144" /> -->
        <i-ic:round-keyboard-arrow-down class="w-32 h-32" />
      </router-link>
    </div>
    <main class="project-grid grid grid-cols-12 col-span-full">
      <h1
        class="project-text col-start-2 col-end-[-2] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold !text-unbleached-silk text-left tracking-tight antialiased mb-8 sm:mb-16">
        Here are some of my larger projects.
      </h1>
      <div
        class="grid grid-cols-12 col-span-full gap-y-40 pb-40 place-items-center">
        <!-- <ProjectCardCenter
          title="Showreel"
          short-title="Showreel"
          description="Want the TL;DR on what I do? Just watch my Showreel!"
          category="Motion Deisgn"
          tag="Showreel"
          video="Showreel_Final_H264.mp4"
          video-link="v1653263740/portfolio/Showreel_Final_H264.mp4" /> -->
        <ProjectCardRight
          link="futureexperiencelab"
          title="Future Experience Lab"
          short-title="F.E.L."
          description='When Future Experience Lab reached out to Yrgo, 
          they sought after a website to augment their "Hybrid Workhop Experience", 
          with a touch of "controlled chaos". Our goal was to strike that balance, and deliver a website prototype.'
          category="UI/UX & Web Design"
          tag="Website"
          image="fel_hero2.png"
          image-link="v1652949383/portfolio/fel/fel_hero2.png" />
        <ProjectCardLeft
          link="smoove"
          title="Smoove"
          short-title="Smoove"
          description="As the automotive industry reaches further into the digital market,
          our goal was to create and design a stylistic profile, website and vehicle,
          derived from a feeling that we wanted to present, every step of the way."
          category="UI/UX & Product Design"
          tag="Product Development"
          image="smoove_park.jpg"
          image-link="v1652044733/portfolio/smoove/smoove.jpg" />
        <ProjectCardRight
          link="mojo"
          title="Mojo"
          short-title="Mojo"
          description="Today, a large portion of the world lack a clean and modern method for cooking. 
          The result is extensive deforestation, hours of extra labor, and harmful emissions.
          However, through a collaboration with a start-up Chalmers-Incubator company, a solution is in sight."
          category="UX & Product Design"
          tag="Graphic Profile"
          image="mojo_hero.png"
          image-link="v1653061123/portfolio/mojo/mojo_hero.png" />
        <!-- <ProjectCardLeft
          link="recypie"
          title="RecyPie"
          short-title="RecyPie"
          description="Worldwide, over a third of all produced food is wasted and thrown away. 
          By 2030, the UN plans to reduce the global amount of food waste per person by 50%. 
          How can we construct a digital service to contribute towards that goal?"
          category="UI & UX Design"
          tag="Visual Concept"
          image="recypie.png"
          image-link="v1652044733/portfolio/recypie/recypie.png" /> -->
        <!-- <ProjectCardRight
          link="buratino"
          title="Buratino Instruktino"
          short-title="Buratino"
          description="After many years of renting their premises to customers,
          Buratino searched for a replacement to their aging physical instruction manual. 
          After half a year of development, we delivered a solution that is now in use."
          category="Web Development"
          tag="Website"
          image="buratino.png"
          image-link="v1652044733/portfolio/buratino/buratino.png" /> -->
      </div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
// import IntroText from "@/components/IntroText.vue";
// import ProjectCardRight from "@/components/Overview/ProjectCardRight.vue";
// import ProjectCardLeft from "@/components/Overview/ProjectCardLeft.vue";
// import { Vue3Lottie } from "vue3-lottie";
// import "vue3-lottie/dist/style.css";
import { defineAsyncComponent } from "vue";

// const AsyncComp = defineAsyncComponent(() =>
//   import("./components/MyComponent.vue")
// );

export default {
  name: "Projects",
  // metaInfo() {
  //   return {
  //     title: "My Options API title",
  //   };
  // },
  components: {
    ProjectCardLeft: defineAsyncComponent(() =>
      import("../components/Overview/ProjectCardLeft.vue")
    ),
    ProjectCardRight: defineAsyncComponent(() =>
      import("../components/Overview/ProjectCardRight.vue")
    ),
  },
  mounted() {
    this.$anime({
      targets: ".arrow",
      translateY: [-200, -130],
      opacity: [0, 1],
      duration: 1000,
      delay: 3000,
      easing: "easeOutExpo",
    });
    // const query = window.matchMedia("(min-width: 1024px)");
    // if (query.matches) {
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
    // }
  },
};
</script>
<style lang="scss">
// Display inline-block so word-animation works.
.project-text .word {
  display: inline-block;
  line-height: 1em;
}
.project-card {
  opacity: 0;
}
</style>
