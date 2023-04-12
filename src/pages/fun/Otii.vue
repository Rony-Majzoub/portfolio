<template>
  <BackButton />
  <div
    class="grid grid-cols-10 col-start-2 col-end-[-2] max-lg:justify-items-center">
    <ProjectTitle
      info="2022 – UX/UI Design"
      title="Otii"
      brief="Conceptualize a mindful app that assists mothers with breastfeeding." />
    <ProjectImage
      class="mb-10"
      image="otii_hero.png"
      image-link="v1681288212/portfolio/fun/otii/otii_hero.png"
      alt-text="Otii"
      link-text="View Prototype"
      link="https://www.figma.com/proto/aUlHTd0IJNcnLPpsiRhlhD/FemTech-Design-(Personal-Copy)?page-id=1229%3A944&node-id=1253-4966&viewport=-2762%2C454%2C0.14&scaling=scale-down&starting-point-node-id=1253%3A4966"
      bg-color="#A191F2" />
    <ProjectTags client="Yrgo DD21, DAYA, OTII Health" duration="6 weeks" />
    <main class="grid col-span-full grid-cols-10 gap-y-8 lg:gap-y-16"></main>
  </div>
</template>

<script>
export default {
  name: "Ooti",
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
          teamName: "Emil Torvaldsson",
          portfolioLink: "https://byemil.com/",
        },
        {
          teamName: "Matthew Blaxland",
          portfolioLink: "https://www.matthewblaxland.com/",
        },
        {
          teamName: "Samuel Boquist",
          portfolioLink: "https://www.samuelboquist.se/",
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
          categoryName: "UX Research",
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
        {
          roleName: "Motion Designer",
        },
      ],
    };
  },
};
</script>
