<script lang="ts" setup>
const { params } = useRoute();
const router = useRouter();

const { data } = await useFetch(
  `https://jsonplaceholder.typicode.com/todos/${params.id}`
); // ref

// FIXME todo: unknown
const todo: any = data.value; // reactive

// redirect to a custom 404.vue page
if (!todo) {
  router.push({
    path: "/404",
  });
}
</script>

<template>
  <div v-if="todo" class="todo">
    <h1 class="text-5xl font-bold mb-8">Todo #{{ $route.params.id }}</h1>
    <pre>{{ todo }}</pre>
    <pre>
    <ul>
      <li v-for="(value, key) in todo">{{ key }}: {{ value }}</li>
    </ul>
    </pre>
  </div>
</template>

<style>
pre {
  width: 100%;
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>
