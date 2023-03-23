<template>
  <div
    class="lg:col-start-auto lg:col-end-[span_6] col-span-full flex flex-col gap-2">
    <div
      class="flex flex-col bg-eggplant aspect-square max-w-full w-full rounded-lg overflow-hidden group transition-all ease-in-out duration-300 shadow-md transform-gpu"
      :style="{ backgroundColor: bgColor }">
      <div class="flex flex-1 justify-center items-center p-8">
        <!-- Image Element -->
        <div
          class="max-w-full max-h-full flex-auto rounded-lg overflow-hidden shadow-2xl shadow-[rgb(0,0,0)]/30 transition-all ease-in-out duration-300 transform-gpu">
          <!-- Blurred Placeholder Image (Cloudinary) -->
          <img
            :data-src="`https://res.cloudinary.com/rony-majzoub/image/upload/c_scale,w_240/e_blur:1000,q_auto,f_auto/dpr_auto/${imageLink}`"
            :alt="`${altText}`"
            :src="`/assets/img/${image}`"
            width="384"
            height="216"
            class="cld-responsive relative object-contain w-full h-full text-[0]" />
          <!-- Sharp Final Image (Cloudinary) -->
          <img
            :data-src="`https://res.cloudinary.com/rony-majzoub/image/upload/c_scale,w_auto,q_auto,f_auto,fl_progressive/dpr_auto/${imageLink}`"
            :alt="`${altText}`"
            :src="`/assets/img/${image}`"
            width="384"
            height="216"
            class="cld-responsive high-def absolute top-0 left-0 object-contain w-full h-full text-[0]" />
        </div>
      </div>
    </div>
    <div class="flex flex-row justify-between">
      <p class="text-cameo-pink font-medium text-sm lg:text-base">
        {{ description }}
      </p>
      <a
        v-if="linkText"
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
  name: "ProjectImageHalf",
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
