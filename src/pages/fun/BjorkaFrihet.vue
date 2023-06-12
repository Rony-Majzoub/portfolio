<template>
  <BackButton />
  <div
    class="grid grid-cols-10 col-start-2 col-end-[-2] max-lg:justify-items-center">
    <ProjectTitle
      info="2022 — Motion Design"
      title="Björkåfrihet"
      brief="Create a campaign that cements Björkåfrihets identity in the second-hand market." />
    <ProjectVideo
      class="mb-8"
      video="Bjorkafrihet_Blood_Final_4K.mp4"
      video-link="v1685623614/portfolio/fun/bjorkafrihet/Bjorkafrihet_Blood_Final_4K.mp4"
      alt-text="Björkåfrihet Video"
      description="My animated contribution to the campaign. Simple, but effective."
      bg-color="#ffb8b2"
      content-ratio="1 / 1"
      :autoplay="true"
      :controls="false"
      :loop="true"
      :muted="true"
      video-width="768"
      video-height="768" />
    <ProjectTags client="Yrgo DD21, Björkåfrihet" duration="1 week" />
    <main class="grid col-span-full grid-cols-10 gap-y-8">
      <div
        v-once
        class="max-lg:col-span-full col-start-2 col-end-[-2] place-self-start flex flex-col gap-1">
        <h2 v-once class="text-3xl lg:text-5xl font-bold text-unbleached-silk">
          Posters & Mockups
        </h2>
        <p v-once class="text-melon text-base sm:text-lg font-medium">
          Created by our talented Art Directors.
        </p>
      </div>
      <div
        class="col-span-full lg:col-start-2 lg:col-end-[-2] flex flex-col lg:grid lg:grid-flow-col lg:auto-cols-[1fr] gap-8">
        <ProjectImageNew
          image="Bjork_poster_1.png"
          image-link="v1685630293/portfolio/fun/bjorkafrihet/Bjork_poster_1.png"
          alt-text=""
          :dual="true"
          :not-rounded="true"
          content-ratio="3 / 4" />
        <ProjectImageNew
          image="Bjork_poster_2.png"
          image-link="v1685630293/portfolio/fun/bjorkafrihet/Bjork_poster_2.png"
          alt-text=""
          :dual="true"
          :not-rounded="true"
          content-ratio="3 / 4" />
      </div>
      <ProjectImageNew
        image="Bjork_poster_buss.jpg"
        image-link="v1685630293/portfolio/fun/bjorkafrihet/Bjork_poster_buss.jpg"
        alt-text=""
        :dual="false"
        content-ratio="1867 / 1335" />
    </main>
  </div>
</template>

<script>
export default {
  name: "BjorkaFrihet",
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
          teamName: "Moa Kjöllerström",
        },
        {
          teamName: "Josefine Jerkin",
        },
        {
          teamName: "Linnea Calmstierna",
          portfolioLink: "https://www.linneacalmstierna.se/",
        },
        {
          teamName: "Amanda Lindén",
        },
        {
          teamName: "Fanny Lindroth",
        },
        {
          teamName: "Olivia Ahlqvist",
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
