<template>
  <div class="common-layout">
    <el-container>
      <el-aside :style="'width:' + autoWidth">
        <SideBar :collapsed="collapsed" :class="[collapsed ? 'nih' : '']"/>
      </el-aside>
      <el-container>
        <el-header>
          <!-- 收纳侧边栏的按钮 -->
          <el-icon
            class=""
            style="font-size: 40px"
            @click="() => (collapsed = !collapsed)"
          >
            <component :is="collapsed ? Expand : Fold" />
          </el-icon>
          <NavBar />
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import NavBar from "./components/NavBar/index.vue";
import SideBar from "./components//SideBar/index.vue";

import { Expand, Fold } from "@element-plus/icons-vue";

//图标切换
const collapsed = ref<boolean>(false);
const autoWidth = computed(() => {
  if (collapsed.value) {
    return "64px";
  } else {
    return "200px";
  }
});
</script>

<style lang="scss" scoped>

.common-layout {
  display: flex;
  height: 100vh;
  .el-header {
    background-color: #fff;
    display: flex;
    align-items: center;
    // justify-content: space-between;
    i {
      color: $link-h;
    }
  }
  .el-aside {
    background-color: $black;
    text-align: center;
    // 隐藏滑动条
    overflow: hidden;
    //收起侧边栏动画
    transition: all 0.6s;
  }
  .el-main {
    background-color: $background;
  }
}
</style>