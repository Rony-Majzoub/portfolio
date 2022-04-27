<template>
  <figure class="lg:flex bg-eggplant rounded-xl lg:p-0 col-span-full lg:h-128 shadow-lg">
    <div class="overflow-hidden lg:w-7/12 flex-none lg:rounded-none lg:rounded-l-xl rounded-t-xl">
      <img class="object-cover w-full h-96 lg:h-full" :src="`public/assets/img/${image}`" :alt="`${title}`" />
    </div>
    <div class="pt-6 mb-16 p-8 text-right lg:text-left lg:mb-0 w-full space-y-4 lg:flex lg:flex-col lg:h-full">
      <figcaption class="space-y-2 lg:space-y-4">
        <div class="text-melon font-normal text-xs lg:text-sm tracking-widest uppercase antialiased">
          {{ tag }}
        </div>
        <div class="text-unbleached-silk font-medium text-5xl lg:text-6xl antialiased">
          {{ title }}
        </div>
      </figcaption>
      <blockquote>
        <p class="text-base lg:text-lg font-normal text-melon">
          {{ description }}
        </p>
      </blockquote>
      <project-button class="float-right lg:absolute lg:bottom-8 lg:left-8 lg:hidden"></project-button>
      <footer class="hidden w-full h-full lg:flex items-end">
        <div class="flex items-baseline w-full justify-between">
          <project-button class=""></project-button>
          <p class="hidden lg:flex lg:text-lg font-medium tracking-wide text-pastel-pink">
            {{ category }}
          </p>

        </div>
      </footer>
    </div>
  </figure>
</template>

<script>
import ProjectButton from "./ProjectButton.vue";
export default {
  name: "ProjectCardRight",
  components: {
    ProjectButton,
},
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
    link: {
      default: "",
      type: String,
    },
  },
};
</script>