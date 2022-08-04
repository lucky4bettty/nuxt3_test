<template>
  <div>
    
    <h1>Index Page</h1>
    <div><NuxtLink to="/detail">Detail Page</NuxtLink></div>
    <div><NuxtLink to="/chart">chart</NuxtLink></div>
    
  </div>
</template>

<script>
import useStore from '~~/store';
export default defineComponent({
  setup() {
    const store = useStore();

  },
})
</script>