<template>
  <div
    class="cursor-pointer relative h-64 max-w-full w-full rounded-lg overflow-hidden group transition-all ease-in-out duration-300 shadow-md hover:-translate-y-1 transform-gpu"
    @click="$router.push(`/${link}`)">
    <!-- Image Element -->
    <!-- Blurred Placeholder Image (Cloudinary) -->
    <img
      :data-src="`https://res.cloudinary.com/rony-majzoub/image/upload/c_scale,w_480/e_blur:1000,q_auto,f_auto/dpr_auto/${imageLink}`"
      :alt="`${title}`"
      width="384"
      height="256"
      class="cld-responsive absolute object-cover w-full h-full text-[0] bg-eggplant" />
    <!-- Sharp Final Image (Cloudinary) -->
    <img
      :data-src="`https://res.cloudinary.com/rony-majzoub/image/upload/c_scale,w_auto,q_auto,f_auto,fl_progressive/dpr_auto/${imageLink}`"
      :alt="`${title}`"
      width="384"
      height="256"
      class="cld-responsive high-def absolute object-cover w-full h-full text-[0]" />
    <!-- <img
      :src="`/assets/img/${image}`"
      :alt="`${title}`"
      width="384"
      height="256"
      class="object-cover w-full h-full text-[0]" /> -->
    <!-- Hover Element -->
    <div
      :title="`Explore ${title}`"
      class="transition-all ease-in-out absolute flex flex-col gap-1 justify-end pb-4 w-full h-full bottom-0 inset-x-0 text-center lg:text-left lg:pl-4 bg-gradient-to-t from-gradient1 to-gradient2 before:bg-eggplant before:opacity-0 before:border-4 before:content-[attr(title)] before:text-center before:flex before:justify-center before:items-center before:text-2xl before:underline before:underline-offset-8 before:decoration-4 before:normal-case before:antialiased before:text-melon before:font-bold before:border-pastel-pink before:rounded-lg group-hover:before:opacity-100 before:left-0 before:top-0 before:w-full before:h-full before:transition-opacity before:ease-in-out before:absolute">
      <h2 class="text-melon font-bold text-2xl lg:text-4xl z-10">
        {{ title }}
      </h2>
      <p
        class="text-pastel-pink font-semibold text-xs lg:text-sm tracking-widest uppercase antialiased z-10">
        {{ tag }}
      </p>
    </div>
  </div>
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
