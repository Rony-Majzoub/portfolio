<template>
  <section
    class="flex flex-col gap-4 max-lg:col-span-full max-w-[65ch] animation-item">
    <h2 class="font-bold text-3xl lg:text-5xl text-unbleached-silk">
      {{ title }}
    </h2>
    <p
      class="font-normal text-base lg:text-lg whitespace-pre-line text-melon max-w-prose">
      {{ description }}
    </p>
  </section>
</template>

<script>
export default {
  name: "ColumnHalf",
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
