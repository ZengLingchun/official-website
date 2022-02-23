<template>
  <div class="login-main clearfix">
    <div class="banner"></div>
    <div class="content">
      <div class="login-panel">
        <el-tabs
          v-model="activeName"
          class="demo-tabs"
          @tab-click="handleClick"
        >
          <el-tab-pane label="登录" name="login">
            <el-input v-model="account" placeholder="手机号" />
            <el-input v-model="password" placeholder="密码" type="password" show-password />
            <el-button type="success" :disabled="true">登录</el-button>
          </el-tab-pane>
          <el-tab-pane label="注册" name="register">
            <el-input v-model="account" placeholder="手机号" />
            <el-input v-model="password" placeholder="密码" type="password" show-password />
            <el-input v-model="password" placeholder="密码" type="password" show-password />
            <el-button type="success" :disabled="true">注册</el-button>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import { ElTabs, ElTabPane, ElInput, ElButton } from "element-plus";
export default {
  components: {
    ElTabs,
    ElTabPane,
    ElInput,
    ElButton,
  },
  data() {
    return {
      activeName: "login",
      account: "",
      password: ""
    };
  },
};
</script>

<style lang="less">
.login-main {
  width: 100%;
  height: 100%;
  .banner {
    width: 750px;
    height: 100%;
    background-image: url("https://cdn.web-global.fds.api.mi-img.com/mcfe--mi-account/static/static/media/banner.4994397e.jpg");
    background-size: cover;
    background-position: 50%;
    float: left;
  }
  .content {
    float: left;
    .login-panel {
      position: relative;
      top: 200px;
      left: 800px;
      width: 1000px;
      height: 800px;
      text-align: left;
      display: inline-block;
      box-sizing: border-box;
      overflow: hidden;
      border-radius: 4px;
      padding: 2.066667rem 3.2rem;
      position: relative;
      margin: 0 auto 80px;
      min-width: 450px;
      box-shadow: 0 20px 50px 0 hsl(0deg 0% 64% / 10%);
      .el-tabs__nav-wrap::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0;
        height: 0;
        background-color: var(--el-border-color-light);
        z-index: var(--el-index-normal);
      }
    }
    .el-tabs__item.is-active {
      color: #333;
    }
    .el-tabs__item {
      padding: 0 20px;
      height: 40px;
      box-sizing: border-box;
      line-height: 40px;
      display: inline-block;
      list-style: none;
      font-size: 40px;
      font-weight: 500;
      color: #bbb;
      position: relative;
    }
    .el-tabs__active-bar {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 0.13333rem;
      width: 80px !important;
      background-color: red;
      z-index: 1;
      transition: width var(--el-transition-duration)
          var(--el-transition-function-ease-in-out-bezier),
        transform var(--el-transition-duration)
          var(--el-transition-function-ease-in-out-bezier);
      list-style: none;
    }
    .el-input__inner {
      height: 120px;
      box-sizing: border-box;
      -webkit-appearance: none;
      appearance: none;
      padding: 20px;
      border: none;
      font-size: 34px;
      color: #333;
      line-height: 20px;
      background: #f9f9f9;
      margin: 20px 0;
    }
    .el-input__icon {
      font-size: 40px;
      margin-right: 20px;
    }
    .el-button {
      height: 120px;
      width: 100%;
      margin-top: 20px;
      font-size: 37px;
    }
  }
}
</style>