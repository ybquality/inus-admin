<template>
  <div class="account">
    <div class="container">
      <!-- 整体盒子 -->
      <div class="account-wrap">
        <!-- 左侧导航信息 -->
        <div class="account-wrap_left">1</div>
        <!-- 右侧主信息 -->
        <div class="account-wrap_right">
          <div class="right-main">
            <!-- 标题 -->
            <div class="right-main-title">
              <h2>账户资料</h2>
            </div>
            <div class="right-main-container">
              <div class="right-main-containe-main">
                <div>
                  <span>Name</span> <br />
                  <input :placeholder="store.user.user_name" />
                  <button>修改</button>
                </div>
              </div>
              <div class="right-main-container-avatar">
                <div class="avatar-upload">
                  <el-avatar
                    :src="store.user.avatar"
                     :size="200"
                     :fit="cover"
                     :icon="Avatar"
                  />
                  <el-button :icon="Edit">Edit</el-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { useAuthStore } from "../../store";

const store = useAuthStore();
</script>

<style lang='scss' scoped>
.account {
  .container {
    background-color: #fff;
    height: 100vh;
    .account-wrap {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr 3fr;
      grid-column-gap: 10px;
    //   .account-wrap_left {
    //   }
      .account-wrap_right {
        .right-main {
          max-width: 768px;

          //标题
          .right-main-title {
            border-bottom: 1px solid hsla(210, 18%, 87%, 1);
          }
          .right-main-container {
            display: flex;
            .right-main-containe-main{
                padding-top: 1rem;
                padding-right: 1rem;
            }
            .right-main-container-avatar{
                padding: 1rem 1rem;
                .avatar-upload{
                    margin: 1rem 0;
                    position: relative;
                    .el-avatar{
                        border: 1px solid #e0e1e1;
                    }
                    .el-button{
                        position: absolute;
                        left: 0;
                        bottom: 1rem;
                    }
                }
            }
          }
        }
      }
    }
  }
}
</style>