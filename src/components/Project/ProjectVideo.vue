<template>
  <div
    class="lg:col-start-2 lg:col-end-[-2] max-lg:w-screen col-span-full h-full w-full flex flex-col gap-2">
    <div
      v-once
      class="relative md:aspect-video lg:rounded-lg w-full h-auto overflow-hidden bg-eggplant"
      :style="{ backgroundColor: bgColor }">
      <!-- Sharp Final Video (Cloudinary) -->
      <video
        v-once
        :src="`/assets/img/${video}`"
        :alt="`${altText}`"
        width="768"
        height="432"
        class="cld-responsive high-def relative md:absolute object-contain object-center w-full h-auto md:h-full lg:rounded-lg text-[0]"
        :autoplay="autoplay"
        :controls="controls"
        :loop="loop"
        :muted="muted"
        :playsinline="loop"
        :poster="`/assets/img/${thumbnail}`" />
      <!-- <img
      class="object-cover object-[center_60%] w-full max-h-full rounded-lg"
      width="1280"
      height="720"
      :src="`/assets/img/${image}`"
      :alt="`${altText}`" /> -->
    </div>
    <!-- Text Element -->
    <div class="max-lg:grid grid-cols-12">
      <div
        v-once
        class="max-lg:col-start-2 max-lg:col-end-[-2] flex flex-row justify-between gap-4">
        <p class="text-cameo-pink font-normal text-sm lg:text-base">
          {{ description }}
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
  name: "ProjectVideo",
  props: {
    video: {
      default: "",
      type: String,
    },
    videoLink: {
      default: "",
      type: String,
    },
    thumbnail: {
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
    autoplay: {
      default: false,
      type: Boolean,
    },
    controls: {
      default: true,
      type: Boolean,
    },
    loop: {
      default: false,
      type: Boolean,
    },
    muted: {
      default: false,
      type: Boolean,
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
