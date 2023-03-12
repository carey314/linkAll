<template>
  <div class="login-page">
    <!-- nav  -->
    <!-- <div>
      <el-page-header @back="goBack">
        <template #content>
          <span class="text-large font-600 mr-3"> Log in </span>
        </template>
      </el-page-header>
    </div> -->
    <div class="login-logo"><img :src="cat" /></div>

    <div class="login-content">
      <div class="login-input">
        <div class="input">
          <el-input v-model="input" placeholder="账号" />
        </div>
        <div class="input">
          <el-input
            v-model="inputPassword"
            class="w-50 m-2"
            placeholder="密码"
            show-password
          />
        </div>
        <div class="login-btn">
          <router-link to="home" style="text-decoration: none"
            ><el-button>登陆</el-button></router-link
          >
        </div>
      </div>
      <div class="login-way">
        <el-icon><Iphone /></el-icon>
        <el-icon><ChromeFilled /></el-icon>
        <el-icon><Eleme /></el-icon>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { Iphone, ChromeFilled, Eleme } from "@element-plus/icons-vue";
import cat from "../../assets/image/cat.png";
import router from "../../router";

const input = ref("");
const inputPassword = ref("");
const goBack = () => {
  router.push('/origin')
};
</script>

<style scoped lang="scss">
.login-page {
  padding: 10px 30px;
  max-width: 768px; 
  max-height: 869px;
  margin: auto;
  .login-logo{
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .login-content {
    text-align: center;
    margin-top: -20px;
    .login-title {
      font-size: 24px;
      line-height: 34px;
    }
  }
  .login-input {
    .input {
      margin-top: 10px;
    }
    :deep(.el-input) {
      height: 48px;
    }
  }
  .login-login {
    margin-top: 15px;
  }
  .login-btn {
    margin-top: 10px;
    :deep(.el-button) {
      width: 100%;
      height: 48px;
      // border-radius: 25px;
    }
  }
  .login-way {
    margin-top: 15px;
    :deep() {
      .el-icon {
        height: 30px;
        width: 40px;
      }
      .el-icon svg {
        height: 20px;
        width: 20px;
      }
    }
  }
}
</style>
