<template>
  <div class="grid grid-cols-10 col-start-2 col-end-[-2]">
    <BackButton />
    <ProjectTitle
      info="2021 - UX & Product Design"
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
      team="Rony Majzoub, Emma Norman, Madeleine Möller Ståhl"
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
        description="As part of a work sample for applying to Yrgo Digital Designer, our goal was to create a digital solution to our assigned problem." />
      <ColumnLeft
        title="The problem"
        description="Worldwide, over a third of all produced food is wasted and thrown away. 
      By 2030, the UN plans to reduce the global amount of food waste per person by 50%. How can we contribute towards that goal through digital means?" />
      <ProjectImage
        image="mojo_inspiration.png"
        image-link="v1653071265/portfolio/mojo/mojo_inspiration.png"
        alt-text="Inspiration for the market of Mojo."
        description="The early inspiration pieces for narrowing down the feel and market of Mojo." />
      <ColumnLeft
        title="The solution"
        description="My solution was to design a prototype of a mobile app that takes a given list of ingredients, 
      and outputs multiple personalised recipes based on those ingredients. Secondary features, such as favorites and tips were added, 
      to further support the idea of lowering the amount of food waste of the user." />
      <ProjectImage
        image="mojo_moodboard.png"
        image-link="v1653038272/portfolio/mojo/mojo_moodboard.png"
        alt-text="Mojo Moodboard"
        description="Our moodboard that would communicate our vision clearly to our client." />
      <ColumnLeft
        title="Pre-planning"
        description="My solution was to design a prototype of a mobile app that takes a given list of ingredients, 
      and outputs multiple personalised recipes based on those ingredients. Secondary features, such as favorites and tips were added, 
      to further support the idea of lowering the amount of food waste of the user." />
      <ProjectImage
        image="mojo_logo.png"
        image-link="v1653038272/portfolio/mojo/mojo_logo.png"
        alt-text="All the different logos we pitched and redesigned during the project."
        description="All the different logos we pitched and redesigned during the project." />
      <ColumnRight
        title="Designing for the Web"
        description="My solution was to design a prototype of a mobile app that takes a given list of ingredients, 
      and outputs multiple personalised recipes based on those ingredients. Secondary features, such as favorites and tips were added, 
      to further support the idea of lowering the amount of food waste of the user." />
      <ColumnRight
        title="DD meets CG"
        description="My solution was to design a prototype of a mobile app that takes a given list of ingredients, 
      and outputs multiple personalised recipes based on those ingredients. Secondary features, such as favorites and tips were added, 
      to further support the idea of lowering the amount of food waste of the user." />
      <ProjectImage
        image="mojo_profile.png"
        image-link="v1653038272/portfolio/mojo/mojo_profile.png"
        alt-text="Condensed version of the Graphic Profile."
        description="This is a condensed version of the final graphic profile that we delivered to our client." />
      <ColumnLeft
        title="Final Prototypes"
        description="My solution was to design a prototype of a mobile app that takes a given list of ingredients, 
      and outputs multiple personalised recipes based on those ingredients. Secondary features, such as favorites and tips were added, 
      to further support the idea of lowering the amount of food waste of the user." />
      <ColumnLeft
        title="Learnings"
        description="My solution was to design a prototype of a mobile app that takes a given list of ingredients, 
      and outputs multiple personalised recipes based on those ingredients. Secondary features, such as favorites and tips were added, 
      to further support the idea of lowering the amount of food waste of the user." />
      <ProjectGallery
        title="Graphic Profile"
        description="The entire Graphic Profile that we delivered to our client." />
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
  name: "Mojo",
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
};
</script>
