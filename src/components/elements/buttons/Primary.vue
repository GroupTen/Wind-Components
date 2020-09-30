<template>
  <button :class="classes">
    <slot name="icon"
      ><component
        :is="svgComponent"
        if="svgComponent"
        class="fill-current mx-1 w-5 h-5"
    /></slot>
    <slot />
  </button>
</template>
<script>
const classes = {
  subNav:
    'w-full flex items-center px-2 py-2 text-sm leading-5 font-medium text-white rounded-md bg-primary-1000 focus:outline-none focus:bg-primary-700 transition ease-in-out duration-150',
  nav:
    'w-full flex items-center px-2 py-2 text-sm leading-5 font-medium text-white focus:outline-none focus:bg-primary-700 transition ease-in-out duration-150',
  primary:
    'border-transparent bg-primary-600 primary-btn hover:bg-primary-500 hover:border-primary-700 active:bg-primary-700 text-white transition duration-150 ease-in-out',
  primaryInverted:
    'w-full inline-flex justify-center py-2 px-4 border border-primary-300 rounded-md bg-white text-sm leading-5 font-medium text-primary-500 hover:text-primary-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out',
  danger:
    'border-transparent bg-danger-500 primary-btn hover:bg-danger-600 hover:border-danger-700 active:bg-danger-700 text-white',
  dangerInverted:
    'border-transparent primary-btn border-gray-100 hover:text-danger-300 hover:border-danger-300 active:bg-danger-700 text-danger-500',
}
export default {
  props: {
    type: {
      type: [String, Array],
      required: false,
      default: 'primary',
    },
    icon: {
      type: String,
      required: false,
      default: null,
    },
  },
  computed: {
    classes() {
      return classes[this.type]
    },
    svgComponent() {
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
