<script setup>
import {ref} from 'vue'

const msg = ref('MSG')
</script>
<script>
export default {
  asyncData() {
    return 1
  }
}
</script>
<template>
  <h1>{{ msg }}</h1>
  <h2>H2222222222222222222222222</h2>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
