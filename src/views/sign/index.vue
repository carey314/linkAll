<template>
  <div class="sign-page">
    <div>
      <el-page-header @back="goBack">
        <template #content>
          <span class="text-large font-600 mr-3"> Sign up </span>
        </template>
      </el-page-header>
    </div>
    <div class="sign-logo"><img :src="WechatIMG" /></div>

    <div class="sign-content">
      <div class="sign-title">Create Account</div>
      <div class="sign-input">
        <div class="username">
          <el-input v-model="input" placeholder="User name" />
        </div>
        <div class="input">
          <el-input v-model="input" placeholder="Account ID" />
        </div>
        <div class="input">
          <el-input
            v-model="inputPassword"
            class="w-50 m-2"
            placeholder="Password"
            show-password
          />
        </div>
        <div class="sign-btn">
          <router-link to="login" style="text-decoration: none"
            ><el-button>Sign Up</el-button></router-link
          >
        </div>
      </div>
      <div class="sign-with">
        <el-divider>
          <span>or Login with</span>
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
import WechatIMG from "../../assets/image/WechatIMG.png";
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
  .sign-content {
    text-align: center;
    margin-top: -20px;
    .sign-title {
      font-size: 24px;
      line-height: 34px;
    }
  }
  .sign-input {
    .input {
      margin-top: 10px;
    }
    :deep(.el-input) {
      height: 48px;
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
