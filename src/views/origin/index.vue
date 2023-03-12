<template>
  <div class="orgin-page">
    <div class="logo">
      <img :src="cat" />
    </div>
    <div class="content">
      <div class="content-title">开始使用👇🏻</div>
      <div class="content-btn">
        <div class="content-sign btn">
          <router-link to="sign" style="text-decoration: none"
            ><el-button>注册</el-button></router-link
          >
        </div>
        <div class="content-login btn">
          <router-link to="login" style="text-decoration: none"
            ><el-button>登陆</el-button></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";

import cat from "../../assets/image/cat.png";
</script>

<style scoped lang="scss">
// font-size 12 16 24
.orgin-page {
  padding: 10px 30px;
  max-width: 768px;
  max-height: 869px;
  margin: auto;
  .logo {
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .content {
    text-align: center;
    .content-title {
      font-size: 24px;
      line-height: 34px;
    }
    .content-btn {
      margin-top: 30px;
      .btn {
        margin-top: 10px;
      }
      :deep(.el-button) {
        width: 250px;
        height: 48px;
        border-radius: 25px;
      }
    }
  }
}
</style>
