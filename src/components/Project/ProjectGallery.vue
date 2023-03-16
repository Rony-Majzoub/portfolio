<template>
  <div
    class="lg:col-start-2 lg:col-end-[-2] col-span-full flex flex-col gap-2 animation-item">
    <div class="col-span-full place-self-start pt-8">
      <h2 class="text-3xl lg:text-5xl font-bold text-unbleached-silk">
        {{ title }}
      </h2>
      <p class="text-melon text-base sm:text-lg font-medium">
        {{ description }}
      </p>
    </div>
    <div
      class="snap-x snap-proximity flex flex-row items-start overflow-x-scroll w-full h-full gap-4 p-2 lg:gap-6 lg:p-8 rounded-lg lg:rounded-xl bg-eggplant"
      :style="{ backgroundColor: galleryColor }">
      <ProjectImage
        v-for="picture in pictures"
        :key="picture.id"
        class="w-[80%] snap-center shrink-0"
        :image="picture.src"
        :image-link="picture.url"
        :alt-text="picture.alt"
        :description="picture.imageText"
        :bg-color="picture.imageColor" />
    </div>
    <!-- <div class="flex flex-row justify-between">
      <p class="text-cameo-pink font-medium">
        {{ imageText }}
      </p>
    </div> -->
  </div>
</template>
<script>
import cloudinary from "cloudinary-core/cloudinary-core-shrinkwrap.min.js";
// import ProjectImage from "@/components/Project/ProjectImage.vue";

export default {
  name: "ProjectGallery",
  // components: {
  //   ProjectImage,
  // },
  // Injects the Array of images from the Main Page.
  inject: ["pictures"],
  props: {
    title: {
      default: "",
      type: String,
    },
    description: {
      default: "",
      type: String,
    },
    imageText: {
      default: "",
      type: String,
    },
    imageColor: {
      default: "var(--eggplant)",
      type: String,
    },
    galleryColor: {
      default: "var(--eggplant)",
      type: String,
    },
  },

  mounted() {
    var cl = cloudinary.Cloudinary.new({ cloud_name: "rony-majzoub" });
    // replace 'demo' with your cloud name in the line above
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
