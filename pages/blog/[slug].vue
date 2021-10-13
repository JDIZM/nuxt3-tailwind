<script lang="ts" setup>
// dynamic route
// requires script for $route type
console.log('this', this);
</script>

<template>
  <div>
     <h1 class="text-5xl font-bold">{{ $route.params.slug }} page</h1>
  </div>
</template>
