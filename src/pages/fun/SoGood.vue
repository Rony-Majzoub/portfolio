<template>
  <BackButton />
  <div class="grid grid-cols-10 col-start-2 col-end-[-2]">
    <ProjectTitle
      info="2022 - Product Visualization"
      title="So Good"
      brief="Design and visualize a product in 3D." />
    <ProjectImage
      class="mb-10"
      image="so_good.png"
      image-link="v1653258131/portfolio/fun/so_good/so_good.png"
      alt-text="So Good" />
    <ProjectTags
      client="Yrgo DD21"
      team="Rony Majzoub"
      role="Product Designer, 3D Artist"
      duration="1 month"
      tools="Adobe Illustrator, Adobe Dimensions"
      category1="Product Design"
      category2="3D Rendering" />
    <main class="grid col-span-full grid-cols-10 gap-y-8 lg:gap-y-16"></main>
  </div>
</template>

<script>
export default {
  name: "SoGood",
};
</script>
