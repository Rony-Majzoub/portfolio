<template>
  <BackButton />
  <div class="grid grid-cols-10 col-start-2 col-end-[-2]">
    <ProjectTitle
      info="2021 – Motion Graphics"
      title="Spices of Gaming"
      brief="Create a 2D animation in After Effects, based off a previously made Infographic." />
    <ProjectVideo
      class="mb-10"
      video="spices_of_gaming.mp4"
      video-link="v1654003119/portfolio/fun/spices_of_gaming.mp4"
      alt-text="Spices of Gaming"
      bg-color="#3c3444" />
    <ProjectTags
      client="Yrgo DD21"
      role="Animator"
      duration="2 weeks"
      tools="Adobe After Effects, Adobe Illustrator" />
    <main class="grid col-span-full grid-cols-10 gap-y-8 lg:gap-y-16"></main>
  </div>
</template>

<script>
export default {
  name: "SpicesofGaming",
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
          categoryName: "Motion Graphics",
        },
        {
          categoryName: "2D Animation",
        },
      ],
    };
  },
};
</script>
