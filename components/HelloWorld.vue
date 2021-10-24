<script lang="ts" setup>
defineProps<{ msg: string }>();
</script>

<template>
  <div>
    <h1 class="text-5xl font-bold">{{ msg }}</h1>
  </div>
</template>
