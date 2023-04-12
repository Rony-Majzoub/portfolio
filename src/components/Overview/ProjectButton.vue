<template>
  <router-link
    class="transition-all ease-in-out font-bold text-sm tracking-widest uppercase border-2 border-pastel-pink !text-pastel-pink py-4 px-8 xl:text-lg whitespace-nowrap text-center rounded-full lg:hover:bg-unbleached-silk lg:hover:border-unbleached-silk lg:hover:!text-eggplant lg:hover:selection:bg-eggplant lg:hover:selection:text-unbleached-silk antialiased"
    :to="{ path: `/${link}` }">
    View {{ shortTitle }}
  </router-link>
</template>

<script>
export default {
  name: "ProjectButton",
  props: {
    shortTitle: {
      default: "",
      type: String,
    },
    link: {
      default: "",
      type: String,
    },
  },
};
</script>
