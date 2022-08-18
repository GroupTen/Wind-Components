<template>
  <component
    :is="svgComponent"
    if="svgComponent"
    :class="[type == null ? 'mx-1 w-5 h-5 my-auto' : classes]"
  />
</template>
<script>
export default {
  props: {
    type: {
      type: [String, Array, Object],
      required: false,
      default: null,
    },
    icon: {
      type: [String, Array, Object],
      required: false,
      default: null,
    },
  },
  computed: {
    classes() {
      if (Array.isArray(this.type)) {
        return this.$wind.icons.base[this.type[0]]
      }

      if (typeof this.type === 'object') {
        return this.$wind.icons.base[Object.keys(this.type)[0]]
      }

      return this.$wind.icons.base[this.type]
    },
    svgComponent() {
      if (this.icon) {
        let icon = ''
        if (Array.isArray(this.icon)) {
          if (this.icon[0]) {
            icon = this.icon[0]
          } else {
            icon = this.icon
          }

          const { data } = this.$axios.get(
            `https://cdn.wellcertified.com/static/icons/${icon}.svg`,
            {
              crossDomain: true,
            }
          )
          return data
        }
      }
      return ''
    },
  },
}
</script>
