<template>
  <section
    class="flex flex-row w-full col-span-full gap-x-4 justify-self-start lg:col-start-2 lg:col-end-[-2]">
    <div class="flex flex-row w-full justify-between gap-8 pb-6">
      <div class="flex flex-col gap-8 pb-10 lg:flex-[0.625]">
        <div class="flex flex-col gap-2">
          <p class="text-lg font-bold text-unbleached-silk">Client</p>
          <p v-once class="font-normal text-base text-melon max-w-prose">
            {{ client }}
          </p>
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-lg font-bold text-unbleached-silk">Team</p>
          <div class="h-min w-fit">
            <router-link
              to="/about"
              class="name-link relative font-normal text-base text-melon max-w-prose whitespace-pre-line transition-all duration-300">
              Rony Majzoub
            </router-link>
          </div>
          <div
            v-for="teammate in team"
            v-once
            :key="teammate.id"
            class="h-min w-fit">
            <!-- If portfolioLink is non-empty, create a. Else, create span. -->
            <component
              :is="teammate.portfolioLink ? 'a' : 'span'"
              v-once
              :href="teammate.portfolioLink || ''"
              target="_blank"
              class="name-link relative font-normal text-base text-melon max-w-prose whitespace-pre-line transition-all duration-300">
              {{ teammate.teamName }}
            </component>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col gap-8 pb-10 w-fit lg:justify-between lg:flex-row lg:flex-1">
        <div class="flex flex-col gap-2">
          <p class="text-lg font-bold text-unbleached-silk">My role</p>
          <p
            v-for="role in roles"
            v-once
            :key="role.id"
            class="font-normal text-base text-melon max-w-prose">
            {{ role.roleName }}
          </p>
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-lg font-bold text-unbleached-silk">Duration</p>
          <p v-once class="font-normal text-base text-melon max-w-prose">
            {{ duration }}
          </p>
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-lg font-bold text-unbleached-silk">Tools used</p>
          <p
            v-for="tool in tools"
            v-once
            :key="tool.id"
            class="font-normal text-base text-melon max-w-prose">
            {{ tool.toolName }}
          </p>
        </div>
      </div>
      <!-- <div class="flex flex-col gap-2">
        <p class="text-lg font-bold text-unbleached-silk">Project includes</p>
        <p
          v-for="category in categories"
          :key="category.id"
          class="font-normal text-base text-melon max-w-prose">
          {{ category.categoryName }}
        </p>
      </div> -->
    </div>
  </section>
</template>

<script>
export default {
  name: "ProjectTags",
  // Send "team", "categories" & "tools" Arrays down to the component,
  // that later gets provided() and used.
  inject: ["team", "categories", "tools", "roles"],
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
    roleName: {
      default: "",
      type: String,
    },
    duration: {
      default: "",
      type: String,
    },
    toolName: {
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
