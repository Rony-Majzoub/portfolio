<template>
  <div class="grid grid-cols-10 col-start-2 col-end-[-2]">
    <BackButton />
    <ProjectTitle
      info="2021 - UX/UI Design"
      title="Shuu"
      brief="Create a landing page for a clothing brand, in a short amount of time." />
    <ProjectImage
      class="mb-10"
      image="shuu_hero.png"
      image-link="v1653261250/portfolio/fun/shuu/shuu_hero.png"
      alt-text="Shuu" />
    <ProjectTags
      client="Yrgo DD21"
      team="Rony Majzoub, 
      Christofer Schwarz, 
      Linnea Kvammen"
      role="UI/UX Designer"
      duration="6 hours"
      tools="Figma"
      category1="UI Design"
      category2="UX Design" />
    <main class="grid col-span-full grid-cols-10 gap-y-8 lg:gap-y-16"></main>
  </div>
</template>

<script>
export default {
  name: "Shuu",
};
</script>
