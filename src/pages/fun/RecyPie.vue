<template>
  <BackButton />
  <div class="grid grid-cols-10 col-start-2 col-end-[-2]">
    <ProjectTitle
      info="2021 – UI & UX Design"
      title="RecyPie"
      brief="Create and design a modern, digital solution to a global problem." />
    <ProjectImage
      class="mb-10"
      image="recypie.png"
      image-link="v1652044733/portfolio/recypie/recypie.png"
      alt-text="RecyPie"
      link-text="View Prototype"
      link="https://www.figma.com/proto/XxGihqfhy88PjYtPlCpXSd/RecyPie-(Showreel)?page-id=0%3A1&node-id=181%3A3379&viewport=248%2C371%2C0.09&scaling=scale-down&starting-point-node-id=181%3A3379&show-proto-sidebar=1"
      bg-color="#b1e0c7" />
    <ProjectTags client="Yrgo DD21" duration="2 months" />
    <main class="grid col-span-full grid-cols-10 gap-y-8 lg:gap-y-16"></main>
  </div>
</template>

<script>
export default {
  name: "RecyPie",
  // Recover the data sent by components, to fill the props up.
  provide() {
    // use function syntax so that we can access `this`
    return {
      team: this.team,
      categories: this.categories,
      tools: this.tools,
      roles: this.roles,
    };
  },
  data() {
    return {
      // Data-list of categories to be shown in ProjectTags.
      categories: [
        {
          categoryName: "UI Design",
        },
        {
          categoryName: "UX Design",
        },
        {
          categoryName: "User Testing",
        },
        {
          categoryName: "Prototyping",
        },
      ],
      // Data-list of tools to be shown in ProjectTags.
      tools: [
        {
          toolName: "Figma",
        },
      ],
      // Data-list of roles to be shown in ProjectTags.
      roles: [
        {
          roleName: "UI/UX Designer",
        },
      ],
    };
  },
};
</script>
