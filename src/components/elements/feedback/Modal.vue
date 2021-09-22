<template>
  <div :class="['fixed z-30 inset-0 overflow-y-auto', { hidden: isHidden }]">
    <div
      :class="[
        'flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0',
      ]"
    >
      <div
        class="fixed inset-0 transition-opacity"
        @click="
          if (canManuallyClose) {
            isHidden = !isHidden
          }
        "
      >
        <div class="absolute inset-0 opacity-75 -ml-8">
          <div
            class="animate__animated animate__fadeIn bg-gray-800 w-full h-full"
          ></div>
        </div>
      </div>

      <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span
      >&#8203;
      <div
        class="
          mx-4
          align-bottom
          animate__animated animate__faster animate__zoomIn
          bg-white
          inline-block
          pb-4
          pt-5
          px-4
          rounded-lg
          shadow-xl
          sm:align-middle sm:my-8 sm:p-6
          text-left
          transform
          transition-all
        "
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <slot />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    canManuallyClose: {
      type: Boolean,
      default: true,
      required: false,
    },
  },
  data() {
    return {
      isHidden: true,
    }
  },
  computed: {
    expanded() {
      if (this.$store.state.settings.navExpanded == null) {
        return true
      }

      if (this.$store.state.settings.navExpanded === 'false') {
        return false
      }

      if (this.$store.state.settings.navExpanded === 'true') {
        return true
      }

      return this.$store.state.settings.navExpanded
    },
  },
}
</script>
