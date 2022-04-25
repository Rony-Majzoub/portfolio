<template>
  <div>
    <h1 class="text-7xl font-medium">
      My name is Rony Majzoub.
      <br />
      I'm a
      <u>{{ role[0] }}.</u>
    </h1>
  </div>
</template>

<script>
// The script responsible for showing different roles.
export default {
  name: "IntroText",
  data() {
    return {
      // The different roles to choose from.
      role: [
        "digital designer",
        "UI designer",
        "UX designer",
        "web developer",
        "3D artist",
        "product designer",
        "motion designer",
        "quick learner",
        "problem solver",
      ],
    };
  },
  // The time that each role stays on screen in milliseconds.
  mounted() {
    window.setInterval(() => {
      this.pollPerson();
    }, 350);
  },
  methods: {
    pollPerson() {
      const first = this.role.shift();
      this.role = this.role.concat(first);
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  height: calc(100vh - 20rem);
}
h1 {
  text-align: center;
}
u::selection {
  color: var(--eggplant);
}
</style>
