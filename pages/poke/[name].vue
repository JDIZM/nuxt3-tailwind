<script lang="ts" setup>
const route = useRoute()
const router = useRouter()
// external endpoint
const {data, error} = await useFetch(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
// redirect to a custom 404.vue page
const errorString = error?.value?.toString()
if (errorString?.includes('404')) {
    console.log('error: ', '404');
}
if (!data.value) {
    router.push({
        path: '/404'
    })
}
</script>

<template>
  <div v-if="data">
     <h1 class="text-5xl font-bold">{{ $route.params.name }}</h1>
     <p>
         {{ data["name"] }}
         {{ data["stats"] }}
     </p>
  </div>
</template>
