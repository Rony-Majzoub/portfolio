<template>
  <div class="grid grid-cols-10 col-start-2 col-end-[-2]">
    <BackButton />
    <ProjectTitle
      info="2018 - 3D Rendering"
      title="Anvil Render"
      brief="Model and sculpt a hi-res mesh, and bake detail into normal maps." />
    <ProjectImage
      class="mb-10"
      image="anvilrender.jpg"
      image-link="v1653259517/portfolio/fun/anvilrender.jpg"
      alt-text="Anvil Render" />
    <ProjectTags
      client="N/A"
      team="Rony Majzoub"
      role="3D Artist"
      duration="1 week"
      tools="Blender"
      category1="3D Rendering" />
    <main class="grid col-span-full grid-cols-10 gap-y-8 lg:gap-y-16"></main>
  </div>
</template>

<script>
export default {
  name: "AnvilRender",
};
</script>
