<template>
  <BackButton />
  <div
    class="grid grid-cols-10 col-start-2 col-end-[-2] max-lg:justify-items-center">
    <ProjectTitle
      info="2018 — 3D Rendering"
      title="Anvil Render"
      brief="Model and sculpt a hi-res mesh, and bake detail into normal maps." />
    <ProjectImage
      class="mb-8"
      image="anvilrender.jpg"
      image-link="v1653259517/portfolio/fun/anvilrender.jpg"
      alt-text="Anvil Render"
      bg-color="#2b2c2c" />
    <ProjectTags client="N/A" duration="1 week" />
    <main class="grid col-span-full grid-cols-10 gap-y-8 lg:gap-y-16"></main>
  </div>
</template>

<script>
export default {
  name: "AnvilRender",
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
