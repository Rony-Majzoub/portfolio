<template>
  <div class="grid col-start-2 col-end-[-2] grid-cols-10 min-h-screen">
    <h1
      class="fun-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-unbleached-silk col-span-full sm:col-start-1 sm:col-end-[-2]">
      Here lies some of my smaller and more fun projects.
    </h1>
    <main
      class="grid col-span-full gap-6 lg:gap-5 justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 5xl:grid-cols-5 pt-8 sm:pt-16">
      <div class="col-span-full place-self-start">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-melon">
          UI/UX Design
        </h2>
        <p class="text-melon text-base sm:text-lg font-normal">
          The usual stuff, you know?
        </p>
      </div>
      <FunCard
        title="Otii"
        tag="Digital Prototype"
        image="otii_mobile.png"
        image-link="v1681288212/portfolio/fun/otii/otii_mobile.png"
        link="fun/otii"
        bg-color="#A191F2"
        title-color="var(--black-coffee)"
        subtitle-color="var(--black-coffee)"
        device-color="#BFB2FF"
        :device-border="true" />
      <FunCard
        title="RecyPie"
        tag="Digital Prototype"
        image="recypie_mobile.png"
        image-link="v1680528618/portfolio/recypie/recypie_mobile.png"
        link="fun/recypie"
        bg-color="#b1e0c7"
        title-color="var(--eggplant)"
        subtitle-color="var(--black-coffee)"
        :device-border="true" />
      <FunCard
        title="Shuu"
        tag="Website Prototype"
        image="shuu_hero.png"
        image-link="v1653261250/portfolio/fun/shuu/shuu_hero.png"
        link="fun/shuu"
        bg-color="#252221" />
      <FunCard
        title="Polestar Website"
        tag="Website Prototype"
        image="polestar_website.png"
        image-link="v1653261546/portfolio/fun/polestar_website/polestar_website.png"
        link="fun/polestarwebsite"
        bg-color="#eaeae8"
        title-color="var(--eggplant)"
        subtitle-color="var(--black-coffee)" />
      <!-- <FunCard
        title="Buratino"
        tag="Website & App"
        image="buratino.png"
        image-link="v1652044733/portfolio/buratino/buratino.png"
        link="fun/buratino"
        bg-color="#ba0909" /> -->
      <FunCard
        title="Information Screen"
        tag="Digital Prototype"
        image="connected_splitscreen.png"
        image-link="v1680698934/portfolio/fun/connected/connected_splitscreen.png"
        link="fun/infoscreen"
        bg-color="#242323"
        :device-border="true" />
      <FunCard
        title="Vacina"
        tag="Digital Prototype"
        image="vacina.png"
        image-link="v1653260886/portfolio/fun/vacina/vacina.png"
        link="fun/vacina"
        bg-color="#a2d1fa"
        title-color="var(--eggplant)"
        subtitle-color="var(--black-coffee)" />

      <div class="col-span-full place-self-start pt-8">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-melon">
          Animation
        </h2>
        <p class="text-melon text-base sm:text-lg font-normal">
          Because who doesn't like to make things move?
        </p>
      </div>

      <FunCard
        title="10A Arkitektur"
        tag="2D Animation"
        image="10a_thumbnail.png"
        image-link="v1681303738/portfolio/fun/10a/10a_thumbnail.png"
        link="fun/10a"
        bg-color="var(--eggplant)" />
      <FunCard
        title="Puck Animation"
        tag="3D Animation"
        image="puck_animation.png"
        image-link="v1653998300/portfolio/fun/puck_animation.png"
        link="fun/puckanimation"
        bg-color="#c1a693"
        title-color="var(--eggplant)"
        subtitle-color="var(--black-coffee)" />
      <FunCard
        title="Spices of Gaming"
        tag="Motion Graphics"
        image="spices_of_gaming_thumbnail.png"
        image-link="v1654003231/portfolio/fun/spices_of_gaming_thumbnail.png"
        link="fun/spicesofgaming"
        bg-color="#3c3444" />
      <div class="col-span-full place-self-start pt-8">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-melon">
          3D-Rendering
        </h2>
        <p class="text-melon text-base sm:text-lg font-normal">
          Expect lots of Blender & game engine experiments.
        </p>
      </div>
      <FunCard
        title="So Good"
        tag="Product Visualization"
        image="so_good.png"
        image-link="v1653258131/portfolio/fun/so_good/so_good.png"
        link="fun/sogood"
        bg-color="#e280c7"
        title-color="var(--eggplant)"
        subtitle-color="var(--black-coffee)" />
      <FunCard
        title="Dark Forest"
        tag="Rendering"
        image="Unity_Forest.png"
        image-link="v1654173537/portfolio/fun/Unity_Forest.png"
        link="fun/unityforest"
        bg-color="#1a1f30" />
      <FunCard
        title="Donut Scene"
        tag="Modelling & Rendering"
        image="donut_render.jpg"
        image-link="v1653259075/portfolio/fun/donut_render.jpg"
        link="fun/donutrender"
        bg-color="#c5b8bc"
        title-color="var(--eggplant)"
        subtitle-color="var(--black-coffee)" />
      <!-- <FunCard
        title="Donut Night"
        tag="Modelling & Rendering"
        image="donut_night_render.png"
        image-link="v1653259523/portfolio/fun/Donut_Night_Render.png"
        link="fun/donutnightrender"
        bg-color="#14191e" /> -->
      <FunCard
        title="Project Punk"
        tag="Modelling & Rendering"
        image="project_punk.jpg"
        image-link="v1653259074/portfolio/fun/project_punk.jpg"
        link="fun/projectpunk"
        bg-color="#3e2a21" />
      <FunCard
        title="Brick Wall"
        tag="Rendering"
        image="brick_wall.jpg"
        image-link="v1653259074/portfolio/fun/Brick_Wall.jpg"
        link="fun/brickwall"
        bg-color="#4d443f" />
      <FunCard
        title="Anvil Render"
        tag="Modelling & Materials"
        image="anvilrender.jpg"
        image-link="v1653259517/portfolio/fun/anvilrender.jpg"
        link="fun/anvilrender"
        bg-color="#2b2c2c" />
      <!-- <FunCard
        title="NTI-Awards 2020"
        tag="Modelling & Rendering"
        image="nti_awards.jpg"
        image-link="v1653259075/portfolio/fun/nti_awards.jpg"
        link="fun/ntiawards"
        bg-color="#3c302d" /> -->
    </main>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  name: "Fun",
  components: {
    FunCard: defineAsyncComponent(() =>
      import("../components/Fun/FunCard.vue")
    ),
  },
  mounted() {
    // const query = window.matchMedia("(min-width: 1024px)");
    // if (query.matches) {
    // Wrap every word in a span
    var textWrapper = document.querySelector(".fun-text");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S+/g,
      "<span class='word'>$&</span>"
    );
    this.$anime.timeline({}).add({
      targets: ".fun-text .word",
      translateY: [50, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutQuint",
      duration: 1000,
      delay: this.$anime.stagger(25, { start: 400 }),
    });
    // }
  },
};
</script>
<style lang="scss">
// Display inline-block so word-animation works.
.fun-text .word {
  display: inline-block;
  line-height: 1em;
}
</style>
