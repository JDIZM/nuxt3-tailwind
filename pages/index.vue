<script lang="ts" setup>
// hello world component is auto imported
const title = "Hello World"

// fetching data from /server/api/hello.ts
const { data } = await useFetch('/api/hello')

if (process.server) console.log("server");
if (process.client) console.log("client");
</script>

<template>
  <div>
    <HelloWorld :msg="title" class="mb-4"/>
    <div class="text-lg">
      <nuxt-link to="/pokemon">Pokemon</nuxt-link> / 
      <nuxt-link to="/poke">broken link</nuxt-link>
    </div>
    <div>
      <p>fetching some data from /server/api/hello.ts</p>
      <pre>{{ data }}</pre>
      <p>you can visit the api endpoint at <a href="/api/hello">/api/hello</a></p>
    </div>
  </div>
</template>