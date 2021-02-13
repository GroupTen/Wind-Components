<template>
  <div v-if="open" class="fixed inset-0 overflow-hidden">
    <div class="absolute inset-0 overflow-hidden">
      <div
        class="animate__animated animate__fadeIn animate__fast absolute inset-0 bg-gray-800 bg-opacity-75 transition-opacity"
      ></div>
      <section
        class="animate__animated animate__slideInRight animate__fast absolute inset-y-0 right-0 pl-10 max-w-full flex"
      >
        <div class="relative w-screen max-w-5xl">
          <div
            class="-ml-8 absolute animate__animated animate__delay-1s animate__fast animate__fadeIn flex left-0 pr-2 sm:-ml-10 sm:pr-4 top-0"
          >
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
            class="h-full flex flex-col space-y-2 bg-white shadow-xl overflow-y-auto"
          >
            <header v-if="title" class="z-10px-4 py-6 bg-primary-900 sm:px-6">
              <div class="flex items-start justify-between space-x-3">
                <div class="space-y-1 w-11/12">
                  <h2
                    class="text-lg leading-7 font-medium text-white font-bold text-white"
                  >
                    {{ title }}
                  </h2>
                  <p v-if="description" class="text-sm text-white leading-5">
                    Get started by filling in the information below to create
                    your new project.
                  </p>
                  <p v-if="caption" class="text-sm text-white leading-5">
                    {{ caption }}
                  </p>
                </div>
                <slot name="headerActions"></slot>
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
    caption: {
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
