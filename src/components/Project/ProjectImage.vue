<template>
  <div
    class="lg:col-start-2 lg:col-end-[-2] col-span-full relative aspect-video">
    <img
      class="object-cover object-[center_60%] w-full max-h-full rounded-lg"
      :src="`/assets/img/${image}`"
      :alt="`${altText}`" />
  </div>
</template>
<script>
export default {
  name: "ProjectImage",
  props: {
    image: {
      default: "",
      type: String,
    },
    altText: {
      default: "",
      type: String,
    },
  },
};
</script>
