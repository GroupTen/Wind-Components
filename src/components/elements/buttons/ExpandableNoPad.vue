<template>
  <div @click="analytics()">
    <!-- If the button is expandable, then the click function will toggle state -->
    <div class="relative" @click="expandable && (isExpanded = !isExpanded)">
      <!-- Arrow to Collapse/Expand -->
      <svg
        v-if="expandable"
        :class="{
          'text-coolGray-700 rotate-90': isExpanded,
          'text-coolGray-300': !isExpanded,
        }"
        class="absolute right-0 h-5 w-5 transform mr-2 mt-2"
        viewBox="0 0 20 20"
      >
        <path d="M6 6L14 10L6 14V6Z" fill="currentColor"></path>
      </svg>
      <slot />
    </div>
    <div class="z-50" :class="{ hidden: !isExpanded }">
      <slot name="buttons"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    expanded: {
      type: Boolean,
      required: false,
      default: false,
    },
    expandable: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  data() {
    return {
      isExpanded: false,
    }
  },
  // expand by default if the prop is set
  mounted() {
    if (this.expanded) {
      this.isExpanded = true
    }
  },
  methods: {
    analytics() {
      if (
        process.client &&
        this?.$wind?.analytics &&
        this.$wind.analytics === true
      ) {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          event: 'windEvent',
          category: 'Button click',
          action: this.$el.textContent,
          label: window.location.pathname,
        })
      }
      if (process.client && this?.$wind?.debug && this.$wind.debug === true) {
        // eslint-disable-next-line no-console
        console.log({
          event: 'windEvent',
          category: 'Button click',
          action: this.$el.textContent,
          label: window.location.pathname,
        })
      }
    },
  },
}
</script>
