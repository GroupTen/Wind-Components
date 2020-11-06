<template>
  <button type="button" :class="classes">
    <slot name="icon"
      ><component
        :is="svgComponent"
        if="svgComponent"
        class="mx-1 w-5 h-5 my-auto"
    /></slot>
    <slot />
  </button>
</template>
<script>
const classes = {
  tab:
    'flex mr-4 py-7 px-1 text-center border-b-2 font-medium text-sm leading-5 focus:outline-none text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300',
  tabSelected:
    'flex mr-4 py-7 px-1 text-center border-b-2 font-medium text-sm leading-5 focus:outline-none text-primary-600 border-primary-400',
  neutral:
    'border-transparent duration-150 ease-in-out text-primary-500 text-white transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out',
  subNav:
    'duration-150 ease-in-out flex focus:bg-primary-700 focus:outline-none font-medium hover:bg-primary-1000 hover:text-white items-center leading-5 mt-2 px-2 py-2 rounded-md text-primary-300 text-sm text-white transition w-full',
  nav:
    'w-full flex items-center px-2 py-2 text-sm leading-5 font-medium text-white focus:outline-none focus:bg-primary-700 transition ease-in-out duration-150',
  primary:
    'border-transparent bg-primary-600 primary-btn hover:bg-primary-500 hover:border-primary-700 active:bg-primary-700 text-white transition duration-150 ease-in-out',
  primaryInverted:
    'primary-btn w-full inline-flex justify-center py-2 px-4 border border-primary-300 rounded-md bg-white text-sm font-medium text-primary-500 hover:text-primary-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out',
  danger:
    'border-transparent bg-danger-500 primary-btn hover:bg-danger-600 hover:border-danger-700 active:bg-danger-700 text-white',
  dangerInverted:
    'border-transparent primary-btn border-gray-100 hover:text-danger-300 hover:border-danger-300 active:bg-danger-700 text-danger-500',
}
export default {
  props: {
    type: {
      type: [String, Array, Object],
      required: false,
      default: 'primary',
    },
    icon: {
      type: [String, Array, Object],
      required: false,
      default: null,
    },
  },
  computed: {
    classes() {
      // Array is allowed to allow conditional type usage via array
      // Example:
      // <ButtonsBase
      //   :type="[processingPayment ? 'primaryInverted' : 'primary']"
      //   @click.native="createPayment"
      // >
      //   <WLoadingSpinner type="button" class="mx-auto" />
      // </ButtonsBase>

      if (Array.isArray(this.type)) {
        return classes[this.type[0]]
      }

      // Object is allowed as a type choice so that we can conditionally render the styles on a button object
      // Example:
      // <ButtonsBase
      //   :type="{ primaryInverted: processingPayment }"
      //   @click.native="createPayment"
      // >
      //   <WLoadingSpinner type="button" class="mx-auto" />
      // </ButtonsBase>

      if (typeof this.type === 'object') {
        return classes[Object.keys(this.type)[0]]
      }

      return classes[this.type]
    },
    svgComponent() {
      if (Array.isArray(this.icon)) {
        return this.icon[0] && require(`@/static/icons/${this.icon}.svg?inline`)
      }
      return this.icon && require(`@/static/icons/${this.icon}.svg?inline`)
    },
  },
}
</script>
<style lang="scss" scoped>
.primary-btn {
  @apply shadow-md w-full my-auto flex justify-center py-2 px-2 border text-sm font-medium rounded-md transition duration-150 ease-in-out;
  &:focus {
    @apply outline-none;
  }
}
</style>
