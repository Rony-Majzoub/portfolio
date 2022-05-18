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
      link="https://eggie.love/smoove/" />
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
        description="As part of a work sample for applying to Yrgo Digital Designer, our goal was to create a digital solution to our assigned problem." />
      <ColumnLeft
        title="The problem"
        description="Worldwide, over a third of all produced food is wasted and thrown away. 
      By 2030, the UN plans to reduce the global amount of food waste per person by 50%. How can we contribute towards that goal through digital means?" />
      <ProjectImage
        image="smoove_greybox.png"
        image-link="v1652792014/portfolio/smoove/smoove_greybox.png"
        alt-text="Smoove Sketches and Greyboxes"
        description="The early sketches and greyboxes from the Figma prototypes." />
      <ColumnLeft
        title="My solution"
        description="My solution was to design a prototype of a mobile app that takes a given list of ingredients, 
      and outputs multiple personalised recipes based on those ingredients. Secondary features, such as favorites and tips were added, 
      to further support the idea of lowering the amount of food waste of the user." />
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
        title="Assets for Web Developers"
        description="My solution was to design a prototype of a mobile app that takes a given list of ingredients, 
      and outputs multiple personalised recipes based on those ingredients. Secondary features, such as favorites and tips were added, 
      to further support the idea of lowering the amount of food waste of the user." />
      <ColumnRight
        title="Collab with CG-Designers"
        description="My solution was to design a prototype of a mobile app that takes a given list of ingredients, 
      and outputs multiple personalised recipes based on those ingredients. Secondary features, such as favorites and tips were added, 
      to further support the idea of lowering the amount of food waste of the user." />
      <ProjectImage
        image="smoove_prototype.png"
        image-link="v1652792170/portfolio/smoove/smoove_prototype.png"
        alt-text="Final Prototypes in Figma."
        description="Snapshots of our final Figma-prototypes." />
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
        image="smoove.jpg"
        image-link="v1652044734/portfolio/smoove/smoove_road.jpg"
        alt-text="Smoove"
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
};
</script>
