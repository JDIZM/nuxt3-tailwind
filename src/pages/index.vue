<script lang="ts" setup>
import HelloWorld from '@/components/HelloWorld.vue'
const title = "hello world"
</script>

<template>
  <div>
    <HelloWorld :msg="title" />
    <ul>
      <li><nuxt-link to="/about">about</nuxt-link></li>
      <li><nuxt-link to="/blog">blog</nuxt-link></li>
    </ul>
  </div>
</template>
