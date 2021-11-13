<template>
  <div class="about">
    <h1>I am a designer based in Gothenburg. My goal is to create solutions to problems we all face every day.</h1>
  </div>
</template>

<style lang="scss" scoped>
.about {
  grid-column: 2/-2;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
}
h1 {
  color: var(--melon);
  text-align: left;
  grid-column: 1/-2;
}
</style>