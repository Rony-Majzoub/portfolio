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
      alt-text="Spices of Gaming" />
    <ProjectTags
      client="Yrgo DD21"
      team="Rony Majzoub"
      role="Animator"
      duration="2 weeks"
      tools="Adobe After Effects, Adobe Illustrator"
      category1="Motion Graphics"
      category2="2D Animation" />
    <main class="grid col-span-full grid-cols-10 gap-y-8 lg:gap-y-16"></main>
  </div>
</template>

<script>
export default {
  name: "SpicesofGaming",
};
</script>
