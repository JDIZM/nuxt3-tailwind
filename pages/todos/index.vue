<script lang="ts" setup>
const { data, error } = await useFetch(
  `https://jsonplaceholder.typicode.com/todos`
); // ref

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
// FIXME Type 'unknown' is not assignable to type 'Todo[]'
const todos: Array<Todo> = data.value; // type unknown
// const todos = data.value; // reactive

if (error.value) {
  const { message: errorMsg } = error.value;
  if (errorMsg.includes("404")) {
    console.log("failed to fetch data");
  }
}
</script>

<template>
  <div>
    <h1 class="text-5xl font-bold mb-4">Todos</h1>
    <p>fetching todos with dynamic routes</p>
    <p v-if="!todos">...loading</p>
    <div v-for="todo of todos" class="flex text-left">
      <nuxt-link :to="'/todos/' + todo.id">
        <h3>{{ todo.id }} - {{ todo.title }}</h3>
      </nuxt-link>
    </div>
  </div>
</template>
