<template>
  <div class="grid grid-cols-10 col-start-2 col-end-[-2]">
    <BackButton />
    <ProjectTitle
      info="2018 - 3D Rendering"
      title="Anvil Render"
      brief="Model and sculpt a hi-res mesh, and bake detail into normal maps." />
    <ProjectImage
      class="mb-10"
      image="anvilrender.jpg"
      image-link="v1653259517/portfolio/fun/anvilrender.jpg"
      alt-text="Anvil Render" />
    <ProjectTags
      client="N/A"
      team="Rony Majzoub"
      role="3D Artist"
      duration="1 week"
      tools="Blender"
      category1="3D Rendering" />
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
  name: "AnvilRender",
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
