<template>
  <div>
    <slot name="eyebrow"></slot>
    <div class="block">
      <h3 class="mt-2 text-2xl leading-7">
        {{ heading }}
      </h3>
      <p v-if="subHeading" class="mt-3 text-base leading-6">
        {{ subHeading }}
      </p>
    </div>
    <div class="mt-3">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    heading: {
      type: String,
      required: false,
      default: '',
    },
    subHeading: {
      type: String,
      required: false,
      default: '',
    },
  },
}
</script>
