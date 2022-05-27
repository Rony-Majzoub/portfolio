<template>
  <div class="grid grid-cols-10 col-start-2 col-end-[-2]">
    <BackButton />
    <ProjectTitle
      info="2021 - UI/UX & Product Design"
      title="Smoove"
      brief="Create and design a landing page for a premium, custom vehicle." />
    <ProjectImage
      class="mb-10"
      image="smoove_park.jpg"
      image-link="v1652044733/portfolio/smoove/smoove.jpg"
      alt-text="Smoove Park"
      link-text="View Website"
      link="https://rony-majzoub-smoove.netlify.app" />
    <ProjectTags
      client="Yrgo DD21"
      team="Rony Majzoub, Linrinna Lindström, Per-Emil Lundqvist, Alexander Mellby, Oliver Davis, Albin Andersson"
      role="UI/UX Designer, Creative Director"
      duration="1 month"
      tools="Figma, Adobe After Effects, Adobe Illustrator"
      category1="UI Design"
      category2="UX Design"
      category3="Product Design"
      category4="Motion Design"
      category5="Web Design" />
    <main class="grid col-span-full grid-cols-10 gap-y-8 lg:gap-y-16">
      <ColumnRight
        title="Background"
        description="As the automotive industry reaches further into the digital market, our goal was to create and design a stylistic profile, website and vehicle, derived from a feeling that we wanted to present, every step of the way." />
      <ColumnLeft
        title="The problem"
        description="We were tasked with not only becoming the Project Leads, having to direct our Web Developers and Computer Graphics Designers with clear instructions and feedback. But we were also tasked with fulfilling our roles as Digital Designers, with UI-designs and UX-research being major key-points of the project." />
      <ProjectImage
        image="smoove_skiss1.png"
        image-link="v1653003924/portfolio/smoove/smoove_skiss1.png"
        alt-text="Smoove Desktop Sketches"
        description="The early desktop sketches from the Figma prototypes." />
      <ProjectImage
        image="smoove_skiss2.png"
        image-link="v1653003924/portfolio/smoove/smoove_skiss2.png"
        alt-text="Smoove Mobile Sketches"
        description="The early mobile sketches from the Figma prototypes." />
      <ColumnLeft
        title="Pre-planning"
        description="With the enormous task at hand, we set off by drawing hand-sketches of how this landing page would look like, and the main features we wanted for the Web Developers to implement. We also created a moodboard, so we could decide on what type of vehicle and materials the CG-Designers would use. Later on, we created digital Greyboxes based on our initial sketches, and refined the layout and content of the site. " />
      <ProjectImage
        image="smoove_greybox.png"
        image-link="v1653005687/portfolio/smoove/smoove_greybox.png"
        alt-text="Smoove Mobile Sketches"
        description="Digital greyboxes for how components, images & sections should be placed on the website." />
      <ProjectImage
        image="smoove_moodboard.png"
        image-link="v1652885422/portfolio/smoove/smoove_moodboard.png"
        alt-text="Smoove Moodboard"
        description="Our moodboard that would communicate our vision clearly to our Developers and CG-Designers." />
      <ColumnRight
        title="Bold but Friendly"
        description="After doing extensive research, we created a few Personas that would represent the type of people that would drive our vehicle. We felt that a motorcycle should empower the driver, but also accomodate all types of people, both men and women.
        That's why we chose a more golden and warm color scheme. We found that other, more saturated colors were very gendered, and a bit too bombastic. A gold main color, with warm undertones gave us the neutrality we were after, while still offering a modern, powerful and exciting feeling to the driver." />
      <ProjectImage
        image="smoove_components.png"
        image-link="v1652792652/portfolio/smoove/smoove_components.png"
        alt-text="Components that were created for our Web Developers."
        description="The components that we designed for our Web Developers." />
      <ProjectImage
        image="smoove_stylesheet.png"
        image-link="v1652792494/portfolio/smoove/smoove_stylesheet.png"
        alt-text="Stylesheet created for our Web Developers."
        description="Our stylesheet that we applied throughout our entire project." />
      <ProjectImage
        image="smoove_review.png"
        image-link="v1652793007/portfolio/smoove/smoove_review.png"
        alt-text="Our Review Process of 3D Images."
        description="Our review process for the delivery of 3D-images from our Computer Graphics Designers." />
      <ColumnRight
        title="Designing for the Web"
        description="For this project, we teamed up with the Web Developer class at Yrgo, who were responsible for coding and implementing our designs to the web. This proved to be difficult, due to the various responsibilities that we had to bear during the entire project.

        When designing the website, we split the site up into multiple sections, to ease the delivery both for our Web Developers, but also for our CG-Designers. We would put a considerable amount of time working on Components and a Stylesheet, so our Web Developers could reuse code quickly and efficiently." />
      <ColumnLeft
        title="DD meets CG"
        description="Collaborating with CG-Designers was a new, albeit refreshing challenge. Given that their renders required several hours of render-time, we had less room to iterate on their delivered images. We also had to nail down how big these images were in both size, and aspect-ratio, because of the camera framing, and the positioning in the website." />
      <ProjectImage
        image="smoove_prototype.png"
        image-link="v1652792170/portfolio/smoove/smoove_prototype.png"
        alt-text="Final Prototypes in Figma."
        description="Snapshots of our final Figma-prototypes." />
      <ColumnLeft
        title="Final Prototypes"
        description="The final prototypes were made in Figma, with fine-tuned desktop and mobile variants. We both adjusted the amount of content shown, and also used different images depending on the device. An intro-animation in After Effects was created by me, which was exported as a Lottie-file and used in the final site on first load." />
      <ColumnLeft
        title="Learnings"
        description="We learned how to oversee and lead an entire project, with multiple members each having different roles. We also gained a better understanding of the challenges that both Web Developers and CG-Designers face during projects, and how to make their tasks easier to handle.
        As Designers, we also got a better look at what exactly goes into designing a products, and all the different steps required to go from feeling to final delivery. This allowed us to better prioritize the important aspects of a project, while leaving less important parts for another day.
        Overall, we were reasonably happy with the work we managed to deliver with our CG-Designers. When it comes to the website, there were a few cases of mismanagement, which did leave a few things to be desired in the final product. We definitely learned a thing or two from these missteps, and we've made sure to better prepare for those challenges in the future." />
      <ProjectGallery
        title="Render Gallery"
        description="The final 3D-renders that are used in the production site." />
    </main>
  </div>
