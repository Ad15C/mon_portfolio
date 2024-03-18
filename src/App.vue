<template>
  <MyHeader />

  <MyPage :about-me="aboutMe" :my-projects="myProjects" />

  <MyForm @add="saveInfos" />

  <MyFooter />
</template>

<script setup>
import MyHeader from './components/MyHeader.vue'
import MyPage from './components/MyPage.vue'
import MyForm from './components/MyForm.vue'
import MyFooter from '@/components/MyFooter.vue'
import { ref } from 'vue'

const aboutMe = 'Ma mission consiste à aider mes clients à réaliser leurs projets.....'

const myProjects = 'Ci-dessous, vous trouverez les derniers projets réalisés dernièrement:'

let infos = ref([])

const saveInfos = function (data) {
  console.log('App | saveInfos() | data', data)
  infos.value = [...infos.value, { infos: data, id: Date.now() }]
  console.log('App | saveInfos() | infos.value', infos.value)
  return {
    saveInfos
  }
}
</script>

<style scoped>
template {
  width: 1500px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
}
</style>
