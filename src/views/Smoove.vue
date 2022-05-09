<template>
  <div class="grid grid-cols-10 col-start-2 col-end-[-2]">
    <BackButton />
    <ProjectTitle
      info="2021 - UI/UX & Product Design"
      title="Smoove"
      brief="Create and design a landing page for a premium, custom vehicle." />
    <ProjectImage
      class="mb-10"
      image="smoove-park.jpg"
      image-link="v1652044733/portfolio/cover/smoove.jpg"
      alt-text="Smoove Park" />
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
      <ColumnRight
        title="The solution"
        description="My solution was to design a prototype of a mobile app that takes a given list of ingredients, 
      and outputs multiple personalised recipes based on those ingredients. Secondary features, such as favorites and tips were added, 
      to further support the idea of lowering the amount of food waste of the user." />
      <ProjectImage
        image="smoove.jpg"
        image-link="v1652044734/portfolio/smoove_umxuks.jpg"
        alt-text="Smoove" />
    </main>
  </div>
</template>

<script>
import ProjectTags from "@/components/Project/ProjectTags.vue";
import ProjectTitle from "@/components/Project/ProjectTitle.vue";
import ColumnLeft from "@/components/Project/ColumnLeft.vue";
import ColumnRight from "@/components/Project/ColumnRight.vue";
import ProjectImage from "../components/Project/ProjectImage.vue";
import BackButton from "@/components/BackButton.vue";

export default {
  name: "Smoove",
  components: {
    ProjectTags,
    ProjectTitle,
    ColumnLeft,
    ColumnRight,
    ProjectImage,
    BackButton,
  },
};
</script>
