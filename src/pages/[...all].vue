<template>
  <HomeButton />
  <div class="grid col-start-2 col-end-[-2] grid-cols-10">
    <div
      class="col-span-full flex justify-center items-center flex-col gap-2 lg:gap-8">
      <h1
        class="text-center w-full text-5xl sm:text-8xl lg:text-9xl font-medium text-white col-span-full sm:col-start-1 sm:col-end-[-2] font-['IBM_Plex_Mono'] selection:text-black selection:bg-white">
        404
      </h1>
      <h2
        class="lg:hidden inline-block word-text text-center w-full text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-6xl font-medium text-white col-span-full sm:col-start-1 sm:col-end-[-2] font-['IBM_Plex_Mono'] [&>span]:font-['IBM_Plex_Mono'] selection:text-black selection:bg-white">
        This is not the page you are looking for.
      </h2>
      <h2
        class="invisible lg:visible inline-block letter-text text-center w-full text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-6xl font-medium text-white col-span-full sm:col-start-1 sm:col-end-[-2] font-['IBM_Plex_Mono'] [&>span]:font-['IBM_Plex_Mono'] selection:text-black selection:bg-white">
        This is not the page you are looking for.
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "404",
  // Style the body, header and footer on load.
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#121212");
    document
      .querySelector(".navigation-overlay")
      .setAttribute("style", "background: #121212");
    document
      .querySelector(".page-footer")
      .setAttribute("style", "background: #121212");
  },
  mounted() {
    this.word();
    this.letter();
    // Style the text and background colors to brand colors.
    var logo = document.querySelectorAll(".fill-melon");
    for (var i = 0; i < logo.length; i++) {
      logo[i].setAttribute("style", "fill: #ffffff");
    }
    var melon = document.querySelectorAll(".text-melon");
    for (var i = 0; i < melon.length; i++) {
      melon[i].setAttribute(
        "style",
        "color: #ffffff; font-family: 'IBM Plex Mono'"
      );
    }
    var silk = document.querySelectorAll(".text-unbleached-silk");
    for (var i = 0; i < silk.length; i++) {
      silk[i].setAttribute(
        "style",
        "color: #ffffff; font-family: 'IBM Plex Mono'"
      );
    }
    var cameo = document.querySelectorAll(".text-cameo-pink");
    for (var i = 0; i < cameo.length; i++) {
      cameo[i].setAttribute(
        "style",
        "color: #ffffff; font-family: 'IBM Plex Mono'"
      );
    }
    var pastel = document.querySelectorAll(".text-pastel-pink");
    for (var i = 0; i < pastel.length; i++) {
      pastel[i].setAttribute(
        "style",
        "color: #ffffff; font-family: 'IBM Plex Mono'"
      );
    }
    var eggplant = document.querySelectorAll(".bg-eggplant");
    for (var i = 0; i < eggplant.length; i++) {
      eggplant[i].setAttribute(
        "style",
        "background: #ffffff; font-family: 'IBM Plex Mono'"
      );
    }
    document
      .querySelector(".navbar")
      .setAttribute(
        "style",
        "border-color: #ffffff; background-color: #333333"
      );
  },
  // Remove all the added styles, and return to default.
  beforeUnmount() {
    document.querySelector("body").setAttribute("style", "");
    document.querySelector(".navigation-overlay").setAttribute("style", "");
    document.querySelector(".page-footer").setAttribute("style", "");
    document.querySelector(".navbar").setAttribute("style", "");
    var logo = document.querySelectorAll(".fill-melon");
    for (var i = 0; i < logo.length; i++) {
      logo[i].setAttribute("style", "");
    }
    var melon = document.querySelectorAll(".text-melon");
    for (var i = 0; i < melon.length; i++) {
      melon[i].setAttribute("style", "");
    }
    var silk = document.querySelectorAll(".text-unbleached-silk");
    for (var i = 0; i < silk.length; i++) {
      silk[i].setAttribute("style", "");
    }
    var cameo = document.querySelectorAll(".text-cameo-pink");
    for (var i = 0; i < cameo.length; i++) {
      cameo[i].setAttribute("style", "");
    }
    var pastel = document.querySelectorAll(".text-pastel-pink");
    for (var i = 0; i < pastel.length; i++) {
      pastel[i].setAttribute("style", "");
    }
    var eggplant = document.querySelectorAll(".bg-eggplant");
    for (var i = 0; i < eggplant.length; i++) {
      eggplant[i].setAttribute("style", "");
    }
    // var nav = document.querySelectorAll(".nav-item");
    // for (var i = 0; i < nav.length; i++) {
    //   nav[i].setAttribute("style", "");
    // }
    // var burger = document.querySelectorAll(".burger");
    // for (var i = 0; i < burger.length; i++) {
    //   burger[i].setAttribute("style", "");
    // }
    // document.querySelector(".nav-menu").setAttribute("style", "");
  },
  methods: {
    word() {
      // Wrap every word in a span
      var textWrapperWord = document.querySelector(".word-text");
      textWrapperWord.innerHTML = textWrapperWord.textContent.replace(
        /\S+/g,
        "<span class='word'>$&</span>"
      );
      this.$anime.timeline({}).add({
        targets: ".word-text .word",
        translateY: [50, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutQuint",
        duration: 1000,
        delay: (el, i) => 300 + 25 * i,
      });
    },
    letter() {
      // Wrap every letter in a span
      var textWrapperLetter = document.querySelector(".letter-text");
      textWrapperLetter.innerHTML = textWrapperLetter.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );
      this.$anime.timeline({}).add({
        targets: ".letter-text .letter",
        translateY: [50, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutQuint",
        duration: 1000,
        delay: (el, i) => 300 + 12 * i,
      });
    },
  },
};
</script>
<style lang="scss">
// Display inline-block so word-animation works.
.word-text .word {
  display: inline-block;
  line-height: 1em;
}
.letter-text .letter {
  display: inline-block;
  line-height: 1em;
}
</style>
