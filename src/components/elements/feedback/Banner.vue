<template>
  <div
    v-if="message"
    :class="[
      'bg-warning-25 border border-warning-150  top-0 w-full',
      { hidden: !visible },
    ]"
  >
    <div
      class="text-sm max-w-screen-xl flex justify-between items-center mx-auto py-1 px-3"
    >
      <div class="flex mt-2">
        <div class="mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-10 h-10 text-warning-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
            />
          </svg>
        </div>
        <div class="flex items-center space-x-2">
          <div class="text-base font-bold text-warning-500">
            Attention Needed
          </div>
          <div class="flex items-center justify-between">
            <div>
              <span class="text-warning-500" v-html="message"></span>
              <span v-if="routerText" class="text-warning-500">
                <router-link
                  v-if="!routerLink.includes('http')"
                  class="ml-1"
                  type="light"
                  :to="routerLink"
                  >{{ routerText }}</router-link
                >
                <a
                  v-else
                  class="ml-1"
                  type="light"
                  target="_blank"
                  :href="routerLink"
                  >{{ routerText }}</a
                >
              </span>
              <span v-if="actionText" class="text-warning-500">
                <WButtonsBase
                  type="light"
                  @click.native="
                    $store.dispatch(
                      'notifications/setBannerActionTriggered',
                      !actionStatus
                    )
                  "
                  >{{ actionText }}</WButtonsBase
                >
              </span>
            </div>
          </div>
          <slot />
        </div>
      </div>
      <div
        v-if="canDismiss"
        class="order-2 -mt-2 flex-shrink-0 sm:order-3 sm:ml-3"
      >
        <WButtonsBase
          type="neutral"
          icon="x"
          @click.native="
            $store.dispatch('notifications/toggleBannerVisibility')
          "
        />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  props: {
    canDismiss: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  computed: {
    ...mapState({
      actionText: (state) => state.notifications.banner.cta.text,
      routerText: (state) => state.notifications.banner.router.text,
      routerLink: (state) => state.notifications.banner.router.link,
      actionStatus: (state) => state.notifications.banner.cta.triggered,
      visible: (state) => state.notifications.banner.visible,
      message: (state) => state.notifications.banner.message,
    }),
  },
}
</script>
