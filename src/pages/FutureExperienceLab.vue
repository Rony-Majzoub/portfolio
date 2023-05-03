<template>
  <BackButton />
  <div
    class="grid grid-cols-10 col-start-2 col-end-[-2] max-lg:justify-items-center">
    <ProjectTitle
      info="2022 — UI/UX & Web Design"
      title="Future Experience Lab"
      brief="Create and design a landing page for Future Experience Lab, a hybrid workshop for creativity." />
    <ProjectImage
      class="mb-8"
      image="fel_hero2.png"
      image-link="v1652949383/portfolio/fel/fel_hero2.png"
      alt-text="Future Experience Lab Icon"
      link-text="View Website"
      link="https://rony-majzoub-fel.netlify.app"
      bg-color="#242424" />
    <ProjectTags client="Yrgo DD21, Future Experience Lab" duration="2 weeks" />
    <main class="grid col-span-full grid-cols-10 gap-y-8 lg:gap-y-16">
      <ColumnLeft
        title="Background"
        description='When Future Experience Lab reached out to Yrgo, they were seeking a website to enhance their "Hybrid Workshop Experience" with a touch of "controlled chaos". Our goal was to strike that balance and deliver a website prototype.' />
      <ColumnLeft
        title="The problem"
        description='The client had many ideas in mind when delivering their brief, including "Controlled Chaos," "Hybrid Workshop," and "Place for Creativity." How could we convey these feelings in a static website, within a tight deadline, punk aesthetic and an abstract brief?' />
      <div
        class="col-span-full lg:col-start-2 lg:col-end-[-2] flex flex-col lg:grid lg:grid-flow-col lg:auto-cols-[1fr] gap-8">
        <ProjectImageNew
          image="fel_skiss.png"
          image-link="v1652994219/portfolio/fel/fel_skiss.png"
          alt-text="Future Experience Lab Sketches"
          description="The early desktop & mobile sketches for the main layout of the website."
          :dual="true" />
        <ProjectImageNew
          image="fel_greybox.png"
          image-link="v1652994219/portfolio/fel/fel_greybox.png"
          alt-text="Future Experience Lab Greyboxes"
          description="Digital greyboxes for how components, images & sections should be placed on the website."
          :dual="true" />
      </div>
      <ColumnLeft
        title="The solution"
        description="The solution was a landing page that showcased the projects and workshops that Future Experience Lab has contributed to. The website was divided into different sections to better communicate the different aspects of Future Experience Lab. We used a variety of images, illustrations, and stylistic choices to create a chaotic feel, while also utilizing pre-defined grids and whitespace to subconsciously organize that chaos." />
      <ProjectImageNew
        image="fel_moodboard.png"
        image-link="v1652994210/portfolio/fel/fel_moodboard.png"
        alt-text="Smoove Moodboard"
        description="This moodboard represents the feelings we strived to achieve on the final website."
        :dual="false" />
      <ColumnLeft
        title="Pre-planning"
        description="After receiving the project brief, we narrowed down the website's goal and target group and what they valued. We presented these questions to the client and shaped the project around those key points.
        
        Early on, we created a Moodboard to visualize how a chaotic yet readable website might look. We narrowed it down to a dark color scheme with strong and contrasting colors used wisely to grab attention. We also found that simple, primitive shapes could add some dynamic flare to the website, which we included in the moodboard." />

      <ColumnLeft
        title="Our stylesheet"
        description="The final stylesheet has a focus on three key areas: fonts, colors, and patterns. For fonts, we chose a heavy, punk-like font for all titles and headers to contribute to a more heavy feel. We also used a lighter and more readable font for all body text, which made the site feel more professional and controlled.
        
        For brand colors, we chose three strong colors with two additional text and background colors. Throughout the website, we also used a variety of primitive shapes as decorative backgrounds. These are used in conjunction with our brand colors to give off a feeling of chaos and spice up the background as a whole.
        " />
      <ProjectImageNew
        image="fel_stylesheet.png"
        image-link="v1653003599/portfolio/fel/fel_stylesheet.png"
        alt-text="Stylesheet created for our Web Developers."
        description="Our stylesheet that we applied throughout our entire project."
        :dual="false" />
      <div
        class="col-span-full lg:col-start-2 lg:col-end-[-2] flex flex-col lg:grid lg:grid-flow-col lg:auto-cols-[1fr] gap-8">
        <ColumnHalf
          title="Designing for the Web"
          description="For this project, we teamed up with the Web Developer class at Yrgo, who were responsible for coding and implementing our designs to the web. Therefore, we had to carefully adapt our working schedule to accommodate agile development with our Web Developers.

        Our first method was to deliver sections one by one in a timely manner, with greyboxes and large visual elements coming first. We also communicated if any changes had been made to previous deliveries.
        
        Our second method was to extensively use Components and Color/Text Styles in Figma, which allowed for reusable code in the final website. This drastically reduced the time needed to code the website while also giving a more consistent design to the entire prototype." />
        <ProjectImageNew
          image="fel_components.png"
          image-link="v1652996443/portfolio/fel/fel_components.png"
          alt-text="Components that were created for our Web Developers."
          description="The mobile & desktop components that we designed for our Web Developers."
          :dual="true" />
      </div>
      <ProjectImageNew
        image="fel_delivery.png"
        image-link="v1653003559/portfolio/fel/fel_delivery.png"
        alt-text="Our Review Process of 3D Images."
        description="Our delivery process of components, illustrations and layouts to our Web Developers."
        :dual="false" />
      <ColumnLeft
        title="Final prototypes"
        description="The final prototypes were made in Figma, with fine-tuned desktop and mobile variants. The prototypes were also made with a responsive layout in mind, both for larger and smaller screens. We provided multiple pages, assets, and illustrations that were used in the final website." />
      <ProjectImageNew
        image="fel_prototype.png"
        image-link="v1653003373/portfolio/fel/fel_prototype.png"
        alt-text="Final Prototypes in Figma."
        description="Snapshots of our final Figma-prototypes."
        :dual="false" />
      <ColumnLeft
        title="Learnings"
        description="We gained more experience on how to work under a tight deadline and what to prioritize in those cases. We also gained a better understanding of how Web Developers work and their requirements.
        
        For future projects, we would focus on getting more prep time as designers so we could deliver assets to our Web Developers immediately, instead of them having to wait without any tasks at hand. We would also like to perform more extensive user testing to further refine our design and layout, but time constraints did not allow for this. Overall, we were very satisfied with the project and felt that there was a lot of potential if we were to continue with it." />
    </main>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  name: "FutureExperienceLab",
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
          teamName: "Juna Jakobsson",
          portfolioLink: "https://www.junajakobsson.com/",
        },
        {
          teamName: "Marcus Hägerstrand",
        },
        {
          teamName: "Nema Vinkeloe Uuskyla",
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
          toolName: "Figma",
        },
      ],
      // Data-list of roles to be shown in ProjectTags.
      roles: [
        {
          roleName: "UI/UX Designer",
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
        .setAttribute("style", "background:#212121");
      document
        .querySelector(".navigation-overlay")
        .setAttribute("style", "background: #212121");
      document
        .querySelector(".page-footer")
        .setAttribute("style", "background: #212121");
    },
    stylePageMount() {
      var logo = document.querySelectorAll(".fill-melon");
      for (var i = 0; i < logo.length; i++) {
        logo[i].setAttribute("style", "fill: #73e586");
      }
      var melon = document.querySelectorAll(".text-melon");
      for (var i = 0; i < melon.length; i++) {
        melon[i].setAttribute(
          "style",
          "color: #f6f6f6; font-family: 'Satoshi-Variable', 'articulat-cf', 'neue-haas-grotesk-text', 'Inter var', Helvetica Neue, Helvetica, Arial, system-ui, sans-serif;"
        );
      }
      var silk = document.querySelectorAll(".text-unbleached-silk");
      for (var i = 0; i < silk.length; i++) {
        silk[i].setAttribute(
          "style",
          "color: #73e586; font-family: 'poster-gothic-atf', 'Satoshi-Variable', 'articulat-cf', 'neue-haas-grotesk-text', 'Inter var', Helvetica Neue, Helvetica, Arial, system-ui, sans-serif; font-weight: 600;"
        );
      }
      var cameo = document.querySelectorAll(".text-cameo-pink");
      for (var i = 0; i < cameo.length; i++) {
        cameo[i].setAttribute(
          "style",
          "color: #fbc2d3; font-family: 'Satoshi-Variable', 'articulat-cf', 'neue-haas-grotesk-text', 'Inter var', Helvetica Neue, Helvetica, Arial, system-ui, sans-serif;"
        );
      }
      var pastel = document.querySelectorAll(".text-pastel-pink");
      for (var i = 0; i < pastel.length; i++) {
        pastel[i].setAttribute(
          "style",
          "color: #ffb038; font-family: 'Satoshi-Variable', 'articulat-cf', 'neue-haas-grotesk-text', 'Inter var', Helvetica Neue, Helvetica, Arial, system-ui, sans-serif;"
        );
      }
      var eggplant = document.querySelectorAll(".bg-eggplant");
      for (var i = 0; i < eggplant.length; i++) {
        eggplant[i].setAttribute("style", "background: #333333");
      }
      document
        .querySelector(".navbar")
        .setAttribute(
          "style",
          "border-color: #fbc2d3; background-color: #333333"
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
