<template>
  <BackButton />
  <div
    class="grid grid-cols-10 col-start-2 col-end-[-2] max-lg:justify-items-center">
    <ProjectTitle
      info="2020/2021 – Web Development"
      title="Buratino Instruktino"
      brief="Create a digital replacement for a physical instruction manual." />
    <ProjectImage
      class="mb-10"
      image="buratino.png"
      image-link="v1652044733/portfolio/buratino/buratino.png"
      alt-text="Buratino Instruktino"
      link-text="View Website"
      link="https://app.buratino.se/"
      bg-color="#ba0909" />
    <ProjectTags client="Buratino AB" duration="8 months" />
    <main class="grid col-span-full grid-cols-10 gap-y-8 lg:gap-y-16"></main>
  </div>
</template>

<script>
export default {
  name: "Buratino",
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
      // Data-list of names and portfolio-links to be shown in ProjectTags.
      team: [
        {
          teamName: "Casper Hansen",
        },
        {
          teamName: "Viggo Fredriksson",
        },
      ],
      // Data-list of categories to be shown in ProjectTags.
      categories: [
        {
          categoryName: "Web Development",
        },
        {
          categoryName: "UI Design",
        },
        {
          categoryName: "UX Design",
        },
        {
          categoryName: "User Testing",
        },
        {
          categoryName: "Logo Design",
        },
      ],
      // Data-list of tools to be shown in ProjectTags.
      tools: [
        {
          toolName: "Figma",
        },
        {
          toolName: "Adobe Illustrator",
        },
        {
          toolName: "Visual Studio Code",
        },
      ],
      // Data-list of roles to be shown in ProjectTags.
      roles: [
        {
          roleName: "UI/UX Designer",
        },
        {
          roleName: "Web Developer",
        },
      ],
    };
  },
};
</script>
