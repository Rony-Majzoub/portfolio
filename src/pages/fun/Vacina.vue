<template>
  <BackButton />
  <div
    class="grid grid-cols-10 col-start-2 col-end-[-2] max-lg:justify-items-center">
    <ProjectTitle
      info="2021 — UX/UI Design"
      title="Vacina"
      brief="Create and design a digital app to improve the experience and ease of vaccinating." />
    <ProjectImage
      class="mb-10"
      image="vacina.png"
      image-link="v1653260886/portfolio/fun/vacina/vacina.png"
      alt-text="Vacina"
      link-text="View Prototype"
      link="https://www.figma.com/proto/jfnsuqMbfLqnUqfpXwBepc/Vacina-(Showreel)?page-id=7%3A141&node-id=23%3A125&viewport=238%2C509%2C0.17&scaling=scale-down&starting-point-node-id=23%3A125"
      bg-color="#a2d1fa" />
    <ProjectTags client="Yrgo DD21" duration="2 weeks" />
    <main class="grid col-span-full grid-cols-10 gap-y-8 lg:gap-y-16"></main>
  </div>
</template>

<script>
export default {
  name: "Vacina",
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
      // Data-list of names and portfolio-links to be shown in ProjectTags.
      team: [
        {
          teamName: "Linnea Kvammen",
          portfolioLink: "https://www.kvammen.se/",
        },
      ],
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
          categoryName: "Logo Design",
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
