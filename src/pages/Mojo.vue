<template>
  <BackButton />
  <div class="grid grid-cols-10 col-start-2 col-end-[-2]">
    <ProjectTitle
      info="2021/2022 - UX & Product Design"
      title="Mojo"
      brief="Create and deliver a graphic profile for a start-up company." />
    <ProjectImage
      class="mb-10"
      image="mojo_hero.jpg"
      image-link="v1653061123/portfolio/mojo/mojo_hero.png"
      alt-text="Mojo Hero Image"
      link-text="View Graphic Profile"
      link="https://www.figma.com/proto/JW1asOCvRC6oo5sgLUfnoB/Mojo-(Showreel)?page-id=653%3A918&node-id=676%3A1492&viewport=2303%2C274%2C0.28&scaling=contain&starting-point-node-id=676%3A1492" />
    <ProjectTags
      client="Yrgo DD21, Chalmers Encubator"
      team="Rony Majzoub, 
      Emma Norman, 
      Madeleine Möller Ståhl"
      role="UX Designer, Project Lead"
      duration="2 months"
      tools="Figma, Adobe Illustrator"
      category1="UI Design"
      category2="UX Design"
      category3="Product Design"
      category4="Web Design" />

    <main class="grid col-span-full grid-cols-10 gap-y-8 lg:gap-y-16">
      <ColumnRight
        title="Background"
        description="Today, a large portion of the world lack a clean and modern method for cooking. The result is extensive deforestation, hours of extra labor, and harmful emissions. However, through a collaboration with a start-up Chalmers-Incubator company, a solution is in sight." />

      <ColumnLeft
        title="The problem"
        description="After getting to speak with the client, we were informed of two distinct target groups that we had to design for. The first are the investors that would actually fund their project. The second are the people in Africa, that would use the products made possible by this brand. This was not going to be easy." />

      <ProjectImage
        image="mojo_inspiration.png"
        image-link="v1653071265/portfolio/mojo/mojo_inspiration.png"
        alt-text="Inspiration for the market of Mojo."
        description="The early inspiration pieces for narrowing down the feel and market of Mojo." />

      <ColumnLeft
        title="The solution"
        description="Our solution was to design a graphic profile that was minimalistic, and slightly modern in its appearance, while also not delving too deep towards a corporate style. We wanted to develop trust between the brand and the end users, while also giving a slightly playful vibe, to play into the African culture that is so prominent in the target countries." />

      <ProjectImage
        image="mojo_moodboard.png"
        image-link="v1653038272/portfolio/mojo/mojo_moodboard.png"
        alt-text="Mojo Moodboard"
        description="Our moodboard that would communicate our vision clearly to our client." />

      <ColumnLeft
        title="Pre-planning"
        description="We started by researching how the market stands today, and how other brands solved their own problems. The truth is that most brands in this market were seriously lacking, in regards to style and readability. It was clear that we had to do a lot of work to come up with original ideas, and execute them in this project.
        We did extensive research regarding what types of colors, shapes and font-styles we would use, and how different cultures around the world would interpret those style choices.
        We later applied these learnings in three separate Moodboards, and pitched them early-on to the clients, and used their feedback to create concrete assets and (later on) a fully-fledged graphic profile." />

      <ProjectImage
        image="mojo_logo.png"
        image-link="v1653038272/portfolio/mojo/mojo_logo.png"
        alt-text="All the different logos we pitched and redesigned during the project."
        description="All the different logos we pitched and redesigned during the project." />

      <ColumnRight
        title="Working with clients"
        description="A large portion of the project went into designing the logo for Mojo. As the clients always had the final say, we had to pitch our logo ideas to them each time, and use their feedback to improve upon our ideas. A lot of iterating had to be done, because of how crucial a good logo was to their own project." />

      <ProjectImage
        image="mojo_profile.png"
        image-link="v1653038272/portfolio/mojo/mojo_profile.png"
        alt-text="Condensed version of the Graphic Profile."
        description="This is a condensed version of the final graphic profile that we delivered to our client." />

      <ColumnLeft
        title="Final delivery"
        description="In the end, we managed to deliver a graphic profile, which consisted of three parts - the logo, the colors, and the fonts. We also delivered stylistic guidelines and rules for how to best follow their own graphic profile. These guidelines were focused on accessibility, and brand identity.
        We also delivered a digital example of how a future website might look like, as shown at the bottom of this page, as well as Microsoft Office themes that they could use in PowerPoint and Word, which followed their graphic profile." />

      <ColumnLeft
        title="Learnings"
        description="As the majority of the work was done during isolation from the COVID-19 pandemic, we had to drastically adapt our communication strategies. It was certainly difficult trying to work with a client, only through digital means. That resulted in a few cases of miscommunication, which were understandable, given the circumstances.
        We've learned a lot about how to communicate with a client, how and when to pitch ideas to them, and how much we should show or hide from them, until a later date." />

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
    ProjectGallery: defineAsyncComponent(() =>
      import("../components/Project/ProjectGallery.vue")
    ),
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
    };
  },
  // Style the body, header and footer on load.
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#fef8ea");
    // document
    //   .querySelector(".nav-menu")
    //   .setAttribute("style", "background:#fef8ea");
    document
      .querySelector("header")
      .setAttribute(
        "style",
        "background: radial-gradient( rgba(0,0,0,0) 1px,#fef8ea 1px ) 0px 0px/8px 8px"
      );
    document
      .querySelector(".page-footer")
      .setAttribute("style", "background:#fef8ea");
  },
  // Style the text and background colors to brand colors.
  mounted() {
    var melon = document.querySelectorAll(".text-melon");
    for (var i = 0; i < melon.length; i++) {
      melon[i].setAttribute("style", "color: #00060D");
    }
    var silk = document.querySelectorAll(".text-unbleached-silk");
    for (var i = 0; i < silk.length; i++) {
      silk[i].setAttribute("style", "color: #F2770C");
    }
    var cameo = document.querySelectorAll(".text-cameo-pink");
    for (var i = 0; i < cameo.length; i++) {
      cameo[i].setAttribute("style", "color: #9700B0");
    }
    var pastel = document.querySelectorAll(".text-pastel-pink");
    for (var i = 0; i < pastel.length; i++) {
      pastel[i].setAttribute("style", "color: #9700B0");
    }
    var eggplant = document.querySelectorAll(".bg-eggplant");
    for (var i = 0; i < eggplant.length; i++) {
      eggplant[i].setAttribute("style", "background: #f7b276");
    }
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
  // Remove all the added styles, and return to default.
  beforeUnmount() {
    document.querySelector("body").setAttribute("style", "");
    document.querySelector("header").setAttribute("style", "");
    document.querySelector(".page-footer").setAttribute("style", "");
    // var burger = document.querySelectorAll(".burger");
    // for (var i = 0; i < burger.length; i++) {
    //   burger[i].setAttribute("style", "");
    // }
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
};
</script>
