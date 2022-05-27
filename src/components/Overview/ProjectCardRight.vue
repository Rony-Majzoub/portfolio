<template>
  <figure
    class="max-w-screen-2xl relative lg:flex-row flex flex-col !bg-eggplant rounded-xl lg:p-0 col-span-full lg:h-128 transition-transform ease-in-out duration-300 hover:-translate-y-1 group transform-gpu mb-40">
    <!-- Blurred element behind Card -->
    <figure
      class="lg:flex-row flex flex-col !bg-eggplant rounded-xl lg:p-0 col-span-full lg:h-128 absolute w-full h-full left-0 top-0 z-[-10] blur-xl contrast-150 mix-blend-lighten opacity-0 group-hover:opacity-25 will-change-[opacity,_filter] transition-opacity ease-in-out duration-300 transform-gpu">
      <!-- Image Container -->
      <div
        class="relative overflow-hidden lg:w-7/12 flex-none h-full lg:rounded-none lg:rounded-l-xl rounded-t-xl">
        <!-- Blurred Placeholder Image (Cloudinary) -->
        <img
          class="cld-responsive absolute object-cover w-full h-64 lg:h-full cursor-pointer text-[0]"
          :data-src="`https://res.cloudinary.com/rony-majzoub/image/upload/c_scale,w_480/e_blur:1000,q_auto,f_auto/dpr_auto/${imageLink}`"
          :src="`/assets/img/${image}`"
          :alt="`${title}`"
          @click="$router.push(`/${link}`)" />
      </div>
      <div
        class="pt-6 p-8 text-right lg:text-left lg:mb-0 w-full space-y-4 lg:flex lg:flex-col lg:h-full"></div>
    </figure>
    <!-- Image Container -->
    <div
      class="relative overflow-hidden lg:w-7/12 flex-none h-64 lg:h-auto lg:rounded-none lg:rounded-l-xl rounded-t-xl">
      <!-- Blurred Placeholder Image (Cloudinary) -->
      <img
        class="cld-responsive absolute object-cover w-full h-64 lg:h-full cursor-pointer text-[0] !bg-eggplant"
        :data-src="`https://res.cloudinary.com/rony-majzoub/image/upload/c_scale,w_480,e_blur:1000,q_auto,f_auto/dpr_auto/${imageLink}`"
        :src="`/assets/img/${image}`"
        :alt="`${title}`"
        @click="$router.push(`/${link}`)" />
      <!-- Sharp Final Image (Cloudinary) -->
      <img
        class="cld-responsive high-def absolute object-cover w-full h-64 lg:h-full cursor-pointer text-[0]"
        :src="`/assets/img/${image}`"
        :data-src="`https://res.cloudinary.com/rony-majzoub/image/upload/c_scale,w_auto,q_auto,f_auto,fl_progressive/dpr_auto/${imageLink}`"
        :alt="`${title}`"
        @click="$router.push(`/${link}`)" />
    </div>
    <div
      class="pt-6 p-8 text-right lg:text-left lg:mb-0 w-full space-y-4 lg:flex lg:flex-col lg:h-full">
      <figcaption class="space-y-2 lg:space-y-4">
        <div
          class="!text-melon font-medium text-xs lg:text-sm tracking-widest uppercase antialiased">
          {{ tag }}
        </div>
        <div
          class="!text-unbleached-silk font-bold text-5xl lg:text-6xl antialiased">
          {{ title }}
        </div>
      </figcaption>
      <blockquote>
        <p class="text-base lg:text-lg font-medium !text-melon">
          {{ description }}
        </p>
      </blockquote>
      <project-button
        class="float-right lg:absolute lg:bottom-8 lg:left-8 lg:hidden"
        :short-title="shortTitle"
        @click="$router.push(`/${link}`)"></project-button>
      <footer class="hidden w-full h-full lg:flex items-end">
        <div
          class="flex flex-row items-end xl:items-baseline w-full justify-between">
          <project-button
            :short-title="shortTitle"
            @click="$router.push(`/${link}`)"></project-button>
          <p
            class="hidden lg:flex lg:text-lg font-semibold tracking-wide !text-pastel-pink text-right">
            {{ category }}
          </p>
        </div>
      </footer>
    </div>
  </figure>
</template>

<script>
// import ProjectButton from "./ProjectButton.vue";
import cloudinary from "cloudinary-core/cloudinary-core-shrinkwrap.min.js";
export default {
  name: "ProjectCardRight",
  // components: {
  //   ProjectButton,
  // },
  props: {
    title: {
      default: "Project Title",
      type: String,
    },
    description: {
      default: "The brief summary of the project.",
      type: String,
    },
    category: {
      default: "Category",
      type: String,
    },
    tag: {
      default: "Project Tag",
      type: String,
    },
    image: {
      default: "recypie.png",
      type: String,
    },
    imageLink: {
      default: "v1652044733/portfolio/recypie/recypie.png",
      type: String,
    },
    link: {
      default: "",
      type: String,
    },
    shortTitle: {
      default: "Project",
      type: String,
    },
  },
  mounted() {
    var cl = cloudinary.Cloudinary.new({ cloud_name: "rony-majzoub" });
    cl.responsive();
    const images = document.getElementsByClassName("high-def");
    for (let image of images) {
      image.addEventListener("load", fadeImg);
      image.style.opacity = "0";
    }

    function fadeImg() {
      this.style.transition = "opacity 1s";
      this.style.opacity = "1";
    }
  },
};
</script>
