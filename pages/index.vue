<template>
  <div>
    <h1>Index Page</h1>
    <NuxtLink to="/detail">Detail Page</NuxtLink>
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