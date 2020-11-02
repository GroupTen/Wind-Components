<template>
  <div>
    <nuxt-link v-if="target === ''" :to="link" :class="classes">
      <slot v-if="iconPosition === 'left'" name="icon"
        ><component
          :is="svgComponent"
          if="svgComponent"
          class="fill-current mx-1 w-5 h-5"
      /></slot>
      <slot />
      <slot v-if="iconPosition === 'right'" name="icon"
        ><component
          :is="svgComponent"
          if="svgComponent"
          class="fill-current mx-1 w-5 h-5"
      /></slot>
    </nuxt-link>
    <a v-else :href="link" target="_blank" :class="classes">
      <slot v-if="iconPosition === 'left'" name="icon"
        ><component
          :is="svgComponent"
          if="svgComponent"
          class="fill-current mx-1 w-5 h-5"
      /></slot>
      <slot />
      <slot v-if="iconPosition === 'right'" name="icon"
        ><component
          :is="svgComponent"
          if="svgComponent"
          class="fill-current mx-1 w-5 h-5"
      /></slot>
    </a>
  </div>
</template>
<script>
const classes = {
  primary:
    'flex active:text-primary-700 font-medium text-primary-600 hover:text-primary-800 transition duration-150 ease-in-out h-full',
  danger:
    'flex active:text-danger-500 font-medium text-danger-500 hover:text-danger-600 transition duration-150 ease-in-out h-full',
}
export default {
  props: {
    type: {
      type: String,
      required: false,
      default: 'primary',
    },
    icon: {
      type: String,
      required: false,
      default: null,
    },
    iconPosition: {
      type: String,
      required: false,
      default: 'left',
    },
    link: {
      type: String,
      required: false,
      default: '#',
    },
    target: {
      type: String,
      required: false,
      default: '',
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
