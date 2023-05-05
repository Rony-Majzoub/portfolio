<template>
  <BackButton />
  <div
    class="grid grid-cols-10 col-start-2 col-end-[-2] max-lg:justify-items-center">
    <ProjectTitle
      info="2023 — Motion Design"
      title="World Wide Padel"
      brief="Create a 2D animation for a Success/404 page, as well as social media content." />
    <ProjectVideo
      class="mb-8"
      video="WWP_Scroll.mp4"
      thumbnail="WWP_Scroll.webp"
      video-link="v1682414977/portfolio/fun/wwp/WWP_Scroll_H264.mp4"
      alt-text="Animation that conveys the use of snap-scrolling on the website."
      description="Animation that conveys the use of snap-scrolling on the website."
      bg-color="#000000"
      content-ratio="1 / 1"
      :autoplay="true"
      :controls="false"
      :loop="true"
      :muted="true"
      video-width="768"
      video-height="768" />
    <ProjectTags client="World Wide Padel" duration="2 weeks" />
    <main class="grid col-span-full grid-cols-10 gap-y-8 lg:gap-y-16">
      <div
        class="col-span-full lg:col-start-2 lg:col-end-[-2] flex flex-col lg:grid lg:grid-flow-col lg:auto-cols-[1fr] gap-8">
        <ProjectVideoNew
          video="WWP_M_404.mp4"
          thumbnail="WWP_M_404.webp"
          alt-text="404 Page Mobile Variant"
          description="404 Page — Mobile Variant"
          bg-color="#eeff59"
          :dual="true"
          :autoplay="true"
          :controls="false"
          :loop="true"
          :muted="true" />
        <ProjectVideoNew
          video="WWP_M_Success.mp4"
          thumbnail="WWP_M_Success.webp"
          alt-text="Success Mobile Variant"
          description="Success Page — Mobile Variant"
          bg-color="#4dbf75"
          :dual="true"
          :autoplay="true"
          :controls="false"
          :loop="true"
          :muted="true" />
      </div>
      <div
        class="col-span-full lg:col-start-2 lg:col-end-[-2] flex flex-col lg:grid lg:grid-flow-col lg:auto-cols-[1fr] gap-8">
        <ProjectVideoNew
          video="WWP_D_404.mp4"
          thumbnail="WWP_D_404.webp"
          alt-text="404 Page Desktop Variant"
          description="404 Page — Desktop Variant"
          bg-color="#eeff59"
          content-ratio="auto"
          :dual="true"
          :autoplay="true"
          :controls="false"
          :loop="true"
          :muted="true" />
        <ProjectVideoNew
          video="WWP_D_Success.mp4"
          thumbnail="WWP_D_Success.webp"
          alt-text="Success Desktop Variant"
          description="Success Page — Desktop Variant"
          bg-color="#4dbf75"
          content-ratio="auto"
          :dual="true"
          :autoplay="true"
          :controls="false"
          :loop="true"
          :muted="true" />
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "WWP",
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
          teamName: "kolon.studio",
          portfolioLink: "https://kolon.studio/",
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
      // Data-list of tools to be shown in ProjectTags.
      tools: [
        {
          toolName: "Adobe After Effects",
        },
        {
          toolName: "Adobe Illustrator",
        },
      ],
      // Data-list of roles to be shown in ProjectTags.
      roles: [
        {
          roleName: "Motion Designer",
        },
      ],
    };
  },
};
</script>
