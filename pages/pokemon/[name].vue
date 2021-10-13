<script lang="ts" setup>
const { params } = useRoute()
const router = useRouter()

const {data} = await useFetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`) // ref
const poke = data.value // reactive
// redirect to a custom 404.vue page
if (!poke) {
    router.push({
        path: '/404'
    })
}
</script>

<template>
  <div v-if="data">
     <h1 class="text-5xl font-bold">{{ $route.params.name }}</h1>
     <pre>{{ data["stats"] }}</pre>
  </div>
</template>
