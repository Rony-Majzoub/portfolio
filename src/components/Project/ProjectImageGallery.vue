<template>
  <div class="lg:col-start-2 lg:col-end-[-2] col-span-full flex flex-col gap-2">
    <div
      v-once
      class="aspect-video rounded-lg overflow-hidden shadow-md bg-eggplant transform-gpu"
      :style="{ backgroundColor: bgColor }">
      <!-- Blurred Placeholder Image (Cloudinary) -->
      <img
        v-once
        :data-src="`https://res.cloudinary.com/rony-majzoub/image/upload/c_scale,w_480/e_blur:1000,q_auto,f_auto/dpr_auto/${imageLink}`"
        :src="`/assets/img/${image}`"
        :alt="`${altText}`"
        class="cld-responsive relative object-cover w-full h-full text-[0] aspect-video" />
      <!-- Sharp Final Image (Cloudinary) -->
      <img
        v-once
        :data-src="`https://res.cloudinary.com/rony-majzoub/image/upload/c_scale,w_auto,q_auto:best,f_auto,fl_progressive/dpr_auto/${imageLink}`"
        :src="`/assets/img/${image}`"
        :alt="`${altText}`"
        class="cld-responsive high-def absolute top-0 left-0 object-cover w-full h-full text-[0] aspect-video" />
      <!-- <img
      class="object-cover object-[center_60%] w-full max-h-full rounded-lg"
      width="1280"
      height="720"
      :src="`/assets/img/${image}`"
      :alt="`${altText}`" /> -->
    </div>
    <div class="flex flex-row justify-between">
      <p
        v-once
        class="text-cameo-pink font-normal text-xs sm:text-sm lg:text-base">
        {{ description }}
      </p>
      <a
        v-if="linkText"
        v-once
        class="nav-text relative text-right cursor-pointer transition-all duration-300 text-melon text-base font-bold antialiased"
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
  name: "ProjectImageGallery",
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
<style lang="scss">
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
}

.nav-text:hover::before {
  transform: scaleX(1);
}
</style>
