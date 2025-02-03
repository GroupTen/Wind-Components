<template>
  <div
    class="mt-3 inline-flex rounded-md shadow-sm sm:mt-0 w-full"
    @click="analytics()"
  >
    <div
      class="w-full relative inline-block text-left"
      @click.stop="handleToggle"
    >
      <slot />
      <div
        :class="[
          'origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg',
          { hidden: !dropdownActive },
        ]"
      >
        <div class="rounded-md bg-white shadow-xs z-50 relative">
          <div
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
            class="py-1"
          >
            <nuxt-link
              v-for="(link, text, index) in links"
              :key="`${text}-${index}`"
              :to="link"
              role="menuitem"
              class="
                block
                px-4
                py-2
                text-sm
                leading-5
                text-gray-700
                hover:bg-gray-100 hover:text-gray-900
                focus:outline-none focus:bg-gray-100 focus:text-gray-900
              "
              @click="handleClose"
            >
              {{ text }}
            </nuxt-link>
            <slot name="customButtons" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    links: {
      type: Object,
      default() {
        return {}
      },
    },
    parentManaged: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    dropdownId: {
      type: [String, Number],
      default: null,
    },
  },
  data() {
    return {
      localIsActive: false,
    }
  },
  computed: {
    dropdownActive() {
      return this.parentManaged ? this.isActive : this.localIsActive
    },
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside)
    document.addEventListener('keydown', this.handleEscKey)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleClickOutside)
    document.removeEventListener('keydown', this.handleEscKey)
  },
  methods: {
    handleToggle() {
      if (this.parentManaged) {
        this.$emit('toggle', this.dropdownId)
      } else {
        this.localIsActive = !this.localIsActive
      }
    },
    handleClose() {
      if (this.parentManaged) {
        this.$emit('toggle', this.dropdownId)
      } else {
        this.localIsActive = false
      }
    },
    handleClickOutside(event) {
      if (this.dropdownActive && !this.$el.contains(event.target)) {
        this.handleClose()
      }
    },
    handleEscKey(event) {
      if (event.key === 'Escape' && this.dropdownActive) {
        this.handleClose()
      }
    },
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
