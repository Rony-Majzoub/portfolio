<template>
  <article class="project">
    <router-link :to="`/${ link }`" class="overlay">
      <img :src="require(`@/assets/img/${image}`)" :alt="`${ title }`"/>
    </router-link>
    <section>
      <header class="project-header">
        <p class="tag">{{ tag }}</p>
        <h2>{{ title }}</h2>
        <p>
          {{ description }}
        </p>
      </header>
      <footer class="project-footer">
        <project-button :to="`/${ link }`"/>
        <p>{{ category }}</p>
      </footer>
    </section>
  </article>
</template>

<script>
import ProjectButton from './ProjectButton.vue'
export default {
  name: 'ProjectCardRight',
  props: {
    title: {
      default: "Project Title",
     type: String
    },
    description: {
      default: "The brief summary of the project.",
    type: String
    },
    category: {
      default: "Category",
      type: String
    },
    tag: {
      default: "Project Tag",
      type: String
    },
    image: {
      default: "recypie.png",
      type: String
    },
    link: {
      default: "",
      type: String
    }
  },
  components: {
    ProjectButton
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.project {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 35rem;
  transition: var(--animation-curve) 250ms;
  border-radius: var(--border-radius);
  background: var(--dark-gradient) var(--eggplant);
}
section {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  flex-grow: 1;
  flex-basis: 40%;
  box-sizing: content-box;
  border-radius: 0 0 var(--border-radius) var(--border-radius);
  background-color: transparent;
  transition: var(--animation-curve) 250ms;
  }
.project-header {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.project-footer {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  p {
    @include subtitle-2;
    color: var(--pastel-pink);
  }
}
h2 {
  text-align: right;
  color: var(--unbleached-silk);
}
p {
  @include subtitle-2;
  text-align: right;
  color: var(--melon)
}
.tag {
  text-align: right;
  @include overline;
  color: var(--melon)
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--border-radius) var(--border-radius) 0 0;
}
.overlay {
  transform: scaleX(1);
  height: 100%;
  object-fit: cover;
  flex-grow: 1;
  flex-basis: 0%;
  cursor: pointer;
}
.overlay:after {
  position: absolute;
  content: "";
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: inline-block;
  background: var(--dark-gradient);
  transition: var(--animation-curve) 250ms;
}

@include breakpoint(md) {
  .project {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    height: 40rem;
  }
  .project:hover {
    box-shadow:
    5.9px 11.8px 15.7px hsla(263, 20%, 10%, 0.049),
    12px 24px 24px hsla(263, 20%, 10%, 0.1);
    section {
      background-position-y: 100px;
      background-color: var(--eggplant);
    }
    .overlay:after {
      opacity: 0%;
    }
  }
  .project-header {
    align-items: flex-start;
    text-align: left;
    p {
      text-align: left;
    }
    h2 {
      text-align: left;
    }
  }
  section {
  height: calc(100% - 4rem);
  padding: 2rem;
  border-radius: 0 var(--border-radius) var(--border-radius) 0;
  }
  img {
    border-radius: var(--border-radius) 0 0 var(--border-radius);
  }
  .overlay {
    transform: scaleX(1);
    height: 100%;
    object-fit: cover;
    flex-grow: 2;
    flex-basis: 60%;
  }
}
</style>