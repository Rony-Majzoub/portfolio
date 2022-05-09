<template>
  <div>
    <h1
      class="intro-text max-w-4xl text-4xl md:text-6xl lg:text-7xl 3xl:text-8xl 4xl:text-9xl font-bold text-unbleached-silk text-left tracking-tight antialiased">
      <!-- My name is Rony Majzoub. -->
      <span class="word">My&nbsp;</span>
      <span class="word">name&nbsp;</span>
      <span class="word">is&nbsp;</span>
      <span class="word text-melon">Rony&nbsp;</span>
      <span class="word text-melon">Majzoub.&nbsp;</span>
      <hr class="basis-ful w-full h-0 m-0 border-0" />

      <span class="word whitespace-nowrap">I'm&nbsp;</span>
      <span class="word whitespace-nowrap">a&nbsp;</span>
      <hr class="basis-ful w-full h-0 m-0 border-0 block sm:hidden" />

      <span
        class="word whitespace-nowrap text-melon underline decoration-4 md:decoration-8">
        {{ role[0] }}.
      </span>
      <br />
      <!-- I'm a
      <u>{{ role[0] }}.</u> -->
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
        // "product designer",
        "motion designer",
        "quick learner",
        "problem solver",
      ],
    };
  },
  mounted() {
    const targets = this.$el;
    // Wrap every letter in a span
    // var textWrapper = document.querySelector(".ml13");
    // textWrapper.innerHTML = textWrapper.textContent.replace(
    //   /\S/g,
    //   "<span class='letter'>$&</span>"
    // );

    this.$anime.timeline({}).add({
      targets: ".intro-text .word",
      translateY: [100, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutQuint",
      duration: 1000,
      delay: (el, i) => 300 + 50 * i,
    });
    window.setInterval(() => {
      this.pollPerson();
      // The time that each role stays on screen in milliseconds.
    }, 400);
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
  height: calc(100vh - 15rem);
}
u::selection {
  color: var(--eggplant);
}
.intro-text .word {
  display: inline-block;
  line-height: 1em;
}
</style>
