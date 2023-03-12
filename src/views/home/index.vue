<template>
  <div class="link-all-box">
    <div class="home-page">
      <div class="home-user">
        <router-link to="user" style="text-decoration: none"><el-icon><User /></el-icon></router-link>
      </div>
      <div class="home-logo"><img :src="cat" /></div>
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
        <el-tag class="ml-2" type="user-info">...</el-tag>
      </div>
    </div>

 
  </div>
</template>

<script setup lang="ts">
import { ref, reactive,nextTick } from "vue";
import { User, MoreFilled } from "@element-plus/icons-vue";
import { ElInput } from "element-plus";

import { Search } from "@element-plus/icons-vue";
import cat from "../../assets/image/cat.png";
import kuluomi from "../../assets/image/kuluomi.png";

const input1 = ref("");

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
</style>
