<template>
  <div class="about">
    <h1>I am a designer based in Gothenburg. My goal is to create solutions to problems we all face every day.</h1>
    <img class="profile pfp-desktop" src="@/assets/pfp.jpg" alt="">
    <p>
      In a sea of competition, I strive to differentiate myself by focusing on what matters the most. The user. There is no point in designing a fancy application if it is unusable. For every project I create, I keep the visual design to an absolute minimum, with very few colors, intending to include users of all kinds, as well as make concrete decisions in the early phases. When it comes to visual design, I aim to create minimal designs, with as few obtrusions as possible. Why should form follow function, when both can co-exist?
      <br><br>
      For a well-designed product, each party involved in its creation must be in almost perfect harmony. But a team like that is very hard to come by, which is why I’ve focused on expanding my skill set in different fields, to not only be more flexible and ambitious in my work, but also communicate more effectively with other teammates with different specialties.
    </p>
    <img class="profile pfp-mobile" src="@/assets/pfp.jpg" alt="">
    <div class="skills">
      <h2>My skillset</h2>
      <div class="skill-role"><h6>Digital Designer</h6><img src="@/assets/figma.svg" alt=""></div>
      <div class="skill-role"><h6>UX Designer</h6><img src="@/assets/figma.svg" alt=""></div>
      <div class="skill-role"><h6>Front-end Developer</h6><img src="@/assets/vue.svg" alt=""></div>
      <div class="skill-role"><h6>Motion Designer</h6><img src="@/assets/ae.svg" alt=""></div>
      <div class="skill-role"><h6>3D Artist</h6><img src="@/assets/blender.svg" alt=""></div>
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
.profile {
  grid-column: 8/-1;
  width: 75%;
  justify-self: flex-end;
  border-radius: var(--border-radius);
  box-shadow: 0px 0px 0px 4px var(--melon);
}
.pfp-desktop {
  display: none;
}
.pfp-mobile {
  display: block;
  grid-column: 2/-2;
  width: 100%;
  justify-self: center;
}
h1 {
  text-align: left;
  grid-column: 1/-1;
}
p {
  @include body-1;
  color: var(--melon);
  text-align: left;
  grid-column: 1/-1;
}
.skills {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  grid-column: 1/-1;
  text-align: right;
  h2 {
    color: var(--melon);
    text-decoration: underline;
  }
  h6 {
    color: var(--pastel-pink);
    font-weight: 500;
  }
  .skill-role {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: flex-end;
    align-items: center;
    img {
      height: var(--text-xxxxl);
      width: var(--text-xxxxl);
    }
  }
}
@include breakpoint(sm) {
  h1 {
    grid-column: 1 / -5;
  }
  p {
    grid-column: 1 / -6;
  }
  .pfp-desktop {
    display: block;
    grid-column: 8/-1;
    width: 75%;
    justify-self: flex-end;
  }
  .pfp-mobile {
    display: none;
  }
  .skills {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  grid-column: 8/-1;
  text-align: right;
  }
}
</style>