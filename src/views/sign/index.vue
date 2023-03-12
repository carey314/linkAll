<template>
  <div class="sign-page">
    <!-- nav  -->
    <!-- <div>
      <el-page-header @back="goBack">
        <template #content>
          <span class="text-large font-600 mr-3"> Sign up </span>
        </template>
      </el-page-header>
    </div> -->
    <div class="sign-logo"><img :src="cat" /></div>

    <div class="sign-content">
      <div class="sign-input">
        <div class="input">
          <el-input v-model="username" placeholder="用户名" />
        </div>
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
        <div class="sign-btn">
          <router-link to="login" style="text-decoration: none"
            ><el-button>注册</el-button></router-link
          >
        </div>
      </div>
      <div class="sign-with">
        <el-divider>
          <span>已有账号 <a href="login" style="text-decoration: none;color: #000;">登陆</a></span>
        </el-divider>
      </div>
      <div class="sign-way">
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
const username = ref("");
const inputPassword = ref("");
const goBack = () => {
  router.push("/origin");
};
</script>

<style scoped lang="scss">
.sign-page {
  padding: 10px 30px;
  max-width: 768px;
  max-height: 869px;
  margin: auto;
  .sign-logo{

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  
  }
  .sign-content {
    text-align: center;
    margin-top: -20px;
    .sign-title {
      font-size: 24px;
      line-height: 34px;
    }
  }
  .sign-input {
    margin-top: 10px;
    .input {
      margin-top: 10px;
    }
    :deep(.el-input) {
      height: 48px;
    }
  }
  .sign-with {
    span{
      font-size: 12px;
      color:#606266;
    }
 
  }
  .sign-login {
    margin-top: 15px;
  }
  .sign-btn {
    margin-top: 10px;
    :deep(.el-button) {
      width: 100%;
      height: 48px;
      // border-radius: 25px;
    }
  }
  .sign-way {
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
