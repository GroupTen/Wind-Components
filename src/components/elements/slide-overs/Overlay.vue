<template>
  <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
  <div v-if="open" class="fixed inset-0 overflow-hidden">
    <div class="absolute inset-0 overflow-hidden">
      <!--
      Background overlay, show/hide based on slide-over state.

      Entering: "ease-in-out duration-500"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in-out duration-500"
        From: "opacity-100"
        To: "opacity-0"
    -->
      <div
        class="absolute inset-0 bg-gray-800 bg-opacity-75 transition-opacity"
      ></div>
      <section class="absolute inset-y-0 right-0 pl-10 max-w-full flex">
        <!--
        Slide-over panel, show/hide based on slide-over state.

        Entering: "transform transition ease-in-out duration-500 sm:duration-700"
          From: "translate-x-full"
          To: "translate-x-0"
        Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
          From: "translate-x-0"
          To: "translate-x-full"
      -->
        <div class="relative w-screen max-w-3xl">
          <!--
          Close button, show/hide based on slide-over state.

          Entering: "ease-in-out duration-500"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "ease-in-out duration-500"
            From: "opacity-100"
            To: "opacity-0"
        -->
          <div class="absolute top-0 left-0 -ml-8 pr-2 flex sm:-ml-10 sm:pr-4">
            <button
              aria-label="Close panel"
              class="mt-5 text-gray-300 hover:text-white transition ease-in-out duration-150"
              @click="toggleOpen"
            >
              <!-- Heroicon name: x -->
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div
            class="h-full flex flex-col space-y-6 bg-white shadow-xl overflow-y-scroll"
          >
            <header v-if="title" class="px-4 py-6 bg-primary-100 sm:px-6">
              <div class="flex items-start justify-between space-x-3">
                <div class="space-y-1">
                  <h2
                    class="text-lg leading-7 font-medium text-white font-bold text-primary-900"
                  >
                    {{ title }}
                  </h2>
                  <p v-if="description" class="text-sm text-white leading-5">
                    Get started by filling in the information below to create
                    your new project.
                  </p>
                </div>
              </div>
            </header>
            <div class="relative flex-1">
              <slot name="content" />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      require: false,
      default: null,
    },
    description: {
      type: String,
      require: false,
      default: null,
    },
  },
  data() {
    return {
      open: false,
    }
  },
  methods: {
    toggleOpen() {
      this.open = !this.open
    },
  },
}
</script>
