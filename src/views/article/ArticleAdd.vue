<template>
  <div class="articleAdd">
      <el-form>
          <el-form-item prop="title" label="标题">
              <el-input type="title"></el-input>
          </el-form-item>
          <el-form-item prop="title" label="描述">
              <el-input type="title"></el-input>
          </el-form-item>
          <el-form-item prop="title" label="封面">
              <el-upload
                class="cover-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
              >
                <img v-if="imageUrl" :src="imageUrl" class="cover" />
                <el-icon v-else class="cover-uploader-icon"><Plus /></el-icon>
              </el-upload>
          </el-form-item>

          <el-form-item prop="title" label="内容">
              <edit/>
          </el-form-item>
      </el-form>
  </div>
</template>

<script setup lang="ts">
import edit from "../../components/article/edit.vue";

</script>

<style>
.articleAdd{
    background-color: #fff;
}


.cover-uploader .cover {
  width: 178px;
  height: 178px;
  display: block;
}
.cover-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.cover-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.cover-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>