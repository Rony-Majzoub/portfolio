<template>
  <div
    class="col-span-full lg:col-start-2 lg:col-end-[-2] max-lg:place-self-center max-lg:w-screen flex flex-col gap-2 animation-item">
    <div
      class="flex flex-col bg-eggplant max-w-full w-full lg:rounded-lg overflow-hidden group transition-all ease-in-out duration-300 shadow-md transform-gpu"
      :style="{ backgroundColor: bgColor }">
      <div class="flex flex-1 justify-center items-center p-8 sm:p-16">
        <!-- Video Element -->
        <div
          class="max-w-full max-h-full flex-auto rounded-lg overflow-hidden shadow-2xl shadow-[rgb(0,0,0)]/30 transition-all ease-in-out duration-300 transform-gpu">
          <!-- Sharp Final Video (Cloudinary) -->
          <video
            :src="`https://res.cloudinary.com/rony-majzoub/video/upload/c_scale,w_auto/q_auto,f_auto/${videoLink}`"
            :alt="`${altText}`"
            width="384"
            height="216"
            class="cld-responsive high-def relative object-contain w-full h-full text-[0]"
            :autoplay="autoplay"
            :controls="controls"
            :loop="loop"
            :muted="muted" />
        </div>
      </div>
    </div>
    <div class="flex flex-row justify-between max-lg:px-4">
      <p v-once class="text-cameo-pink font-normal text-sm lg:text-base">
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
  name: "ProjectVideoFull",
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
