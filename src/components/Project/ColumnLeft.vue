<template>
  <section
    class="flex flex-col gap-4 col-span-full lg:col-start-2 lg:col-end-[span_5] max-w-[60ch]">
    <h2 class="font-bold text-3xl lg:text-5xl text-unbleached-silk">
      {{ title }}
    </h2>
    <p
      class="font-medium text-base lg:text-lg whitespace-pre-line text-melon max-w-prose">
      {{ description }}
    </p>
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
