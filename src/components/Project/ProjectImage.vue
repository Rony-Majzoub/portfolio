c
<template>
  <div
    class="lg:col-start-2 lg:col-end-[-2] col-span-full relative aspect-video rounded-lg bg-eggplant">
    <!-- Blurred Placeholder Image (Cloudinary) -->
    <img
      :data-src="`https://res.cloudinary.com/rony-majzoub/image/upload/c_scale,w_480/e_blur:1000,q_auto,f_auto/dpr_auto/${imageLink}`"
      :src="`/assets/img/${image}`"
      :alt="`${altText}`"
      class="cld-responsive absolute object-cover object-[center_60%] w-full max-h-full rounded-lg" />
    <!-- Sharp Final Image (Cloudinary) -->
    <img
      :data-src="`https://res.cloudinary.com/rony-majzoub/image/upload/c_scale,w_auto,q_auto,f_auto,fl_progressive/dpr_auto/${imageLink}`"
      :src="`/assets/img/${image}`"
      :alt="`${altText}`"
      class="cld-responsive high-def absolute object-cover object-[center_60%] w-full max-h-full rounded-lg" />
    <!-- <img
      class="object-cover object-[center_60%] w-full max-h-full rounded-lg"
      width="1280"
      height="720"
      :src="`/assets/img/${image}`"
      :alt="`${altText}`" /> -->
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
