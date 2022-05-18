<template>
  <div class="col-span-full grid grid-cols-10 px-4 sm:px-0 place-items-center">
    <AboutCard />
  </div>
</template>

<script>
import AboutCard from "@/components/About/AboutCard.vue";

export default {
  name: "About",
  components: {
    AboutCard,
  },
};
</script>
