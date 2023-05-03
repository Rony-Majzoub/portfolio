<template>
  <BackButton />
  <div
    class="grid grid-cols-10 col-start-2 col-end-[-2] max-lg:justify-items-center">
    <ProjectTitle
      info="2021 — Motion Graphics"
      title="Spices of Gaming"
      brief="Create a 2D animation in After Effects, based off a previously made Infographic." />
    <ProjectVideo
      class="mb-8"
      video="spices_of_gaming.mp4"
      video-link="v1654003119/portfolio/fun/spices_of_gaming.mp4"
      thumbnail="Spices_of_Gaming_Poster.webp"
      alt-text="Spices of Gaming"
      bg-color="transparent"
      content-ratio="1 / 1"
      :autoplay="true"
      :controls="false"
      :loop="true"
      :muted="true"
      video-width="768"
      video-height="768" />
    <ProjectTags client="Yrgo DD21" duration="2 weeks" />
    <main class="grid col-span-full grid-cols-10 gap-y-8 lg:gap-y-16"></main>
  </div>
</template>

<script>
export default {
  name: "SpicesofGaming",
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
