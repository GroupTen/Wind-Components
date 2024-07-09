<template>
  <div>
    <slot name="eyebrow"></slot>
    <div class="block">
      <h1 class="leading-7 lg:text-5xl md:text-4xl mt-2 sm:text-3xl">
        {{ heading }}
      </h1>
      <p v-if="subHeading" class="mt-3 text-base leading-6">
        {{ subHeading }}
      </p>
    </div>
    <div class="xl:mt-3">
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
