<script lang="ts" setup>
const route = useRoute()
const router = useRouter()
// external endpoint
const {data, error} = await useFetch(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
const errorString = error?.value?.toString()
if (errorString?.includes('404')) {
    console.log('error: ', '404');
    // FIXME there is no 404 response on a failed page load
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
