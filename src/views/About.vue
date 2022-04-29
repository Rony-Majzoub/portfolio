<template>
  <div
    class="col-start-2 col-end-[-2] grid grid-cols-10 gap-y-8 place-items-center overflow-hidden">
    <AboutCard />
  </div>
</template>

<!-- <template>
  <div class="col-start-2 col-end-[-2] grid grid-cols-10 gap-y-8">
    <h1
      class="text-4xl lg:text-6xl xl:text-7xl font-medium text-unbleached-silk col-span-full lg:col-end-[-5] xl:col-end-[-5] text-left h-min">
      I am a designer based in Gothenburg. My goal is to create solutions to
      problems we all face every day.
    </h1>
    <img
      class="hidden lg:block col-start-8 lg:col-start-7 col-end-[-1] xl:w-8/12 justify-self-end rounded-xl border-4 border-melon"
      src="/assets/pfp.jpg"
      alt="" />
    <p
      class="font-normal text-base tracking-wide text-melon text-left col-span-full max-w-prose lg:col-end-[-6]">
      In a sea of competition, I strive to differentiate myself by focusing on
      what matters the most. The user. There is no point in designing a fancy
      application if it is unusable. For every project I create, I keep the
      visual design to an absolute minimum, with very few colors, intending to
      include users of all kinds, as well as make concrete decisions in the
      early phases. When it comes to visual design, I aim to create minimal
      designs, with as few obtrusions as possible. Why should form follow
      function, when both can co-exist?
      <br />
      <br />
      For a well-designed product, each party involved in its creation must be
      in almost perfect harmony. But a team like that is very hard to come by,
      which is why I’ve focused on expanding my skill set in different fields,
      to not only be more flexible and ambitious in my work, but also
      communicate more effectively with other teammates with different
      specialties.
    </p>
    <img
      class="lg:hidden col-start-2 col-end-[-2] w-full justify-self-center rounded-xl border-4 border-melon"
      src="/assets/pfp.jpg"
      alt="" />
    <div
      class="flex flex-col gap-4 col-span-full text-left lg:text-right lg:col-start-8 lg:col-end-[-1]">
      <h2 class="text-4xl lg:text-5xl font-medium text-melon underline mb-2">
        My skillset
      </h2>
      <div
        class="flex flex-row-reverse gap-4 justify-end items-center lg:flex-row">
        <h3
          class="text-lg font-normal uppercase tracking-widest text-pastel-pink">
          Digital Designer
        </h3>
        <img class="h-12 w-12" src="/assets/figma.svg" alt="" />
      </div>
      <div
        class="flex flex-row-reverse gap-4 justify-end items-center lg:flex-row">
        <h3
          class="text-lg font-normal uppercase tracking-widest text-pastel-pink">
          UX Designer
        </h3>
        <img class="h-12 w-12" src="/assets/figma.svg" alt="" />
      </div>
      <div
        class="flex flex-row-reverse gap-4 justify-end items-center lg:flex-row">
        <h3
          class="text-lg font-normal uppercase tracking-widest text-pastel-pink">
          Front-end Developer
        </h3>
        <img class="h-12 w-12" src="/assets/vue.svg" alt="" />
      </div>
      <div
        class="flex flex-row-reverse gap-4 justify-end items-center lg:flex-row">
        <h3
          class="text-lg font-normal uppercase tracking-widest text-pastel-pink">
          Motion Designer
        </h3>
        <img class="h-12 w-12" src="/assets/ae.svg" alt="" />
      </div>
      <div
        class="flex flex-row-reverse gap-4 justify-end items-center lg:flex-row">
        <h3
          class="text-lg font-normal uppercase tracking-widest text-pastel-pink">
          3D Artist
        </h3>
        <img class="h-12 w-12" src="/assets/blender.svg" alt="" />
      </div>
    </div>
  </div>
</template> -->

<script>
import AboutCard from "@/components/About/AboutCard.vue";

export default {
  name: "About",
  components: {
    AboutCard,
  },
};
</script>
