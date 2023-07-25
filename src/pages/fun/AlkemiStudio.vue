<template>
  <BackButton />
  <div
    class="grid grid-cols-10 col-start-2 col-end-[-2] max-lg:justify-items-center">
    <ProjectTitle
      info="2023 — Motion Design"
      title="Alkemi Studio"
      brief="Animate the transformation of Alkemi Studio's old and new identity, as well as the different states of the new logo." />
    <ProjectVideo
      class="mb-8"
      video="alkemi_studio_logo_collection.mp4"
      video-link="v1690301692/portfolio/fun/alkemi_studio/alkemi_studio_logo_collection.mp4"
      alt-text="Alkemi Studio Logo Animation"
      description="The different states of the logo, currently used in their website."
      link-text="View the Result"
      link="https://alkemi.studio/"
      bg-color="#ffffff"
      content-ratio="1 / 1"
      :autoplay="true"
      :controls="false"
      :loop="true"
      :muted="true"
      video-width="768"
      video-height="768" />
    <ProjectTags client="Alkemi Studio" duration="3 weeks" />
    <main class="grid col-span-full grid-cols-10 gap-y-8 lg:gap-y-16"></main>
  </div>
</template>

<script>
export default {
  name: "AlkemiStudio",
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
          teamName: "Alkemi Studio",
          portfolioLink: "https://alkemi.studio/",
        },
      ],
      // Data-list of categories to be shown in ProjectTags.
      categories: [
        {
          categoryName: "Motion Graphics",
        },
        {
          categoryName: "2D Animation",
        },
      ],
      // Data-list of tools to be shown in ProjectTags.
      tools: [
        {
          toolName: "Adobe After Effects",
        },
        {
          toolName: "Adobe Illustrator",
        },
      ],
      // Data-list of roles to be shown in ProjectTags.
      roles: [
        {
          roleName: "Motion Designer",
        },
      ],
    };
  },
};
</script>
