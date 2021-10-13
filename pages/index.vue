<script lang="ts" setup>
import HelloWorld from '@/components/HelloWorld.vue'
const title = "hello world"
const data = await useFetch('/api/hello')
console.log('home', data)
</script>

<template>
  <div>
    <HelloWorld :msg="title" />
    <ul>
      <li><nuxt-link to="/poke">blog</nuxt-link></li>
    </ul>
  </div>
</template>
