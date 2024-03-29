<template>
  <BackButton />
  <div
    class="grid grid-cols-10 col-start-2 col-end-[-2] max-lg:justify-items-center">
    <ProjectTitle
      info="2021 — UI/UX & Product Design"
      title="Smoove"
      brief="Create and design a landing page for a premium, custom vehicle." />
    <ProjectImage
      class="mb-8"
      image="smoove_park.jpg"
      image-link="v1652044733/portfolio/smoove/smoove.jpg"
      alt-text="Smoove Park"
      link-text="View Website"
      link="https://rony-majzoub-smoove.netlify.app"
      bg-color="#464145"
      image-width="432"
      image-height="610" />
    <ProjectTags client="Yrgo DD21" duration="1 month" />
    <main class="grid col-span-full grid-cols-10 gap-y-8 lg:gap-y-16">
      <ColumnLeft
        title="Background"
        description="As the automotive industry delves deeper into the digital market, our goal was to create and design a stylish profile, website, and vehicle, derived from a feeling that we wanted to convey, every step of the way." />
      <ColumnLeft
        title="The problem"
        description="We were tasked with becoming the Project Leads, which meant directing our Web Developers and Computer Graphics Designers with clear instructions and feedback. Additionally, we fulfilled our roles as Digital Designers, with UI-designs and UX-research being major key-points of the project." />
      <div
        class="col-span-full lg:col-start-2 lg:col-end-[-2] flex flex-col lg:grid lg:grid-flow-col lg:auto-cols-[1fr] gap-8">
        <ProjectImageNew
          image="smoove_skiss1.png"
          image-link="v1653003924/portfolio/smoove/smoove_skiss1.png"
          alt-text="Smoove Desktop Sketches"
          description="The early desktop sketches from the Figma prototypes."
          :dual="true" />
        <ProjectImageNew
          image="smoove_skiss2.png"
          image-link="v1653003924/portfolio/smoove/smoove_skiss2.png"
          alt-text="Smoove Mobile Sketches"
          description="The early mobile sketches from the Figma prototypes."
          :dual="true" />
      </div>
      <ColumnLeft
        title="Pre-planning"
        description="With the enormous task at hand, we began by drawing hand-sketches of how the landing page would look, along with the main features we wanted for the Web Developers to implement. We also created a Moodboard to decide on what type of vehicle and materials the CG-Designers would use. Later on, we created digital Greyboxes based on our initial sketches and refined the layout and content of the site." />
      <ProjectImageNew
        image="smoove_greybox.png"
        image-link="v1653005687/portfolio/smoove/smoove_greybox.png"
        alt-text="Smoove Mobile Sketches"
        description="Digital greyboxes for how components, images & sections should be placed on the website."
        class="lg:col-start-2 lg:col-end-[-2]"
        :dual="false" />
      <ColumnLeft
        title="Bold but Friendly"
        description="After conducting extensive research, we created a few Personas that would represent the type of people that would drive our vehicle. We felt that a motorcycle should empower the driver while accommodating all types of people, both men and women.
        
        That's why we chose a more golden and warm color scheme. We found that other, more saturated colors were very gendered and a bit too bombastic. A gold main color, with warm undertones, gave us the neutrality we were after while still offering a modern, powerful, and exciting feeling to the driver." />
      <div
        class="col-span-full lg:col-start-2 lg:col-end-[-2] flex flex-col lg:grid lg:grid-flow-col lg:auto-cols-[1fr] gap-8">
        <ProjectImageNew
          image="smoove_stylesheet.png"
          image-link="v1652792494/portfolio/smoove/smoove_stylesheet.png"
          alt-text="Stylesheet created for our Web Developers."
          description="Our stylesheet that we applied throughout our entire project."
          :dual="true" />
        <ProjectImageNew
          image="smoove_moodboard.png"
          image-link="v1652885422/portfolio/smoove/smoove_moodboard.png"
          alt-text="Smoove Moodboard"
          description="Our moodboard that would communicate our vision clearly to our Developers and CG-Designers."
          :dual="true" />
      </div>
      <div
        class="col-span-full lg:col-start-2 lg:col-end-[-2] flex flex-col lg:grid lg:grid-flow-col lg:auto-cols-[1fr] gap-8">
        <ColumnHalf
          title="Designing for the Web"
          description="For this project, we teamed up with the Web Developer class at Yrgo, who were responsible for coding and implementing our designs on the web. This proved difficult due to the various responsibilities that we had to bear during the entire project.
      
          When designing the website, we split the site up into multiple sections to ease the delivery process for both our Web Developers and CG-Designers. We spent a considerable amount of time working on Components and a Stylesheet so our Web Developers could reuse code quickly and efficiently." />
        <ProjectImageNew
          image="smoove_components.png"
          image-link="v1652792652/portfolio/smoove/smoove_components.png"
          alt-text="Components that were created for our Web Developers."
          description="The components that we designed for our Web Developers."
          :dual="true" />
      </div>
      <ColumnLeft
        title="DD meets CG"
        description="Collaborating with CG-Designers was a new, albeit refreshing challenge. Given that their renders required several hours of render-time, we had less room to iterate on their delivered images. We also had to nail down how big these images were in both size and aspect-ratio, because of the camera framing and positioning on the website." />
      <ProjectImageNew
        image="smoove_review.png"
        image-link="v1652793007/portfolio/smoove/smoove_review.png"
        alt-text="Our Review Process of 3D Images."
        description="Our review process for the delivery of 3D-images from our Computer Graphics Designers."
        :dual="false" />
      <ColumnLeft
        title="Final Prototypes"
        description="The final prototypes were made in Figma, with fine-tuned desktop and mobile variants. We adjusted the amount of content shown and also used different images depending on the device. An intro-animation in After Effects was created by me, which was exported as a Lottie-file and used in the final site on first load." />
      <ProjectImageNew
        image="smoove_prototype.png"
        image-link="v1652792170/portfolio/smoove/smoove_prototype.png"
        alt-text="Final Prototypes in Figma."
        description="Snapshots of our final Figma-prototypes."
        :dual="false" />
      <ColumnLeft
        title="Learnings"
        description="We learned how to oversee and lead an entire project with multiple members each having different roles. We also gained a better understanding of the challenges that both Web Developers and CG-Designers face during projects and how to make their tasks easier to handle.
        
        As Designers, we also got a better look at what exactly goes into designing a product and all the different steps required to go from feeling to final delivery. This allowed us to better prioritize the important aspects of a project while leaving less important parts for another day.
        
        Overall, we were reasonably happy with the work we managed to deliver with our CG-Designers. When it comes to the website, there were a few cases of mismanagement, which left a few things to be desired in the final product. We definitely learned a thing or two from these missteps, and we've made sure to better prepare for those challenges in the future." />
      <ProjectGallery
        title="Render Gallery"
        description="The final 3D-renders that are used on the production site.*"
        disclaimer="*3D Renders created by Alexander Mellby and Per-Emil Lundqvist." />
    </main>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  name: "Smoove",
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
    ColumnHalf: defineAsyncComponent(() =>
      import("../components/Project/ColumnHalf.vue")
    ),
    ColumnLeft: defineAsyncComponent(() =>
      import("../components/Project/ColumnLeft.vue")
    ),
  },
  // Send Gallery Array down to ProjectGallery component for dynamic images.
  // Recover the data sent by components, to fill the props up.
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
          url: "v1652044734/portfolio/smoove/smoove_road.jpg",
          alt: "Motorcycle driving down a long road, at sunset.",
          imageText: "Motorcycle driving down a long road, at sunset.",
          src: "smoove.jpg",
        },
        {
          url: "v1652863280/portfolio/smoove/smoove_helmet.png",
          alt: "A motorcycle helmet placed on a road.",
          imageText: "A motorcycle helmet placed on a road.",
          src: "smoove_helmet.png",
        },
        {
          url: "v1652863281/portfolio/smoove/smoove_studio.png",
          alt: "A glowing motorcycle parked inside a studio.",
          imageText: "A glowing motorcycle parked inside a studio.",
          src: "smoove_studio.png",
        },
        {
          url: "v1652863280/portfolio/smoove/smoove_watch.png",
          alt: "A digital watch hanging from a motorcycle handle.",
          imageText: "A digital watch hanging from a motorcycle handle.",
          src: "smoove_watch.png",
        },
        {
          url: "v1652863376/portfolio/smoove/smoove_wheel.png",
          alt: "A close-up picture of a motorcycle wheel arch.",
          imageText: "A close-up picture of a motorcycle wheel arch.",
          src: "smoove_wheel.png",
        },
        {
          url: "v1652863280/portfolio/smoove/smoove_field.png",
          alt: "A motorcycle and a driver parked in an open field.",
          imageText: "A motorcycle and a driver parked in an open field.",
          src: "smoove_field.png",
        },
      ],
      // Data-list of names and portfolio-links to be shown in ProjectTags.
      team: [
        {
          teamName: "Linrinna Lindström",
          portfolioLink: "https://www.linrinnalindstrom.com/",
        },
        {
          teamName: "Albin Andersson",
        },
        {
          teamName: "Alexander Mellby",
        },
        {
          teamName: "Oliver Davis",
        },
        {
          teamName: "Per-Emil Lundqvist",
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
          categoryName: "Motion Design",
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
          toolName: "Adobe After Effects",
        },
        {
          toolName: "Adobe Illustrator",
        },
      ],
      // Data-list of roles to be shown in ProjectTags.
      roles: [
        {
          roleName: "UI/UX Designer",
        },
        {
          roleName: "Creative Director",
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
        .setAttribute("style", "background-color: #201d26");
      document
        .querySelector(".navigation-overlay")
        .setAttribute("style", "background-color: #201d26");
      document
        .querySelector(".page-footer")
        .setAttribute("style", "background-color: #201d26");
    },
    stylePageMount() {
      // var nav = document.querySelectorAll(".nav-item");
      // for (var i = 0; i < nav.length; i++) {
      //   nav[i].setAttribute("style", "background:#201d26;");
      // }
      var eggplant = document.querySelectorAll(".bg-eggplant");
      for (var i = 0; i < eggplant.length; i++) {
        eggplant[i].setAttribute("style", "background-color: #363040");
      }
      var melon = document.querySelectorAll(".text-melon");
      for (var i = 0; i < melon.length; i++) {
        melon[i].setAttribute(
          "style",
          "font-family: 'Inter var', 'DM Sans', 'articulat-cf', 'neue-haas-grotesk-text', Helvetica Neue, Helvetica, Arial, system-ui, sans-serif;"
        );
      }
      var silk = document.querySelectorAll(".text-unbleached-silk");
      for (var i = 0; i < silk.length; i++) {
        silk[i].setAttribute(
          "style",
          "font-family: 'DM Sans', 'Inter var', 'articulat-cf', 'neue-haas-grotesk-text', Helvetica Neue, Helvetica, Arial, system-ui, sans-serif;"
        );
      }
      var cameo = document.querySelectorAll(".text-cameo-pink");
      for (var i = 0; i < cameo.length; i++) {
        cameo[i].setAttribute(
          "style",
          "font-family: 'DM Sans', 'Inter var', 'articulat-cf', 'neue-haas-grotesk-text', Helvetica Neue, Helvetica, Arial, system-ui, sans-serif;"
        );
      }
      var pastel = document.querySelectorAll(".text-pastel-pink");
      for (var i = 0; i < pastel.length; i++) {
        pastel[i].setAttribute(
          "style",
          "font-family: 'DM Sans', 'Inter var', 'articulat-cf', 'neue-haas-grotesk-text', Helvetica Neue, Helvetica, Arial, system-ui, sans-serif;"
        );
      }
      document
        .querySelector(".navbar")
        .setAttribute(
          "style",
          "border-color: ffc1b2; background-color: #363040"
        );
      // document
      //   .querySelector(".nav-menu")
      //   .setAttribute("style", "background:#363040");
    },
    stylePageUnmount() {
      document.querySelector("body").setAttribute("style", "");
      document.querySelector(".navigation-overlay").setAttribute("style", "");
      document.querySelector(".page-footer").setAttribute("style", "");
      document.querySelector(".navbar").setAttribute("style", "");
      var eggplant = document.querySelectorAll(".bg-eggplant");
      for (var i = 0; i < eggplant.length; i++) {
        eggplant[i].setAttribute("style", "");
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

      // var nav = document.querySelectorAll(".nav-item");
      // for (var i = 0; i < nav.length; i++) {
      //   nav[i].setAttribute("style", "");
      // }
      // document.querySelector(".nav-menu").setAttribute("style", "");
    },
  },
};
</script>
