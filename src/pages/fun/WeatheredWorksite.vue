<template>
  <BackButton />
  <div
    class="grid grid-cols-10 col-start-2 col-end-[-2] max-lg:justify-items-center">
    <ProjectTitle
      info="2023 — 3D Rendering"
      title="Weathered Worksite"
      brief="Craft an engaging construction scene by leveraging cinematic lighting techniques and high-quality rendering features." />
    <ProjectImage
      class="mb-8"
      :contain="true"
      image="construction_final.jpg"
      image-link="v1691708250/portfolio/fun/construction_scene/construction_final.jpg"
      alt-text="Weathered Worksite"
      bg-color="#38332f"
      content-ratio="960 / 407" />
    <ProjectTags client="N/A" duration="1 week" />
    <main class="grid col-span-full grid-cols-10 gap-y-8 lg:gap-y-16"></main>
  </div>
</template>

<script>
export default {
  name: "WeatheredWorksite",
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
          categoryName: "3D Rendering",
        },
      ],
      // Data-list of tools to be shown in ProjectTags.
      tools: [
        {
          toolName: "Blender",
        },
        {
          toolName: "Quixel Megascans",
        },
      ],
      // Data-list of roles to be shown in ProjectTags.
      roles: [
        {
          roleName: "3D Artist",
        },
      ],
    };
  },
};
</script>
