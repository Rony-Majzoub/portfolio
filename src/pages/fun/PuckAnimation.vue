<template>
  <BackButton />
  <div class="grid grid-cols-10 col-start-2 col-end-[-2]">
    <ProjectTitle
      info="2022 – 3D Animation"
      title="Puck Animation"
      brief="Create a looping 3D Animation in Blender." />
    <ProjectVideo
      class="mb-10"
      video="Puck_Render.mp4"
      video-link="v1654000302/portfolio/fun/Puck_Render.mp4"
      alt-text="Puck Animation" />
    <ProjectTags
      client="Yrgo DD21"
      team="Rony Majzoub"
      role="3D Artist"
      duration="1 week"
      tools="Blender"
      category1="3D Animation"
      category2="3D Materials"
      category3="3D Lighting" />
    <main class="grid col-span-full grid-cols-10 gap-y-8 lg:gap-y-16"></main>
  </div>
</template>

<script>
export default {
  name: "PuckAnimation",
};
</script>
