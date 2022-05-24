<template>
  <div class="grid grid-cols-10 col-start-2 col-end-[-2]">
    <BackButton />
    <ProjectTitle
      info="2021 - UX Design"
      title="Polestar Website"
      brief="Improve the User Experience of a single page of the current Polestar 2 Website." />
    <ProjectImage
      class="mb-10"
      image="polestar_website.png"
      image-link="v1653261546/portfolio/fun/polestar_website/polestar_website.png"
      alt-text="Polestar Website" />
    <ProjectTags
      client="Polestar"
      team="Rony Majzoub, Matthew Blaxland, Emil Torvaldsson, Emil Jerkersson, Juna Jakobsson, Tom-Christian Stokka"
      role="UI/UX Designer"
      duration="6 hours"
      tools="Figma"
      category1="UX Design"
      category2="UI Design" />
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
        image="buratino.png"
        image-link="v1652044733/portfolio/buratino/buratino.png"
        alt-text="Buratino Instruktino" />
    </main>
  </div>
</template>

<script>
import ProjectTags from "@/components/Project/ProjectTags.vue";
import ProjectTitle from "@/components/Project/ProjectTitle.vue";
import ColumnLeft from "@/components/Project/ColumnLeft.vue";
import ColumnRight from "@/components/Project/ColumnRight.vue";
import ProjectImage from "@/components/Project/ProjectImage.vue";
import BackButton from "@/components/BackButton.vue";

export default {
  name: "PolestarWebsite",
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
