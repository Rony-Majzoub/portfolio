<template>
  <section
    class="flex flex-col gap-4 col-span-full lg:col-start-auto lg:col-end-[span_6] max-w-[65ch] animation-item">
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
  name: "ColumnRight",
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
