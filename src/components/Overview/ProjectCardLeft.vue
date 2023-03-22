<template>
  <figure
    class="max-w-screen-2xl relative lg:flex-row-reverse flex flex-col !bg-eggplant rounded-xl overflow-hidden lg:p-0 col-start-2 col-end-[-2] transition-all ease-in-out duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#2b212c] mb-40 animation-item">
    <!-- Image Container -->
    <router-link
      class="relative overflow-hidden lg:w-7/12 aspect-video flex-none h-auto w-full"
      :to="{ path: `/${link}` }">
      <!-- Blurred Placeholder Image (Cloudinary) -->
      <img
        class="cld-responsive absolute object-cover w-full h-full cursor-pointer text-[0] !bg-eggplant"
        :data-src="`https://res.cloudinary.com/rony-majzoub/image/upload/c_scale,w_480,e_blur:1000,q_auto,f_auto/dpr_auto/${imageLink}`"
        :src="`/assets/img/${image}`"
        :alt="`${title}`" />
      <!-- Sharp Final Image (Cloudinary) -->
      <img
        class="cld-responsive high-def absolute object-cover w-full h-full cursor-pointer text-[0]"
        :src="`/assets/img/${image}`"
        :data-src="`https://res.cloudinary.com/rony-majzoub/image/upload/c_scale,w_auto,q_auto,f_auto,fl_progressive/dpr_auto/${imageLink}`"
        :alt="`${title}`" />
    </router-link>
    <div
      class="pt-6 p-8 text-left lg:text-left lg:mb-0 w-full space-y-4 lg:flex lg:flex-col">
      <figcaption class="space-y-2 lg:space-y-4">
        <div
          class="!text-melon font-semibold text-xs lg:text-sm tracking-widest uppercase antialiased">
          {{ tag }}
        </div>
        <div
          class="!text-unbleached-silk font-extrabold text-4xl lg:text-5xl antialiased">
          {{ title }}
        </div>
      </figcaption>
      <blockquote>
        <p class="text-base lg:text-lg font-normal !text-melon">
          {{ description }}
        </p>
      </blockquote>
      <!-- Mobile Bottom Row (Button) -->
      <project-button
        class="float-right lg:absolute lg:bottom-8 lg:left-8 lg:hidden"
        :short-title="shortTitle"
        @click="$router.push(`/${link}`)"></project-button>
      <!-- Desktop Bottom Row (Button + Category) -->
      <footer class="hidden w-full h-full lg:flex items-end pt-4">
        <div
          class="flex flex-row-reverse items-end xl:items-baseline w-full justify-between gap-4">
          <project-button
            :short-title="shortTitle"
            @click="$router.push(`/${link}`)"></project-button>
          <p
            class="hidden lg:flex lg:text-lg font-semibold !text-pastel-pink text-left">
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
  name: "ProjectCardLeft",
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
