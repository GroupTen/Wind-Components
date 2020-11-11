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
      return this.$wind.links.base[this.type]
    },
    svgComponent() {
      return this.icon && require(`@/static/icons/${this.icon}.svg?inline`)
    },
  },
}
</script>
