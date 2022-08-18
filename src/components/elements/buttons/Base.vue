<template>
  <button type="button" :class="classes" @click="analytics()">
    <slot name="icon">
      <span
        v-show="svgComponent"
        class="mx-1 w-5 h-5 my-auto"
        v-html="svgComponent"
      ></span>
    </slot>
    <slot />
  </button>
</template>
<script>
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
  data() {
    return {
      svgComponent: '',
    }
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
        return this.$wind.buttons.base[this.type[0]]
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
        return this.$wind.buttons.base[Object.keys(this.type)[0]]
      }

      return this.$wind.buttons.base[this.type]
    },
  },
  created() {
    this.loadSvg()
  },
  methods: {
    async loadSvg() {
      if (this.icon) {
        let icon = ''
        if (Array.isArray(this.icon)) {
          if (this.icon[0]) {
            icon = this.icon[0]
          }
        } else {
          icon = this.icon
        }

        await this.$axios
          .get(`https://cdn.wellcertified.com/static/icons/${icon}.svg`, {
            crossDomain: true,
            headers: {
              'Access-Control-Allow-Origin': '*',
            },
          })
          .then(({ data }) => {
            this.svgComponent = data
          })
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

        // segment analytics integration
        if (window.analytics) {
          window.analytics.track('Button Click', {
            label: this.$el.textContent,
            url: window.location.href,
          })
        }
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
