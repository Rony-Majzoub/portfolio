<template>
  <BackButton />
  <div
    class="grid grid-cols-10 col-start-2 col-end-[-2] max-lg:justify-items-center">
    <ProjectTitle
      info="2017 — 3D Rendering"
      title="Brick Wall"
      brief="Create a 3D-image by only utilizing a high-quality texture." />
    <ProjectImage
      class="mb-8"
      image="brick_wall.jpg"
      image-link="v1653259074/portfolio/fun/Brick_Wall.jpg"
      alt-text="Brick Wall"
      bg-color="#4d443f" />
    <ProjectTags client="N/A" duration="1 week" tools="Blender" />
    <main class="grid col-span-full grid-cols-10 gap-y-8 lg:gap-y-16"></main>
  </div>
</template>

<script>
export default {
  name: "BrickWall",
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
