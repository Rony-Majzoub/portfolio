<template>
  <BackButton />
  <div class="grid grid-cols-10 col-start-2 col-end-[-2]">
    <ProjectTitle
      info="2017 – 3D Rendering"
      title="Donut Morning"
      brief="Create a 3D-scene, featuring a mix of modelling, materials, lighting, rendering and camera work." />
    <ProjectImage
      class="mb-10"
      image="donut_render.jpg"
      image-link="v1653259075/portfolio/fun/donut_render.jpg"
      alt-text="Donut Render"
      bg-color="#c5b8bc" />
    <ProjectTags
      client="N/A"
      team="Rony Majzoub"
      role="3D Artist"
      duration="2 weeks"
      tools="Blender"
      category1="3D Rendering"
      category2="3D Materials"
      category3="3D Modelling"
      category4="3D Lighting" />
    <main class="grid col-span-full grid-cols-10 gap-y-8 lg:gap-y-16"></main>
  </div>
</template>

<script>
export default {
  name: "DonutRender",
};
</script>
