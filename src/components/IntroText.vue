<template>
  <div class="h-full flex items-center justify-center">
    <h1
      class="intro-text max-w-4xl 2xl:max-w-6xl 3xl:max-w-7xl 5xl:max-w-[100rem] text-[8vw] leading-8 sm:text-[6vw] lg:text-[5vw] xl:text-[4vw] 5xl:text-9xl font-extrabold !text-unbleached-silk text-left tracking-tight antialiased">
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
      <!-- Mobile Variant (extra width) -->
      <!-- The width dynamically changes based on the width-percentage property given to each role. -->
      <span
        :style="'width: ' + role[role.length - 1].mobileWidth + '%'"
        class="sm:!hidden word role whitespace-nowrap selection:text-unbleached-silk selection:bg-eggplant !text-eggplant bg-unbleached-silk p-4 pr-16 decoration-4 md:decoration-8 transform-gpu">
        {{ role[role.length - 1].name }}.
      </span>
      <!-- Desktop Variant (normal width) -->
      <!-- The width dynamically changes based on the width-percentage property given to each role. -->
      <span
        :style="'width: ' + role[role.length - 1].desktopWidth + '%'"
        class="!hidden sm:!inline-block word role whitespace-nowrap selection:text-unbleached-silk selection:bg-eggplant !text-eggplant bg-unbleached-silk p-4 5xl:p-8 decoration-4 md:decoration-8 transform-gpu">
        {{ role[role.length - 1].name }}.
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
      // The different roles to choose from. The width property is used as a percentage.
      role: [
        { name: "digital designer", desktopWidth: "63", mobileWidth: "80" },
        { name: "UI designer", desktopWidth: "48", mobileWidth: "63" },
        { name: "UX designer", desktopWidth: "52", mobileWidth: "67" },
        { name: "motion designer", desktopWidth: "67", mobileWidth: "83" },
        { name: "web developer", desktopWidth: "62", mobileWidth: "78" },
        { name: "3D artist", desktopWidth: "38", mobileWidth: "50" },
        // "product designer",
        { name: "quick learner", desktopWidth: "55", mobileWidth: "70" },
        { name: "problem solver", desktopWidth: "62", mobileWidth: "79" },
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
      delay: this.$anime.stagger(50, { start: 300 }),
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
// The transition for the text-box with a dynamic width.
.role,
.role-box {
  transition-property: width;
  transition-timing-function: cubic-bezier(0, 0.8, 0.2, 1);
  transition-duration: 300ms;
}
</style>
