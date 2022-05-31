<template>
  <div class="lg:col-start-2 lg:col-end-[-2] col-span-full flex flex-col gap-2">
    <div class="relative aspect-video rounded-lg bg-eggplant">
      <!-- Sharp Final Video (Cloudinary) -->
      <video
        :data-src="`https://res.cloudinary.com/rony-majzoub/video/upload/${videoLink}`"
        :src="`/assets/img/${video}`"
        :alt="`${altText}`"
        class="cld-responsive high-def absolute object-cover object-[center_60%] w-full h-full rounded-lg text-[0]"
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
        class="text-right cursor-pointer transition-all duration-200 text-melon underline underline-offset-2 hover:underline-offset-4 hover:decoration-inherit decoration-transparent decoration-2 text-base font-bold tracking-wide antialiased"
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
  },
  mounted() {
    var cl = cloudinary.Cloudinary.new({ cloud_name: "rony-majzoub" });
    cl.responsive();
  },
};
</script>
