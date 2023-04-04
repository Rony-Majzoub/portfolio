<template>
  <router-link
    :to="{ path: `/${link}` }"
    class="relative w-full h-full cursor-pointer rounded-lg group">
    <div
      :style="{ backgroundColor: bgColor }"
      class="cursor-pointer rounded-lg w-full h-full group pt-[78%]"></div>
    <div class="absolute inset-0 w-full h-full flex flex-col">
      <!-- Image Element -->
      <div
        class="m-8 relative inset-0 flex-auto rounded-lg overflow-hidden group-hover:-translate-y-1 drop-shadow-xl group-hover:drop-shadow-[0_25px_25px_rgba(0,0,0,0.25)] transition-all ease-in-out duration-300 transform-gpu">
        <!-- Blurred Placeholder Image (Cloudinary) -->
        <img
          :data-src="`https://res.cloudinary.com/rony-majzoub/image/upload/c_scale,w_240/e_blur:1000,q_auto,f_auto/dpr_auto/${imageLink}`"
          :alt="`${title}`"
          :src="`/assets/img/${image}`"
          width="384"
          height="216"
          class="cld-responsive absolute inset-0 object-scale-down text-[0] mx-auto w-auto h-full rounded-lg overflow-hidden" />
        <!-- Sharp Final Image (Cloudinary) -->
        <img
          :data-src="`https://res.cloudinary.com/rony-majzoub/image/upload/c_scale,w_auto,q_auto,f_auto,fl_progressive/dpr_auto/${imageLink}`"
          :alt="`${title}`"
          :src="`/assets/img/${image}`"
          width="384"
          height="216"
          class="cld-responsive high-def absolute inset-0 object-scale-down mx-auto w-auto h-full text-[0] rounded-lg overflow-hidden" />
      </div>
      <!-- Text Element -->
      <div
        class="transition-all ease-in-out flex flex-row justify-between items-baseline pb-4 bottom-0 inset-x-0 text-left px-6">
        <h2
          class="text-melon font-bold text-lg xl:text-xl z-10"
          :style="{ color: titleColor }">
          {{ title }}
        </h2>
        <!-- <p
                class="text-pastel-pink font-semibold text-xs lg:text-sm tracking-widest uppercase antialiased z-10">
                {{ tag }}
              </p> -->
        <p
          class="sm:block hidden text-pastel-pink text-right font-semibold text-xs tracking-widest uppercase antialiased -mr-2 opacity-0 group-hover:opacity-100 group-hover:mr-3 transition-all ease-in-out duration-300"
          :style="{ color: subtitleColor }">
          View case
        </p>
      </div>
    </div>
  </router-link>
  <!-- <h2 class="hidden text-melon font-bold text-lg xl:text-xl z-10">
    {{ title }}
  </h2> -->
</template>

<script>
import cloudinary from "cloudinary-core/cloudinary-core-shrinkwrap.min.js";
export default {
  name: "FunCardTest",
  props: {
    title: {
      default: "Project Title",
      type: String,
    },
    tag: {
      default: "Project Tag",
      type: String,
    },
    image: {
      default: "recypie.png",
      type: String,
    },
    imageLink: {
      default: "recypie.png",
      type: String,
    },
    link: {
      default: "",
      type: String,
    },
    bgColor: {
      default: "var(--eggplant)",
      type: String,
    },
    titleColor: {
      default: "var(--melon)",
      type: String,
    },
    subtitleColor: {
      default: "var(--pastel-pink)",
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
