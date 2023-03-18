<template>
  <div class="h-full flex items-center justify-center">
    <h1
      class="intro-text max-w-4xl 2xl:max-w-6xl 3xl:max-w-6xl 5xl:max-w-[100rem] text-4xl md:text-6xl lg:text-7xl 5xl:text-9xl font-bold !text-unbleached-silk text-left tracking-tight antialiased">
      <!-- My name is Rony Majzoub. -->
      <span class="word !text-melon">My&nbsp;</span>
      <span class="word !text-melon">name&nbsp;</span>
      <span class="word !text-melon">is&nbsp;</span>
      <span class="word !text-unbleached-silk">Rony&nbsp;</span>
      <span class="word !text-unbleached-silk">Majzoub.&nbsp;</span>
      <hr class="basis-ful w-full h-0 m-0 border-0" />

      <span class="word !text-melon whitespace-nowrap">I'm&nbsp;</span>
      <span class="word !text-melon whitespace-nowrap">a&nbsp;</span>
      <hr class="basis-ful w-full h-0 m-0 border-0 block sm:hidden" />
      <!-- <div
        class="role-box word min-w-fit inline-block text-justify bg-unbleached-silk"
        :style="'width: ' + role[0].width + '%'">
        <span
          class="word role whitespace-nowrap selection:text-unbleached-silk selection:bg-eggplant !text-eggplant p-4 decoration-4 md:decoration-8 transform-gpu">
          {{ role[0].name }}.
        </span>
      </div> -->
      <span
        :style="'width: ' + role[0].width + '%'"
        class="word role max-[880px]:!w-fit whitespace-nowrap selection:text-unbleached-silk selection:bg-eggplant !text-eggplant bg-unbleached-silk p-4 decoration-4 md:decoration-8 transform-gpu">
        {{ role[0].name }}.
      </span>
      <br />
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
        { name: "digital designer", width: "63" },
        { name: "UI designer", width: "48" },
        { name: "UX designer", width: "52" },
        { name: "web developer", width: "62" },
        { name: "3D artist", width: "38" },
        // "product designer",
        { name: "motion designer", width: "67" },
        { name: "quick learner", width: "55" },
        { name: "problem solver", width: "62" },
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
    }, 600);
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
u::selection {
  color: var(--eggplant);
}
// Display inline-block so word-animation works.
.intro-text .word {
  display: inline-block;
  line-height: 1.2em;
}
.role,
.role-box {
  transition-property: width;
  transition-timing-function: cubic-bezier(0, 0.8, 0.2, 1);
  transition-duration: 300ms;
}
</style>
