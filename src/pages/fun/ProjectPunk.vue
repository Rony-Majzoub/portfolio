<template>
  <div class="grid grid-cols-10 col-start-2 col-end-[-2]">
    <BackButton />
    <ProjectTitle
      info="2018 - 3D Rendering"
      title="Project Punk"
      brief="Create a 3D-scene that would visualize the idea for an upcoming gaming project." />
    <ProjectImage
      class="mb-10"
      image="project_punk.jpg"
      image-link="v1653259074/portfolio/fun/project_punk.jpg"
      alt-text="Project Punk" />
    <ProjectTags
      client="Buratino AB"
      team="Rony Majzoub"
      role="3D Artist"
      duration="2 months"
      tools="Blender"
      category1="3D Rendering"
      category2="3D Materials"
      category3="3D Modelling"
      category4="3D Lighting" />
    <main class="grid col-span-full grid-cols-10 gap-y-8 lg:gap-y-16"></main>
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
  name: "ProjectPunk",
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
