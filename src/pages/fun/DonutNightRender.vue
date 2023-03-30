<template>
  <BackButton />
  <div
    class="grid grid-cols-10 col-start-2 col-end-[-2] max-lg:justify-items-center">
    <ProjectTitle
      info="2017 – 3D Rendering"
      title="Donut Night"
      brief="Create an alternate version of a previous render." />
    <ProjectImage
      class="mb-10"
      image="donut_night_render.png"
      image-link="v1653259523/portfolio/fun/Donut_Night_Render.png"
      alt-text="Donut Night Render"
      bg-color="#14191e" />
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
  name: "DonutNightRender",
};
</script>
