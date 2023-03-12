<template>
  <div>
    <div class="user-page clearfloat">
      <div>
        <router-link to="home" style="text-decoration: none">&lt;</router-link>
      </div>
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
import { ref, reactive, nextTick } from "vue";
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
const dynamicTags = ref(["行业", "时间范围", "地区范围", "报价", "其他详情"]);
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
.user-page {
  padding: 30px;
  max-width: 768px;
  max-height: 869px;
  margin: auto;
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
        font-size: 16px;

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
    @media(min-width:315px){
      display: block;
    }
    :deep(){
      .el-tag.is-closable{
        margin: 5px 10px;
      }
      .el-button--small{
        margin-left: 10px;
      }
    }
  }
  :deep(.el-divider--horizontal) {
    margin: 15px 0;
  }
}
</style>
