<template>
  <BackButton />
  <div class="grid grid-cols-10 col-start-2 col-end-[-2]">
    <ProjectTitle
      info="2021 - UI & UX Design"
      title="RecyPie"
      brief="Create and design a modern, digital solution to a global problem." />
    <ProjectImage
      class="mb-10"
      image="recypie.png"
      image-link="v1652044733/portfolio/recypie/recypie.png"
      alt-text="RecyPie"
      link-text="View Prototype"
      link="https://www.figma.com/proto/XxGihqfhy88PjYtPlCpXSd/RecyPie-(Showreel)?page-id=0%3A1&node-id=181%3A3379&viewport=248%2C371%2C0.09&scaling=scale-down&starting-point-node-id=181%3A3379&show-proto-sidebar=1" />
    <ProjectTags
      client="Yrgo DD21"
      team="Rony Majzoub"
      role="UI Designer"
      duration="2 months"
      tools="Figma"
      category1="UI Design"
      category2="UX Design"
      category3="User Testing"
      category4="Prototyping" />
    <main class="grid col-span-full grid-cols-10 gap-y-8 lg:gap-y-16"></main>
  </div>
</template>

<script>
export default {
  name: "RecyPie",
};
</script>
