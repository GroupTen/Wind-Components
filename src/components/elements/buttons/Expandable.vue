<template>
  <div>
    <div class="relative" @click="isExpanded = !isExpanded">
      <svg
        :class="{
          'text-gray-400 rotate-90': isExpanded,
          'text-gray-300': !isExpanded,
        }"
        class="absolute right-0 h-5 w-5 transform mr-2 mt-2"
        viewBox="0 0 20 20"
      >
        <path d="M6 6L14 10L6 14V6Z" fill="currentColor"></path>
      </svg>
      <slot />
    </div>
    <div class="px-2 z-50" :class="{ hidden: !isExpanded }">
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
}
</script>
