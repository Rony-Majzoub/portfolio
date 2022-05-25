<template>
  <div class="grid grid-cols-10 col-start-2 col-end-[-2]">
    <BackButton />
    <ProjectTitle
      info="2021 - UX/UI Design"
      title="Vacina"
      brief="Create and design a digital app to improve the experience and ease of vaccinating." />
    <ProjectImage
      class="mb-10"
      image="vacina.png"
      image-link="v1653260886/portfolio/fun/vacina/vacina.png"
      alt-text="Vacina" />
    <ProjectTags
      client="Yrgo DD21"
      team="Rony Majzoub, Linnea Kvammen"
      role="UI/UX Designer"
      duration="2 weeks"
      tools="Figma"
      category1="UI Design"
      category2="UX Design"
      category3="User Testing"
      category4="Logo Design" />
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
  name: "Vacina",
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
