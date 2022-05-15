<template>
  <div class="background">
  <div class="container">
    <div class="screen">
      <div class="screen-header">
        <div class="screen-header-left">
          <div class="screen-header-button close"></div>
          <div class="screen-header-button maximize"></div>
          <div class="screen-header-button minimize"></div>
        </div>
        <div class="screen-header-right">
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
        </div>
      </div>
      <div class="screen-body">
        <div class="screen-body-item left">
          <div class="app-title">
            <span>background management</span>
            <span>system</span>
          </div>
          <div class="app-contact">CONTACT INFO : EMAIL 1908633182@qq.com</div>
        </div>
        <div class="screen-body-item">

          <el-form 
            :rules="rules" 
            ref="ruleFormRef"
            :model="registerUser" 
            class="app-form registerForm"
          >
              <el-form-item prop="email" class="app-form-group">
                  <el-input v-model="registerUser.email"  class="app-form-control" placeholder="EMAIL"></el-input>
              </el-form-item>

              <el-form-item prop="name" class="app-form-group">
                  <el-input v-model="registerUser.user_name" class="app-form-control" placeholder="NAME"></el-input>
              </el-form-item>

              <el-form-item prop="password" class="app-form-group">
                  <el-input v-model="registerUser.password" class="app-form-control" placeholder="PASSWORD"></el-input>
              </el-form-item>

              <el-form-item prop="password2" class="app-form-group">
                  <el-input v-model="registerUser.password2" class="app-form-control" placeholder="PASSWORD2"></el-input>
              </el-form-item>

                <div class="app-form-group buttons">
                    <el-button @click="handleSubmit(ruleFormRef)" class="submit-btn">注册</el-button>
                    
                    <router-link to="/login" class="app-form-link">登录</router-link>
                </div>
          </el-form>


        </div>
      </div>
    </div>
   
  </div>
</div>
</template>

<script setup lang="ts">
import { ref,reactive } from "vue";
import { registerType, registerRulesType } from "../utils/types";//类型匹配封装文件

import axios from "../utils/http";//axios封装
import { useRouter } from "vue-router";//引入路由

import { FormInstance } from 'element-plus'
// import { ElSteps } from "element-plus/lib/components";
const ruleFormRef = ref<FormInstance>()
const router = useRouter();//使用路由

const registerUser = ref<registerType>({
    email: "",
    user_name: "",
    password: "",
    // password2: "321321"
});

//二次密码校验
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password again'))
  } else if (value !== registerUser.value.password) {
    callback(new Error("Two inputs don't match!"))
  } else {
    callback()
  }
};

//表单校验规则 使用elmenp
const rules = reactive<registerRulesType>({
  email: [{ required:true, type:"email", message:"邮箱格式不正确", trigger: 'blur' }],
  user_name: [
      { required:true, message:"用户名不能为空", trigger: 'change' },
      { min:2, max:30, message:"长度不合法", trigger: 'blur' },
    ],
  password: [
      { required:true, message:"密码不能为空", trigger: 'blur' },
      { min:6, max:30, message:"长度不合法", trigger: 'blur' },
  ],
  password2: [
    //   { required: true,message:"密码不能为空", trigger: 'blur' },
      { min:6,max:30,message:"长度在6到30个字符", trigger: 'blur' },
      { validator: validatePass2, trigger: 'blur' }
  ],
})

//表单提交
const handleSubmit = (formEl: FormInstance | undefined) => {
    //判断formEl是否为空，为空直接return
    if (!formEl) return
    formEl.validate( async (valid:boolean) => {
    if (valid) {
      const {data} = await axios.post("/api/users/register",
      registerUser.value
      );

      console.log(data);
      //@ts-ignore
      ElMessage({
        message: '注册成功.',
        type: 'success',
      });

      router.push("/")
    } else {
      console.log('error submit!')
      return false
    }
  });
};

</script>



<style scoped>
*,
*:before,
*:after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  /* background: linear-gradient(to right, #ea1d6f 0%, #eb466b 100%); */
  font-size: 12px;
}


input {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  letter-spacing: 1.4px;
}

.background {
  display: flex;
  min-height: 100vh;
}

.container {
  flex: 0 1 700px;
  margin: auto;
  padding: 10px;
}

.screen {
  position: relative;
  background: #3e3e3e;
  border-radius: 15px;
}

.screen:after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 20px;
  right: 20px;
  bottom: 0;
  border-radius: 15px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  z-index: -1;
}

.screen-header {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background: #4d4d4f;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

.screen-header-left {
  margin-right: auto;
}

.screen-header-button {
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-right: 3px;
  border-radius: 8px;
  background: white;
}

.screen-header-button.close {
  background: red;
}

.screen-header-button.maximize {
  background: #e8e925;
}

.screen-header-button.minimize {
  background: #74c54f;
}

.screen-header-right {
  display: flex;
}

.screen-header-ellipsis {
  width: 3px;
  height: 3px;
  margin-left: 2px;
  border-radius: 8px;
  background: #999;
}

.screen-body {
  display: flex;
}

.screen-body-item {
  flex: 1;
  padding: 50px;
}

.screen-body-item.left {
  display: flex;
  flex-direction: column;
}

.app-title {
  display: flex;
  flex-direction: column;
  position: relative;
  color: #747ed1;
  font-size: 26px;
}

.app-title:after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 25px;
  height: 4px;
  background: #747ed1;
}

.app-contact {
  margin-top: auto;
  font-size: 8px;
  color: #888;
}

.app-form-group {
  margin-bottom: 15px;
}

.app-form-group.message {
  margin-top: 40px;
}

.app-form-group.buttons {
  margin-bottom: 0;
  text-align: right;
}
.app-form-control {
  width: 100%;
  padding: 10px 0;
  background: none;
  border: none;
  border-bottom: 1px solid #666;
  color: #ddd;
  font-size: 14px;
  text-transform: uppercase;
  outline: none;
  transition: border-color 0.2s;
}

.app-form-control::placeholder {
  color: #666;
}

.app-form-control:focus {
  border-bottom-color: #ddd;
}

.app-form-button {
  background: none;
  border: none;
  color: #747ed1;
  font-size: 14px;
  cursor: pointer;
  outline: none;
}
.app-form-link {
  margin-left: 10px;
  color: #747ed1;
  font-size: 14px;
  cursor: pointer;
  outline: none;
}

.app-form-button:hover {
  color: #747ed1;
}



@media screen and (max-width: 520px) {
  .screen-body {
    flex-direction: column;
  }

  .screen-body-item.left {
    margin-bottom: 30px;
  }

  .app-title {
    flex-direction: row;
  }

  .app-title span {
    margin-right: 12px;
  }

  .app-title:after {
    display: none;
  }
}

@media screen and (max-width: 600px) {
  .screen-body {
    padding: 40px;
  }

  .screen-body-item {
    padding: 0;
  }
}

</style>