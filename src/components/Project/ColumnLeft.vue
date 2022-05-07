<template>
  <section
    class="flex flex-col gap-4 col-span-full lg:col-start-2 lg:col-end-[span_5]">
    <h2 class="font-bold text-3xl lg:text-5xl text-unbleached-silk">
      {{ title }}
    </h2>
    <p class="font-medium text-base text-melon">{{ description }}</p>
  </section>
</template>

<script>
export default {
  name: "ColumnLeft",
  props: {
    title: {
      default: "",
      type: String,
    },
    description: {
      default: "",
      type: String,
    },
  },
};
</script>
