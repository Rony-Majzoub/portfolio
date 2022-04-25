<template>
  <div class="projects">
    <ProjectTitle
      info="2020/2021 - Web Development"
      title="Buratino Instruktino"
      brief="Create a digital replacement for a physical instruction manual." />
    <div class="image hero">
      <img src="@/assets/img/buratino.png" alt="" />
    </div>
    <ProjectTags
      client="Buratino AB"
      team="Rony Majzoub, Casper Hansen, Viggo Fredriksson"
      role="UI/UX Designer, CSS Developer"
      duration="8 months"
      tools="Figma, Adobe Illustrator, Visual Studio Code"
      category1="Web Development"
      category2="UI Design"
      category3="UX Design"
      category4="User Testing"
      category5="Logo Design" />
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
        <img src="@/assets/img/buratino.png" alt="" />
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
  name: "Buratino",
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
