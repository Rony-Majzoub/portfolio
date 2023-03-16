<template>
  <BackButton />
  <div class="grid grid-cols-10 col-start-2 col-end-[-2]">
    <ProjectTitle
      info="2018 – 3D Rendering"
      title="Project Punk"
      brief="Create a 3D-scene that would visualize the idea for an upcoming gaming project." />
    <ProjectGallery
      class="mb-10"
      title=""
      description=""
      gallery-color="var(--eggplant)" />
    <!-- <ProjectImage
      class="mb-10"
      image="project_punk.jpg"
      image-link="v1653259074/portfolio/fun/project_punk.jpg"
      alt-text="Project Punk"
      bg-color="#3e2a21" /> -->
    <ProjectTags
      client="N/A"
      team="Rony Majzoub"
      role="3D Artist"
      duration="2 months"
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
  name: "ProjectPunk",

  // Send Gallery Array down to ProjectGallery component for dynamic images.
  provide() {
    // use function syntax so that we can access `this`
    return {
      pictures: this.pictures,
    };
  },
  // Data-list of images to be shown in ProjectGallery.
  data() {
    return {
      pictures: [
        {
          url: "v1653259074/portfolio/fun/project_punk.jpg",
          alt: "Project Punk",
          imageText: "",
          src: "project_punk.jpg",
          imageColor: "#3e2a21",
        },
        {
          url: "v1653259075/portfolio/fun/nti_awards.jpg",
          alt: "NTI Awards",
          imageText: "",
          src: "nti_awards.jpg",
          imageColor: "#3c302d",
        },
      ],
    };
  },
};
</script>
