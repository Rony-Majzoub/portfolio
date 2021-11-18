<template>
  <div class="about">
    <h1>I am a designer based in Gothenburg. My goal is to create solutions to problems we all face every day.</h1>
    <img src="@/assets/logo.svg" alt="">
    <p>
      In a sea of competition, I strive to differentiate myself by focusing on what matters the most. The user. There is no point in designing a fancy application if it is unusable. For every project I create, I keep the visual design to an absolute minimum, with very few colors, intending to include users of all kinds, as well as make concrete decisions in the early phases. When it comes to visual design, I aim to create minimal designs, with as few obtrusions as possible. Why should form follow function, when both can co-exist?
      <br><br>
      For a well-designed product, each party involved in its creation must be in almost perfect harmony. But a team like that is very hard to come by, which is why I’ve focused on expanding my skill set in different fields, to not only be more flexible and ambitious in my work, but also communicate more effectively with other teammates with different specialties.
    </p>
    <div class="skills">
      <h2>My skillset</h2>
      <h6>Digital Designer</h6>
      <h6>Front-end Developer</h6>
      <h6>UX Designer</h6>
      <h6>Motion Designer</h6>
      <h6>3D Artist</h6>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about {
  grid-column: 2/-2;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  row-gap: 2rem;
}
img {
  grid-column: -2/-1;
}
h1 {
  text-align: left;
  grid-column: 1/-5;
}
p {
  @include body-1;
  color: var(--melon);
  text-align: left;
  grid-column: 1/-6;
}
.skills {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  grid-column: -4/-1;
  text-align: right;
  h2 {
    color: var(--melon);
    text-decoration: underline;
  }
  h6 {
    color: var(--pastel-pink);
    font-weight: 500;
  }
}
</style>