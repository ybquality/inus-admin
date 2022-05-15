<template>
  <el-menu
    default-active="1"
    class="sidebaritem"
    text-color="#fff"
    :collapse="collapsed"
  >
    <item :menus="menus" />
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import item from "./item.vue";

defineProps({
  collapsed: {
    type: Boolean,
  },
});

const menus = ref([
  {
    path: "/",
    redirect: "/index",
    name: "Index",
    meta: {
      title: "首页",
      icon: "Grid",
    },
    children: [
      {
        path: "index",
        name: "index",
        meta: {
          title: "首页",
        },
      },
    ],
  },
  {
    path: "/article",
    redirect: "/article",
    name: "Article",
    meta: {
      title: "文章管理",
      icon: "Notebook",
    },
    children: [
      {
        path: "articleList",
        name: "articleList",
        meta: {
          title: "文章列表",
        },
      },
      {
        path: "articleAdd",
        name: "articleAdd",
        meta: {
          title: "新增文章",
        },
      },
    ],
  },
  {
    path: "/test",
    redirect: "/test",
    name: "Test",
    meta: {
      title: "测试",
      icon: "Grid",
    },
    children: [
      {
        path: "test",
        name: "test",
        meta: {
          title: "测试",
        },
      },
    ],
  },
]);
</script>

<style lang="scss">
.nih {
  .el-menu {
    .el-menu-item,
    .el-sub-menu__title {
      padding-left: 16px !important;
    }
  }
}
.sidebaritem {
  height: 100vh;
  background-color: $black !important;
  border: none;
}
.el-sub-menu {
  .el-menu {
    background-color: black;
  }
}
.el-menu--vertical {
  .el-menu {
    background-color: $black !important;
  }
}
</style>