</template>

<script>
import ProjectTags from "@/components/Project/ProjectTags.vue";
import ProjectTitle from "@/components/Project/ProjectTitle.vue";
import ColumnLeft from "@/components/Project/ColumnLeft.vue";
import ColumnRight from "@/components/Project/ColumnRight.vue";
import ProjectImage from "../components/Project/ProjectImage.vue";
import ProjectGallery from "../components/Project/ProjectGallery.vue";
import BackButton from "@/components/BackButton.vue";

export default {
  name: "Smoove",
  components: {
    ProjectTags,
    ProjectTitle,
    ColumnLeft,
    ColumnRight,
    ProjectImage,
    ProjectGallery,
    BackButton,
  },
  // Send Gallery Array down to ProjectGallery component for dynamic images.
  provide() {
    // use function syntax so that we can access `this`
    return {
      pictures: this.pictures,
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
    };
  },
  // Style the body, header and footer on load.
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#201d26");
    document
      .querySelector("header")
      .setAttribute(
        "style",
        "background: radial-gradient( rgba(0,0,0,0) 1px,#201d26 1px ) 0px 0px/8px 8px"
      );
    document
      .querySelector(".page-footer")
      .setAttribute("style", "background: #201d26");
  },
  // Style the text and background colors to brand colors.
  mounted() {
    var nav = document.querySelectorAll(".nav-item");
    for (var i = 0; i < nav.length; i++) {
      nav[i].setAttribute("style", "background:#201d26;");
    }
    var eggplant = document.querySelectorAll(".bg-eggplant");
    for (var i = 0; i < eggplant.length; i++) {
      eggplant[i].setAttribute("style", "background: #363040");
    }
    document
      .querySelector(".nav-menu")
      .setAttribute("style", "background:#363040");
  },
  // Remove all the added styles, and return to default.
  beforeUnmount() {
    document.querySelector("body").setAttribute("style", "");
    document.querySelector("header").setAttribute("style", "");
    document.querySelector(".page-footer").setAttribute("style", "");

    var nav = document.querySelectorAll(".nav-item");
    for (var i = 0; i < nav.length; i++) {
      nav[i].setAttribute("style", "");
    }
    document.querySelector(".nav-menu").setAttribute("style", "");
  },
};
</script>