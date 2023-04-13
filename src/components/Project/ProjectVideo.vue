<template>
  <div class="lg:col-start-2 lg:col-end-[-2] col-span-full flex flex-col gap-2">
    <div
      class="relative aspect-video rounded-lg bg-eggplant"
      :style="{ backgroundColor: bgColor }">
      <!-- Sharp Final Video (Cloudinary) -->
      <video
        :data-src="`https://res.cloudinary.com/rony-majzoub/video/upload/${videoLink}`"
        :src="`/assets/img/${video}`"
        :alt="`${altText}`"
        class="cld-responsive high-def absolute object-contain object-center w-full h-full rounded-lg text-[0]"
        controls />
      <!-- <img
      class="object-cover object-[center_60%] w-full max-h-full rounded-lg"
      width="1280"
      height="720"
      :src="`/assets/img/${image}`"
      :alt="`${altText}`" /> -->
    </div>
    <div class="flex flex-row justify-between">
      <p class="text-cameo-pink font-medium text-sm lg:text-base">
        {{ description }}
      </p>
      <a
        v-if="linkText"
        class="nav-text relative text-right cursor-pointer transition-all duration-200 text-melon text-base font-bold antialiased"
        :href="link"
        target="_blank">
        {{ linkText }} &rarr;
      </a>
    </div>
  </div>
</template>
<script>
import cloudinary from "cloudinary-core/cloudinary-core-shrinkwrap.min.js";

export default {
  name: "ProjectImage",
  props: {
    video: {
      default: "",
      type: String,
    },
    videoLink: {
      default: "",
      type: String,
    },
    altText: {
      default: "",
      type: String,
    },
    description: {
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
    bgColor: {
      default: "var(--eggplant)",
      type: String,
    },
  },
  mounted() {
    var cl = cloudinary.Cloudinary.new({ cloud_name: "rony-majzoub" });
    cl.responsive();
  },
};
</script>
<style lang="scss">
.nav-text::before {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 2px;
  bottom: 4px;
  left: 0;
  background-color: currentColor;
  transform: scaleX(0);
  transform-origin: top left;
  transition: transform 300ms;
  transition-timing-function: cubic-bezier(0, 0.8, 0.2, 1);
}

.nav-text:hover::before {
  transform: scaleX(1);
}
</style>
