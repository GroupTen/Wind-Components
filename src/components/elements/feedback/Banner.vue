<template>
  <div
    v-if="message"
    :class="['bg-warning-300  top-0 w-full', { hidden: !visible }]"
  >
    <div class="text-sm max-w-screen-xl mx-auto py-1 px-3">
      <div class="flex items-center mt-2">
        <div class="mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-warning-700"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
            />
          </svg>
        </div>
        <div>
          <div class="text-[#855200]">Attention Needed</div>
          <div class="flex items-center">
            <div class="text-[#625B5B]" v-html="message"></div>
            <div v-if="routerText" class="text-[#625B5B]">
              <router-link class="ml-1" type="light" :to="routerLink">{{
                routerText
              }}</router-link>
            </div>
            <div v-if="actionText" class="text-[#625B5B]">
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
            </div>
            <div
              v-if="canDismiss"
              class="order-2 -mt-2 flex-shrink-0 sm:order-3 sm:ml-3"
            >
              <WButtonsBase
                type="neutral"
                icon="x-circle"
                @click.native="
                  $store.dispatch('notifications/toggleBannerVisibility')
                "
              />
            </div>
          </div>
          <slot />
        </div>
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
