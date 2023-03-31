<template>
  <figure
    class="relative lg:flex-row flex flex-col bg-eggplant rounded-xl lg:p-0 col-start-1 col-end-[-1] sm:col-start-2 sm:col-end-[-2] lg:min-h-128 lg:h-fit w-full max-w-6xl transition-all ease-in-out duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#2d1f2e] transform-gpu">
    <!-- Image Container -->
    <div
      class="relative overflow-hidden w-full lg:w-7/12 xl:w-4/12 h-96 lg:h-auto lg:rounded-none lg:rounded-l-xl rounded-t-xl">
      <!-- <img
        class="object-cover object-[center_20%] w-full h-96 lg:h-full text-[0]"
        width="384"
        height="552"
        src="/assets/pfp.jpg"
        alt="Profile Picture" /> -->
      <!-- Blurred Placeholder Image (Cloudinary) -->
      <img
        :data-src="`https://res.cloudinary.com/rony-majzoub/image/upload/c_scale,w_480/e_blur:1000,q_auto,f_auto/dpr_auto/${imageLink}`"
        width="384"
        height="552"
        src="/assets/pfp.jpg"
        alt="Rony Majzoub Picture Low-Resolution"
        class="cld-responsive absolute object-cover sm:object-scale-down lg:object-cover object-[center_20%] w-full h-96 lg:h-full text-[0] bg-[#070707]" />
      <!-- Sharp Final Image (Cloudinary) -->
      <img
        :data-src="`https://res.cloudinary.com/rony-majzoub/image/upload/c_scale,w_auto,q_auto,f_auto,fl_progressive/dpr_3.0/${imageLink}`"
        width="384"
        height="552"
        src="/assets/pfp.jpg"
        alt="Rony Majzoub Picture High-Resolution"
        class="cld-responsive high-def absolute object-cover sm:object-scale-down lg:object-cover object-[center_20%] w-full h-96 lg:h-full text-[0]" />
    </div>
    <div
      class="pt-6 p-8 text-left max-lg:w-full lg:mb-0 gap-4 flex flex-col justify-between h-full max-w-prose">
      <figcaption class="space-y-2 lg:space-y-4">
        <div
          class="text-pastel-pink font-semibold text-xs lg:text-sm tracking-widest uppercase antialiased">
          About Me
        </div>
        <h1
          class="about-text text-unbleached-silk font-extrabold text-5xl lg:text-6xl antialiased">
          Rony Majzoub
        </h1>
      </figcaption>
      <blockquote>
        <p class="text-base lg:text-lg font-base text-melon max-w-prose">
          I'm a multidisciplinary digital designer, who loves to design visual
          prototypes for apps & websites, but also code them too!
          <br />
          I've got a knack for animating things, as well as messing about with
          3D-projects and dissect the behind-the-scenes for my favorite
          videogames in my spare time.
        </p>
      </blockquote>
      <footer class="flex flex-col gap-4 pt-4 lg:pt-8">
        <h2
          class="text-unbleached-silk font-bold text-lg lg:text-xl tracking-wider uppercase antialiased">
          My Interests
        </h2>
        <div class="flex flex-row flex-wrap gap-4">
          <AboutPill skill="Digital Design" />
          <AboutPill skill="UX/UI Design" />
          <AboutPill skill="Front-end Development" />
          <AboutPill skill="Animation" />
          <AboutPill skill="Web Design" />
          <AboutPill skill="3D Art" />
          <AboutPill skill="Video Games" />
        </div>
      </footer>
    </div>
  </figure>
</template>

<script>
// import AboutPill from "@/components/About/AboutPill.vue";
import cloudinary from "cloudinary-core/cloudinary-core-shrinkwrap.min.js";

export default {
  name: "AboutCard",
  // components: {
  //   AboutPill,
  // },
  props: {
    imageLink: {
      default: "v1653220647/portfolio/pfp_new.jpg",
      type: String,
    },
  },
  mounted() {
    function myBreakpoints(width) {
      // width - the current width of the containing element
      return 10 * Math.ceil(width / 10);
    }
    var cl = cloudinary.Cloudinary.new({ cloud_name: "rony-majzoub" });
    cl.config({
      breakpoints: myBreakpoints,
      responsive_use_breakpoints: "resize",
    });
    cl.responsive();
    // Get the high-res image and hide it initially.
    const images = document.getElementsByClassName("high-def");
    for (let image of images) {
      image.addEventListener("load", fadeImg);
      image.style.opacity = "0";
    }
    // Fade in high-res image on-load.
    function fadeImg() {
      this.style.transition = "opacity 1s";
      this.style.opacity = "1";
    }
    // Wrap every word in a span
    var textWrapper = document.querySelector(".about-text");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S+/g,
      "<span class='word'>$&</span>"
    );
    this.$anime.timeline({}).add({
      targets: ".about-text .word",
      translateY: [25, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutQuint",
      duration: 1000,
      delay: (el, i) => 300 + 25 * i,
    });
  },
};
</script>
<style lang="scss">
// Display inline-block so word-animation works.
.about-text .word {
  display: inline-block;
  line-height: 1em;
}
</style>
