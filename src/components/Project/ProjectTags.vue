<template>
  <section
    class="grid grid-cols-2 w-full col-span-full pb-8 lg:pb-16 gap-x-4 justify-self-start lg:col-start-2 lg:col-end-[-2]">
    <div class="flex flex-col col-span-1 gap-8 pb-10">
      <div class="flex flex-col gap-2">
        <p class="text-lg font-bold text-unbleached-silk">Client</p>
        <p class="font-normal text-base text-melon max-w-prose">
          {{ client }}
        </p>
      </div>
      <div class="flex flex-col gap-2">
        <p class="text-lg font-bold text-unbleached-silk">Team</p>

        <div v-for="teammate in team" :key="teammate.id" class="h-min w-fit">
          <!-- If portfolioLink is non-empty, create a. Else, create span. -->
          <component
            :is="teammate.portfolioLink ? 'a' : 'span'"
            :href="teammate.portfolioLink || ''"
            target="_blank"
            class="name-link relative font-normal text-base text-melon max-w-prose whitespace-pre-line transition-all duration-300">
            {{ teammate.teamName }}
          </component>
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <p class="text-lg font-bold text-unbleached-silk">Role</p>
        <p class="font-normal text-base text-melon max-w-prose">
          {{ role }}
        </p>
      </div>
      <div class="flex flex-col gap-2">
        <p class="text-lg font-bold text-unbleached-silk">Duration</p>
        <p class="font-normal text-base text-melon max-w-prose">
          {{ duration }}
        </p>
      </div>
      <div class="flex flex-col gap-2">
        <p class="text-lg font-bold text-unbleached-silk">Tools used</p>
        <p class="font-normal text-base text-melon max-w-prose">
          {{ tools }}
        </p>
      </div>
    </div>
    <div class="flex flex-col col-span-1 gap-8 pb-10 justify-self-end">
      <div class="flex flex-col gap-2">
        <p class="text-lg font-bold text-unbleached-silk">Project includes</p>
        <p
          v-for="category in categories"
          :key="category.id"
          class="font-normal text-base text-melon max-w-prose">
          {{ category.categoryName }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProjectTags",
  // Send "team" & "categories" Arrays down to the component,
  // that later gets provided() and used.
  inject: ["team", "categories"],
  // The properties of the component.
  props: {
    client: {
      default: "",
      type: String,
    },
    teamName: {
      default: "",
      type: String,
    },
    portfolioLink: {
      default: "",
      type: String,
    },
    role: {
      default: "",
      type: String,
    },
    duration: {
      default: "",
      type: String,
    },
    tools: {
      default: "",
      type: String,
    },

    categoryName: {
      default: "",
      type: String,
    },
  },
};
</script>
<!-- The link-styling is handled without Tailwind, for targetting only elements with .name-link and link-elements. -->
<style lang="scss">
a.name-link::before {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 2px;
  bottom: 0px;
  left: 0;
  background-color: currentColor;
  transform: scaleX(0);
  transform-origin: top left;
  transition: transform 300ms;
  transition-timing-function: cubic-bezier(0, 0.8, 0.2, 1);
}

a.name-link:hover::before {
  transform: scaleX(1);
}
</style>
