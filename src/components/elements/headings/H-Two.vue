<template>
  <div>
    <slot name="eyebrow"></slot>
    <div class="block">
      <h2
        class="mt-2 text-2xl lg:text-3xl leading-7 font-semibold text-coolGray-700"
      >
        {{ heading }}
      </h2>
      <p v-if="subHeading" class="mt-3 text-base leading-6 text-coolGray-300">
        {{ subHeading }}
      </p>
    </div>
    <div class="xl:mt-3 mt-2">
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
