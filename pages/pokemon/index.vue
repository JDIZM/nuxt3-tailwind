<script lang="ts" setup>
const { data } = await useFetch(`https://pokeapi.co/api/v2/pokemon/`) // ref
const pokemon = data.value["results"]  // reactive
</script>

<template>
  <div>
    <h1 class="text-5xl font-bold mb-4">Pokemon</h1>
    <p>fetching pokemon with dynamic routes</p>
    <p v-if="!pokemon">...loading</p>
    <div v-for="poke of pokemon" class="flex justify-center">
    <nuxt-link :to="'/pokemon/' + poke.name">
        <h3>{{poke.name}}</h3>
    </nuxt-link>
    </div>
  </div>
</template>
