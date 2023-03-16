<template>
  <BackButton />
  <div class="grid grid-cols-10 col-start-2 col-end-[-2]">
    <ProjectTitle
      info="2018 – 3D Rendering"
      title="Anvil Render"
      brief="Model and sculpt a hi-res mesh, and bake detail into normal maps." />
    <ProjectImage
      class="mb-10"
      image="anvilrender.jpg"
      image-link="v1653259517/portfolio/fun/anvilrender.jpg"
      alt-text="Anvil Render"
      bg-color="#2b2c2c" />
    <ProjectTags
      client="N/A"
      role="3D Artist"
      duration="1 week"
      tools="Blender" />
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
          categoryName: "3D Rendering",
        },
      ],
    };
  },
};
</script>
