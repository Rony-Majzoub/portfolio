<template>
  <div class="grid grid-cols-10 col-start-2 col-end-[-2]">
    <BackButton />
    <ProjectTitle
      info="2020 - 3D Rendering"
      title="NTI-Awards 2020"
      brief="Submit a rendered 3D-scene to a competition at NTI-Gymnasiet." />
    <ProjectImage
      class="mb-10"
      image="nti_awards.jpg"
      image-link="v1653259075/portfolio/fun/nti_awards.jpg"
      alt-text="NTI Awards" />
    <ProjectTags
      client="NTI-Gymnasiet"
      team="Rony Majzoub"
      role="3D Artist"
      duration="3 weeks"
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
  name: "NTIAwards",
};
</script>
