<template>
  <BackButton />
  <div class="grid grid-cols-10 col-start-2 col-end-[-2]">
    <ProjectTitle
      info="2022 – 3D Animation"
      title="Puck Animation"
      brief="Recreate a looping 3D Animation in Blender, originally created by Andreas Wannerstedt." />
    <ProjectVideo
      class="mb-10"
      video="Puck_Render.mp4"
      video-link="v1654000302/portfolio/fun/Puck_Render.mp4"
      alt-text="Puck Animation"
      link-text="View Inspiration"
      link="https://andreaswannerstedt.se/oddly-satisfying-vol8"
      bg-color="#c1a693" />
    <ProjectTags client="Yrgo DD21" role="3D Artist" duration="1 week" />
    <main class="grid col-span-full grid-cols-10 gap-y-8 lg:gap-y-16"></main>
  </div>
</template>

<script>
export default {
  name: "PuckAnimation",
  // Recover the data sent by components, to fill the props up.
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
      ],
      // Data-list of categories to be shown in ProjectTags.
      categories: [
        {
          categoryName: "3D Animation",
        },
        {
          categoryName: "3D Materials",
        },
        {
          categoryName: "3D Lighting",
        },
      ],
      // Data-list of tools to be shown in ProjectTags.
      tools: [
        {
          toolName: "Blender",
        },
      ],
    };
  },
};
</script>
