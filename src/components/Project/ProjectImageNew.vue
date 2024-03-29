<template>
  <div
    class="max-lg:col-span-full max-lg:place-self-center max-lg:w-screen flex flex-col gap-2 animation-item"
    :class="{ 'single-card-columns': !dual }">
    <div
      v-once
      class="single-card-ratio flex flex-col items-center bg-eggplant aspect-video w-full h-auto lg:rounded-lg overflow-hidden shadow-md transition-all ease-in-out duration-300 transform-gpu"
      :class="{ 'dual-card-ratio': dual }"
      :style="{ backgroundColor: bgColor, aspectRatio: contentRatio }">
      <div
        class="relative flex justify-center flex-1 min-h-0 min-w-full h-auto max-w-fit p-8">
        <!-- Image Element -->
        <div
          class="flex justify-center items-center w-full rounded-lg transition-all ease-in-out duration-300 transform-gpu">
          <!-- Sharp Final Image (Cloudinary) -->
          <img
            v-once
            :data-src="`https://res.cloudinary.com/rony-majzoub/image/upload/c_scale,w_auto,q_auto:best,f_auto,fl_progressive/dpr_auto/${imageLink}`"
            :src="`/assets/img/${image}`"
            :alt="`${altText}`"
            width="432"
            height="768"
            class="cld-responsive high-def object-contain w-auto max-w-full h-auto min-h-auto max-h-full relative text-[0] rounded-md sm:rounded-[calc(2.16346vw-6.46154px)] lg:rounded-[.78125vw] shadow-2xl shadow-[rgb(0,0,0)]/30 overflow-hidden"
            :class="{ 'not-rounded': notRounded }" />
        </div>
      </div>
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
  name: "ProjectImageNew",
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
      default: "1 / 1",
      type: String,
    },
    dual: {
      default: false,
      type: Boolean,
    },
    notRounded: {
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

.single-card-ratio {
  aspect-ratio: 16 / 9;
  @media (max-width: 1024px) {
    aspect-ratio: auto;
  }
}
.single-card-columns {
  grid-column: 2 / -2;
}
.dual-card-ratio {
  aspect-ratio: 1 / 1;
  @media (max-width: 1024px) {
    aspect-ratio: auto;
  }
}
.not-rounded {
  border-radius: 0px;
}
</style>
