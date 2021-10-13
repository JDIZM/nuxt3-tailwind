<template>
  <NuxtLayout name="custom">
    <template #header> Some header template content. </template>
    <!-- The rest of the page -->
    <div>
        <h1>Custom Page</h1>
    </div>
  </NuxtLayout>
</template>

<script>
export default {
  layout: false,
};
</script>