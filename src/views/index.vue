<template>
  <div>
      name: {{store.user.user_name}}
  </div>
</template>

<script setup lang='ts'>
import { onMounted,ref } from "vue";
import axios from "../utils/http";
import { useAuthStore } from "../store";
const store = useAuthStore();


onMounted(async () => {
  try{
    const data = await axios.get("/api/users/current");
    console.log(data);
  }catch(error){
    console.log(error);
  }
})

</script>

<style lang='scss' scoped>

</style>