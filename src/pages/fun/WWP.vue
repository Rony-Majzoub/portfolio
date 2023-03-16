<template>
  <BackButton />
  <div class="grid grid-cols-10 col-start-2 col-end-[-2]">
    <ProjectTitle
      info="2023 – Motion Design"
      title="World Wide Padel"
      brief="Create a 2D animation for a Success/404 page, as well as social media content." />
    <ProjectVideo
      class="mb-10"
      video="spices_of_gaming.mp4"
      video-link="v1654003119/portfolio/fun/spices_of_gaming.mp4"
      alt-text="Spices of Gaming"
      bg-color="#3c3444" />
    <ProjectTags
      client="World Wide Padel"
      team="kolon.studio"
      role="Motion Designer"
      duration="2 weeks"
      tools="Adobe After Effects, Adobe Illustrator"
      category1="Motion Graphics"
      category2="2D Animation" />
    <main class="grid col-span-full grid-cols-10 gap-y-8 lg:gap-y-16"></main>
  </div>
</template>

<script>
export default {
  name: "WWP",
};
</script>
