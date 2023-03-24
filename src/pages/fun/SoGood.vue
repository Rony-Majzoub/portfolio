<template>
  <BackButton />
  <div class="grid grid-cols-10 col-start-2 col-end-[-2]">
    <ProjectTitle
      info="2022 – Product Visualization"
      title="So Good"
      brief="Design and visualize a product in 3D." />
    <ProjectImage
      class="mb-10"
      image="so_good.png"
      image-link="v1653258131/portfolio/fun/so_good/so_good.png"
      alt-text="So Good"
      bg-color="#e280c7" />
    <ProjectTags
      client="Yrgo DD21"
      role="Product Designer, 3D Artist"
      duration="1 month" />
    <main class="grid col-span-full grid-cols-10 gap-y-8 lg:gap-y-16"></main>
  </div>
</template>

<script>
export default {
  name: "SoGood",
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
      // Data-list of categories to be shown in ProjectTags.
      categories: [
        {
          categoryName: "Product Design",
        },
        {
          categoryName: "3D Rendering",
        },
      ],
      // Data-list of tools to be shown in ProjectTags.
      tools: [
        {
          toolName: "Adobe Illustrator",
        },
        {
          toolName: "Adobe Dimensions",
        },
      ],
    };
  },
};
</script>
