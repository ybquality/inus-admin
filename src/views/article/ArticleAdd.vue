<template>
  <div class="articleadd">
    <!-- 新增加文章标题 -->
    <div class="article-head">
      <div class="article-head-wrapper">
        <div class="article-head-title">创建文章</div>
        <div class="article-extra">
          <el-button type="primary" @click="handleAdd">提交</el-button>
        </div>
      </div>
    </div>
    <el-form :model="form" class="newarticle">
      <!-- 文章标题 -->
      <el-form-item label="标题">
        <el-input v-model="form.title" />
      </el-form-item>

      <el-form-item label="简介">
        <el-input v-model="form.description" type="textarea" />
      </el-form-item>

      <el-form-item label="封面" class="cover">
        <el-upload
          class="upload"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleSuccess"
          :before-upload="beforeUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="coverimg" />
          <el-icon v-else><Plus /></el-icon>
        </el-upload>
      </el-form-item>

      <el-form-item label="内容" class="edit">
        <edit />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang='ts'>
import { ref } from "vue";
import edit from "../../components/article/edit.vue";
// 封面图上传
import { ElMessage } from "element-plus";
import type { UploadProps } from "element-plus";

const imageUrl = ref("");
const handleSuccess: UploadProps["onSuccess"] = (response, uploadFile) => {
  imageUrl.value = URL.createObjectURL(uploadFile.raw!);
};

const beforeUpload: UploadProps["beforeUpload"] = (rawFile) => {
  if (rawFile.type !== "image/jpeg") {
    ElMessage.error("Avatar picture must be JPG format!");
    return false;
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error("Avatar picture size can not exceed 2MB!");
    return false;
  }
  return true;
};

const form = ref({
  title: "",
  description: "",
  cover_img: "",
  content: "",
  author: "",
});

const handleAdd = () => {
  alert("开发中..");
};
</script>

<style lang='scss' scoped>
.articleadd {
  background-color: #fff;
  .article-head {
    background-color: #fff;
    border-bottom: 1px solid #909399;
    padding: 0 24px;
    /* 文章列表标题 */
    .article-head-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .article-head-title {
        padding: 16px 0;
      }
    }
  }
    .newarticle{
        padding: 2rem;
    }
  //   图片上传
  .cover {
    .el-form-item__content {
      .upload {
        border: 1px dashed var(--el-border-color);
        height: 110px;
        width: 100%;
      }
      .upload:hover {
        border-color: var(--el-color-primary);
      }
    }
  }
}

.edit {
  div {
    width: 100%;
  }
}
</style>