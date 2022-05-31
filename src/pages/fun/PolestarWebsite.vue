<template>
  <BackButton />
  <div class="grid grid-cols-10 col-start-2 col-end-[-2]">
    <ProjectTitle
      info="2021 – UX Design"
      title="Polestar Website"
      brief="Improve the User Experience of a single page of the current Polestar 2 Website." />
    <ProjectImage
      class="mb-10"
      image="polestar_website.png"
      image-link="v1653261546/portfolio/fun/polestar_website/polestar_website.png"
      alt-text="Polestar Website" />
    <ProjectTags
      client="Polestar"
      team="Rony Majzoub, 
      Matthew Blaxland, 
      Emil Torvaldsson, 
      Emil Jerkersson, 
      Juna Jakobsson, 
      Tom-Christian Stokka"
      role="UI/UX Designer"
      duration="6 hours"
      tools="Figma"
      category1="UX Design"
      category2="UI Design" />
    <main class="grid col-span-full grid-cols-10 gap-y-8 lg:gap-y-16"></main>
  </div>
</template>

<script>
export default {
  name: "PolestarWebsite",
};
</script>
