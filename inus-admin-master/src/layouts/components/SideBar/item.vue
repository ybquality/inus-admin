<template>
    <template class="item" v-for="menu in menus" :key="menu.path">
        <el-sub-menu v-if="menu.children && menu.children.length > 1" :index="menu.path">
            <template #title>
                <el-icon>
                    <component :is="menu.meta.icon" />
                </el-icon>
                <span>{{ menu.meta.title }}</span>
            </template>
            <item :menus="menu.children"/>
        </el-sub-menu>

        <el-menu-item v-else @click="toPath(menu.name)" :index="menu.path">
            <el-icon>
                <component :is="menu.meta.icon" />
            </el-icon>
            <span>{{ menu.meta.title }}</span>
        </el-menu-item>
    </template>
</template>

<script setup lang='ts'>
// import { Menu } from "@element-plus/icons-vue/dist/types";
import { useRouter } from "vue-router";

const router = useRouter();

defineProps(['menus'])

//跳转
const toPath = (item:string) => {
    router.push({name:item})
}
</script>

<style lang='scss' scoped>
.item{
    color: $black !important;
}
</style>