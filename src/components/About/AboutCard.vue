<template>
  <figure
    class="relative lg:flex-row flex flex-col bg-eggplant rounded-xl lg:p-0 col-start-2 col-end-[-2] lg:min-h-128 lg:h-fit w-full max-w-6xl transition-all ease-in-out duration-300 hover:-translate-y-1 group transform-gpu">
    <figure
      class="lg:flex-row flex flex-col bg-eggplant rounded-xl lg:p-0 col-span-full absolute w-full h-full left-0 top-0 z-[-10] blur-xl contrast-200 mix-blend-lighten opacity-0 group-hover:opacity-50 will-change-[opacity,_filter] transition-opacity ease-in-out duration-300 transform-gpu">
      <div
        class="h-full overflow-hidden w-full lg:w-4/12 lg:rounded-none lg:rounded-l-xl rounded-t-xl lg:max-w-fit">
        <img
          class="object-cover object-[center_20%] w-full h-96 lg:h-full"
          src="/assets/pfp.jpg"
          alt="" />
      </div>
      <div
        class="pt-6 p-8 text-left lg:mb-0 w-full gap-4 flex flex-col justify-between h-full max-w-prose"></div>
    </figure>
    <div
      class="overflow-hidden w-full lg:w-4/12 lg:rounded-none lg:rounded-l-xl rounded-t-xl lg:max-w-fit">
      <img
        class="object-cover object-[center_20%] w-full h-96 lg:h-full text-[0]"
        width="384"
        height="552"
        src="/assets/pfp.jpg"
        alt="Profile Picture" />
      <div
        class="top-0 left-0 object-cover object-[center_20%] w-full lg:w-96 h-96 lg:h-full bg-black hidden lg:block"></div>
    </div>
    <div
      class="pt-6 p-8 text-left lg:mb-0 w-full gap-4 flex flex-col justify-between h-full max-w-prose">
      <figcaption class="space-y-2 lg:space-y-4">
        <div
          class="text-pastel-pink font-medium text-xs lg:text-sm tracking-widest uppercase antialiased">
          About Me
        </div>
        <h1 class="text-unbleached-silk font-bold text-5xl antialiased">
          Rony Majzoub
        </h1>
      </figcaption>
      <blockquote>
        <p class="text-base lg:text-lg font-semibold text-melon max-w-prose">
          In a sea of competition, I strive to differentiate myself by focusing
          on what matters the most. The user. There is no point in designing a
          fancy application if it is unusable. For every project I create, I
          keep the visual design to an absolute minimum, with very few colors,
          intending to include users of all kinds, as well as make concrete
          decisions in the early phases. When it comes to visual design, I aim
          to create minimal designs, with as few obtrusions as possible. Why
          should form follow function, when both can co-exist?
        </p>
      </blockquote>
      <footer class="flex flex-col gap-4 pt-4 lg:pt-8">
        <h3
          class="text-unbleached-silk font-bold text-lg lg:text-xl tracking-wider uppercase antialiased">
          Interests
        </h3>
        <div class="flex flex-row flex-wrap gap-4">
          <AboutPill skill="Digital Design" />
          <AboutPill skill="UX/UI Design" />
          <AboutPill skill="Front-end Development" />
          <AboutPill skill="Animation" />
          <AboutPill skill="Web Design" />
          <AboutPill skill="3D Art" />
          <AboutPill skill="Video Games" />
        </div>
      </footer>
    </div>
  </figure>
</template>

<script>
import AboutPill from "@/components/About/AboutPill.vue";

export default {
  name: "AboutCard",
  components: {
    AboutPill,
  },
  props: {
    link: {
      default: "",
      type: String,
    },
  },
};
</script>
