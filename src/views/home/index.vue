<template>
    <div v-for="(item,index) in list">{{ item.verse_title }}</div>
</template>
<script setup>
import {ref, onMounted} from 'vue'
import axios from 'axios'

const list = ref([])


onMounted(() => {
  getList()
})
const getList = () => {
  axios({
    url: 'http://expro.dillonl.com/api/v2/verse/get?offset=1&limit=10',
    method: 'GET'
  }).then(res => {
    list.value = res.data.data.result
  })
}

</script>
<style>

</style>
