<template>
  <BackButton />
  <div class="grid grid-cols-10 col-start-2 col-end-[-2]">
    <ProjectTitle
      info="2021 – UX/UI Design"
      title="Shuu"
      brief="Create a landing page for a clothing brand, in a short amount of time." />
    <ProjectImage
      class="mb-10"
      image="shuu_hero.png"
      image-link="v1653261250/portfolio/fun/shuu/shuu_hero.png"
      alt-text="Shuu"
      bg-color="#252221" />
    <ProjectTags client="Yrgo DD21" role="UI/UX Designer" duration="6 hours" />
    <main class="grid col-span-full grid-cols-10 gap-y-8 lg:gap-y-16"></main>
  </div>
</template>

<script>
export default {
  name: "Shuu",
  provide() {
    // use function syntax so that we can access `this`
    return {
      team: this.team,
      categories: this.categories,
      tools: this.tools,
    };
  },
  data() {
    return {
      // Data-list of names and portfolio-links to be shown in ProjectTags.
      team: [
        {
          teamName: "Rony Majzoub",
        },
        {
          teamName: "Christofer Schwarz",
        },
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
      ],
      // Data-list of tools to be shown in ProjectTags.
      tools: [
        {
          toolName: "Figma",
        },
      ],
    };
  },
};
</script>
