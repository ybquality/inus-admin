<template>
  <div>
    <Md-editor v-model="conten" @onHtmlChanged="HtmlChange" />
  </div>
</template>

<script setup lang='ts'>
import { ref } from "vue";
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

const conten = ref('');//定义富文本编辑器
const HtmlChange = (html:string) =>{
  console.log(html);
  console.log(conten);
}


</script>

<style lang='scss' scoped>

</style>