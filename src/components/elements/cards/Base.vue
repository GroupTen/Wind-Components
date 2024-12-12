<template>
  <div
    class="rounded-md shadow-md bg-white border border-coolGray-100 relative"
  >
    <div v-if="thumbnail">
      <img
        v-if="thumbnail.includes('http')"
        :src="thumbnail"
        class="w-full rounded-t-md"
        :class="imageHeight"
      />
      <img
        v-else
        :src="$config.assetsURL + thumbnail"
        class="w-full rounded-t-md"
        :class="imageHeight"
      />
    </div>
    <slot name="image"></slot>
    <div class="p-4">
      <div class="font-bold text-coolGray-600">{{ heading }}</div>
      <div class="text-primary-600 font-medium">
        <slot name="subHeading"></slot>
      </div>
      <div class="mt-4 text-sm text-coolGray-600">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <span v-html="description"></span>
      </div>
      <div>
        <slot />
      </div>
    </div>
    <div
      v-if="$slots.footer"
      class="absolute p-4 w-full bottom-0"
    >
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    thumbnail: {
      type: String,
      required: false,
      default: null,
    },
    heading: {
      type: String,
      required: false,
      default: null,
    },
    subHeading: {
      type: String,
      required: false,
      default: null,
    },
    description: {
      type: String,
      required: false,
      default: null,
    },
    imageHeight: {
      type: String,
      required: false,
      default: null,
    },
  },
}
</script>
