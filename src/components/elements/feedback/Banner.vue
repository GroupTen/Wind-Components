<template>
  <div
    :class="['bg-secondary-700 text-white top-0 w-full', { hidden: !visible }]"
  >
    <div class="max-w-screen-xl mx-auto py-1 px-3 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between flex-wrap">
        <div class="w-0 flex-1 items-center">
          {{ message }}
          <slot />
        </div>
        <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3 text-white">
          <WButtonsBase
            type="neutral"
            icon="x-circle"
            @click.native="
              $store.dispatch('notifications/toggleBannerVisibility')
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      visible: (state) => state.notifications.banner.visible,
      message: (state) => state.notifications.banner.message,
    }),
  },
}
</script>
