<template>
  <figure class="relative lg:flex-row-reverse flex flex-col bg-eggplant rounded-xl lg:p-0 col-span-full lg:h-128 transition-all ease-in-out duration-300 hover:-translate-y-1 group">
    <div class="overflow-hidden lg:w-7/12 flex-none lg:rounded-none lg:rounded-r-xl rounded-t-xl">
      <img class="object-cover w-full h-96 lg:h-full cursor-pointer" :src="`/assets/img/${image}`" :alt="`${title}`" @click="$router.push(`/${link}`)"/>
    </div>
    <div class="pt-6 p-8 text-left lg:text-left lg:mb-0 w-full space-y-4 lg:flex lg:flex-col lg:h-full">
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
      <project-button class="float-left lg:absolute lg:bottom-8 lg:right-8 lg:hidden" @click="$router.push(`/${link}`)"></project-button>
      <footer class="hidden w-full h-full lg:flex items-end">
        <div class="flex flex-row-reverse items-end xl:items-baseline w-full justify-between">
          <project-button @click="$router.push(`/${link}`)"></project-button>
          <p class="hidden lg:flex lg:text-lg font-medium tracking-wide text-pastel-pink text-left">
            {{ category }}
          </p>
        </div>
      </footer>
    </div>
    <figure class="lg:flex-row-reverse flex flex-col bg-eggplant rounded-xl lg:p-0 col-span-full lg:h-128 absolute w-full h-full left-0 top-0 z-[-10] blur-xl contrast-100 opacity-0 group-hover:opacity-25 transition-opacity ease-in-out duration-300">
      <div class="overflow-hidden lg:w-7/12 flex-none lg:rounded-none lg:rounded-r-xl rounded-t-xl">
        <img class="object-cover w-full h-96 lg:h-full cursor-pointer" :src="`/assets/img/${image}`" :alt="`${title}`" @click="$router.push(`/${link}`)"/>
      </div>
      <div class="pt-6 p-8 text-left lg:text-left lg:mb-0 w-full space-y-4 lg:flex lg:flex-col lg:h-full">
      </div>
      
    </figure>
  </figure>
</template>

<script>
import ProjectButton from "./ProjectButton.vue";
export default {
  name: "ProjectCardLeft",
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