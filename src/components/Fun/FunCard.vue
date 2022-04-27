<template>
  <div class="cursor-pointer relative w-full h-64 rounded-lg overflow-hidden group transition-all ease-in-out" @click="$router.push(`/${link}`)">
    <img :src="`/assets/img/${image}`" :alt="`${title}`" class="object-cover w-full h-full" />
    <div class="transition-all ease-in-out absolute flex flex-col gap-1 lg:gap-2 justify-end pb-4 w-full h-full bottom-0 inset-x-0 text-center lg:text-left lg:pl-4 bg-gradient-to-t from-gradient1 to-gradient2 before:bg-eggplant before:opacity-0 before:border-4 before:content-['Visit_Project'] before:text-center before:flex before:justify-center before:items-center before:text-3xl before:underline before:underline-offset-8 before:decoration-4 before:normal-case before:antialiased before:text-melon before:font-medium before:border-pastel-pink before:rounded-lg group-hover:before:opacity-100 before:left-0 before:top-0 before:w-full before:h-full before:transition-opacity before:ease-in-out before:absolute">
      <h2 class="text-melon font-medium text-2xl lg:text-4xl z-10">{{ title }}</h2>
      <p class="text-pastel-pink font-normal text-xs lg:text-sm tracking-widest uppercase antialiased z-10">{{ tag }}</p>
    </div>
  </div>
</template>

<script>
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
    link: {
      default: "",
      type: String,
    },
  },
};
</script>
