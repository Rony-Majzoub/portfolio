<template>
  <router-link
    class="cursor-pointer flex flex-col bg-eggplant aspect-[4/3] max-w-full w-full rounded-lg overflow-hidden group transition-all ease-in-out duration-300 shadow-md shadow-[#2f2730] transform-gpu"
    :to="{ path: `/${link}` }"
    :style="{ backgroundColor: bgColor }">
    <div
      class="flex flex-1 justify-center items-center p-6 pb-3 lg:p-10 lg:pb-6">
      <!-- Image Element -->
      <div
        class="max-h-full h-full relative flex-auto rounded-lg overflow-hidden group-hover:-translate-y-1 drop-shadow-xl group-hover:drop-shadow-[0_25px_25px_rgba(0,0,0,0.25)] transition-all ease-in-out duration-300 transform-gpu">
        <!-- Blurred Placeholder Image (Cloudinary) -->
        <img
          :data-src="`https://res.cloudinary.com/rony-majzoub/image/upload/c_scale,w_240/e_blur:1000,q_auto,f_auto/dpr_auto/${imageLink}`"
          :alt="`${title}`"
          :src="`/assets/img/${image}`"
          width="216"
          height="384"
          class="cld-responsive absolute inset-0 object-contain mx-auto w-auto h-full text-[0] rounded-md sm:rounded-[calc(2.16346vw-6.46154px)] lg:rounded-[.78125vw] overflow-hidden" />
        <!-- Sharp Final Image (Cloudinary) -->
        <img
          :data-src="`https://res.cloudinary.com/rony-majzoub/image/upload/c_scale,w_auto,q_auto,f_auto,fl_progressive/dpr_auto/${imageLink}`"
          :alt="`${title}`"
          :src="`/assets/img/${image}`"
          width="216"
          height="384"
          class="cld-responsive high-def absolute inset-0 object-contain mx-auto w-auto h-full text-[0] rounded-md sm:rounded-[calc(2.16346vw-6.46154px)] lg:rounded-[.78125vw] overflow-hidden border-2 xl:border-[3px] 3xl:border-4 4xl:border-[6px] 5xl:border-8 border-black" />
      </div>
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
  </router-link>
  <!-- <h2 class="hidden text-melon font-bold text-lg xl:text-xl z-10">
    {{ title }}
  </h2> -->
</template>

<script>
import cloudinary from "cloudinary-core/cloudinary-core-shrinkwrap.min.js";
export default {
  name: "FunCard",
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
