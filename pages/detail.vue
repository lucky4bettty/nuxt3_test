<template>
  <div>
    <h1>Detail Page</h1>
    <button @click="handleAddOne()">{{ count }}</button>
  </div>
</template>

<script>
import { ref,defineComponent, watch,onMounted,inject} from "vue";
import useStore from '~~/store';

export default defineComponent({
  setup(props) {
    const store = useStore();
    const count = computed(() => store.count)

    const handleAddOne = () =>{
      store.addOne('我傳餐') ;
    }
    

    onMounted(()=>{
    })

    return {
      count,
      handleAddOne,
    };

  },
})
</script>