<template>
    <div class="sidebar">
        <Logo :collapsed="collapsed"/>
        <sidebaritem :collapsed="collapsed"/>
    </div>
</template>

<script setup lang="ts">
import Logo from "./Logo.vue";
import sidebaritem from "./Sidebaritem.vue";


defineProps({
    collapsed:{
        type:Boolean
    }
})
</script>

<style lang="scss">

</style>