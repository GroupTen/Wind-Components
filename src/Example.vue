<template>
    <div>
        <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
        <Spinner/>
    </div>
</template>
<script>
import Alert from './components/elements/loading/Spinner'
export default {
    components:{
        Alert
    },
    mounted() {
      this.$refs.alert.showAlert('success', 'test message')  
    }
}
</script>