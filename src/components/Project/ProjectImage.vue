<template>
  <div
    class="lg:col-start-2 lg:col-end-[-2] max-lg:w-screen col-span-full h-full w-full flex flex-col gap-2">
    <div
      v-once
      class="relative md:aspect-video lg:rounded-lg h-auto w-full overflow-hidden"
      :style="{ backgroundColor: bgColor, aspectRatio: contentRatio }">
      <!-- Blurred Placeholder Image (Cloudinary) -->
      <img
        v-once
        :data-src="`https://res.cloudinary.com/rony-majzoub/image/upload/c_scale,w_480/e_blur:1000,q_auto,f_auto/dpr_auto/${imageLink}`"
        :src="`/assets/img/${image}`"
        :alt="`${altText}`"
        :width="imageWidth"
        :height="imageHeight"
        class="cld-responsive relative md:absolute object-contain md:object-cover object-[center_60%] w-full h-auto md:h-full text-[0]"
        :class="{ 'image-contain': contain }" />
      <!-- Sharp Final Image (Cloudinary) -->
      <img
        v-once
        :data-src="`https://res.cloudinary.com/rony-majzoub/image/upload/c_scale,w_auto,q_auto:best,f_auto,fl_progressive/dpr_auto/${imageLink}`"
        :src="`/assets/img/${image}`"
        :alt="`${altText}`"
        class="cld-responsive high-def inset-0 absolute object-contain md:object-cover object-[center_60%] w-full h-auto md:h-full text-[0]"
        :class="{ 'image-contain': contain }" />
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
  name: "ProjectImage",
  props: {
    image: {
      default: "",
      type: String,
    },
    imageLink: {
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
    contentRatio: {
      default: "16 / 9",
      type: String,
    },
    imageWidth: {
      default: "768",
      type: String,
    },
    imageHeight: {
      default: "432",
      type: String,
    },
    contain: {
      default: false,
      type: Boolean,
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
<style lang="scss" scoped>
.nav-text::before {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 2px;
  bottom: 2px;
  left: 0;
  background-color: currentColor;
  transform: scaleX(0);
  transform-origin: top left;
  transition: transform 300ms;
  transition-timing-function: cubic-bezier(0, 0.8, 0.2, 1);
  will-change: transform;
}

.nav-text:hover::before {
  transform: scaleX(1);
}

.image-contain {
  object-fit: contain;
  object-position: center center;
}
</style>
