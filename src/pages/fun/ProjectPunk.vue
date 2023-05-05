<template>
  <BackButton />
  <div
    class="grid grid-cols-10 col-start-2 col-end-[-2] max-lg:justify-items-center">
    <ProjectTitle
      info="2018 — 3D Rendering"
      title="Project Punk"
      brief="Create a 3D-scene that would visualize the idea for an upcoming gaming project." />
    <ProjectImage
      class="mb-8"
      image="project_punk.png"
      image-link="v1683308367/portfolio/fun/project_punk.png"
      alt-text="Project Punk"
      bg-color="#44332f" />
    <ProjectTags client="N/A" duration="2 months" />
    <main class="grid col-span-full grid-cols-10 gap-y-8 lg:gap-y-16"></main>
  </div>
</template>

<script>
export default {
  name: "ProjectPunk",

  // Send Gallery Array down to ProjectGallery component for dynamic images.
  // Recover the data sent by components, to fill the props up.
  provide() {
    // use function syntax so that we can access `this`
    return {
      pictures: this.pictures,
      team: this.team,
      categories: this.categories,
      tools: this.tools,
      roles: this.roles,
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

      // Data-list of categories to be shown in ProjectTags.
      categories: [
        {
          categoryName: "3D Animation",
        },
        {
          categoryName: "3D Materials",
        },
        {
          categoryName: "3D Modelling",
        },
        {
          categoryName: "3D Lighting",
        },
      ],
      // Data-list of tools to be shown in ProjectTags.
      tools: [
        {
          toolName: "Blender",
        },
      ],
      // Data-list of roles to be shown in ProjectTags.
      roles: [
        {
          roleName: "3D Artist",
        },
      ],
    };
  },
};
</script>
