<template>
  <BackButton />
  <div
    class="grid grid-cols-10 col-start-2 col-end-[-2] max-lg:justify-items-center">
    <ProjectTitle
      info="2023 — UI/UX & Motion Design"
      title="Pepsi Max Calculator"
      brief="Create and design an advanced calculator for Carlsberg Sweden, based on an internal spreadsheet from the client." />
    <ProjectImage
      class="mb-8"
      image="carlsberg_calculator_screenshot2.png"
      image-link="v1690137928/portfolio/carlsberg/carlsberg_calculator_screenshot2.png"
      alt-text="Carlsberg Calculator Screenshot"
      bg-color="#000000"
      :contain="true" />
    <ProjectTags client="Carlsberg Sweden" duration="2 months" />
    <main class="grid col-span-full grid-cols-10 gap-y-8 lg:gap-y-16">
      <ColumnLeft
        title="Background"
        description="Carlsberg Sweden's sales team required an innovative and user-friendly tool to visualize and compare key differences with competitors across various devices." />
      <ColumnLeft
        title="The problem"
        description="The client had been relying on an intricate, custom-made internal spreadsheet with multiple pages, each catering to specific use-cases and packed with complex equations and features. Our mission was to translate this complexity into a responsive digital tool without compromising any functionalities. Additionally, we faced the challenge of presenting vast amounts of information in a clear and user-friendly design, suitable for a range of devices, from desktops to phones." />

      <ProjectImageNew
        image="carlsberg_spreadsheet.png"
        image-link="v1690151158/portfolio/carlsberg/carlsberg_spreadsheet.png"
        alt-text="Carlsberg Spreadsheet"
        description="Snapshot of the legacy spreadsheet previously utilized by Carlsberg Sweden."
        :dual="false"
        content-ratio="auto" />
      <ColumnLeft
        title="The solution"
        description="To address the complexity and usability issues, we designed a digital web app that unified all pages into a single dashboard. Our team meticulously crafted a consistent design language, placing the user experience at the forefront. We strategically concealed certain advanced functionalities to prevent overwhelming users while maintaining their accessibility when needed." />
      <div
        class="col-span-full lg:col-start-2 lg:col-end-[-2] flex flex-col lg:grid lg:grid-flow-col lg:auto-cols-[1fr] gap-8">
        <ProjectVideoNew
          video="carlsberg_calculator_interaction.mp4"
          alt-text="Carlsberg Calculator Demonstration"
          description="Interactive demonstration highlighting the app's diverse functionalities and engaging animations."
          :dual="true"
          content-ratio="1 / 1"
          :autoplay="true"
          :controls="false"
          :loop="true"
          :muted="true" />
        <ProjectVideoNew
          video="carlsberg_mobile_interaction.mp4"
          alt-text="Carlsberg Calculator Dashboard"
          description="An overview of the intuitively designed Dashboard and its seamless adaptation for mobile devices."
          :dual="true"
          content-ratio="1 / 1"
          :autoplay="true"
          :controls="false"
          :loop="true"
          :muted="true" />
      </div>
      <ColumnLeft
        title="Pre-planning"
        description="At the project's start, I led an extensive study of the existing spreadsheet, carefully analyzing its unique equations. This process enabled us to identify opportunities for simplification and enhanced communication with the users. Collaborative client meetings were instrumental in discussing the app's functionalities, presenting our findings, and proposing improvements. As the project progressed, I played a key role in effectively communicating these findings to our Web Developers for seamless implementation. Additionally, I took an active part in rigorous QA testing to ensure accurate calculations and proper integration of our designs." />
      <div
        class="col-span-full lg:col-start-2 lg:col-end-[-2] flex flex-col lg:grid lg:grid-flow-col lg:auto-cols-[1fr] gap-8">
        <ColumnHalf
          title="Spicing it up"
          description="We expertly utilized elements from Pepsi Max's stylesheet to infuse the app with brand familiarity. While maintaining a UX-heavy approach, we thoughtfully adjusted colors and typefaces to create an engaging visual experience. To add a touch of excitement, we implemented subtle yet captivating on-click animations for each page's icons, elevating user engagement without compromising the app's usability." />
        <ProjectVideoNew
          video="carlsberg_icon_collection.mp4"
          alt-text="Carlsberg Calculator Animated Icons"
          description="A collection of thoughtfully animated icons, adding flair and visual appeal to the user interface"
          content-ratio="auto"
          :dual="true"
          :autoplay="true"
          :controls="false"
          :loop="true"
          :muted="true" />
      </div>

      <ColumnLeft
        title="Learnings"
        description="Working alongside seasoned Designers and Web Developers during this project was a remarkable learning experience. I had the opportunity to refine my design contributions and strengthen my expertise in color theory, typography, and motion. 
        
        Collaborating closely with the client not only allowed me to influence the final result but also enhanced my teamwork and communication skills significantly. Understanding the client's perspective and actively participating in shaping the project's direction enriched my overall professional growth." />
    </main>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  name: "PepsiMaxCalculator",
  components: {
    ProjectImage: defineAsyncComponent(() =>
      import("../components/Project/ProjectImage.vue")
    ),
    ProjectImageNew: defineAsyncComponent(() =>
      import("../components/Project/ProjectImageNew.vue")
    ),
    ProjectTags: defineAsyncComponent(() =>
      import("../components/Project/ProjectTags.vue")
    ),
    ProjectTitle: defineAsyncComponent(() =>
      import("../components/Project/ProjectTitle.vue")
    ),
    ColumnHalf: defineAsyncComponent(() =>
      import("../components/Project/ColumnHalf.vue")
    ),
    ColumnLeft: defineAsyncComponent(() =>
      import("../components/Project/ColumnLeft.vue")
    ),
  },
  // Recover the data sent by components, to fill the props up.
  provide() {
    // use function syntax so that we can access `this`
    return {
      team: this.team,
      categories: this.categories,
      tools: this.tools,
      roles: this.roles,
    };
  },
  data() {
    return {
      // Data-list of names and portfolio-links to be shown in ProjectTags.
      team: [
        {
          teamName: "Alkemi Studio",
          portfolioLink: "https://alkemi.studio/",
        },
      ],
      // Data-list of categories to be shown in ProjectTags.
      categories: [
        {
          categoryName: "UI Design",
        },
        {
          categoryName: "UX Design",
        },
        {
          categoryName: "Product Design",
        },
        {
          categoryName: "Web Design",
        },
      ],
      // Data-list of tools to be shown in ProjectTags.
      tools: [
        {
          toolName: "Adobe XD",
        },
        {
          toolName: "Adobe After Effects",
        },
        {
          toolName: "Adobe Illustrator",
        },
      ],
      // Data-list of roles to be shown in ProjectTags.
      roles: [
        {
          roleName: "Project Lead",
        },
        {
          roleName: "UI/UX Designer",
        },
        {
          roleName: "Motion Designer",
        },
        {
          roleName: "QA Tester",
        },
      ],
    };
  },
  // Style the body, header and footer on load.
  beforeMount() {
    this.stylePageBefore();
  },
  // Style the text and background colors to brand colors.
  mounted() {
    this.stylePageMount();
    const callback = (entries) => {
      // The entries variable will contain the list of
      // elements that you are observing. When ever
      // intersection occurs, you need to do forEach loop
      // to find which one intersected.
      // For this we check a flag on the element called "isIntersecting"
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("The element is intersecting >");
          //If intersecting then attach keyframe animation.
          //We do this by assigning the data attribute
          //we coded in the markup to the style.animation
          //of the element
          this.$anime({
            targets: entry.target,
            translateY: [40, 0],
            opacity: [0, 1],
            duration: 1000,
            delay: 250,
            easing: "easeOutQuint",
          });
          observer.unobserve(entry.target);
        } else {
          //We take of the animation if not in view
          this.$anime({
            targets: entry.target,
            opacity: 0,
          });
        }
      });
    };

    //1]Create a new intersectionObserver object,
    //which will accept a callback function as
    //a parameter.
    let options = {
      threshold: 0.1,
      rootMargin: "40px",
    };

    let observer = new IntersectionObserver(callback, options);

    //2]Select all elements that have ".animate"
    //class.In our case we have three
    //elements (.image,<p> and h<2>).

    const animationItems = document.querySelectorAll(".animation-item");

    //3]Loop through selected elements and add to the
    //observer watch list.

    animationItems.forEach((item) => {
      observer.observe(item);
    });
  },
  // Remove all the added styles, and return to default.
  beforeUnmount() {
    this.stylePageUnmount();
  },
  methods: {
    stylePageBefore() {
      document
        .querySelector("body")
        .setAttribute("style", "background-color:#141212");
      document
        .querySelector(".navigation-overlay")
        .setAttribute("style", "background-color: #141212");
      document
        .querySelector(".page-footer")
        .setAttribute("style", "background-color: #141212");
    },
    stylePageMount() {
      // Styles the main logo.
      var logo = document.querySelectorAll(".fill-melon");
      for (var i = 0; i < logo.length; i++) {
        logo[i].setAttribute("style", "fill: #80D1FF");
      }
      // Styles the body text.
      var melon = document.querySelectorAll(".text-melon");
      for (var i = 0; i < melon.length; i++) {
        melon[i].setAttribute(
          "style",
          "color: #bfbfbf; font-family: 'Be Vietnam Pro', 'articulat-cf', 'neue-haas-grotesk-text', 'Inter var', Helvetica Neue, Helvetica, Arial, system-ui, sans-serif;"
        );
      }
      // Styles the main headings.
      var silk = document.querySelectorAll(".text-unbleached-silk");
      for (var i = 0; i < silk.length; i++) {
        silk[i].setAttribute(
          "style",
          "-webkit-text-stroke-width: 1px; -webkit-text-stroke-color: #ffffff; text-transform: uppercase; color: transparent; font-family: 'MontrealTS-HeavyIta', 'Be Vietnam Pro', 'articulat-cf', 'neue-haas-grotesk-text', 'Inter var', Helvetica Neue, Helvetica, Arial, system-ui, sans-serif; font-weight: 600;"
        );
      }
      var cameo = document.querySelectorAll(".text-cameo-pink");
      for (var i = 0; i < cameo.length; i++) {
        cameo[i].setAttribute(
          "style",
          "color: #ffffff; font-family: 'Be Vietnam Pro', 'articulat-cf', 'neue-haas-grotesk-text', 'Inter var', Helvetica Neue, Helvetica, Arial, system-ui, sans-serif;"
        );
      }
      var pastel = document.querySelectorAll(".text-pastel-pink");
      for (var i = 0; i < pastel.length; i++) {
        pastel[i].setAttribute(
          "style",
          "color: #bfbfbf; font-family: 'Be Vietnam Pro', 'articulat-cf', 'neue-haas-grotesk-text', 'Inter var', Helvetica Neue, Helvetica, Arial, system-ui, sans-serif;"
        );
      }
      // Uses .style instead of setAttribute() because of overwritten styles of components through setAttribute().
      var eggplant = document.querySelectorAll(".bg-eggplant");
      for (var i = 0; i < eggplant.length; i++) {
        eggplant[i].style.backgroundColor = "#1e1c1c";
      }
      document
        .querySelector(".navbar")
        .setAttribute(
          "style",
          "border-color: #FF8090; background-color: #1e1c1c"
        );
    },
    stylePageUnmount() {
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
    },
  },
};
</script>
