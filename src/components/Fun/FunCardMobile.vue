<template>
  <router-link
    class="cursor-pointer flex flex-col items-center bg-eggplant aspect-[4/3] w-full h-full rounded-lg overflow-hidden group transition-all ease-in-out duration-300 shadow-md shadow-[#2f2730] transform-gpu"
    :to="{ path: `/${link}` }"
    :style="{ backgroundColor: bgColor }">
    <div
      class="flex justify-center flex-1 min-h-0 min-w-0 h-auto max-w-fit max-h-fit p-6 pb-3 lg:p-10 lg:pb-6">
      <!-- Image Element -->
      <div
        class="flex justify-center rounded-lg lg:group-hover:-translate-y-1 transition-all ease-in-out duration-300 transform-gpu">
        <!-- Blurred Placeholder Image (Cloudinary) -->
        <img
          :data-src="`https://res.cloudinary.com/rony-majzoub/image/upload/c_scale,w_240/e_blur:1000,q_auto,f_auto/dpr_auto/${imageLink}`"
          :alt="`${title}`"
          :src="`/assets/img/${image}`"
          width="432"
          height="768"
          class="cld-responsive object-contain relative inset-0 text-[0] w-auto h-full rounded-md sm:rounded-[calc(2.16346vw-6.46154px)] lg:rounded-[.78125vw] overflow-hidden lg:group-hover:shadow-2xl shadow-xl lg:group-hover:shadow-[rgb(0,0,0)]/40 transition-all ease-in-out duration-300"
          :class="{
            [`border-2 xl:border-[3px] 3xl:border-4 4xl:border-[6px] 5xl:border-8 border-transparent`]:
              deviceBorder,
          }" />
        <!-- Sharp Final Image (Cloudinary) -->
        <img
          :data-src="`https://res.cloudinary.com/rony-majzoub/image/upload/c_scale,w_auto,q_auto,f_auto,fl_progressive/dpr_auto/${imageLink}`"
          :alt="`${title}`"
          :src="`/assets/img/${image}`"
          width="432"
          height="768"
          class="cld-responsive high-def object-contain w-auto mx-auto h-full absolute inset-0 text-[0] rounded-md sm:rounded-[calc(2.16346vw-6.46154px)] lg:rounded-[.78125vw] overflow-hidden"
          :class="{
            [`border-2 xl:border-[3px] 3xl:border-4 4xl:border-[6px] 5xl:border-8`]:
              deviceBorder,
          }"
          :style="{ borderColor: deviceColor }" />
      </div>
    </div>
    <!-- Text Element -->
    <div
      class="transition-all ease-in-out flex flex-row justify-between items-baseline self-stretch pb-4 bottom-0 inset-x-0 text-left px-6">
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
        class="sm:block hidden text-pastel-pink text-right font-semibold text-xs tracking-widest uppercase antialiased -mr-2 opacity-0 lg:group-hover:opacity-100 lg:group-hover:mr-3 transition-all ease-in-out duration-300"
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
    deviceColor: {
      default: "#000000",
      type: String,
    },
    deviceBorder: {
      default: false,
      type: Boolean,
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
