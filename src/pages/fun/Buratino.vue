<template>
  <BackButton />
  <div class="grid grid-cols-10 col-start-2 col-end-[-2]">
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
      link="https://app.buratino.se/" />
    <ProjectTags
      client="Buratino AB"
      team="Rony Majzoub, 
      Casper Hansen, 
      Viggo Fredriksson"
      role="UI/UX Designer, CSS Developer"
      duration="8 months"
      tools="Figma, Adobe Illustrator, Visual Studio Code"
      category1="Web Development"
      category2="UI Design"
      category3="UX Design"
      category4="User Testing"
      category5="Logo Design" />
    <main class="grid col-span-full grid-cols-10 gap-y-8 lg:gap-y-16"></main>
  </div>
</template>

<script>
export default {
  name: "Buratino",
};
</script>
