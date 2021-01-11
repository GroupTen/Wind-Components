<template>
  <div>
    <link
      href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <WLoadingSpinner />
    this is a test commit
  </div>
</template>
<script>
export default {
  mounted() {
    this.$refs.alert.showAlert('success', 'test message')
  },
}
</script>
