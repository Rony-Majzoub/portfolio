<template>
  <section
    class="grid grid-cols-2 w-full col-span-full pb-20 gap-x-4 justify-self-start lg:col-start-2 lg:col-end-[-2]">
    <div class="flex flex-col col-span-1 gap-8 pb-10">
      <div class="flex flex-col gap-2">
        <p class="text-xl md:text-2xl font-medium text-unbleached-silk">
          Client
        </p>
        <p class="font-medium text-base md:text-lg text-melon max-w-prose">
          {{ client }}
        </p>
      </div>
      <div class="flex flex-col gap-2">
        <p class="text-xl md:text-2xl font-medium text-unbleached-silk">Team</p>
        <p class="font-medium text-base md:text-lg text-melon max-w-prose">
          {{ team }}
        </p>
      </div>
      <div class="flex flex-col gap-2">
        <p class="text-xl md:text-2xl font-medium text-unbleached-silk">Role</p>
        <p class="font-medium text-base md:text-lg text-melon max-w-prose">
          {{ role }}
        </p>
      </div>
      <div class="flex flex-col gap-2">
        <p class="text-xl md:text-2xl font-medium text-unbleached-silk">
          Duration
        </p>
        <p class="font-medium text-base md:text-lg text-melon max-w-prose">
          {{ duration }}
        </p>
      </div>
      <div class="flex flex-col gap-2">
        <p class="text-xl md:text-2xl font-medium text-unbleached-silk">
          Tools used
        </p>
        <p class="font-medium text-base md:text-lg text-melon max-w-prose">
          {{ tools }}
        </p>
      </div>
    </div>
    <div class="flex flex-col col-span-1 gap-8 pb-10 justify-self-end">
      <div class="flex flex-col gap-2">
        <p class="text-xl md:text-2xl font-medium text-unbleached-silk">
          Project includes
        </p>
        <p class="font-medium text-base md:text-lg text-melon max-w-prose">
          {{ category1 }}
        </p>
        <p class="font-medium text-base md:text-lg text-melon max-w-prose">
          {{ category2 }}
        </p>
        <p class="font-medium text-base md:text-lg text-melon max-w-prose">
          {{ category3 }}
        </p>
        <p class="font-medium text-base md:text-lg text-melon max-w-prose">
          {{ category4 }}
        </p>
        <p class="font-medium text-base md:text-lg text-melon max-w-prose">
          {{ category5 }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProjectTags",
  props: {
    client: {
      default: "",
      type: String,
    },
    team: {
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
    category1: {
      default: "",
      type: String,
    },
    category2: {
      default: "",
      type: String,
    },
    category3: {
      default: "",
      type: String,
    },
    category4: {
      default: "",
      type: String,
    },
    category5: {
      default: "",
      type: String,
    },
  },
};
</script>
