<template>
  <BackButton />
  <div
    class="grid grid-cols-10 col-start-2 col-end-[-2] max-lg:justify-items-center">
    <ProjectTitle
      info="2021/2022 — UX & Product Design"
      title="Mojo"
      brief="Create and deliver a graphic profile for a start-up company." />
    <ProjectImage
      class="mb-8"
      image="mojo_hero.png"
      image-link="v1653061123/portfolio/mojo/mojo_hero.png"
      alt-text="Mojo Hero Image"
      link-text="View Graphic Profile"
      link="https://www.figma.com/proto/JW1asOCvRC6oo5sgLUfnoB/Mojo-(Showreel)?page-id=653%3A918&node-id=676%3A1492&viewport=2303%2C274%2C0.28&scaling=contain&starting-point-node-id=676%3A1492"
      bg-color="#f29b4b" />
    <ProjectTags client="Yrgo DD21, Mojo" duration="2 months" />

    <main class="grid col-span-full grid-cols-10 gap-y-8 lg:gap-y-16">
      <ColumnRight
        title="Background"
        description="Today, a large portion of the world lacks a clean and modern method of cooking, resulting in extensive deforestation, hours of extra labor, and harmful emissions. However, through a collaboration with a start-up Chalmers-Incubator company, a solution is in sight." />

      <ColumnLeft
        title="The problem"
        description="After speaking with the client, we learned of two distinct target groups we had to design for: the investors who would fund the project, and the people in Africa who would use the products made possible by the brand. This was not going to be easy." />

      <ProjectImageNew
        image="mojo_inspiration.png"
        image-link="v1653071265/portfolio/mojo/mojo_inspiration.png"
        alt-text="Inspiration for the market of Mojo."
        description="The early inspiration pieces for narrowing down the feel and market of Mojo."
        :dual="false" />

      <ColumnLeft
        title="The solution"
        description="Our solution was to design a graphic profile that was minimalistic and slightly modern in appearance while not delving too deep into a corporate style. We wanted to develop trust between the brand and end-users while also giving a slightly playful vibe to play into the African culture prominent in the target countries." />

      <ProjectImageNew
        image="mojo_moodboard.png"
        image-link="v1653038272/portfolio/mojo/mojo_moodboard.png"
        alt-text="Mojo Moodboard"
        description="Our moodboard that would communicate our vision clearly to our client."
        :dual="false" />

      <ColumnLeft
        title="Pre-planning"
        description="We began by researching how the market stood today and how other brands solved their problems. The truth is that most brands in this market were seriously lacking in terms of style and readability. It was clear that we had to do a lot of work to come up with original ideas and execute them in this project.
        
        We conducted extensive research on the types of colors, shapes, and font styles we would use and how different cultures around the world would interpret those style choices. We later applied these learnings in three separate Moodboards and pitched them early on to the clients, using their feedback to create concrete assets and a fully-fledged graphic profile later on." />

      <ProjectImageNew
        image="mojo_logo.png"
        image-link="v1653038272/portfolio/mojo/mojo_logo.png"
        alt-text="All the different logos we pitched and redesigned during the project."
        description="All the different logos we pitched and redesigned during the project."
        :dual="false" />

      <ColumnRight
        title="Working with clients"
        description="A significant portion of the project went into designing the logo for Mojo. As the clients always had the final say, we had to pitch our logo ideas to them each time and use their feedback to improve upon our ideas. A lot of iterating had to be done because of how crucial a good logo was to their project." />

      <ProjectImageNew
        image="mojo_profile.png"
        image-link="v1653038272/portfolio/mojo/mojo_profile.png"
        alt-text="Condensed version of the Graphic Profile."
        description="A condensed version of the final graphic profile that we delivered to our client."
        :dual="false" />

      <ColumnLeft
        title="Final delivery"
        description="In the end, we delivered a graphic profile consisting of three parts: the logo, the colors, and the fonts. We also delivered stylistic guidelines and rules for following their own graphic profile. These guidelines focused on accessibility and brand identity.
        
        We also provided a digital example of how a future website might look like, as shown at the bottom of this page, as well as Microsoft Office themes that they could use in PowerPoint and Word, which followed their graphic profile." />

      <ColumnLeft
        title="Learnings"
        description="As the majority of the work was done during isolation from the COVID-19 pandemic, we had to drastically adapt our communication strategies. It was certainly difficult trying to work with a client only through digital means, resulting in a few cases of miscommunication, which were understandable given the circumstances.
        
        We learned a lot about how to communicate with a client, how and when to pitch ideas to them, and how much we should show or hide from them until a later date." />

      <ProjectGallery
        title="Website Prototype"
        description="The entire website example that we delivered to our client." />
    </main>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  name: "Mojo",
  components: {
    ProjectImage: defineAsyncComponent(() =>
      import("../components/Project/ProjectImage.vue")
    ),
    ProjectImageNew: defineAsyncComponent(() =>
      import("../components/Project/ProjectImageNew.vue")
    ),
    ProjectGallery: defineAsyncComponent(() =>
      import("../components/Project/ProjectGallery.vue")
    ),
    ProjectTags: defineAsyncComponent(() =>
      import("../components/Project/ProjectTags.vue")
    ),
    ProjectTitle: defineAsyncComponent(() =>
      import("../components/Project/ProjectTitle.vue")
    ),
    ColumnLeft: defineAsyncComponent(() =>
      import("../components/Project/ColumnLeft.vue")
    ),
  },
  // Send Gallery Array down to ProjectGallery component for dynamic images.
  provide() {
    // use function syntax so that we can access `this`
    return {
      pictures: this.pictures,
      team: this.team,
      categories: this.categories,
      tools: this.tools,
      roles: this.roles,
    };
  },
  // Data-list of images to be shown in ProjectGallery.
  data() {
    return {
      pictures: [
        {
          url: "v1653080906/portfolio/mojo/mojo_website1.png",
          alt: "Hero Image of Website",
          imageText: "First section of our proposed website.",
          src: "mojo_website1.png",
        },
        {
          url: "v1653080906/portfolio/mojo/mojo_website2.png",
          alt: "Second Section of Website",
          imageText: "Second section of the website.",
          src: "mojo_website2.png",
        },
      ],
      // Data-list of names and portfolio-links to be shown in ProjectTags.
      team: [
        {
          teamName: "Emma Norman",
          portfolioLink: "https://emmanorman.webflow.io/",
        },
        {
          teamName: "Madeleine Möller Ståhl",
          portfolioLink: "https://madeleinemollerstahl.webflow.io/",
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
        {
          toolName: "Adobe Illustrator",
        },
      ],
      // Data-list of roles to be shown in ProjectTags.
      roles: [
        {
          roleName: "UX Designer",
        },
        {
          roleName: "Project Lead",
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
        .setAttribute("style", "background-color: #fef8ea");
      // document
      //   .querySelector(".nav-menu")
      //   .setAttribute("style", "background:#fef8ea");
      document
        .querySelector(".navigation-overlay")
        .setAttribute("style", "background-color: #fef8ea");
      document
        .querySelector(".page-footer")
        .setAttribute("style", "background-color: #fef8ea");
    },
    stylePageMount() {
      var logo = document.querySelectorAll(".fill-melon");
      for (var i = 0; i < logo.length; i++) {
        logo[i].setAttribute("style", "fill: #F2770C");
      }
      var melon = document.querySelectorAll(".text-melon");
      for (var i = 0; i < melon.length; i++) {
        melon[i].setAttribute(
          "style",
          "color: #00060D; font-family: 'Nunito', 'articulat-cf', 'neue-haas-grotesk-text', 'Inter var', Helvetica Neue, Helvetica, Arial, system-ui, sans-serif;"
        );
      }
      var silk = document.querySelectorAll(".text-unbleached-silk");
      for (var i = 0; i < silk.length; i++) {
        silk[i].setAttribute(
          "style",
          "color: #F2770C; font-family: 'Nunito Sans', 'articulat-cf', 'neue-haas-grotesk-text', 'Inter var', Helvetica Neue, Helvetica, Arial, system-ui, sans-serif; font-weight: 700;"
        );
      }
      var cameo = document.querySelectorAll(".text-cameo-pink");
      for (var i = 0; i < cameo.length; i++) {
        cameo[i].setAttribute(
          "style",
          "color: #9700B0; font-family: 'Nunito', 'articulat-cf', 'neue-haas-grotesk-text', 'Inter var', Helvetica Neue, Helvetica, Arial, system-ui, sans-serif;"
        );
      }
      var pastel = document.querySelectorAll(".text-pastel-pink");
      for (var i = 0; i < pastel.length; i++) {
        pastel[i].setAttribute(
          "style",
          "color: #9700B0; font-family: 'Nunito', 'articulat-cf', 'neue-haas-grotesk-text', 'Inter var', Helvetica Neue, Helvetica, Arial, system-ui, sans-serif;"
        );
      }
      var eggplant = document.querySelectorAll(".bg-eggplant");
      for (var i = 0; i < eggplant.length; i++) {
        eggplant[i].setAttribute("style", "background-color: #f7b276");
      }
      document
        .querySelector(".navbar")
        .setAttribute(
          "style",
          "border-color: #9700B0; background-color: #f7b276"
        );
      // var burger = document.querySelectorAll(".burger");
      // for (var i = 0; i < burger.length; i++) {
      //   burger[i].setAttribute("style", "fill:#F2770C");
      // }
      // var nav = document.querySelectorAll(".nav-item");
      // for (var i = 0; i < nav.length; i++) {
      //   nav[i].setAttribute("style", "color:#9700b0; background:#fef8ea;");
      // }
      // document
      //   .querySelector(".nav-menu")
      //   .setAttribute("style", "background:#f7b276");
    },
    stylePageUnmount() {
      document.querySelector("body").setAttribute("style", "");
      document.querySelector(".navigation-overlay").setAttribute("style", "");
      document.querySelector(".page-footer").setAttribute("style", "");
      document.querySelector(".navbar").setAttribute("style", "");
      // var burger = document.querySelectorAll(".burger");
      // for (var i = 0; i < burger.length; i++) {
      //   burger[i].setAttribute("style", "");
      // }
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
      // document.querySelector(".nav-menu").setAttribute("style", "");
    },
  },
};
</script>
