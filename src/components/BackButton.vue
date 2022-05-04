<template>
  <a
    class="hidden whitespace-nowrap lg:inline cursor-pointer transition-all duration-200 text-unbleached-silk underline underline-offset-2 hover:underline-offset-4 hover:decoration-inherit decoration-transparent decoration-2 text-lg font-medium text-right tracking-wide antialiased"
    @click="$router.back()">
    &larr; Go Back
  </a>
</template>
<script>
export default {
  name: "BackButton",
};
</script>
