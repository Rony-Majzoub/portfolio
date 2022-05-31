<template>
  <BackButton />
  <div class="grid grid-cols-10 col-start-2 col-end-[-2]">
    <ProjectTitle
      info="2020 – UX/UI Design"
      title="Information Screen"
      brief="Create a digital information screen, for improving a student's daily life." />
    <ProjectImage
      class="mb-10"
      image="connected.png"
      image-link="v1653262038/portfolio/fun/connected/connected.png"
      alt-text="Information Screen"
      link-text="View Prototype"
      link="https://www.figma.com/proto/u42r5PXx0GWbZ49rgq1ODa/I'm-Connected-(Showreel)?page-id=0%3A1&node-id=84%3A673&viewport=250%2C541%2C0.14&scaling=scale-down&starting-point-node-id=84%3A673" />

    <ProjectTags
      client="NTI-Gymnasiet"
      team="Rony Majzoub"
      role="UI/UX Designer"
      duration="2 months"
      tools="Figma"
      category1="UI Design"
      category2="UX Design"
      category3="User Testing" />
    <main class="grid col-span-full grid-cols-10 gap-y-8 lg:gap-y-16"></main>
  </div>
</template>

<script>
export default {
  name: "InfoScreen",
};
</script>
