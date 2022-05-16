<script setup lang="ts">
import { watchEffect } from "vue";
import jwt_decode from "jwt-decode";
import { useAuthStore } from "./store";
import { userType } from "./utils/types";

const store = useAuthStore();

//在登录跳转至主页后通过app将token存储进pinia
//防止在跳转其他页面或注销组件后之前存储的消失
watchEffect(() => {
  if(localStorage.token){
    const decode:userType = jwt_decode(localStorage.token)
    store.setAuth(!!decode)
    store.setUser(decode)
  }
});
</script>

<template>
  <router-view/>
</template>

<style>
.el-upload{
  display: flex;
  width: 100%;
  height: 100%;
}
</style>
