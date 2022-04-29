<template>
  <div
    class="transition-all ease-in-out font-medium text-xs tracking-widest uppercase border-2 border-pastel-pink text-pastel-pink py-1.5 px-3 whitespace-nowrap text-center rounded-full hover:bg-unbleached-silk hover:border-unbleached-silk hover:text-eggplant hover:selection:bg-eggplant hover:selection:text-unbleached-silk">
    {{ skill }}
  </div>
</template>

<script>
export default {
  name: "AboutPill",
  props: {
    skill: {
      default: "",
      type: String,
    },
  },
};
</script>
