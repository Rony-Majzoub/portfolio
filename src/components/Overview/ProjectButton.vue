<template>
  <button
    class="transition-all ease-in-out font-medium text-sm tracking-widest uppercase border-2 border-pastel-pink text-pastel-pink py-4 px-8 xl:text-lg whitespace-nowrap text-center rounded-full hover:bg-unbleached-silk hover:border-unbleached-silk hover:text-eggplant">
    Read More
  </button>
</template>

<script>
export default {
  name: "ProjectButton",
  props: {
    link: {
      default: "",
      type: String,
    },
  },
};
</script>
