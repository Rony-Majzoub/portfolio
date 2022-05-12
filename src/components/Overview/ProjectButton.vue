<template>
  <button
    class="transition-all ease-in-out font-bold text-sm tracking-widest uppercase border-2 border-pastel-pink text-pastel-pink py-4 px-8 xl:text-lg whitespace-nowrap text-center rounded-full hover:bg-unbleached-silk hover:border-unbleached-silk hover:text-eggplant antialiased">
    View {{ shortTitle }}
  </button>
</template>

<script>
export default {
  name: "ProjectButton",
  props: {
    shortTitle: {
      default: "",
      type: String,
    },
  },
};
</script>
