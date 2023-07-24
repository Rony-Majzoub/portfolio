<template>
  <BackButton />
  <div
    class="grid grid-cols-10 col-start-2 col-end-[-2] max-lg:justify-items-center">
    <ProjectTitle
      info="2023 — UI/UX & Motion Design"
      title="Pepsi Max Calculator"
      brief="Create and design an advanced calculator for Pepsi Max, based on an internal spreadsheet from the client." />
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
        description="The sales team for Carlsberg Sweden needed a more user-friendly tool to compare and visualise the key differences between themselves and competitors, that could also be used on a multitude of devices." />
      <ColumnLeft
        title="The problem"
        description="The client was already using an internal custom-made spreadsheet consisting of multiple pages, each with their own special use-cases and features. How would we translate the intricate maths and features into a responsive digital tool, without losing any functionality? How would we condense the vast amount of information into a user-friendly design that is usable on a range of devices, from desktops all the way to phones?" />

      <ProjectImageNew
        image="carlsberg_spreadsheet.png"
        image-link="v1690151158/portfolio/carlsberg/carlsberg_spreadsheet.png"
        alt-text="Carlsberg Spreadsheet"
        description="A sample of the old spreadsheet Carlsberg Sweden were using."
        :dual="false"
        content-ratio="auto" />
      <ColumnLeft
        title="The solution"
        description="The solution was a digital web app that collected all the pages into a single dashboard, to introduce the user to the different tools that they could choose from. Across each page, we employed a consistent design language that held the user experience as the #1 priority, while neatly hiding some functionality as to not overwhelm the user." />
      <div
        class="col-span-full lg:col-start-2 lg:col-end-[-2] flex flex-col lg:grid lg:grid-flow-col lg:auto-cols-[1fr] gap-8">
        <ProjectVideoNew
          video="carlsberg_calculator_interaction.mp4"
          alt-text="Smoove Moodboard"
          description="A showcase of the functionality and animations in action."
          :dual="true"
          content-ratio="1 / 1"
          :autoplay="true"
          :controls="false"
          :loop="true"
          :muted="true" />
        <ProjectVideoNew
          video="carlsberg_mobile_interaction.mp4"
          alt-text="Smoove Moodboard"
          description="A showcase of the Dashboard we created, as well as our mobile adaptation of the app."
          :dual="true"
          content-ratio="1 / 1"
          :autoplay="true"
          :controls="false"
          :loop="true"
          :muted="true" />
      </div>
      <ColumnLeft
        title="Pre-planning"
        description="When starting out, I had the responsibility of researching the different pages that exist in their old, internal spreadsheet. This consisted of finding and making sense of the different unique equations that were used, and finding areas in which we could simplify or tweak information, to communicate more clearly with the user.
        
        This resulted in multiple client meetings where we discussed the functionality of the app, our findings, and our suggested improvements. Later on, I had to collect & simplify this information and present it to our Web Developers in order to implement it in the app. I was also heavily involved in QA testing the app, to make sure all the calculations were correct, and that our designs were properly implemented." />
      <div
        class="col-span-full lg:col-start-2 lg:col-end-[-2] flex flex-col lg:grid lg:grid-flow-col lg:auto-cols-[1fr] gap-8">
        <ColumnHalf
          title="Spicing it up"
          description="We made liberal use of Pepsi Max's stylesheet, while also adjusting colors and typefaces to better suit a UX-heavy design such as this one. We also animated the different icons for each page on-click, to spice things up without disrupting the user experience." />
        <ProjectVideoNew
          video="carlsberg_icon_collection.mp4"
          alt-text="Smoove Moodboard"
          description="The different icons that I had the pleasure of animating."
          content-ratio="auto"
          :dual="true"
          :autoplay="true"
          :controls="false"
          :loop="true"
          :muted="true" />
      </div>

      <ColumnLeft
        title="Learnings"
        description="I gained a lot of experience by working alongside very professional Designers and Web Developers. I was offered the time and knowledge needed to perfect my contributions to the project, while improving my use of color, typography and motion along the way.
        
        Getting to communicate with the client and influencing the final result alongside them was a very rewarding experience, which helped me further improve my collaboration skills, while also gaining a lot of knowledge and understanding of their side of the project." />
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
          "color: #ffffff; font-family: 'Be Vietnam Pro', 'articulat-cf', 'neue-haas-grotesk-text', 'Inter var', Helvetica Neue, Helvetica, Arial, system-ui, sans-serif; font-weight: 600;"
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
