<template>
  <div class="link-all-box">
    <div class="home-page" v-if="showUser">
      <div class="home-user" @click="toUser">
        <el-icon><User /></el-icon>
      </div>
      <div class="home-logo"><img :src="WechatIMG" /></div>
      <div class="home-search">
        <el-input
          v-model="input1"
          class="w-50 m-2 page-input"
          size="large"
          placeholder="Please Input"
          :suffix-icon="Search"
        />
      </div>
      <div class="home-tag">
        <el-tag>商务司机</el-tag>
        <el-tag class="ml-2" type="success">育婴师</el-tag>
        <el-tag class="ml-2" type="warning">小学助教</el-tag>
        <el-tag class="ml-2" type="danger">装卸/搬运</el-tag>
        <el-tag class="ml-2" type="user-info" @click="toUser">...</el-tag>
      </div>
    </div>

    <div class="user-page clearfloat" v-else>
      <div class="user-box clearfloat">
        <div class="user-header"><img :src="kuluomi" /></div>
        <div class="user-info">
          <div class="user-local">花开富贵 <span>•青岛</span></div>
          <div class="user-contact">v:13884635775</div>
        </div>
        <div class="user-more">
          <el-icon><MoreFilled /></el-icon>
        </div>
      </div>
      <div class="user-tag">
        <el-tag
          v-for="tag in dynamicTags"
          :key="tag"
          class="mx-1"
          closable
          :disable-transitions="false"
          @close="handleClose(tag)"
        >
          {{ tag }}
        </el-tag>
        <el-input
          v-if="inputVisible"
          ref="InputRef"
          v-model="inputValue"
          class="ml-1 w-20"
          size="small"
          @keyup.enter="handleInputConfirm"
          @blur="handleInputConfirm"
        />
        <el-button
          v-else
          class="button-new-tag ml-1"
          size="small"
          @click="showInput"
        >
          + New Tag
        </el-button>
      </div>
      <el-divider />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive,nextTick } from "vue";
import { User, MoreFilled } from "@element-plus/icons-vue";
import { ElInput } from "element-plus";

import { Search } from "@element-plus/icons-vue";
import WechatIMG from "../../assets/image/WechatIMG.png";
import kuluomi from "../../assets/image/kuluomi.png";

const input1 = ref("");
const showUser = ref<boolean>(true);
const toUser = () => {
  showUser.value = !showUser;
};



const inputValue = ref("");
// 更改默认user界面标签
const dynamicTags = ref([
  "翻译", 
  "电工", 
  "平面设计"
]);
const inputVisible = ref(false);
const InputRef = ref<InstanceType<typeof ElInput>>();

const handleClose = (tag: string) => {
  dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1);
};

const showInput = () => {
  inputVisible.value = true;
  nextTick(() => {
    InputRef.value!.input!.focus();
  });
};

const handleInputConfirm = () => {
  if (inputValue.value) {
    dynamicTags.value.push(inputValue.value);
  }
  inputVisible.value = false;
  inputValue.value = "";
};
</script>

<style scoped lang="scss">
.link-all-box {
  padding: 10px 30px;
  max-width: 768px;
  max-height: 869px;
  margin: auto;
}
.home-page {
  position: relative;

  .home-user {
    position: absolute;
    right: 0px;
    top: 0px;
  }
  .home-logo {
    text-align: center;
    margin-top: 30px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .home-search {
    padding: 0 10px;
    display: block;
    align-items: center;
    margin: auto;
    .page-title {
      font-size: 24px;
      text-align: center;
    }
    .page-input {
      height: 50px;
      margin-top: -30px;
      :deep(.el-input__wrapper) {
        border-radius: 30px !important;
      }
    }
  }
  .home-tag {
    text-align: center;
    padding: 20px 0px;
    display: flex;
    justify-content: space-between;
  }
}
.user-page {
  .user-box {
    padding-top: 50px;

    .user-header {
      width: 60px;
      display: flex;
      float: left;
      border: 1px solid gray;
      border-radius: 18px;

      img {
        width: 100%;
        border-radius: 18px;
        height: 100%;
        object-fit: contain;
      }
    }
    .user-info {
      float: left;
      margin-top: 10px;
      margin-left: 20px;
      .user-local {
        font-size: 20px;

        span {
          font-size: 12px;
          color: gray;
        }
      }
      .user-contact {
        margin-top: 10px;
        font-size: 16px;
      }
    }
    .user-more {
      float: right;
      margin-top: 15px;
    }
  }
  .user-tag {
    // padding: 20px 30px;
    margin-top: 18px;
    display: flex;
    justify-content: space-between;
  }
  :deep(.el-divider--horizontal) {
    margin: 15px 0;
  }
}
</style>
