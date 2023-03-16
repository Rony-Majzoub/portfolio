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
      alt-text="Unity Forest"
      bg-color="#1a1f30" />
    <ProjectTags
      client="N/A"
      role="3D Artist"
      duration="2 weeks"
      tools="Unity Engine" />
    <main class="grid col-span-full grid-cols-10 gap-y-8 lg:gap-y-16"></main>
  </div>
</template>

<script>
export default {
  name: "UnityForest",
  // Recover the data sent by components, to fill the props up.
  provide() {
    // use function syntax so that we can access `this`
    return {
      team: this.team,
      categories: this.categories,
    };
  },
  data() {
    return {
      // Data-list of names and portfolio-links to be shown in ProjectTags.
      team: [
        {
          teamName: "Rony Majzoub",
        },
      ],
      // Data-list of categories to be shown in ProjectTags.
      categories: [
        {
          categoryName: "3D Rendering",
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
    };
  },
};
</script>
