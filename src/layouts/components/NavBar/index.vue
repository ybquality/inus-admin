<template>
  <div class="nav">
    <!-- 面包屑 -->
    <div class="nav-bread">
      <el-breadcrumb>
        <el-breadcrumb-item :to="item.path" v-for="(item, index) in breadcrumb" :key="index">
          {{ item.meta.title }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!--  -->
    <div class="nav-right">
      <!-- <span>whh</span> -->
      <el-dropdown @command="handleDropdown">
        <span>{{store.user.user_name}}</span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="info">Settings</el-dropdown-item>
            <el-dropdown-item>系统设置</el-dropdown-item>
            <el-dropdown-item divided command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>


      <div class="nav-avatar">
        <!-- 这里原本是:icon="" 但是出现警告 -->
        <el-avatar icon="Avatar" :src="store.user.avatar"/>
      </div>
    </div>

  </div>
</template>

<script setup lang='ts'>
import { Ref, ref, watch } from "vue";
import { useRoute, RouteLocationMatched } from "vue-router";
import router from "../../../router";
import { useAuthStore } from "../../../store";
const route = useRoute();
const store = useAuthStore();

//下拉菜单
const handleDropdown = (item: string) => {
  switch (item) {
    case "info":
      showUserInfo();
      break;
    case "logout":
      logout();
      break;
  }
};
//前往个人主页的方法
const showUserInfo = () => {
  router.push("/settings")
}
//退出登录方法
const logout = () => {
  alert("是否退出登录");

  localStorage.removeItem("token")
  store.setAuth(false)
  store.setUser(null)

  router.push("/login")
}

const breadcrumb: Ref<RouteLocationMatched[]> = ref([])

const getBreadcrumb = () => {
  //获取当前路由信息
  //过滤路由信息
  let matched = route.matched.filter((item) => item.meta && item.meta.title && item.children.length !== 1)
  //拿到第一条路由信息
  const frist = matched[0]
  //判断如果不是在首页，给加上一条首页的数据
  if (frist.path !== 'index') {
    matched = [{ path: '/index', meta: { title: '首页' } } as any].concat(matched)
  }
  breadcrumb.value = matched
}
//监控路由，如果路由发生变化。那么面包屑数据同步更新
watch(() => route.path, () => {
  getBreadcrumb()
})

</script>

<style lang='scss' scoped>
.nav {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-left: 1rem;
  .nav-bread{
    height: 100%;
    display: flex;
    align-items: center;
  }
  .nav-right{
    height: 100%;
    display: flex;
    align-items: center;
    .nav-avatar{
      margin-left: 1rem;
    }
  }
}
</style>