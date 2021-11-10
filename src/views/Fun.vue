<template>
  <div class="fun">
    <h1>Here is a showcase of some of my smaller and fun projects.</h1>
  </div>
</template>

<style lang="scss" scoped>
.fun {
  grid-column: 2/-2;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: 1fr;
}
h1 {
  text-align: left;
  grid-column: 1 / -2;
}
</style>