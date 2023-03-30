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
      link="https://www.figma.com/proto/u42r5PXx0GWbZ49rgq1ODa/I'm-Connected-(Showreel)?page-id=0%3A1&node-id=84%3A673&viewport=250%2C541%2C0.14&scaling=scale-down&starting-point-node-id=84%3A673"
      bg-color="#242323" />

    <ProjectTags client="NTI-Johanneberg" duration="2 months" />
    <main class="grid col-span-full grid-cols-10 gap-y-8 lg:gap-y-16"></main>
  </div>
</template>

<script>
export default {
  name: "InfoScreen",
  // Recover the data sent by components, to fill the props up.
  provide() {
    // use function syntax so that we can access `this`
    return {
      team: this.team,
      categories: this.categories,
      tools: this.tools,
      roles: this.roles,
    };
  },
  data() {
    return {
      // Data-list of categories to be shown in ProjectTags.
      categories: [
        {
          categoryName: "UI Design",
        },
        {
          categoryName: "UX Design",
        },
        {
          categoryName: "User Testing",
        },
      ],
      // Data-list of tools to be shown in ProjectTags.
      tools: [
        {
          toolName: "Figma",
        },
      ],
      // Data-list of roles to be shown in ProjectTags.
      roles: [
        {
          roleName: "UI/UX Designer",
        },
      ],
    };
  },
};
</script>
