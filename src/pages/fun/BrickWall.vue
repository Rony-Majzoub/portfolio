<template>
  <BackButton />
  <div class="grid grid-cols-10 col-start-2 col-end-[-2]">
    <ProjectTitle
      info="2017 – 3D Rendering"
      title="Brick Wall"
      brief="Create a 3D-image by only utilizing a high-quality texture." />
    <ProjectImage
      class="mb-10"
      image="brick_wall.jpg"
      image-link="v1653259074/portfolio/fun/Brick_Wall.jpg"
      alt-text="Brick Wall" />
    <ProjectTags
      client="N/A"
      team="Rony Majzoub"
      role="3D Artist"
      duration="1 week"
      tools="Blender"
      category1="3D Rendering"
      category2="3D Materials"
      category3="3D Lighting" />
    <main class="grid col-span-full grid-cols-10 gap-y-8 lg:gap-y-16"></main>
  </div>
</template>

<script>
export default {
  name: "BrickWall",
};
</script>
