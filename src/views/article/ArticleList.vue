<template>
  <!-- 文章列表标题 -->
  <div class="article-head">
    <div class="article-head-wrapper">
      <div class="article-head-title"> 文章列表 ({{count}}) </div>
      <div class="article-extra">
        <el-button type="primary" @click="handleAdd">新增文章</el-button>
      </div>
    </div>
  </div>
  <!-- 文章列表数据展示 -->
  <div class="article-contain">
    <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="id" label="ID" width="40" align="center" />

    <el-table-column prop="title" label="Title" width="auto" align="center" />

    <el-table-column prop="cover_img" label="Cover" align="center" />

    <el-table-column prop="description" label="Description"  width="auto" align="center" />

    <el-table-column prop="author" label="Author" width="100"  align="center" />

    <el-table-column prop="createdAt" label="CreatedAt" width="auto"  align="center" >
      <template #default="scope">
        <span>{{ scope.row.createdAt.slice(0,10) }} </span>
      </template>
    </el-table-column>

    <el-table-column prop="status" label="Status" width="100"  align="center">
      <template #default="scope">
        <el-tag :type="scope.row.status === 0 ? 'danger' : 'success'">
          {{scope.row.status === 0 ? '异常' : '正常'}}
        </el-tag>
      </template>
    </el-table-column>

    <el-table-column label="操作" width="auto" align="center" >
      <template #default="scope">
        <el-button size="small" type="primary" @click="handleEdit(scope.row)">编辑</el-button>
        <el-button size="small" type="danger" @click="handleDelete(scope.$index,scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script setup lang="ts">
import { ref,watchEffect } from "vue";
import axios from "../../utils/http";
import { useRouter } from "vue-router";//引入路由
const router = useRouter();//使用路由

const tableData = ref([]);
const count = ref();

//获取文章数据
const getAeticleList = async() => {
  const {data} = await axios.get("/api/article");

  count.value = data.result.total;
  tableData.value = data.result.list;
}


watchEffect(() => getAeticleList());

//编辑
const handleEdit = (row:any) => {};
//删除
const handleDelete = (row:any, index:any) => {};
//新增文章
const handleAdd = () => {
  router.push("/article/articleAdd")
};

// const status = scope.row.status

</script>

<style scoped>
.article-head{
  background-color: #fff;
  border-bottom: 1px solid #909399;
  padding: 0 24px;
}
/* 文章列表标题 */
.article-head-wrapper{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.article-head-title{
  padding: 16px 0;
}
/* .article-extra{
  padding: 16px 0;
} */

/* 文章列表 */
.article-contain{
  background-color: #fff;
  padding: 20px;
}
</style>