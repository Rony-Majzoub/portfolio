<template>
  <BackButton />
  <div
    class="grid grid-cols-10 col-start-2 col-end-[-2] max-lg:justify-items-center">
    <ProjectTitle
      info="2022/2023 — Motion Design"
      title="10A Arkitektur"
      brief="Animate the creation of a tailor-made logo." />
    <ProjectVideo
      class="mb-10"
      video="10a_logo_animation.mp4"
      video-link="v1681303739/portfolio/fun/10a/10a_logo_animation.mp4"
      thumbnail="Grid_2px_4K.webp"
      alt-text="10A Animation"
      bg-color="#000000"
      :autoplay="true"
      :controls="false"
      :loop="true"
      video-width="768"
      video-height="768" />
    <ProjectTags client="10A Arkitektur" duration="2 weeks" />
    <main class="grid col-span-full grid-cols-10 gap-y-8 lg:gap-y-16"></main>
  </div>
</template>

<script>
export default {
  name: "10A",
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
          teamName: "kolon.studio",
          portfolioLink: "https://kolon.studio/",
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
