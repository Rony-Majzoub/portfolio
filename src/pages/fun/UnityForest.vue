<template>
  <BackButton />
  <div class="grid grid-cols-10 col-start-2 col-end-[-2]">
    <ProjectTitle
      info="2022 – 3D Rendering"
      title="Dark Forest"
      brief="Create a graphically impressive scene in Unity Engine, with the use of pre-existing 3D-assets." />
    <ProjectImage
      class="mb-10"
      image="Unity_Forest.png"
      image-link="v1654173537/portfolio/fun/Unity_Forest.png"
      alt-text="Unity Forest" />
    <ProjectTags
      client="N/A"
      team="Rony Majzoub"
      role="3D Artist"
      duration="2 weeks"
      tools="Unity Engine"
      category1="3D Rendering"
      category2="3D Materials"
      category3="3D Modelling"
      category4="3D Lighting" />
    <main class="grid col-span-full grid-cols-10 gap-y-8 lg:gap-y-16"></main>
  </div>
</template>

<script>
export default {
  name: "UnityForest",
};
</script>
