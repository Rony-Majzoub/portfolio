<template>
  <section
    class="grid grid-cols-2 w-full col-span-full pb-8 lg:pb-16 gap-x-4 justify-self-start lg:col-start-2 lg:col-end-[-2]">
    <div class="flex flex-col col-span-1 gap-8 pb-10">
      <div class="flex flex-col gap-2">
        <p class="text-xl md:text-2xl font-bold text-unbleached-silk">Client</p>
        <p class="font-semibold text-base md:text-lg text-melon max-w-prose">
          {{ client }}
        </p>
      </div>
      <div class="flex flex-col gap-2">
        <p class="text-xl md:text-2xl font-bold text-unbleached-silk">Team</p>

        <div v-for="teammate in team" :key="teammate.id" class="h-min w-fit">
          <!-- If portfolioLink is non-empty, create a. Else, create span. -->
          <component
            :is="teammate.portfolioLink ? 'a' : 'span'"
            :href="teammate.portfolioLink || ''"
            target="_blank"
            class="name-link font-semibold text-md md:text-lg text-melon max-w-prose whitespace-pre-line leading-8 md:leading-8 transition-all duration-200">
            {{ teammate.teamName }}
          </component>
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <p class="text-xl md:text-2xl font-bold text-unbleached-silk">Role</p>
        <p class="font-semibold text-base md:text-lg text-melon max-w-prose">
          {{ role }}
        </p>
      </div>
      <div class="flex flex-col gap-2">
        <p class="text-xl md:text-2xl font-bold text-unbleached-silk">
          Duration
        </p>
        <p class="font-semibold text-base md:text-lg text-melon max-w-prose">
          {{ duration }}
        </p>
      </div>
      <div class="flex flex-col gap-2">
        <p class="text-xl md:text-2xl font-bold text-unbleached-silk">
          Tools used
        </p>
        <p class="font-semibold text-base md:text-lg text-melon max-w-prose">
          {{ tools }}
        </p>
      </div>
    </div>
    <div class="flex flex-col col-span-1 gap-8 pb-10 justify-self-end">
      <div class="flex flex-col gap-2">
        <p class="text-xl md:text-2xl font-bold text-unbleached-silk">
          Project includes
        </p>
        <p
          v-for="category in categories"
          :key="category.id"
          class="font-semibold text-base md:text-lg text-melon max-w-prose">
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
a.name-link {
  text-decoration-line: underline;
  text-underline-offset: 2px;
  text-decoration-thickness: 2px;
  text-decoration-color: transparent;
}
a.name-link:hover {
  text-decoration-color: inherit;
  text-underline-offset: 4px;
}
</style>
