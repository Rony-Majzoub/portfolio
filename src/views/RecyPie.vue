<template>
  <div class="projects">
    <ProjectTitle
      info="2021 - UI & UX Design"
      title="RecyPie"
      brief="Create and design a modern, digital solution to a global problem." />
    <div class="image hero">
      <img src="@/assets/img/recypie.png" alt="" />
    </div>
    <ProjectTags
      client="Yrgo DD21"
      team="Myself"
      role="UI Designer"
      duration="2 months"
      tools="Figma"
      category1="UI Design"
      category2="UX Design"
      category3="User Testing"
      category4="Prototyping" />
    <main class="project-grid">
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
      <div class="image">
        <img src="@/assets/img/recypie.png" alt="" />
      </div>
    </main>
  </div>
</template>

<script>
import ProjectTags from "@/components/Project/ProjectTags.vue";
import ProjectTitle from "@/components/Project/ProjectTitle.vue";
import ColumnLeft from "@/components/Project/ColumnLeft.vue";
import ColumnRight from "@/components/Project/ColumnRight.vue";

export default {
  name: "RecyPie",
  components: {
    ProjectTags,
    ProjectTitle,
    ColumnLeft,
    ColumnRight,
  },
};
</script>

<style lang="scss" scoped>
.projects {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-column: 2 / -2;
}
.project-grid {
  display: grid;
  grid-column: 1 / -1;
  grid-template-columns: repeat(10, 1fr);
  row-gap: 5rem;
}
.hero {
  margin: 3rem 0 5rem 0;
}
.image {
  grid-column: 1 / -1;
  position: relative;
  padding: 0rem 0 56.25% 0;
  max-width: 100%;
  max-height: 50%;
  img {
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
    object-position: center 60%;
  }
}
</style>
