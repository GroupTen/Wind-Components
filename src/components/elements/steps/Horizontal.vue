<template>
  <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
  <nav>
    <ul
      class="list-none border-2 border-coolGray-100 rounded-md divide-y divide-red-500 md:flex justify-around md:divide-y-0"
    >
      <li
        v-for="(step, index) in steps"
        :key="index"
        class="relative w-full"
        @click="changeStep(step)"
      >
        <!-- Current Step -->
        <div
          class="px-2 py-4 flex md:flex-col lg:flex-row items-center text-sm leading-5 font-medium space-x-4 md:space-x-0 lg:space-x-4 text-coolGray-300"
        >
          <div
            v-if="step.status === 'complete'"
            :class="
              pillSize === 'large'
                ? 'w-10 h-10 md:w-12 md:h-12'
                : 'w-6 h-6 md:w-8 md:h-8'
            "
            class="flex-shrink-0 flex items-center justify-center bg-primary-500 rounded-full group-hover:bg-primary-800 transition ease-in-out duration-150"
          >
            <svg
              class="w-6 h-6 text-white"
              x-description="Heroicon name: check"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <div
            v-else
            :class="[
              step.status === 'current' || step.status === 'complete'
                ? 'flex-shrink-0  flex justify-center border-primary-500 rounded-full'
                : 'flex-shrink-0 flex justify-center border-2 rounded-full border-coolGray-100',

              pillSize === 'large'
                ? 'w-10 h-10 md:w-12 md:h-12'
                : 'w-6 h-6 md:w-8 md:h-8',
            ]"
          >
            <span
              :class="[
                step.status === 'current'
                  ? 'text-primary-500'
                  : 'my-auto text-coolGray-300',
              ]"
            >
              <span
                v-if="step.status === 'current'"
                :class="
                  pillSize === 'large'
                    ? 'w-10 h-10 md:w-12 md:h-12'
                    : 'w-6 h-6 md:w-8 md:h-8'
                "
                class="flex-shrink-0 flex items-center justify-center bg-primary-500 rounded-full group-hover:bg-primary-800 transition ease-in-out duration-150"
                :style="step.status === 'current' ? 'paddingRight: 2px' : null"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-white"
                  fill="none"
                  viewBox="0 0 22 22"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    d="M12 4v16m8-8H4"
                  /></svg
              ></span>
              <span
                :class="[
                  step.status === 'current'
                    ? 'text-primary-500'
                    : step.status === 'complete'
                    ? 'text-success-500'
                    : 'text-coolGray-300',
                  'text-xs leading-4 tracking-wide',
                ]"
                v-else
                >0{{ index + 1 }}</span
              >
            </span>
          </div>
          <div
            :class="{
              'text-primary-500': step.status === 'current',
              '!mb-5 !pr-0': pillSize === 'large',
              '!pr-0': pillSize !== 'large',
            }"
            class="text-sm leading-5 font-medium lg:pr-8 my-auto md:my-0 lg:my-auto lg:mt-auto text-left md:text-center lg:text-left"
          >
            <span
              :class="[
                step.status === 'current'
                  ? 'text-primary-500'
                  : step.status === 'complete'
                  ? 'text-success-500'
                  : 'text-coolGray-300',
                'text-xs leading-4 font-semibold uppercase tracking-wide',
              ]"
            >
              {{ step.name }}
            </span>
            <span
              v-if="step.caption"
              class="block"
              :class="[
                step.status === 'current'
                  ? 'text-primary-500'
                  : step.status === 'complete'
                  ? 'text-success-500'
                  : 'text-coolGray-300',
                'text-xs leading-4 font-semibold uppercase tracking-wide',
              ]"
              >{{ step.caption }}</span
            >
          </div>
        </div>
        <div
          :class="[
            'absolute top-0 right-0 h-full w-5 hidden md:block',
            { 'md:hidden': index == steps.length - 1 },
          ]"
        >
          <svg
            class="h-full w-full text-coolGray-100"
            viewBox="0 0 22 80"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M0 -2L20 40L0 82"
              vector-effect="non-scaling-stroke"
              stroke="currentcolor"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  props: {
    steps: {
      type: Array,
      default() {
        return []
      },
    },
    pillSize: {
      type: String,
      default: 'large',
    },
  },
  methods: {
    changeStep(step) {
      this.$emit('stepsUpdated', step)
    },
  },
}
</script>
