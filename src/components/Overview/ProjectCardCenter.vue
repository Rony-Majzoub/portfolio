<template>
  <figure
    class="max-w-screen-2xl relative flex flex-col col-span-full lg:col-start-2 lg:col-end-[-2] xl:col-start-3 xl:col-end-[-3] !bg-eggplant rounded-none lg:rounded-xl transition-all ease-in-out duration-300 lg:hover:-translate-y-1 shadow-2xl lg:shadow-xl lg:hover:shadow-2xl lg:hover:shadow-melon shadow-unbleached-silk lg:shadow-unbleached-silk mb-40 animation-item">
    <!-- Sharp Final Video (Cloudinary) -->
    <video
      class="cld-responsive aspect-video rounded-none lg:rounded-t-xl bg-unbleached-silk"
      :src="`/assets/img/${video}`"
      :data-src="`https://res.cloudinary.com/rony-majzoub/video/upload/${videoLink}`"
      :alt="`${title}`"
      controls
      width="1920"
      height="1080"
      poster="/assets/img/showreel_poster.png" />
    <div class="pt-6 p-8 text-left w-full space-y-2">
      <div
        class="!text-unbleached-silk font-bold text-5xl lg:text-6xl antialiased">
        {{ title }}
      </div>
      <p class="text-base lg:text-lg font-medium !text-melon">
        {{ description }}
      </p>
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
    video: {
      default: "recypie.png",
      type: String,
    },
    videoLink: {
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
  },
};
</script>
