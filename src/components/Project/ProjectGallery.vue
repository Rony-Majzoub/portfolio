<template>
  <div class="lg:col-start-1 lg:col-end-[-1] col-span-full flex flex-col gap-2">
    <div class="col-span-full place-self-start pt-8">
      <h2 class="text-3xl lg:text-5xl font-bold text-unbleached-silk">
        {{ title }}
      </h2>
      <p class="text-melon text-base sm:text-lg font-medium">
        {{ description }}
      </p>
    </div>
    <div
      class="snap-x snap-mandatory flex flex-row items-center overflow-x-scroll w-full h-full gap-4 p-2 lg:gap-8 lg:p-4 rounded-lg bg-eggplant">
      <ProjectImage
        class="w-[80%] snap-center shrink-0"
        image="smoove.jpg"
        image-link="v1652044734/portfolio/smoove/smoove_road.jpg"
        alt-text="Smoove" />
      <ProjectImage
        class="w-[80%] snap-center shrink-0"
        image="smoove.jpg"
        image-link="v1652863280/portfolio/smoove/smoove_helmet.png"
        alt-text="Smoove" />
      <ProjectImage
        class="w-[80%] snap-center shrink-0"
        image="smoove.jpg"
        image-link="v1652863281/portfolio/smoove/smoove_studio.png"
        alt-text="Smoove" />
      <ProjectImage
        class="w-[80%] snap-center shrink-0"
        image="smoove.jpg"
        image-link="v1652863280/portfolio/smoove/smoove_watch.png"
        alt-text="Smoove" />
      <ProjectImage
        class="w-[80%] snap-center shrink-0"
        image="smoove.jpg"
        image-link="v1652863376/portfolio/smoove/smoove_wheel.png"
        alt-text="Smoove" />
      <ProjectImage
        class="w-[80%] snap-center shrink-0"
        image="smoove.jpg"
        image-link="v1652863280/portfolio/smoove/smoove_field.png"
        alt-text="Smoove" />
    </div>
    <!-- <div class="flex flex-row justify-between">
      <p class="text-melon text-lg font-semibold">
        {{ description }}
      </p>
      <a
        v-if="linkText"
        class="text-right cursor-pointer transition-all duration-200 text-melon underline underline-offset-2 hover:underline-offset-4 hover:decoration-inherit decoration-transparent decoration-2 text-base font-bold tracking-wide antialiased"
        :href="link"
        target="_blank">
        {{ linkText }} &rarr;
      </a>
    </div> -->
  </div>
</template>
<script>
import cloudinary from "cloudinary-core/cloudinary-core-shrinkwrap.min.js";
import ProjectImage from "@/components/Project/ProjectImage.vue";

export default {
  name: "ProjectGallery",
  components: {
    ProjectImage,
  },
  props: {
    image: {
      default: "",
      type: String,
    },
    title: {
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
