<template>
  <BackButton />
  <div
    class="grid grid-cols-10 col-start-2 col-end-[-2] max-lg:justify-items-center">
    <ProjectTitle
      info="2023 — Web Development & Design"
      title="Potatisen"
      brief="Design and create a website for the restaurant/bar Potatisen, with an easy-to-use CMS." />
    <ProjectImage
      class="mb-8"
      image="potatisen.jpg"
      image-link="v1704461804/portfolio/fun/potatisen/potatisen.webp"
      alt-text="Potatisen"
      link-text="View Website"
      link="https://www.restaurang-potatisen.se/"
      bg-color="#0D0C0C" />
    <ProjectTags client="Potatisen" duration="4 weeks" />
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
      // Data-list of categories to be shown in ProjectTags.
      categories: [
        {
          categoryName: "Web Development",
        },
        {
          categoryName: "Web Design",
        },
        {
          categoryName: "Content Management Systems",
        },
      ],
      // Data-list of tools to be shown in ProjectTags.
      tools: [
        {
          toolName: "Figma",
        },
        {
          toolName: "Nuxt",
        },
        {
          toolName: "Sanity CMS",
        },
        {
          toolName: "Vercel",
        },
      ],
      // Data-list of roles to be shown in ProjectTags.
      roles: [
        {
          roleName: "Web Developer",
        },
        {
          roleName: "Web Designer",
        },
      ],
    };
  },
};
</script>
