<template>
  <div
    class="lg:col-start-2 lg:col-end-[-2] col-span-full flex flex-col gap-2 animation-item">
    <div
      v-if="title.length"
      v-once
      class="col-span-full place-self-start pt-8 pb-2 flex flex-col gap-1">
      <h2 v-once class="text-3xl lg:text-5xl font-bold text-unbleached-silk">
        {{ title }}
      </h2>
      <p v-once class="text-melon text-base sm:text-lg font-medium">
        {{ description }}
      </p>
    </div>
    <div
      v-once
      class="snap-x snap-proximity flex flex-row items-start overflow-x-scroll max-lg:w-screen max-lg:place-self-center gap-4 p-4 sm:p-8 lg:p-12 lg:gap-6 rounded-none lg:rounded-xl shadow-md bg-eggplant transform-gpu"
      :style="{ backgroundColor: galleryColor }">
      <ProjectImageGallery
        v-for="picture in pictures"
        v-once
        :key="picture.id"
        class="w-[80%] snap-center shrink-0"
        :image="picture.src"
        :image-link="picture.url"
        :alt-text="picture.alt"
        :description="picture.imageText"
        :bg-color="picture.imageColor" />
    </div>
    <!-- Text Element -->
    <div v-if="disclaimer.length" class="max-lg:grid grid-cols-12">
      <div
        v-once
        class="max-lg:col-start-2 max-lg:col-end-[-2] flex flex-row justify-between gap-4">
        <p class="text-cameo-pink font-normal text-sm lg:text-base">
          {{ disclaimer }}
        </p>
        <a
          v-if="linkText"
          v-once
          class="nav-text relative whitespace-nowrap h-fit text-right cursor-pointer transition-all duration-300 text-melon text-base font-bold antialiased"
          :href="link"
          target="_blank">
          {{ linkText }} &rarr;
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import cloudinary from "cloudinary-core/cloudinary-core-shrinkwrap.min.js";

export default {
  name: "ProjectGallery",
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
    disclaimer: {
      default: "",
      type: String,
    },
    link: {
      default: "",
      type: String,
    },
    linkText: {
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
