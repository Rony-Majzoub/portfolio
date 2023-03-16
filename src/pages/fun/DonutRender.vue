<template>
  <BackButton />
  <div class="grid grid-cols-10 col-start-2 col-end-[-2]">
    <ProjectTitle
      info="2017 – 3D Rendering"
      title="Donut Scene"
      brief="Create the iconic 3D-donut scene in Blender, featuring a mix of modelling, materials, lighting, rendering and camera work." />
    <ProjectGallery
      class="mb-10"
      title=""
      description=""
      gallery-color="var(--eggplant)" />
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
          url: "v1653259075/portfolio/fun/donut_render.jpg",
          alt: "Donut Morning",
          imageText: "Scene set in the morning.",
          src: "donut_render.jpg",
          imageColor: "#c5b8bc",
        },
        {
          url: "v1653259523/portfolio/fun/Donut_Night_Render.png",
          alt: "Donut Night",
          imageText: "Alternate scene set in the night.",
          src: "donut_night_render.png",
          imageColor: "#14191e",
        },
      ],
    };
  },
};
</script>
