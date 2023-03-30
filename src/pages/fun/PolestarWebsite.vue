<template>
  <BackButton />
  <div class="grid grid-cols-10 col-start-2 col-end-[-2]">
    <ProjectTitle
      info="2021 – UX Design"
      title="Polestar Website"
      brief="Improve the User Experience of a single page of the current Polestar 2 Website." />
    <ProjectImage
      class="mb-10"
      image="polestar_website.png"
      image-link="v1653261546/portfolio/fun/polestar_website/polestar_website.png"
      alt-text="Polestar Website"
      bg-color="#eaeae8" />
    <ProjectTags client="Polestar" duration="6 hours" />
    <main class="grid col-span-full grid-cols-10 gap-y-8 lg:gap-y-16"></main>
  </div>
</template>

<script>
export default {
  name: "PolestarWebsite",
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
          teamName: "Matthew Blaxland",
          portfolioLink: "https://www.matthewblaxland.com/",
        },
        {
          teamName: "Emil Torvaldsson",
          portfolioLink: "https://byemil.com/",
        },
        {
          teamName: "Emil Jerkersson",
          portfolioLink: "https://www.emildzgn.com/",
        },
        {
          teamName: "Juna Jakobsson",
          portfolioLink: "https://www.junajakobsson.com/",
        },
        {
          teamName: "Tom-Christian Stokka",
          portfolioLink: "https://tommen.design/",
        },
      ],
      // Data-list of categories to be shown in ProjectTags.
      categories: [
        {
          categoryName: "UX Design",
        },
        {
          categoryName: "UI Design",
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
