<template>
  <div class="col-span-full flex flex-col gap-6 pb-10 text-center">
    <p
      class="text-pastel-pink tracking-widest font-semibold text-base uppercase antialiased">
      {{ info }}
    </p>
    <h1 class="text-6xl sm:text-7xl font-bold text-unbleached-silk">
      {{ title }}
    </h1>
    <h2 class="text-melon text-xl font-semibold">{{ brief }}</h2>
  </div>
</template>

<script>
export default {
  name: "ProjectTitle",
  props: {
    info: {
      default: "",
      type: String,
    },
    title: {
      default: "",
      type: String,
    },
    brief: {
      default: "",
      type: String,
    },
  },
};
</script>
